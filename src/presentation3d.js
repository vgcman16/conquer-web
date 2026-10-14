import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { SSAOPass } from "three/addons/postprocessing/SSAOPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// Cool stone shadows and warm lacquer/metal highlights share one light rig.
// The short-range AO anchors feet, roof tiles and armor without baked shadows.
export function createPresentation(renderer, scene, camera) {
  const size = renderer.getSize(new THREE.Vector2());
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    samples: 4,
  });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const ao = new SSAOPass(scene, camera, size.x, size.y, 12);
  ao.kernelRadius = 0.55;
  ao.minDistance = 0.001;
  ao.maxDistance = 0.025;
  composer.addPass(ao);
  const bloom = new UnrealBloomPass(size, 0.19, 0.5, 1.75);
  composer.addPass(bloom);
  const grade = new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: `varying vec2 vUv;
      void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){
        vec4 pixel=texture2D(tDiffuse,vUv);
        float luma=dot(pixel.rgb,vec3(.2126,.7152,.0722));
        vec3 c=mix(vec3(luma),pixel.rgb,1.06);
        c*=mix(vec3(.91,.99,1.08),vec3(1.055,1.015,.945),smoothstep(.08,.8,luma));
        float vignette=1.-.12*smoothstep(.2,.8,length((vUv-.5)*vec2(1.15,1.)));
        gl_FragColor=vec4(c*vignette,pixel.a);
      }`,
  });
  composer.addPass(grade);
  composer.addPass(new OutputPass());
  return {
    render(dt) {
      composer.render(dt);
    },
    resize(width, height) {
      // Mobile uses the same color grade, with a cheaper geometry pass.
      ao.enabled = width >= 700;
      composer.setSize(width, height);
    },
    dispose() {
      for (const pass of composer.passes) pass.dispose?.();
      composer.dispose();
    },
  };
}
