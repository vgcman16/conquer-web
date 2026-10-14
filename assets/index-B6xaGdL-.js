(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Dc="186",qf=0,Th=1,Yf=2,Ka=1,ud=2,Ir=3,Di=0,mn=1,Qt=2,ln=0,Or=1,lo=2,wh=3,Eh=4,dd=5,Zi=100,$f=101,Kf=102,Jf=103,Zf=104,Il=200,jf=201,Qf=202,ep=203,fd=204,pd=205,md=206,tp=207,gd=208,np=209,ip=210,sp=211,rp=212,ap=213,op=214,Ll=0,Nl=1,Dl=2,Xr=3,Ul=4,Fl=5,Ol=6,Bl=7,_d=0,lp=1,cp=2,li=0,Uc=1,Fc=2,Oc=3,qr=4,Bc=5,kc=6,zc=7,Ah="attached",hp="detached",xd=300,Ms=301,er=302,Oo=303,Bo=304,To=306,Zn=1e3,ri=1001,co=1002,Bt=1003,vd=1004,Lr=1005,qt=1006,Ja=1007,Ei=1008,An=1009,yd=1010,Md=1011,Yr=1012,Hc=1013,hi=1014,Rn=1015,tn=1016,Vc=1017,Gc=1018,tr=1020,Sd=35902,bd=35899,Td=1021,wd=1022,zn=1023,Ui=1026,es=1027,wo=1028,Wc=1029,Ss=1030,Xc=1031,qc=1033,Za=33776,ja=33777,Qa=33778,eo=33779,kl=35840,zl=35841,Hl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,ql=37488,Yl=37489,ho=37490,$l=37491,Kl=37808,Jl=37809,Zl=37810,jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,ac=37819,oc=37820,lc=37821,cc=36492,hc=36494,uc=36495,dc=36283,fc=36284,uo=36285,pc=36286,Ed=2200,Ad=2201,up=2202,$r=2300,Kr=2301,ko=2302,Rh=2303,Ys=2400,$s=2401,fo=2402,Yc=2500,dp=2501,fp=0,Rd=1,mc=2,pp=3200,po=0,mp=1,ji="",It="srgb",Ln="srgb-linear",mo="linear",_t="srgb",zo=7680,gp=519,_p=512,xp=513,vp=514,$c=515,yp=516,Mp=517,Kc=518,Sp=519,Cd=35044,Ch="300 es",ai=2e3,Jr=2001;function bp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wp(){const s=Zr("canvas");return s.style.display="block",s}const Ph={};function go(...s){const e="THREE."+s.shift();console.log(e,...s)}function Pd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ze(...s){s=Pd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $e(...s){s=Pd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zs(...s){const e=s.join(" ");e in Ph||(Ph[e]=!0,ze(...s))}function Ep(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ap={[Ll]:Nl,[Dl]:Ol,[Ul]:Bl,[Xr]:Fl,[Nl]:Ll,[Ol]:Dl,[Bl]:Ul,[Fl]:Xr};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ih=1234567;const Br=Math.PI/180,nr=180/Math.PI;function Hn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function Jc(s,e){return(s%e+e)%e}function Rp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cp(s,e,t){return s!==e?(t-s)/(e-s):0}function kr(s,e,t){return(1-t)*s+t*e}function Pp(s,e,t,n){return kr(s,e,1-Math.exp(-t*n))}function Ip(s,e=1){return e-Math.abs(Jc(s,e*2)-e)}function Lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Np(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Up(s,e){return s+Math.random()*(e-s)}function Fp(s){return s*(.5-Math.random())}function Op(s){s!==void 0&&(Ih=s);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(s){return s*Br}function kp(s){return s*nr}function zp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Hp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),u=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*u,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bs={DEG2RAD:Br,RAD2DEG:nr,generateUUID:Hn,clamp:st,euclideanModulo:Jc,mapLinear:Rp,inverseLerp:Cp,lerp:kr,damp:Pp,pingpong:Ip,smoothstep:Lp,smootherstep:Np,randInt:Dp,randFloat:Up,randFloatSpread:Fp,seededRandom:Op,degToRad:Bp,radToDeg:kp,isPowerOfTwo:zp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Gp,normalize:yt,denormalize:$n};class de{static{de.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],u=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==f||c!==u||h!==_){let m=l*f+c*u+h*_+d*S;m<0&&(f=-f,u=-u,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const g=Math.acos(m),A=Math.sin(g);p=Math.sin(p*g)/A,o=Math.sin(o*g)/A,l=l*p+f*o,c=c*p+u*o,h=h*p+_*o,d=d*p+S*o}else{l=l*p+f*o,c=c*p+u*o,h=h*p+_*o,d=d*p+S*o;const g=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=g,c*=g,h*=g,d*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],_=r[a+3];return e[t]=o*_+h*d+l*u-c*f,e[t+1]=l*_+h*f+c*d-o*u,e[t+2]=c*_+h*u+o*f-l*d,e[t+3]=h*_-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),u=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d-f*u*_;break;case"YXZ":this._x=f*h*d+c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d+f*u*_;break;case"ZXY":this._x=f*h*d-c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d-f*u*_;break;case"ZYX":this._x=f*h*d-c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d+f*u*_;break;case"YZX":this._x=f*h*d+c*u*_,this._y=c*u*d+f*h*_,this._z=c*h*_-f*u*d,this._w=c*h*d-f*u*_;break;case"XZY":this._x=f*h*d-c*u*_,this._y=c*u*d-f*h*_,this._z=c*h*_+f*u*d,this._w=c*h*d+f*u*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{D.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new D,Lh=new Vn;class tt{static{tt.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],_=n[8],S=i[0],m=i[3],p=i[6],g=i[1],A=i[4],M=i[7],v=i[2],T=i[5],w=i[8];return r[0]=a*S+o*g+l*v,r[3]=a*m+o*A+l*T,r[6]=a*p+o*M+l*w,r[1]=c*S+h*g+d*v,r[4]=c*m+h*A+d*T,r[7]=c*p+h*M+d*w,r[2]=f*S+u*g+_*v,r[5]=f*m+u*A+_*T,r[8]=f*p+u*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,_=t*d+n*f+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(i*c-h*n)*S,e[2]=(o*n-i*a)*S,e[3]=f*S,e[4]=(h*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=u*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new tt,Nh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const s={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ln]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:Nh,fromXYZ:Dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Nh,fromXYZ:Dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const ot=Wp();function Ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class Xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Zr("canvas")),Is.width=e.width,Is.height=e.height;const i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qp=0;class Zc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Go(i[a].image)):r.push(Go(i[a]))}else r=Go(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Go(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Yp=0;const Wo=new D;class Yt extends ss{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=ri,i=ri,r=qt,a=Ei,o=zn,l=An,c=Yt.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Hn(),this.name="",this.source=new Zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=xd;Yt.DEFAULT_ANISOTROPY=1;class bt{static{bt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(u+1)/2,v=(p+1)/2,T=(h+f)/4,w=(d+S)/4,y=(_+m)/4;return A>M&&A>v?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=T/n,r=w/n):M>v?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=y/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=w/r,i=y/r),this.set(n,i,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-S)/g,this.z=(f-h)/g,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $p extends ss{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Yt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends $p{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Id extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Qe{static{Qe.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,d,f,u,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,f,u,_,S,m)}set(e,t,n,i,r,a,o,l,c,h,d,f,u,_,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,u=a*d,_=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+u*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,u=l*d,_=c*h,S=c*d;t[0]=f+S*o,t[4]=_*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,u=l*d,_=c*h,S=c*d;t[0]=f-S*o,t[4]=-a*d,t[8]=_+u*o,t[1]=u+_*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,u=a*d,_=o*h,S=o*d;t[0]=l*h,t[4]=_*c-u,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=u*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,u=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=S-f*d,t[8]=_*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+_,t[10]=f-S*d}else if(e.order==="XZY"){const f=a*l,u=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+S,t[5]=a*h,t[9]=u*d-_,t[2]=_*d-u,t[6]=o*h,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,Zp)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Hi.crossVectors(n,Tn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Hi.crossVectors(n,Tn)),Hi.normalize(),ua.crossVectors(Tn,Hi),i[0]=Hi.x,i[4]=ua.x,i[8]=Tn.x,i[1]=Hi.y,i[5]=ua.y,i[9]=Tn.y,i[2]=Hi.z,i[6]=ua.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],_=n[2],S=n[6],m=n[10],p=n[14],g=n[3],A=n[7],M=n[11],v=n[15],T=i[0],w=i[4],y=i[8],E=i[12],L=i[1],U=i[5],B=i[9],G=i[13],k=i[2],X=i[6],ee=i[10],Q=i[14],ae=i[3],J=i[7],q=i[11],$=i[15];return r[0]=a*T+o*L+l*k+c*ae,r[4]=a*w+o*U+l*X+c*J,r[8]=a*y+o*B+l*ee+c*q,r[12]=a*E+o*G+l*Q+c*$,r[1]=h*T+d*L+f*k+u*ae,r[5]=h*w+d*U+f*X+u*J,r[9]=h*y+d*B+f*ee+u*q,r[13]=h*E+d*G+f*Q+u*$,r[2]=_*T+S*L+m*k+p*ae,r[6]=_*w+S*U+m*X+p*J,r[10]=_*y+S*B+m*ee+p*q,r[14]=_*E+S*G+m*Q+p*$,r[3]=g*T+A*L+M*k+v*ae,r[7]=g*w+A*U+M*X+v*J,r[11]=g*y+A*B+M*ee+v*q,r[15]=g*E+A*G+M*Q+v*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],_=e[3],S=e[7],m=e[11],p=e[15],g=l*u-c*f,A=o*u-c*d,M=o*f-l*d,v=a*u-c*h,T=a*f-l*h,w=a*d-o*h;return t*(S*g-m*A+p*M)-n*(_*g-m*v+p*T)+i*(_*A-S*v+p*w)-r*(_*M-S*T+m*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],_=e[12],S=e[13],m=e[14],p=e[15],g=t*o-n*a,A=t*l-i*a,M=t*c-r*a,v=n*l-i*o,T=n*c-r*o,w=i*c-r*l,y=h*S-d*_,E=h*m-f*_,L=h*p-u*_,U=d*m-f*S,B=d*p-u*S,G=f*p-u*m,k=g*G-A*B+M*U+v*L-T*E+w*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/k;return e[0]=(o*G-l*B+c*U)*X,e[1]=(i*B-n*G-r*U)*X,e[2]=(S*w-m*T+p*v)*X,e[3]=(f*T-d*w-u*v)*X,e[4]=(l*L-a*G-c*E)*X,e[5]=(t*G-i*L+r*E)*X,e[6]=(m*M-_*w-p*A)*X,e[7]=(h*w-f*M+u*A)*X,e[8]=(a*B-o*L+c*y)*X,e[9]=(n*L-t*B-r*y)*X,e[10]=(_*T-S*M+p*g)*X,e[11]=(d*M-h*T-u*g)*X,e[12]=(o*E-a*U-l*y)*X,e[13]=(t*U-n*E+i*y)*X,e[14]=(S*A-_*v-m*g)*X,e[15]=(h*v-d*A+f*g)*X,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,_=r*d,S=a*h,m=a*d,p=o*d,g=l*c,A=l*h,M=l*d,v=n.x,T=n.y,w=n.z;return i[0]=(1-(S+p))*v,i[1]=(u+M)*v,i[2]=(_-A)*v,i[3]=0,i[4]=(u-M)*T,i[5]=(1-(f+p))*T,i[6]=(m+g)*T,i[7]=0,i[8]=(_+A)*w,i[9]=(m-g)*w,i[10]=(1-(f+S))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ls.set(i[0],i[1],i[2]).length();const o=Ls.set(i[4],i[5],i[6]).length(),l=Ls.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Gn.copy(this);const c=1/a,h=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ai,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===ai)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Jr)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ai,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===ai)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Jr)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ls=new D,Gn=new Qe,Jp=new D(0,0,0),Zp=new D(1,1,1),Hi=new D,ua=new D,Tn=new D,Uh=new Qe,Fh=new Vn;class ts{constructor(e=0,t=0,n=0,i=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jp=0;const Oh=new D,Ns=new Vn,pi=new Qe,da=new D,yr=new D,Qp=new D,e0=new Vn,Bh=new D(1,0,0),kh=new D(0,1,0),zh=new D(0,0,1),Hh={type:"added"},t0={type:"removed"},Ds={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Ct extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new D,t=new ts,n=new Vn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new tt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(yr,da,this.up):pi.lookAt(da,yr,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(pi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hh),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hh),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,_=.005;c.inputState.pinching&&f>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Yo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Jc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ot.workingToColorSpace(rn.copy(this),e),Math.round(st(rn.r*255,0,255))*65536+Math.round(st(rn.g*255,0,255))*256+Math.round(st(rn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,r=rn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=It){ot.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(fa);const n=kr(Vi.h,fa.h,t),i=kr(Vi.s,fa.s,t),r=kr(Vi.l,fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ke;ke.NAMES=Ld;class Qc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new Qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vh extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wn=new D,mi=new D,$o=new D,gi=new D,Us=new D,Fs=new D,Gh=new D,Ko=new D,Jo=new D,Zo=new D,jo=new bt,Qo=new bt,el=new bt;class Kn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),mi.subVectors(n,t),$o.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(mi),l=Wn.dot($o),c=mi.dot(mi),h=mi.dot($o),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return jo.setScalar(0),Qo.setScalar(0),el.setScalar(0),jo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,n),el.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(el,r.z),a}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),mi.subVectors(e,t),Wn.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Us.subVectors(i,n),Fs.subVectors(r,n),Ko.subVectors(e,n);const l=Us.dot(Ko),c=Fs.dot(Ko);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,i);const h=Us.dot(Jo),d=Fs.dot(Jo);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Us,a);Zo.subVectors(e,r);const u=Us.dot(Zo),_=Fs.dot(Zo);if(_>=0&&u<=_)return t.copy(r);const S=u*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Fs,o);const m=h*_-u*d;if(m<=0&&d-h>=0&&u-_>=0)return Gh.subVectors(r,i),o=(d-h)/(d-h+(u-_)),t.copy(i).addScaledVector(Gh,o);const p=1/(m+S+f);return a=S*p,o=f*p,t.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),ma.subVectors(this.max,Mr),Os.subVectors(e.a,Mr),Bs.subVectors(e.b,Mr),ks.subVectors(e.c,Mr),Gi.subVectors(Bs,Os),Wi.subVectors(ks,Bs),as.subVectors(Os,ks);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-as.z,as.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,as.z,0,-as.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-as.y,as.x,0];return!tl(t,Os,Bs,ks,ma)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,Os,Bs,ks,ma))?!1:(ga.crossVectors(Gi,Wi),t=[ga.x,ga.y,ga.z],tl(t,Os,Bs,ks,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new D,new D,new D,new D,new D,new D,new D,new D],Xn=new D,pa=new Oi,Os=new D,Bs=new D,ks=new D,Gi=new D,Wi=new D,as=new D,Mr=new D,ma=new D,ga=new D,os=new D;function tl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){os.fromArray(s,r);const o=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vt=new D,_a=new de;let i0=0;class gn extends ss{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cd,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nd extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dd extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class He extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const s0=new Oi,Sr=new D,nl=new D;class ui{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(nl)),this.expandByPoint(Sr.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let r0=0;const Fn=new Qe,il=new Ct,zs=new D,wn=new Oi,br=new Oi,jt=new D;class vt extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?Dd:Nd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(wn.min,br.min),wn.expandByPoint(jt),jt.addVectors(wn.max,br.max),wn.expandByPoint(jt)):(wn.expandByPoint(br.min),wn.expandByPoint(br.max))}wn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),jt.add(zs)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new D,l[y]=new D;const c=new D,h=new D,d=new D,f=new de,u=new de,_=new de,S=new D,m=new D;function p(y,E,L){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,y),u.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),h.sub(c),d.sub(c),u.sub(f),_.sub(f);const U=1/(u.x*_.y-_.x*u.y);isFinite(U)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(U),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(U),o[y].add(S),o[E].add(S),o[L].add(S),l[y].add(m),l[E].add(m),l[L].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,E=g.length;y<E;++y){const L=g[y],U=L.start,B=L.count;for(let G=U,k=U+B;G<k;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new D,M=new D,v=new D,T=new D;function w(y){v.fromBufferAttribute(i,y),T.copy(v);const E=o[y];A.copy(E),A.sub(v.multiplyScalar(v.dot(E))).normalize(),M.crossVectors(T,E);const U=M.dot(l[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,U)}for(let y=0,E=g.length;y<E;++y){const L=g[y],U=L.start,B=L.count;for(let G=U,k=U+B;G<k;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,u=e.count;f<u;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?u=l[S]*o.data.stride+o.offset:u=l[S]*h;for(let p=0;p<h;p++)f[_++]=c[u++]}return new gn(f,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cd,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new D;class eh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sl=new D,o0=new D,l0=new tt;class Si{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sl.subVectors(n,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l0.getNormalMatrix(e),i=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let c0=0;class Jn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Or,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=pd,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new D,rl=new D,xa=new D,va=new D;class sa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),va.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xa),o=va.dot(this.direction),l=-va.dot(xa),c=va.lengthSq(),h=Math.abs(1-a*a);let d,f,u,_;if(h>0)if(d=a*l-o,f=a*o-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const S=1/h;d*=S,f*=S,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rl).addScaledVector(xa,f),u}intersectSphere(e,t){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,g=n.y-a.y,A=n.z-a.z,M=Math.abs(l),v=Math.abs(c),T=Math.abs(h);let w,y,E,L,U,B,G,k,X,ee,Q,ae;if(M>=v&&M>=T?(E=l,B=d,X=_,ae=p,l>=0?(w=c,y=h,L=f,U=u,G=S,k=m,ee=g,Q=A):(w=h,y=c,L=u,U=f,G=m,k=S,ee=A,Q=g)):v>=T?(E=c,B=f,X=S,ae=g,c>=0?(w=h,y=l,L=u,U=d,G=m,k=_,ee=A,Q=p):(w=l,y=h,L=d,U=u,G=_,k=m,ee=p,Q=A)):(E=h,B=u,X=m,ae=A,h>=0?(w=l,y=c,L=d,U=f,G=_,k=S,ee=p,Q=g):(w=c,y=l,L=f,U=d,G=S,k=_,ee=g,Q=p)),E===0)return null;const J=w/E,q=y/E,$=1/E,ge=L-J*B,ye=U-q*B,Ve=G-J*X,qe=k-q*X,Xe=ee-J*ae,te=Q-q*ae,le=Xe*qe-te*Ve,Me=ge*te-ye*Xe,Ie=Ve*ye-qe*ge;if(i){if(le<0||Me<0||Ie<0)return null}else if((le<0||Me<0||Ie<0)&&(le>0||Me>0||Ie>0))return null;const we=le+Me+Ie;if(we===0)return null;const Ge=$*(le*B+Me*X+Ie*ae);return(we>0?Ge<0:Ge>0)?null:this.at(Ge/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wh=new Qe,ls=new sa,ya=new ui,Xh=new D,Ma=new D,Sa=new D,ba=new D,al=new D,Ta=new D,qh=new D,wa=new D;class $t extends Ct{constructor(e=new vt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(al.fromBufferAttribute(d,e),a?Ta.addScaledVector(al,h):Ta.addScaledVector(al.sub(t),h))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(ya.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ya,Xh)===null||ls.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Wh.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],p=a[m.materialIndex],g=Math.max(m.start,u.start),A=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let M=g,v=A;M<v;M+=3){const T=o.getX(M),w=o.getX(M+1),y=o.getX(M+2);i=Ea(this,p,e,n,c,h,d,T,w,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,u.start),S=Math.min(o.count,u.start+u.count);for(let m=_,p=S;m<p;m+=3){const g=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);i=Ea(this,a,e,n,c,h,d,g,A,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const m=f[_],p=a[m.materialIndex],g=Math.max(m.start,u.start),A=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=g,v=A;M<v;M+=3){const T=M,w=M+1,y=M+2;i=Ea(this,p,e,n,c,h,d,T,w,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,u.start),S=Math.min(l.count,u.start+u.count);for(let m=_,p=S;m<p;m+=3){const g=m,A=m+1,M=m+2;i=Ea(this,a,e,n,c,h,d,g,A,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function h0(s,e,t,n,i,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Di,o),l===null)return null;wa.copy(o),wa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:s}}function Ea(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ma),s.getVertexPosition(l,Sa),s.getVertexPosition(c,ba);const h=h0(s,e,t,n,Ma,Sa,ba,qh);if(h){const d=new D;Kn.getBarycoord(qh,Ma,Sa,ba,d),i&&(h.uv=Kn.getInterpolatedAttribute(i,o,l,c,d,new de)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,l,c,d,new de)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Kn.getNormal(Ma,Sa,ba,f.normal),h.face=f,h.barycoord=d}return h}const Tr=new bt,Yh=new bt,$h=new bt,u0=new bt,Kh=new Qe,Aa=new D,ol=new ui,Jh=new Qe,ll=new sa;class d0 extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),e.ray.intersectsSphere(ol)!==!1&&(Jh.copy(i).invert(),ll.copy(e.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Yh.fromBufferAttribute(i.attributes.skinIndex,e),$h.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Tr.copy(t),t.set(0,0,0,0)):(Tr.set(...t,1),t.set(0,0,0)),Tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=$h.getComponent(r);if(a!==0){const o=Yh.getComponent(r);Kh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(u0.copy(Tr).applyMatrix4(Kh),a)}}return t.isVector4&&(t.w=Tr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Ud extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Eo extends Yt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Bt,h=Bt,d,f){super(null,a,o,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new Qe,f0=new Qe;class th{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:f0;Zh.multiplyMatrices(o,t[r]),Zh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new th(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Eo(t,e,e,zn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(ze("Skeleton: No bone found with UUID:",r),a=new Ud),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _o extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new Qe,jh=new Qe,Ra=[],Qh=new Oi,p0=new Qe,wr=new $t,Er=new ui;class ps extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Qh.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Er.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hs),jh.multiplyMatrices(n,Hs),wr.matrixWorld=jh,wr.raycast(e,Ra);for(let a=0,o=Ra.length;a<o;a++){const l=Ra[a];l.instanceId=r,l.object=this,t.push(l)}Ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(i*this.count),i,this.count,wo,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cs=new ui,m0=new de(.5,.5),Ca=new D;class nh{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,a=new Si){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],_=r[8],S=r[9],m=r[10],p=r[11],g=r[12],A=r[13],M=r[14],v=r[15];if(i[0].setComponents(c-a,u-h,p-_,v-g).normalize(),i[1].setComponents(c+a,u+h,p+_,v+g).normalize(),i[2].setComponents(c+o,u+d,p+S,v+A).normalize(),i[3].setComponents(c-o,u-d,p-S,v-A).normalize(),n)i[4].setComponents(l,f,m,M).normalize(),i[5].setComponents(c-l,u-f,p-m,v-M).normalize();else if(i[4].setComponents(c-l,u-f,p-m,v-M).normalize(),t===ai)i[5].setComponents(c+l,u+f,p+m,v+M).normalize();else if(t===Jr)i[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=m0.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ca.x=i.normal.x>0?e.max.x:e.min.x,Ca.y=i.normal.y>0?e.max.y:e.min.y,Ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fd extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new D,vo=new D,eu=new Qe,Ar=new sa,Pa=new ui,cl=new D,tu=new D;class ih extends Ct{constructor(e=new vt,t=new Fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xo.fromBufferAttribute(t,i-1),vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new He(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;eu.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=u,m=_-1;S<m;S+=c){const p=h.getX(S),g=h.getX(S+1),A=Ia(this,e,Ar,l,p,g,S);A&&t.push(A)}if(this.isLineLoop){const S=h.getX(_-1),m=h.getX(u),p=Ia(this,e,Ar,l,S,m,_-1);p&&t.push(p)}}else{const u=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=u,m=_-1;S<m;S+=c){const p=Ia(this,e,Ar,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Ia(this,e,Ar,l,_-1,u,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ia(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(xo.fromBufferAttribute(o,i),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,vo,cl,tu)>n)return;cl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(cl);if(!(c<e.near||c>e.far))return{distance:c,point:tu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const nu=new D,iu=new D;class g0 extends ih{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nu.fromBufferAttribute(t,i),iu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nu.distanceTo(iu);e.setAttribute("lineDistance",new He(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _0 extends ih{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Od extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const su=new Qe,gc=new sa,La=new ui,Na=new D;class x0 extends Ct{constructor(e=new vt,t=new Od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;su.copy(i).invert(),gc.copy(e.ray).applyMatrix4(su);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let _=f,S=u;_<S;_++){const m=c.getX(_);Na.fromBufferAttribute(d,m),ru(Na,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let _=f,S=u;_<S;_++)Na.fromBufferAttribute(d,_),ru(Na,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ru(s,e,t,n,i,r,a){const o=gc.distanceSqToPoint(s);if(o<t){const l=new D;gc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bd extends Yt{constructor(e=[],t=Ms,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends Yt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends Yt{constructor(e,t,n=hi,i,r,a,o=Bt,l=Bt,c,h=Ui,d=1){if(h!==Ui&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class v0 extends ir{constructor(e,t=hi,n=Ms,i,r,a=Bt,o=Bt,l,c=Ui){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zd extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function _(S,m,p,g,A,M,v,T,w,y,E){const L=M/w,U=v/y,B=M/2,G=v/2,k=T/2,X=w+1,ee=y+1;let Q=0,ae=0;const J=new D;for(let q=0;q<ee;q++){const $=q*U-G;for(let ge=0;ge<X;ge++){const ye=ge*L-B;J[S]=ye*g,J[m]=$*A,J[p]=k,c.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(ge/w),d.push(1-q/y),Q+=1}}for(let q=0;q<y;q++)for(let $=0;$<w;$++){const ge=f+$+X*q,ye=f+$+X*(q+1),Ve=f+($+1)+X*(q+1),qe=f+($+1)+X*q;l.push(ge,ye,qe),l.push(ye,Ve,qe),ae+=6}o.addGroup(u,ae,E),u+=ae,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sh extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,h=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const u=n+d/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cn extends vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let _=0;const S=[],m=n/2;let p=0;g(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(u,2));function g(){const M=new D,v=new D;let T=0;const w=(t-e)/n;for(let y=0;y<=r;y++){const E=[],L=y/r,U=L*(t-e)+e;for(let B=0;B<=i;B++){const G=B/i,k=G*l+o,X=Math.sin(k),ee=Math.cos(k);v.x=U*X,v.y=-L*n+m,v.z=U*ee,d.push(v.x,v.y,v.z),M.set(X,w,ee).normalize(),f.push(M.x,M.y,M.z),u.push(G,1-L),E.push(_++)}S.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){const L=S[E][y],U=S[E+1][y],B=S[E+1][y+1],G=S[E][y+1];(e>0||E!==0)&&(h.push(L,U,G),T+=3),(t>0||E!==r-1)&&(h.push(U,B,G),T+=3)}c.addGroup(p,T,0),p+=T}function A(M){const v=_,T=new de,w=new D;let y=0;const E=M===!0?e:t,L=M===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*L,0),f.push(0,L,0),u.push(.5,.5),_++;const U=_;for(let B=0;B<=i;B++){const k=B/i*l+o,X=Math.cos(k),ee=Math.sin(k);w.x=E*ee,w.y=m*L,w.z=E*X,d.push(w.x,w.y,w.z),f.push(0,L,0),T.x=X*.5+.5,T.y=ee*.5*L+.5,u.push(T.x,T.y),_++}for(let B=0;B<i;B++){const G=v+B,k=U+B;M===!0?h.push(k,k+1,G):h.push(k+1,k,G),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _s extends Cn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const A=new D,M=new D,v=new D;for(let T=0;T<t.length;T+=3)u(t[T+0],A),u(t[T+1],M),u(t[T+2],v),l(A,M,v,g)}function l(g,A,M,v){const T=v+1,w=[];for(let y=0;y<=T;y++){w[y]=[];const E=g.clone().lerp(M,y/T),L=A.clone().lerp(M,y/T),U=T-y;for(let B=0;B<=U;B++)B===0&&y===T?w[y][B]=E:w[y][B]=E.clone().lerp(L,B/U)}for(let y=0;y<T;y++)for(let E=0;E<2*(T-y)-1;E++){const L=Math.floor(E/2);E%2===0?(f(w[y][L+1]),f(w[y+1][L]),f(w[y][L])):(f(w[y][L+1]),f(w[y+1][L+1]),f(w[y+1][L]))}}function c(g){const A=new D;for(let M=0;M<r.length;M+=3)A.x=r[M+0],A.y=r[M+1],A.z=r[M+2],A.normalize().multiplyScalar(g),r[M+0]=A.x,r[M+1]=A.y,r[M+2]=A.z}function h(){const g=new D;for(let A=0;A<r.length;A+=3){g.x=r[A+0],g.y=r[A+1],g.z=r[A+2];const M=m(g)/2/Math.PI+.5,v=p(g)/Math.PI+.5;a.push(M,1-v)}_(),d()}function d(){for(let g=0;g<a.length;g+=6){const A=a[g+0],M=a[g+2],v=a[g+4],T=Math.max(A,M,v),w=Math.min(A,M,v);T>.9&&w<.1&&(A<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}}function f(g){r.push(g.x,g.y,g.z)}function u(g,A){const M=g*3;A.x=e[M+0],A.y=e[M+1],A.z=e[M+2]}function _(){const g=new D,A=new D,M=new D,v=new D,T=new de,w=new de,y=new de;for(let E=0,L=0;E<r.length;E+=9,L+=6){g.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),T.set(a[L+0],a[L+1]),w.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),v.copy(g).add(A).add(M).divideScalar(3);const U=m(v);S(T,L+0,g,U),S(w,L+2,A,U),S(y,L+4,M,U)}}function S(g,A,M,v){v<0&&g.x===1&&(a[A]=g.x-1),M.x===0&&M.z===0&&(a[A]=v/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.vertices,e.indices,e.radius,e.detail)}}class rh extends Ao{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new de:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,i=[],r=[],a=[],o=new D,l=new Qe;for(let u=0;u<=e;u++){const _=u/e;i[u]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(st(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,_))}a[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(st(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],u*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ah extends di{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class y0 extends ah{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const au=new D,ou=new D,hl=new oh,ul=new oh,dl=new oh;class yn extends di{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ou.subVectors(i[0],i[1]).add(i[0]),c=ou);const d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(au.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=au),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),u),S=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),hl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,_,S,m),ul.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,_,S,m),dl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,_,S,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ul.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),dl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(hl.calc(l),ul.calc(l),dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function M0(s,e){const t=1-s;return t*t*e}function S0(s,e){return 2*(1-s)*s*e}function b0(s,e){return s*s*e}function zr(s,e,t,n){return M0(s,e)+S0(s,t)+b0(s,n)}function T0(s,e){const t=1-s;return t*t*t*e}function w0(s,e){const t=1-s;return 3*t*t*s*e}function E0(s,e){return 3*(1-s)*s*s*e}function A0(s,e){return s*s*s*e}function Hr(s,e,t,n,i){return T0(s,e)+w0(s,t)+E0(s,n)+A0(s,i)}class Hd extends di{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,r.x,a.x,o.x),Hr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R0 extends di{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,i.x,r.x,a.x,o.x),Hr(e,i.y,r.y,a.y,o.y),Hr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vd extends di{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends di{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends di{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends di{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(e,i.x,r.x,a.x),zr(e,i.y,r.y,a.y),zr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(lu(o,l.x,c.x,h.x,d.x),lu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:y0,CatmullRomCurve3:yn,CubicBezierCurve:Hd,CubicBezierCurve3:R0,EllipseCurve:ah,LineCurve:Vd,LineCurve3:C0,QuadraticBezierCurve:Gd,QuadraticBezierCurve3:Wd,SplineCurve:Xd});class P0 extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new yo[i.type]().fromJSON(i))}return this}}class cu extends P0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vd(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Gd(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Hd(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new ah(e,t,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ns extends cu{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cu().fromJSON(i))}return this}}function I0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=qd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=F0(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,d=l;for(let f=t;f<i;f+=t){const u=s[f],_=s[f+1];u<o&&(o=u),_<l&&(l=_),u>h&&(h=u),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return jr(r,a,t,o,l,c,0),a}function qd(s,e,t,n,i){let r;if(i===Y0(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=hu(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=hu(a/n|0,s[a],s[a+1],r);return r&&sr(r,r.next)&&(ea(r),r=r.next),r}function Ts(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||Dt(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&H0(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?N0(s,n,i,r):L0(s)){e.push(l.i,s.i,c.i),ea(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=D0(Ts(s),e),jr(s,e,t,n,i,r,2)):a===2&&U0(s,e,t,n,i,r):jr(Ts(s),e,t,n,i,r,1);break}}}function L0(s){const e=s.prev,t=s,n=s.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),f=Math.max(i,r,a),u=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=u&&Nr(i,o,r,l,a,c,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function N0(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Dt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,f=a.y,u=Math.min(o,l,c),_=Math.min(h,d,f),S=Math.max(o,l,c),m=Math.max(h,d,f),p=_c(u,_,e,t,n),g=_c(S,m,e,t,n);let A=s.prevZ,M=s.nextZ;for(;A&&A.z>=p&&M&&M.z<=g;){if(A.x>=u&&A.x<=S&&A.y>=_&&A.y<=m&&A!==i&&A!==a&&Nr(o,h,l,d,c,f,A.x,A.y)&&Dt(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=u&&M.x<=S&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Nr(o,h,l,d,c,f,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=u&&A.x<=S&&A.y>=_&&A.y<=m&&A!==i&&A!==a&&Nr(o,h,l,d,c,f,A.x,A.y)&&Dt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=g;){if(M.x>=u&&M.x<=S&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Nr(o,h,l,d,c,f,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function D0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!sr(n,i)&&$d(n,t,t.next,i)&&Qr(n,i)&&Qr(i,n)&&(e.push(n.i,t.i,i.i),ea(t),ea(t.next),t=s=i),t=t.next}while(t!==s);return Ts(t)}function U0(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&W0(a,o)){let l=Kd(a,o);a=Ts(a,a.next),l=Ts(l,l.next),jr(a,e,t,n,i,r,0),jr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function F0(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=qd(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(G0(c))}i.sort(O0);for(let r=0;r<i.length;r++)t=B0(i[r],t);return t}function O0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function B0(s,e){const t=k0(s,e);if(!t)return e;const n=Kd(t,s);return Ts(n,n.next),Ts(t,t.next)}function k0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(sr(s,t))return t;do{if(sr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Yd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Qr(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&z0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function z0(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function H0(s,e,t,n){let i=s;do i.z===0&&(i.z=_c(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function _c(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function G0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Yd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Nr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Yd(s,e,t,n,i,r,a,o)}function W0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!X0(s,e)&&(Qr(s,e)&&Qr(e,s)&&q0(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||sr(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function sr(s,e){return s.x===e.x&&s.y===e.y}function $d(s,e,t,n){const i=Ua(Dt(s,e,t)),r=Ua(Dt(s,e,n)),a=Ua(Dt(t,n,s)),o=Ua(Dt(t,n,e));return!!(i!==r&&a!==o||i===0&&Da(s,t,e)||r===0&&Da(s,n,e)||a===0&&Da(t,s,n)||o===0&&Da(t,e,n))}function Da(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ua(s){return s>0?1:s<0?-1:0}function X0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&$d(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qr(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function q0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Kd(s,e){const t=xc(s.i,s.x,s.y),n=xc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hu(s,e,t,n){const i=xc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ea(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y0(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $0{static triangulate(e,t,n=2){return I0(e,t,n)}}class Ai{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ai.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];uu(e),du(n,e);let a=e.length;t.forEach(uu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,du(n,t[l]);const o=$0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function du(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class cr extends vt{constructor(e=new ns([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new He(i,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:u-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:K0;let A,M=!1,v,T,w,y;if(p){A=p.getSpacedPoints(h),M=!0,f=!1;const he=p.isCatmullRomCurve3?p.closed:!1;v=p.computeFrenetFrames(h,he),T=new D,w=new D,y=new D}f||(m=0,u=0,_=0,S=0);const E=o.extractPoints(c);let L=E.shape;const U=E.holes;if(!Ai.isClockWise(L)){L=L.reverse();for(let he=0,pe=U.length;he<pe;he++){const _e=U[he];Ai.isClockWise(_e)&&(U[he]=_e.reverse())}}function G(he){const _e=10000000000000001e-36;let xe=he[0];for(let Se=1;Se<=he.length;Se++){const Oe=Se%he.length,Ue=he[Oe],We=Ue.x-xe.x,Ye=Ue.y-xe.y,V=We*We+Ye*Ye,at=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(xe.x),Math.abs(xe.y)),et=_e*at*at;if(V<=et){he.splice(Oe,1),Se--;continue}xe=Ue}}G(L),U.forEach(G);const k=U.length,X=L;for(let he=0;he<k;he++){const pe=U[he];L=L.concat(pe)}function ee(he,pe,_e){return pe||$e("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(pe,_e)}const Q=L.length;function ae(he,pe,_e){let xe,Se,Oe;const Ue=he.x-pe.x,We=he.y-pe.y,Ye=_e.x-he.x,V=_e.y-he.y,at=Ue*Ue+We*We,et=Ue*V-We*Ye;if(Math.abs(et)>Number.EPSILON){const b=Math.sqrt(at),x=Math.sqrt(Ye*Ye+V*V),R=pe.x-We/b,C=pe.y+Ue/b,I=_e.x-V/x,F=_e.y+Ye/x,O=((I-R)*V-(F-C)*Ye)/(Ue*V-We*Ye);xe=R+Ue*O-he.x,Se=C+We*O-he.y;const N=xe*xe+Se*Se;if(N<=2)return new de(xe,Se);Oe=Math.sqrt(N/2)}else{let b=!1;Ue>Number.EPSILON?Ye>Number.EPSILON&&(b=!0):Ue<-Number.EPSILON?Ye<-Number.EPSILON&&(b=!0):Math.sign(We)===Math.sign(V)&&(b=!0),b?(xe=-We,Se=Ue,Oe=Math.sqrt(at)):(xe=Ue,Se=We,Oe=Math.sqrt(at/2))}return new de(xe/Oe,Se/Oe)}const J=[];for(let he=0,pe=X.length,_e=pe-1,xe=he+1;he<pe;he++,_e++,xe++)_e===pe&&(_e=0),xe===pe&&(xe=0),J[he]=ae(X[he],X[_e],X[xe]);const q=[];let $,ge=J.concat();for(let he=0,pe=k;he<pe;he++){const _e=U[he];$=[];for(let xe=0,Se=_e.length,Oe=Se-1,Ue=xe+1;xe<Se;xe++,Oe++,Ue++)Oe===Se&&(Oe=0),Ue===Se&&(Ue=0),$[xe]=ae(_e[xe],_e[Oe],_e[Ue]);q.push($),ge=ge.concat($)}let ye;if(m===0)ye=Ai.triangulateShape(X,U);else{const he=[],pe=[];for(let _e=0;_e<m;_e++){const xe=_e/m,Se=u*Math.cos(xe*Math.PI/2),Oe=_*Math.sin(xe*Math.PI/2)+S;for(let Ue=0,We=X.length;Ue<We;Ue++){const Ye=ee(X[Ue],J[Ue],Oe);Me(Ye.x,Ye.y,-Se),xe===0&&he.push(Ye)}for(let Ue=0,We=k;Ue<We;Ue++){const Ye=U[Ue];$=q[Ue];const V=[];for(let at=0,et=Ye.length;at<et;at++){const b=ee(Ye[at],$[at],Oe);Me(b.x,b.y,-Se),xe===0&&V.push(b)}xe===0&&pe.push(V)}}ye=Ai.triangulateShape(he,pe)}const Ve=ye.length,qe=_+S;for(let he=0;he<Q;he++){const pe=f?ee(L[he],ge[he],qe):L[he];M?(w.copy(v.normals[0]).multiplyScalar(pe.x),T.copy(v.binormals[0]).multiplyScalar(pe.y),y.copy(A[0]).add(w).add(T),Me(y.x,y.y,y.z)):Me(pe.x,pe.y,0)}for(let he=1;he<=h;he++)for(let pe=0;pe<Q;pe++){const _e=f?ee(L[pe],ge[pe],qe):L[pe];M?(w.copy(v.normals[he]).multiplyScalar(_e.x),T.copy(v.binormals[he]).multiplyScalar(_e.y),y.copy(A[he]).add(w).add(T),Me(y.x,y.y,y.z)):Me(_e.x,_e.y,d/h*he)}for(let he=m-1;he>=0;he--){const pe=he/m,_e=u*Math.cos(pe*Math.PI/2),xe=_*Math.sin(pe*Math.PI/2)+S;for(let Se=0,Oe=X.length;Se<Oe;Se++){const Ue=ee(X[Se],J[Se],xe);Me(Ue.x,Ue.y,d+_e)}for(let Se=0,Oe=U.length;Se<Oe;Se++){const Ue=U[Se];$=q[Se];for(let We=0,Ye=Ue.length;We<Ye;We++){const V=ee(Ue[We],$[We],xe);M?Me(V.x,V.y+A[h-1].y,A[h-1].x+_e):Me(V.x,V.y,d+_e)}}}Xe(),te();function Xe(){const he=i.length/3;if(f){let pe=0,_e=Q*pe;for(let xe=0;xe<Ve;xe++){const Se=ye[xe];Ie(Se[2]+_e,Se[1]+_e,Se[0]+_e)}pe=h+m*2,_e=Q*pe;for(let xe=0;xe<Ve;xe++){const Se=ye[xe];Ie(Se[0]+_e,Se[1]+_e,Se[2]+_e)}}else{for(let pe=0;pe<Ve;pe++){const _e=ye[pe];Ie(_e[2],_e[1],_e[0])}for(let pe=0;pe<Ve;pe++){const _e=ye[pe];Ie(_e[0]+Q*h,_e[1]+Q*h,_e[2]+Q*h)}}n.addGroup(he,i.length/3-he,0)}function te(){const he=i.length/3;let pe=0;le(X,pe),pe+=X.length;for(let _e=0,xe=U.length;_e<xe;_e++){const Se=U[_e];le(Se,pe),pe+=Se.length}n.addGroup(he,i.length/3-he,1)}function le(he,pe){let _e=he.length;for(;--_e>=0;){const xe=_e;let Se=_e-1;Se<0&&(Se=he.length-1);for(let Oe=0,Ue=h+m*2;Oe<Ue;Oe++){const We=Q*Oe,Ye=Q*(Oe+1),V=pe+xe+We,at=pe+Se+We,et=pe+Se+Ye,b=pe+xe+Ye;we(V,at,et,b)}}}function Me(he,pe,_e){l.push(he),l.push(pe),l.push(_e)}function Ie(he,pe,_e){Ge(he),Ge(pe),Ge(_e);const xe=i.length/3,Se=g.generateTopUV(n,i,xe-3,xe-2,xe-1);rt(Se[0]),rt(Se[1]),rt(Se[2])}function we(he,pe,_e,xe){Ge(he),Ge(pe),Ge(xe),Ge(pe),Ge(_e),Ge(xe);const Se=i.length/3,Oe=g.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);rt(Oe[0]),rt(Oe[1]),rt(Oe[3]),rt(Oe[1]),rt(Oe[2]),rt(Oe[3])}function Ge(he){i.push(l[he*3+0]),i.push(l[he*3+1]),i.push(l[he*3+2])}function rt(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return J0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new yo[i.type]().fromJSON(i)),new cr(n,e.options)}}const K0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new de(r,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],u=e[i*3+1],_=e[i*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-d),new de(f,1-_),new de(S,1-p)]:[new de(o,1-l),new de(h,1-d),new de(u,1-_),new de(m,1-p)]}};function J0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ta extends vt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=st(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,d=new D,f=new de,u=new D,_=new D,S=new D;let m=0,p=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,u.x=p*1,u.y=-m,u.z=p*0,S.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(S.x,S.y,S.z);break;default:m=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,u.x=p*1,u.y=-m,u.z=p*0,_.copy(u),u.x+=S.x,u.y+=S.y,u.z+=S.z,u.normalize(),l.push(u.x,u.y,u.z),S.copy(_)}for(let g=0;g<=t;g++){const A=n+g*h*i,M=Math.sin(A),v=Math.cos(A);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*v,a.push(d.x,d.y,d.z),f.x=g/t,f.y=T/(e.length-1),o.push(f.x,f.y);const w=l[3*T+0]*M,y=l[3*T+1],E=l[3*T+0]*v;c.push(w,y,E)}}for(let g=0;g<t;g++)for(let A=0;A<e.length-1;A++){const M=A+g*e.length,v=M,T=M+e.length,w=M+e.length+1,y=M+1;r.push(v,T,y),r.push(w,y,T)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.points,e.segments,e.phiStart,e.phiLength)}}class Fi extends Ao{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fi(e.radius,e.detail)}}class ws extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,u=[],_=[],S=[],m=[];for(let p=0;p<h;p++){const g=p*f-a;for(let A=0;A<c;A++){const M=A*d-r;_.push(M,-g,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const A=g+c*p,M=g+c*(p+1),v=g+1+c*(p+1),T=g+1+c*p;u.push(A,M,T),u.push(M,v,T)}this.setIndex(u),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(S,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}class lh extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/i,u=new D,_=new de;for(let S=0;S<=i;S++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),_.x=(u.x/t+1)/2,_.y=(u.y/t+1)/2,h.push(_.x,_.y)}d+=f}for(let S=0;S<i;S++){const m=S*(n+1);for(let p=0;p<n;p++){const g=p+m,A=g,M=g+n+1,v=g+n+2,T=g+1;o.push(A,M,T),o.push(M,v,T)}}this.setIndex(o),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ks extends vt{constructor(e=new ns([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(i,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(a,2));function c(h){const d=i.length/3,f=h.extractPoints(t);let u=f.shape;const _=f.holes;Ai.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=_.length;m<p;m++){const g=_[m];Ai.isClockWise(g)===!0&&(_[m]=g.reverse())}const S=Ai.triangulateShape(u,_);for(let m=0,p=_.length;m<p;m++){const g=_[m];u=u.concat(g)}for(let m=0,p=u.length;m<p;m++){const g=u[m];i.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let m=0,p=S.length;m<p;m++){const g=S[m],A=g[0]+d,M=g[1]+d,v=g[2]+d;n.push(A,M,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Z0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Ks(n,e.curveSegments)}}function Z0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Bn extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,u=[],_=[],S=[],m=[];for(let p=0;p<=n;p++){const g=[],A=p/n,M=a+A*o,v=e*Math.cos(M),T=Math.sqrt(e*e-v*v);let w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const E=y/t,L=i+E*r;d.x=-T*Math.cos(L),d.y=v,d.z=T*Math.sin(L),_.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(E+w,1-A),g.push(c++)}h.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){const A=h[p][g+1],M=h[p][g],v=h[p+1][g],T=h[p+1][g+1];(p!==0||a>0)&&u.push(A,M,T),(p!==n-1||l<Math.PI)&&u.push(M,v,T)}this.setIndex(u),this.setAttribute("position",new He(_,3)),this.setAttribute("normal",new He(S,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nn extends vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],f=new D,u=new D,_=new D;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=i;p++){const g=p/i*r;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),_.subVectors(u,f).normalize(),h.push(_.x,_.y,_.z),d.push(p/i),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=i;m++){const p=(i+1)*S+m-1,g=(i+1)*(S-1)+m-1,A=(i+1)*(S-1)+m,M=(i+1)*S+m;l.push(p,g,M),l.push(g,A,M)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class fn extends vt{constructor(e=new Wd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new de;let h=new D;const d=[],f=[],u=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(u,2));function S(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),g(),p()}function m(A){h=e.getPointAt(A/t,h);const M=a.normals[A],v=a.binormals[A];for(let T=0;T<=i;T++){const w=T/i*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);l.x=E*M.x+y*v.x,l.y=E*M.y+y*v.y,l.z=E*M.z+y*v.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let M=1;M<=i;M++){const v=(i+1)*(A-1)+(M-1),T=(i+1)*A+(M-1),w=(i+1)*A+M,y=(i+1)*(A-1)+M;_.push(v,T,y),_.push(T,w,y)}}function g(){for(let A=0;A<=t;A++)for(let M=0;M<=i;M++)c.x=A/t,c.y=M/i,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fn(new yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(fu(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(fu(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function dn(s){const e={};for(let t=0;t<s.length;t++){const n=rr(s[t]);for(const i in n)e[i]=n[i]}return e}function fu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function j0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ri={clone:rr,merge:dn};var Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new de().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zd extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Es extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tm extends Jn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class nm extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class im extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ki(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function to(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function sm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function rm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class am extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ys,endingEnd:Ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $s:r=e,o=2*t-n;break;case fo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $s:a=e,l=2*n-t;break;case fo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,_=(n-t)/(i-t),S=_*_,m=S*_,p=-f*m+2*f*S-f*_,g=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*_+1,A=(-1-u)*m+(1.5+u)*S+.5*_,M=u*m-u*S;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+g*a[c+v]+A*a[l+v]+M*a[d+v];return r}}class jd extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}}class om extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class lm extends hr{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const _=(n-t)/(i-t),S=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*_;return r}const f=o*2,u=e-1;for(let _=0;_!==o;++_){const S=a[c+_],m=a[l+_],p=u*f+_*2,g=d[p],A=d[p+1],M=e*f+_*2,v=h[M],T=h[M+1],w=hm(n,t,g,v,i);r[_]=Qd(w,S,A,T,m)}return r}}function Qd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function cm(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function hm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Qd(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=cm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),to(e.settings)&&(n.settings={inTangents:Ki(e.settings.inTangents,Array),outTangents:Ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new lm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break;case Rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;to(this.settings)&&(mu(this.settings.inTangents,e),mu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Tp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ko,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,f=d-n,u=d+n;for(let _=0;_!==n;++_){const S=t[d+_];if(S!==t[f+_]||S!==t[u+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,to(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function mu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Kr;class ur extends jn{constructor(e,t,n){super(e,t,n)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=$r;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ef extends jn{constructor(e,t,n,i){super(e,t,n,i)}}ef.prototype.ValueTypeName="color";class na extends jn{constructor(e,t,n,i){super(e,t,n,i)}}na.prototype.ValueTypeName="number";class um extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Vn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ia extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new um(this.times,this.values,this.getValueSize(),e)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends jn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=$r;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Mo.prototype.ValueTypeName="vector";class vc{constructor(e="",t=-1,n=[],i=Yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=sm(l);l=pu(l,1,h),c=pu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new na(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return ef;case"quaternion":return ia;case"bool":case"boolean":return ur;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function fm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dm(s.type);if(s.times===void 0){const n=[],i=[];rm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),to(s.settings)&&(t.settings={inTangents:Ki(s.settings.inTangents,Float32Array),outTangents:Ki(s.settings.outTangents,Float32Array)}),t}const Ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(gu(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!gu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function gu(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class pm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const u=c[d],_=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mm=new pm;class fr{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class gm extends Error{constructor(e,t){super(e),this.response=t}}class tf extends fr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=vi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=f?parseInt(f):0,_=u!==0;let S=0;const m=new ReadableStream({start(p){g();function g(){d.read().then(({done:A,value:M})=>{if(A)p.close();else{S+=M.byteLength;const v=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:u});for(let T=0,w=h.length;T<w;T++){const y=h[T];y.onProgress&&y.onProgress(v)}p.enqueue(M),g()}},A=>{p.error(A)})}}});return new Response(m)}else throw new gm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return c.arrayBuffer().then(_=>u.decode(_))}}}).then(c=>{Ci.add(`file:${e}`,c);const h=vi[e];delete vi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const h=vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let d=0,f=h.length;d<f;d++){const u=h[d];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vs=new WeakMap;class _m extends fr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vs.get(a);d===void 0&&(d=[],Vs.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Zr("img");function l(){h(),t&&t(this);const d=Vs.get(this)||[];for(let f=0;f<d.length;f++){const u=d[f];u.onLoad&&u.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Ci.remove(`image:${e}`);const f=Vs.get(this)||[];for(let u=0;u<f.length;u++){const _=f[u];_.onError&&_.onError(d)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class So extends fr{constructor(e){super(e)}load(e,t,n,i){const r=new Yt,a=new _m(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ro extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _u extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fl=new Qe,xu=new D,vu=new D;class ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Jr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fa=new D,Oa=new Vn,ei=new D;class nf extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fa,Oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new D,yu=new de,Mu=new de;class pn extends nf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,Mu),t.subVectors(Mu,yu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xm extends ch{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=nr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vm extends Ro{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new xm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ym extends ch{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class yc extends Ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ym}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pr extends nf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mm extends ch{constructor(){super(new pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Mm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const pl=new WeakMap;class Sm extends fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{pl.has(a)===!0?(i&&i(pl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),pl.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gs=-90,Ws=1;class bm extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(Gs,Ws,e,t);i.layers=this.layers,this.add(i);const r=new pn(Gs,Ws,e,t);r.layers=this.layers,this.add(r);const a=new pn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);const o=new pn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);const l=new pn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);const c=new pn(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tm extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Em.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Em(){this._document.hidden===!1&&this.reset()}class Am{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Vn.multiplyQuaternionsFlat(e,a,e,t,e,n),Vn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const hh="\\[\\]\\.:\\/",Rm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Cm="[^"+hh.replace("\\.","")+"]",Pm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Im=/(WCOD+)?/.source.replace("WCOD",Cm),Lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Dm=new RegExp("^"+Pm+Im+Lm+Nm+"$"),Um=["material","materials","bones","map"];class Fm{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(e){const t=Dm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Fm;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Om{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Ys,endingEnd:Ys};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case dp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Yc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===up;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Ed){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$s,i.endingEnd=$s):(e?i.endingStart=this.zeroSlopeAtStart?$s:Ys:i.endingStart=fo,t?i.endingEnd=this.zeroSlopeAtEnd?$s:Ys:i.endingEnd=fo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Bm=new Float32Array(1);class km extends ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const f=i[d],u=f.name;let _=h[u];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,u));continue}const S=t&&t._propertyBindings[d].binding.parsedPath;_=new Am(xt.create(n,u,S),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,u),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jd(new Float32Array(2),new Float32Array(2),1,Bm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?vc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Yc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Om(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?vc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Su=new Qe;class zm{constructor(e,t,n=0,i=1/0){this.ray=new sa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mc(e[i],this,n,t);return n.sort(bu),n}}function bu(s,e){return s.distance-e.distance}function Mc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Mc(r[a],e,t,!0)}}class sf{static{sf.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}function Tu(s,e,t,n){const i=Hm(n);switch(t){case Td:return s*e;case wo:return s*e/i.components*i.byteLength;case Wc:return s*e/i.components*i.byteLength;case Ss:return s*e*2/i.components*i.byteLength;case Xc:return s*e*2/i.components*i.byteLength;case wd:return s*e*3/i.components*i.byteLength;case zn:return s*e*4/i.components*i.byteLength;case qc:return s*e*4/i.components*i.byteLength;case Za:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qa:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:case Vl:return Math.max(s,16)*Math.max(e,8)/4;case kl:case Hl:return Math.max(s,8)*Math.max(e,8)/2;case Gl:case Wl:case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case ho:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cc:case hc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uo:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(s){switch(s){case An:case yd:return{byteLength:1,components:1};case Yr:case Md:case tn:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case hi:case Hc:case Rn:return{byteLength:4,components:1};case Sd:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);function rf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vm(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<d.length;u++){const _=d[f],S=d[u];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,d[f]=S)}d.length=f+1;for(let u=0,_=d.length;u<_;u++){const S=d[u];s.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ig=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:Zm,batching_vertex:jm,begin_vertex:Qm,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:ag,clipping_planes_vertex:og,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:dg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:vg,colorspace_pars_fragment:yg,envmap_fragment:Mg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:bg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Ug,envmap_vertex:wg,fog_vertex:Eg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Dg,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:kg,lights_physical_fragment:zg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Kg,map_fragment:Jg,map_pars_fragment:Zg,map_particle_fragment:jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:e_,metalnessmap_pars_fragment:t_,morphinstance_vertex:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:r_,morphtarget_vertex:a_,normal_fragment_begin:o_,normal_fragment_maps:l_,normal_pars_fragment:c_,normal_pars_vertex:h_,normal_vertex:u_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:__,packing:x_,premultiplied_alpha_fragment:v_,project_vertex:y_,dithering_fragment:M_,dithering_pars_fragment:S_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:E_,shadowmap_vertex:A_,shadowmask_pars_fragment:R_,skinbase_vertex:C_,skinning_pars_vertex:P_,skinning_vertex:I_,skinnormal_vertex:L_,specularmap_fragment:N_,specularmap_pars_fragment:D_,tonemapping_fragment:U_,tonemapping_pars_fragment:F_,transmission_fragment:O_,transmission_pars_fragment:B_,uv_pars_fragment:k_,uv_pars_vertex:z_,uv_vertex:H_,worldpos_vertex:V_,background_vert:G_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:$_,depth_vert:K_,depth_frag:J_,distance_vert:Z_,distance_frag:j_,equirect_vert:Q_,equirect_frag:ex,linedashed_vert:tx,linedashed_frag:nx,meshbasic_vert:ix,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ax,meshmatcap_vert:ox,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:dx,meshphysical_vert:fx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:_x,points_frag:xx,shadow_vert:vx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:Sx},Ee={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},si={basic:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:dn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:dn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:dn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new ke(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:dn([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:dn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:dn([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:dn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:dn([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:dn([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:dn([Ee.lights,Ee.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ba={r:0,b:0,g:0},bx=new Qe,af=new tt;af.set(-1,0,0,0,1,0,0,0,1);function Tx(s,e,t,n,i,r){const a=new ke(0);let o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(g){let A=g.isScene===!0?g.background:null;if(A&&A.isTexture){const M=g.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(g){let A=!1;const M=u(g);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(g,A){const M=u(A);M&&(M.isCubeTexture||M.mapping===To)?(c===void 0&&(c=new $t(new As(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:rr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,(h!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $t(new ws(2,2),new Wt({name:"BackgroundMaterial",uniforms:rr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,A){g.getRGB(Ba,Jd(s)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,A=1){a.set(g),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:S,dispose:p}}function wx(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(U,B,G,k,X){let ee=!1;const Q=d(U,k,G,B);r!==Q&&(r=Q,c(r.object)),ee=u(U,k,G,X),ee&&_(U,k,G,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,M(U,B,G,k),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function d(U,B,G,k){const X=k.wireframe===!0;let ee=n[B.id];ee===void 0&&(ee={},n[B.id]=ee);const Q=U.isInstancedMesh===!0?U.id:0;let ae=ee[Q];ae===void 0&&(ae={},ee[Q]=ae);let J=ae[G.id];J===void 0&&(J={},ae[G.id]=J);let q=J[X];return q===void 0&&(q=f(l()),J[X]=q),q}function f(U){const B=[],G=[],k=[];for(let X=0;X<t;X++)B[X]=0,G[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:k,object:U,attributes:{},index:null}}function u(U,B,G,k){const X=r.attributes,ee=B.attributes;let Q=0;const ae=G.getAttributes();for(const J in ae)if(ae[J].location>=0){const $=X[J];let ge=ee[J];if(ge===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(ge=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(ge=U.instanceColor)),$===void 0||$.attribute!==ge||ge&&$.data!==ge.data)return!0;Q++}return r.attributesNum!==Q||r.index!==k}function _(U,B,G,k){const X={},ee=B.attributes;let Q=0;const ae=G.getAttributes();for(const J in ae)if(ae[J].location>=0){let $=ee[J];$===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const ge={};ge.attribute=$,$&&$.data&&(ge.data=$.data),X[J]=ge,Q++}r.attributes=X,r.attributesNum=Q,r.index=k}function S(){const U=r.newAttributes;for(let B=0,G=U.length;B<G;B++)U[B]=0}function m(U){p(U,0)}function p(U,B){const G=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;G[U]=1,k[U]===0&&(s.enableVertexAttribArray(U),k[U]=1),X[U]!==B&&(s.vertexAttribDivisor(U,B),X[U]=B)}function g(){const U=r.newAttributes,B=r.enabledAttributes;for(let G=0,k=B.length;G<k;G++)B[G]!==U[G]&&(s.disableVertexAttribArray(G),B[G]=0)}function A(U,B,G,k,X,ee,Q){Q===!0?s.vertexAttribIPointer(U,B,G,X,ee):s.vertexAttribPointer(U,B,G,k,X,ee)}function M(U,B,G,k){S();const X=k.attributes,ee=G.getAttributes(),Q=B.defaultAttributeValues;for(const ae in ee){const J=ee[ae];if(J.location>=0){let q=X[ae];if(q===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){const $=q.normalized,ge=q.itemSize,ye=e.get(q);if(ye===void 0)continue;const Ve=ye.buffer,qe=ye.type,Xe=ye.bytesPerElement,te=qe===s.INT||qe===s.UNSIGNED_INT||q.gpuType===Hc;if(q.isInterleavedBufferAttribute){const le=q.data,Me=le.stride,Ie=q.offset;if(le.isInstancedInterleavedBuffer){for(let we=0;we<J.locationSize;we++)p(J.location+we,le.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<J.locationSize;we++)m(J.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let we=0;we<J.locationSize;we++)A(J.location+we,ge/J.locationSize,qe,$,Me*Xe,(Ie+ge/J.locationSize*we)*Xe,te)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)p(J.location+le,q.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<J.locationSize;le++)m(J.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let le=0;le<J.locationSize;le++)A(J.location+le,ge/J.locationSize,qe,$,ge*Xe,ge/J.locationSize*le*Xe,te)}}else if(Q!==void 0){const $=Q[ae];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(J.location,$);break;case 3:s.vertexAttrib3fv(J.location,$);break;case 4:s.vertexAttrib4fv(J.location,$);break;default:s.vertexAttrib1fv(J.location,$)}}}}g()}function v(){E();for(const U in n){const B=n[U];for(const G in B){const k=B[G];for(const X in k){const ee=k[X];for(const Q in ee)h(ee[Q].object),delete ee[Q];delete k[X]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;const B=n[U.id];for(const G in B){const k=B[G];for(const X in k){const ee=k[X];for(const Q in ee)h(ee[Q].object),delete ee[Q];delete k[X]}}delete n[U.id]}function w(U){for(const B in n){const G=n[B];for(const k in G){const X=G[k];if(X[U.id]===void 0)continue;const ee=X[U.id];for(const Q in ee)h(ee[Q].object),delete ee[Q];delete X[U.id]}}}function y(U){for(const B in n){const G=n[B],k=U.isInstancedMesh===!0?U.id:0,X=G[k];if(X!==void 0){for(const ee in X){const Q=X[ee];for(const ae in Q)h(Q[ae].object),delete Q[ae];delete X[ee]}delete G[k],Object.keys(G).length===0&&delete n[B]}}}function E(){L(),a=!0,r!==i&&(r=i,c(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function Ex(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ax(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==zn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const y=w===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==An&&w!==Rn&&!y&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:A,maxFragmentUniforms:M,maxSamples:v,samples:T}}function Rx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Si,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const g=r?0:n,A=g*4;let M=p.clippingState||null;l.value=M,M=h(_,f,A,u);for(let v=0;v!==A;++v)M[v]=t[v];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=u+S*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=u;A!==S;++A,M+=4)a.copy(d[A]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Js=4,Cx=6,Px=20,Ix=256,Rr=new pr,wu=new ke;let ml=null,gl=0,_l=0,xl=!1;const Lx=new D,hs=new D;class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Lx}=r;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=xl,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:tn,format:zn,colorSpace:Ln,depthBuffer:!1},i=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Nx(r)),this._blurMaterial=Ux(r,e,t),this._ggxMaterial=Dx(r,e,t)}return i}_compileMaterial(e){const t=new $t(new vt,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,i,r){const l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(wu),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new As,new oi({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,p=!0):(m.color.copy(wu),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const v=this._cubeSize;Xs(i,M*v,A>2?v:0,v,v),d.setRenderTarget(i),p&&d.render(S,l),d.render(e,l)}d.toneMapping=u,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ms||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Js?n-_+Js:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=_-t,Xs(r,m,p,3*S,2*S),i.setRenderTarget(r),i.render(o,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Xs(e,m,p,3*S,2*S),i.setRenderTarget(e),i.render(o,Rr)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-Js?i-this._lodMax+Js:0),f=4*(this._cubeSize-h);Xs(t,d,f,3*h,2*h),a.setRenderTarget(t),a.render(l,Rr)}}function Nx(s){const e=[],t=[];let n=s;const i=s-Js+1+Cx;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,_=new Float32Array(u*f*d),S=new Float32Array(u*f*d);for(let p=0;p<d;p++){const g=p%3*2/3-1,A=p>2?0:-1,M=[g,A,0,g+2/3,A,0,g+2/3,A+1,0,g,A,0,g+2/3,A+1,0,g,A+1,0];_.set(M,u*f*p);for(let v=0;v<f;v++){const T=h[v*2]*2-1,w=h[v*2+1]*2-1;p===0?hs.set(1,w,T):p===1?hs.set(-T,1,-w):p===2?hs.set(-T,w,1):p===3?hs.set(-1,w,-T):p===4?hs.set(-T,-1,w):hs.set(T,w,-1),hs.toArray(S,(p*f+v)*u)}}const m=new vt;m.setAttribute("position",new gn(_,u)),m.setAttribute("outputDirection",new gn(S,u)),t.push(new $t(m,null)),n>Js&&n--}return{lodMeshes:t,sizeLods:e}}function Au(s,e,t){const n=new en(s,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Dx(s,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ux(s,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ru(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Cu(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class of extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new As(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ln});r.uniforms.tEquirect.value=t;const a=new $t(i,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=qt),new bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function Fx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===Oo||u===Bo)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new of(_.height);return S.fromEquirectangularTexture(s,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const u=f.mapping,_=u===Oo||u===Bo,S=u===Ms||u===er;if(_||S){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Eu(s)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return _&&g&&g.height>0||S&&g&&l(g)?(n===null&&(n=new Eu(s)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===Oo?f.mapping=Ms:u===Bo&&(f.mapping=er),f}function l(f){let u=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&u++;return u===_}function c(f){const u=f.target;u.removeEventListener("dispose",c);const _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ox(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zs("WebGLRenderer: "+n+" extension not supported."),i}}}function Bx(s,e,t,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)e.update(f[u],s.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(u!==null){const g=u.array;S=u.version;for(let A=0,M=g.length;A<M;A+=3){const v=g[A+0],T=g[A+1],w=g[A+2];f.push(v,T,T,w,w,v)}}else{const g=_.array;S=_.version;for(let A=0,M=g.length/3-1;A<M;A+=3){const v=A+0,T=A+1,w=A+2;f.push(v,T,T,w,w,v)}}const m=new(_.count>=65535?Dd:Nd)(f,1);m.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function kx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let S=0;for(let m=0;m<u;m++)S+=f[m];t.update(S,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hx(s,e,t){const n=new WeakMap,i=new bt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let A=0;u===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*v*4*d),w=new Id(T,M,v,d);w.type=Rn,w.needsUpdate=!0;const y=A*4;for(let L=0;L<d;L++){const U=m[L],B=p[L],G=g[L],k=M*v*4*L;for(let X=0;X<U.count;X++){const ee=X*y;u===!0&&(i.fromBufferAttribute(U,X),T[k+ee+0]=i.x,T[k+ee+1]=i.y,T[k+ee+2]=i.z,T[k+ee+3]=0),_===!0&&(i.fromBufferAttribute(B,X),T[k+ee+4]=i.x,T[k+ee+5]=i.y,T[k+ee+6]=i.z,T[k+ee+7]=0),S===!0&&(i.fromBufferAttribute(G,X),T[k+ee+8]=i.x,T[k+ee+9]=i.y,T[k+ee+10]=i.z,T[k+ee+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:w,size:new de(M,v)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let u=0;for(let S=0;S<c.length;S++)u+=c[S];const _=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Vx(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Gx={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[qr]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Wx(s,e,t,n,i,r){const a=new en(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new vt;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));const h=new Zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $t(c,h),f=new pr(-1,1,1,-1,0,1);let u=null,_=null,S=!1,m,p=null,g=[],A=!1;this.setSize=function(M,v){a.setSize(M,v),o!==null&&o.setSize(M,v),l!==null&&l.setSize(M,v);for(let T=0;T<g.length;T++){const w=g[T];w.setSize&&w.setSize(M,v)}},this.setEffects=function(M){g=M,A=g.length>0&&g[0].isRenderPass===!0;const v=a.width,T=a.height;g.length>0&&o===null&&(o=new en(v,T,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new en(v,T,{type:tn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<g.length;w++){const y=g[w];y.setSize&&y.setSize(v,T)}},this.begin=function(M,v){if(S||M.toneMapping===li&&g.length===0)return!1;if(p=v,v!==null){const T=v.width,w=v.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=li,!0},this.hasRenderPass=function(){return A},this.end=function(M,v){M.toneMapping=m,S=!0;let T=a,w=o;for(let y=0;y<g.length;y++){const E=g[y];E.enabled!==!1&&(E.render(M,w,T,v),E.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(u!==M.outputColorSpace||_!==M.toneMapping){u=M.outputColorSpace,_=M.toneMapping,h.defines={},ot.getTransfer(u)===_t&&(h.defines.SRGB_TRANSFER="");const y=Gx[_];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(d,f),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const lf=new Yt,Sc=new ir(1,1),cf=new Id,hf=new Kp,uf=new Bd,Pu=[],Iu=[],Lu=new Float32Array(16),Nu=new Float32Array(9),Du=new Float32Array(4);function mr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pu[i];if(r===void 0&&(r=new Float32Array(i),Pu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Po(s,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function Yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function Kx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Du.set(n),s.uniformMatrix2fv(this.addr,!1,Du),Jt(t,n)}}function Jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Nu.set(n),s.uniformMatrix3fv(this.addr,!1,Nu),Jt(t,n)}}function Zx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),Jt(t,n)}}function jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function nv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function sv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function rv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function av(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sc.compareFunction=t.isReversedDepthBuffer()?Kc:$c,r=Sc):r=lf,t.setTexture2D(e||r,i)}function ov(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hf,i)}function lv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function cv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cf,i)}function hv(s){switch(s){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return $x;case 35674:return Kx;case 35675:return Jx;case 35676:return Zx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function uv(s,e){s.uniform1fv(this.addr,e)}function dv(s,e){const t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function fv(s,e){const t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function pv(s,e){const t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function mv(s,e){const t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gv(s,e){const t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _v(s,e){const t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xv(s,e){s.uniform1iv(this.addr,e)}function vv(s,e){s.uniform2iv(this.addr,e)}function yv(s,e){s.uniform3iv(this.addr,e)}function Mv(s,e){s.uniform4iv(this.addr,e)}function Sv(s,e){s.uniform1uiv(this.addr,e)}function bv(s,e){s.uniform2uiv(this.addr,e)}function Tv(s,e){s.uniform3uiv(this.addr,e)}function wv(s,e){s.uniform4uiv(this.addr,e)}function Ev(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Sc:a=lf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Av(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hf,r[a])}function Rv(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uf,r[a])}function Cv(s,e,t){const n=this.cache,i=e.length,r=Po(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cf,r[a])}function Pv(s){switch(s){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return bv;case 36295:return Tv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hv(t.type)}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Uu(s,e){s.seq.push(e),s.map[e.id]=e}function Dv(s,e,t){const n=s.name,i=n.length;for(vl.lastIndex=0;;){const r=vl.exec(n),a=vl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uu(t,c===void 0?new Iv(o,s,e):new Lv(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Nv(o),Uu(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dv(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Uv=37297;let Fv=0;function Ov(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ou=new tt;function Bv(s){ot._getMatrix(Ou,ot.workingColorSpace,s);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case mo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ov(s.getShaderSource(e),o)}else return r}function kv(s,e){const t=Bv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zv={[Uc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[qr]:"ACESFilmic",[kc]:"AgX",[zc]:"Neutral",[Bc]:"Custom"};function Hv(s,e){const t=zv[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new D;function Vv(){ot.getLuminanceCoefficients(ka);const s=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Wv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Dr(s){return s!==""}function ku(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(qv,$v)}const Yv=new Map;function $v(s,e){let t=it[e];if(t===void 0){const n=Yv.get(e);if(n!==void 0)t=it[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bc(t)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(s){return s.replace(Kv,Jv)}function Jv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zv={[Ka]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function jv(s){return Zv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qv={[Ms]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function e1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Qv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[er]:"ENVMAP_MODE_REFRACTION"};function n1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[_d]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function s1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":i1[s.combine]||"ENVMAP_BLENDING_NONE"}function r1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function a1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jv(t),c=e1(t),h=n1(t),d=s1(t),f=r1(t),u=Gv(t),_=Wv(r),S=i.createProgram();let m,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?it.tonemapping_pars_fragment:"",t.toneMapping!==li?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=bc(a),a=ku(a,t),a=zu(a,t),o=bc(o),o=ku(o,t),o=zu(o,t),a=Hu(a),o=Hu(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=g+m+a,M=g+p+o,v=Fu(i,i.VERTEX_SHADER,A),T=Fu(i,i.FRAGMENT_SHADER,M);i.attachShader(S,v),i.attachShader(S,T),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function w(U){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(S)||"",G=i.getShaderInfoLog(v)||"",k=i.getShaderInfoLog(T)||"",X=B.trim(),ee=G.trim(),Q=k.trim();let ae=!0,J=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,v,T);else{const q=Bu(i,v,"vertex"),$=Bu(i,T,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+q+`
`+$)}else X!==""?ze("WebGLProgram: Program Info Log:",X):(ee===""||Q==="")&&(J=!1);J&&(U.diagnostics={runnable:ae,programLog:X,vertexShader:{log:ee,prefix:m},fragmentShader:{log:Q,prefix:p}})}i.deleteShader(v),i.deleteShader(T),y=new io(i,S),E=Xv(i,S)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(S,Uv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=v,this.fragmentShader=T,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c1(e),t.set(e,n)),n}}class c1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function h1(s){return s===Ss||s===ho||s===uo}function u1(s,e,t,n,i,r){const a=new jc,o=new l1,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let f=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function S(y,E,L,U,B,G){const k=U.fog,X=B.geometry,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ae=e.get(y.envMap||ee,Q),J=ae&&ae.mapping===To?ae.image.height:null,q=u[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&ze("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=$!==void 0?$.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ve,qe,Xe,te;if(q){const mt=si[q];Ve=mt.vertexShader,qe=mt.fragmentShader}else{Ve=y.vertexShader,qe=y.fragmentShader;const mt=o.getVertexShaderStage(y),ut=o.getFragmentShaderStage(y);o.update(y,mt,ut),Xe=mt.id,te=ut.id}const le=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,we=B.isBatchedMesh===!0,Ge=!!y.map,rt=!!y.matcap,he=!!ae,pe=!!y.aoMap,_e=!!y.lightMap,xe=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,Oe=!!y.displacementMap,Ue=!!y.emissiveMap,We=!!y.metalnessMap,Ye=!!y.roughnessMap,V=y.anisotropy>0,at=y.clearcoat>0,et=y.dispersion>0,b=y.retroreflectivity>0,x=y.iridescence>0,R=y.sheen>0,C=y.transmission>0,I=V&&!!y.anisotropyMap,F=at&&!!y.clearcoatMap,O=at&&!!y.clearcoatNormalMap,N=at&&!!y.clearcoatRoughnessMap,z=x&&!!y.iridescenceMap,K=x&&!!y.iridescenceThicknessMap,ie=R&&!!y.sheenColorMap,re=R&&!!y.sheenRoughnessMap,ce=!!y.specularMap,me=!!y.specularColorMap,Y=!!y.specularIntensityMap,oe=C&&!!y.transmissionMap,H=C&&!!y.thicknessMap,ue=!!y.gradientMap,se=!!y.alphaMap,ve=y.alphaTest>0,Te=!!y.alphaHash,fe=!!y.extensions;let Fe=li;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const Le={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:qe,defines:y.defines,customVertexShaderID:Xe,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:we,batchingColor:we&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:rt,envMap:he,envMapMode:he&&ae.mapping,envMapCubeUVHeight:J,aoMap:pe,lightMap:_e,bumpMap:xe,normalMap:Se,displacementMap:Oe,emissiveMap:Ue,normalMapObjectSpace:Se&&y.normalMapType===mp,normalMapTangentSpace:Se&&y.normalMapType===po,packedNormalMap:Se&&y.normalMapType===po&&h1(y.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:V,anisotropyMap:I,clearcoat:at,clearcoatMap:F,clearcoatNormalMap:O,clearcoatRoughnessMap:N,dispersion:et,retroreflection:b,iridescence:x,iridescenceMap:z,iridescenceThicknessMap:K,sheen:R,sheenColorMap:ie,sheenRoughnessMap:re,specularMap:ce,specularColorMap:me,specularIntensityMap:Y,transmission:C,transmissionMap:oe,thicknessMap:H,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Or&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:ve,alphaHash:Te,combine:y.combine,mapUv:Ge&&_(y.map.channel),aoMapUv:pe&&_(y.aoMap.channel),lightMapUv:_e&&_(y.lightMap.channel),bumpMapUv:xe&&_(y.bumpMap.channel),normalMapUv:Se&&_(y.normalMap.channel),displacementMapUv:Oe&&_(y.displacementMap.channel),emissiveMapUv:Ue&&_(y.emissiveMap.channel),metalnessMapUv:We&&_(y.metalnessMap.channel),roughnessMapUv:Ye&&_(y.roughnessMap.channel),anisotropyMapUv:I&&_(y.anisotropyMap.channel),clearcoatMapUv:F&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:O&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:re&&_(y.sheenRoughnessMap.channel),specularMapUv:ce&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:Y&&_(y.specularIntensityMap.channel),transmissionMapUv:oe&&_(y.transmissionMap.channel),thicknessMapUv:H&&_(y.thicknessMap.channel),alphaMapUv:se&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Se||V),vertexNormals:!!X.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ge||se),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||X.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:Ue&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(E,y),g(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){const E=u[y.type];let L;if(E){const U=si[E];L=Ri.clone(U.uniforms)}else L=y.uniforms;return L}function M(y,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new a1(s,E,y,i),c.push(L),h.set(E,L)),L}function v(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:w}}function d1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function f1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Gu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,_,S,m,p){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:u,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:p},s[e]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=_,g.materialVariant=a(f),g.groupOrder=S,g.renderOrder=f.renderOrder,g.z=m,g.group=p),e++,g}function l(f,u,_,S,m,p,g){g.reversedDepth===!0&&(m=-m);const A=o(f,u,_,S,m,p);_.transmission>0?n.push(A):_.transparent===!0?i.push(A):t.push(A)}function c(f,u,_,S,m,p){const g=o(f,u,_,S,m,p);_.transmission>0?n.unshift(g):_.transparent===!0?i.unshift(g):t.unshift(g)}function h(f,u){t.length>1&&t.sort(f||f1),n.length>1&&n.sort(u||Gu),i.length>1&&i.sort(u||Gu)}function d(){for(let f=e,u=s.length;f<u;f++){const _=s[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function p1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Wu,s.set(n,[a])):i>=r.length?(a=new Wu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function m1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function g1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _1=0;function x1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v1(s){const e=new m1,t=g1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Qe,a=new Qe;function o(c){let h=0,d=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,_=0,S=0,m=0,p=0,g=0,A=0,M=0,v=0,T=0,w=0,y=0,E=0,L=0;c.sort(x1);for(let B=0,G=c.length;B<G;B++){const k=c[B],X=k.color,ee=k.intensity,Q=k.distance;let ae=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ss?ae=k.shadow.map.texture:ae=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=X.r*ee,d+=X.g*ee,f+=X.b*ee;else if(k.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(k.sh.coefficients[J],ee);L++}else if(k.isSunLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const q=k.shadow,$=t.get(k);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[_]=$,n.sunShadowMap[_]=ae;const ge=q.getViewportCount();for(let ye=0;ye<ge;ye++)n.sunShadowMatrix[S+ye]=q.getMatrix(ye),n.sunShadowCascade[S+ye]=q._cascadeData[ye];S+=ge,_++}n.sun[u]=J,u++}else if(k.isDirectionalLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const q=k.shadow,$=t.get(k);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=k.shadow.matrix,v++}n.directional[m]=J,m++}else if(k.isSpotLight){const J=e.get(k);J.position.setFromMatrixPosition(k.matrixWorld),J.color.copy(X).multiplyScalar(ee),J.distance=Q,J.coneCos=Math.cos(k.angle),J.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),J.decay=k.decay,n.spot[g]=J;const q=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,q.updateMatrices(k),k.castShadow&&E++),n.spotLightMatrix[g]=q.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=ae,w++}g++}else if(k.isRectAreaLight){const J=e.get(k);J.color.copy(X).multiplyScalar(ee),J.halfWidth.set(k.width*.5,0,0),J.halfHeight.set(0,k.height*.5,0),n.rectArea[A]=J,A++}else if(k.isPointLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),J.distance=k.distance,J.decay=k.decay,k.castShadow){const q=k.shadow,$=t.get(k);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=ae,n.pointShadowMatrix[p]=k.shadow.matrix,T++}n.point[p]=J,p++}else if(k.isHemisphereLight){const J=e.get(k);J.skyColor.copy(k.color).multiplyScalar(ee),J.groundColor.copy(k.groundColor).multiplyScalar(ee),n.hemi[M]=J,M++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.sunLength!==u||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==g||U.rectAreaLength!==A||U.hemiLength!==M||U.numSunShadows!==_||U.numDirectionalShadows!==v||U.numPointShadows!==T||U.numSpotShadows!==w||U.numSpotMaps!==y||U.numLightProbes!==L)&&(n.sun.length=u,n.directional.length=m,n.spot.length=g,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,U.sunLength=u,U.directionalLength=m,U.pointLength=p,U.spotLength=g,U.rectAreaLength=A,U.hemiLength=M,U.numSunShadows=_,U.numDirectionalShadows=v,U.numPointShadows=T,U.numSpotShadows=w,U.numSpotMaps=y,U.numLightProbes=L,n.version=_1++)}function l(c,h){let d=0,f=0,u=0,_=0,S=0,m=0;const p=h.matrixWorldInverse;for(let g=0,A=c.length;g<A;g++){const M=c[g];if(M.isSunLight){const v=n.sun[d];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(M.isSpotLight){const v=n.spot[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const v=n.rectArea[S];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Xu(s){const e=new v1(s),t=[],n=[],i=[];function r(f){d.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function y1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Xu(s),e.set(i,[o])):r>=a.length?(o=new Xu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b1=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],T1=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],qu=new Qe,Cr=new D,yl=new D;function w1(s,e,t){let n=new nh;const i=new de,r=new de,a=new bt,o=new nm,l=new im,c={},h=t.maxTextureSize,d={[Di]:mn,[mn]:Di,[Qt]:Qt},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:M1,fragmentShader:S1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const _=new vt;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $t(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let p=this.type;this.render=function(T,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ud&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ka);const E=s.getRenderTarget(),L=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ln),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==this.type;G&&w.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(X=>X.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,X=T.length;k<X;k++){const ee=T[k],Q=ee.shadow;if(Q===void 0){ze("WebGLShadowMap:",ee,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const ae=Q.getFrameExtents();i.multiply(ae),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,Q.mapSize.y=r.y));const J=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=J,Q.map===null||G===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ir){if(ee.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new en(i.x,i.y,{format:Ss,type:tn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),Q.map.texture.name=ee.name+".shadowMap",Q.map.depthTexture=new ir(i.x,i.y,Rn),Q.map.depthTexture.name=ee.name+".shadowMapDepth",Q.map.depthTexture.format=Ui,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt}else ee.isPointLight?(Q.map=new of(i.x),Q.map.depthTexture=new v0(i.x,hi)):(Q.map=new en(i.x,i.y),Q.map.depthTexture=new ir(i.x,i.y,hi)),Q.map.depthTexture.name=ee.name+".shadowMap",Q.map.depthTexture.format=Ui,this.type===Ka?(Q.map.depthTexture.compareFunction=J?Kc:$c,Q.map.depthTexture.minFilter=qt,Q.map.depthTexture.magFilter=qt):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==i.x||Q.map.height!==i.y)&&Q.map.setSize(i.x,i.y);const q=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();ee.isPointLight!==!0&&Q.updateMatrices(ee,y);for(let $=0;$<q;$++){const ge=Q.getCamera($);if(ee.isPointLight){const ye=Q.camera,Ve=Q.matrix,qe=ee.distance||ye.far;qe!==ye.far&&(ye.far=qe,ye.updateProjectionMatrix()),Cr.setFromMatrixPosition(ee.matrixWorld),ye.position.copy(Cr),yl.copy(ye.position),yl.add(b1[$]),ye.up.copy(T1[$]),ye.lookAt(yl),ye.updateMatrixWorld(),Ve.makeTranslation(-Cr.x,-Cr.y,-Cr.z),qu.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(qu,ye.coordinateSystem,ye.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,$),s.clear();else{$===0&&(s.setRenderTarget(Q.map),s.clear());const ye=Q.getViewport($);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),B.viewport(a)}n=Q.getFrustum($),M(w,y,ge,ee,this.type)}Q.isPointLightShadow!==!0&&this.type===Ir&&g(Q,y),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,L,U)};function g(T,w){const y=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(i.x,i.y,{format:Ss,type:tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,y,f,S,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,y,u,S,null)}function A(T,w,y,E){let L=null;const U=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=y.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=L.uuid,G=w.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let X=k[G];X===void 0&&(X=L.clone(),k[G]=X,w.addEventListener("dispose",v)),L=X}if(L.visible=w.visible,L.wireframe=w.wireframe,E===Ir?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=s.properties.get(L);B.light=y}return L}function M(T,w,y,E,L){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ir)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const G=e.update(T),k=T.material;if(Array.isArray(k)){const X=G.groups;for(let ee=0,Q=X.length;ee<Q;ee++){const ae=X[ee],J=k[ae.materialIndex];if(J&&J.visible){const q=A(T,J,E,L);T.onBeforeShadow(s,T,w,y,G,q,ae),s.renderBufferDirect(y,null,G,q,T,ae),T.onAfterShadow(s,T,w,y,G,q,ae)}}}else if(k.visible){const X=A(T,k,E,L);T.onBeforeShadow(s,T,w,y,G,X,null),s.renderBufferDirect(y,null,G,X,T,null),T.onAfterShadow(s,T,w,y,G,X,null)}}const B=T.children;for(let G=0,k=B.length;G<k;G++)M(B[G],w,y,E,L)}function v(T){T.target.removeEventListener("dispose",v);for(const y in c){const E=c[y],L=T.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function E1(s,e){function t(){let H=!1;const ue=new bt;let se=null;const ve=new bt(0,0,0,0);return{setMask:function(Te){se!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){H=Te},setClear:function(Te,fe,Fe,Le,mt){mt===!0&&(Te*=Le,fe*=Le,Fe*=Le),ue.set(Te,fe,Fe,Le),ve.equals(ue)===!1&&(s.clearColor(Te,fe,Fe,Le),ve.copy(ue))},reset:function(){H=!1,se=null,ve.set(-1,0,0,0)}}}function n(){let H=!1,ue=!1,se=null,ve=null,Te=null;return{setReversed:function(fe){if(ue!==fe){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ue=fe;const Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(fe){fe?le(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(fe){se!==fe&&!H&&(s.depthMask(fe),se=fe)},setFunc:function(fe){if(ue&&(fe=Ap[fe]),ve!==fe){switch(fe){case Ll:s.depthFunc(s.NEVER);break;case Nl:s.depthFunc(s.ALWAYS);break;case Dl:s.depthFunc(s.LESS);break;case Xr:s.depthFunc(s.LEQUAL);break;case Ul:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Ol:s.depthFunc(s.GREATER);break;case Bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=fe}},setLocked:function(fe){H=fe},setClear:function(fe){Te!==fe&&(Te=fe,ue&&(fe=1-fe),s.clearDepth(fe))},reset:function(){H=!1,se=null,ve=null,Te=null,ue=!1}}}function i(){let H=!1,ue=null,se=null,ve=null,Te=null,fe=null,Fe=null,Le=null,mt=null;return{setTest:function(ut){H||(ut?le(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!H&&(s.stencilMask(ut),ue=ut)},setFunc:function(ut,xn,bn){(se!==ut||ve!==xn||Te!==bn)&&(s.stencilFunc(ut,xn,bn),se=ut,ve=xn,Te=bn)},setOp:function(ut,xn,bn){(fe!==ut||Fe!==xn||Le!==bn)&&(s.stencilOp(ut,xn,bn),fe=ut,Fe=xn,Le=bn)},setLocked:function(ut){H=ut},setClear:function(ut){mt!==ut&&(s.clearStencil(ut),mt=ut)},reset:function(){H=!1,ue=null,se=null,ve=null,Te=null,fe=null,Fe=null,Le=null,mt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f={},u=new WeakMap,_=[],S=null,m=!1,p=null,g=null,A=null,M=null,v=null,T=null,w=null,y=new ke(0,0,0),E=0,L=!1,U=null,B=null,G=null,k=null,X=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ae=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=ae>=1):J.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=ae>=2);let q=null,$={};const ge=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ve=new bt().fromArray(ge),qe=new bt().fromArray(ye);function Xe(H,ue,se,ve){const Te=new Uint8Array(4),fe=s.createTexture();s.bindTexture(H,fe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<se;Fe++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(ue+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return fe}const te={};te[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(Xr),xe(!1),Se(Th),le(s.CULL_FACE),pe(ln);function le(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function Me(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function Ie(H,ue){return f[H]!==ue?(s.bindFramebuffer(H,ue),f[H]=ue,H===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ue),H===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function we(H,ue){let se=_,ve=!1;if(H){se=u.get(ue),se===void 0&&(se=[],u.set(ue,se));const Te=H.textures;if(se.length!==Te.length||se[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Fe=Te.length;fe<Fe;fe++)se[fe]=s.COLOR_ATTACHMENT0+fe;se.length=Te.length,ve=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,ve=!0);ve&&s.drawBuffers(se)}function Ge(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const rt={[Zi]:s.FUNC_ADD,[$f]:s.FUNC_SUBTRACT,[Kf]:s.FUNC_REVERSE_SUBTRACT};rt[Jf]=s.MIN,rt[Zf]=s.MAX;const he={[Il]:s.ZERO,[jf]:s.ONE,[Qf]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[ip]:s.SRC_ALPHA_SATURATE,[gd]:s.DST_COLOR,[md]:s.DST_ALPHA,[ep]:s.ONE_MINUS_SRC_COLOR,[pd]:s.ONE_MINUS_SRC_ALPHA,[np]:s.ONE_MINUS_DST_COLOR,[tp]:s.ONE_MINUS_DST_ALPHA,[sp]:s.CONSTANT_COLOR,[rp]:s.ONE_MINUS_CONSTANT_COLOR,[ap]:s.CONSTANT_ALPHA,[op]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(H,ue,se,ve,Te,fe,Fe,Le,mt,ut){if(H===ln){m===!0&&(Me(s.BLEND),m=!1);return}if(m===!1&&(le(s.BLEND),m=!0),H!==dd){if(H!==p||ut!==L){if((g!==Zi||v!==Zi)&&(s.blendEquation(s.FUNC_ADD),g=Zi,v=Zi),ut)switch(H){case Or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$e("WebGLState: Invalid blending: ",H);break}else switch(H){case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",H);break}A=null,M=null,T=null,w=null,y.set(0,0,0),E=0,p=H,L=ut}return}Te=Te||ue,fe=fe||se,Fe=Fe||ve,(ue!==g||Te!==v)&&(s.blendEquationSeparate(rt[ue],rt[Te]),g=ue,v=Te),(se!==A||ve!==M||fe!==T||Fe!==w)&&(s.blendFuncSeparate(he[se],he[ve],he[fe],he[Fe]),A=se,M=ve,T=fe,w=Fe),(Le.equals(y)===!1||mt!==E)&&(s.blendColor(Le.r,Le.g,Le.b,mt),y.copy(Le),E=mt),p=H,L=!1}function _e(H,ue){H.side===Qt?Me(s.CULL_FACE):le(s.CULL_FACE);let se=H.side===mn;ue&&(se=!se),xe(se),H.blending===Or&&H.transparent===!1?pe(ln):pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const ve=H.stencilWrite;o.setTest(ve),ve&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function xe(H){U!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),U=H)}function Se(H){H!==qf?(le(s.CULL_FACE),H!==B&&(H===Th?s.cullFace(s.BACK):H===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),B=H}function Oe(H){H!==G&&(Q&&s.lineWidth(H),G=H)}function Ue(H,ue,se){H?(le(s.POLYGON_OFFSET_FILL),(k!==ue||X!==se)&&(k=ue,X=se,a.getReversed()&&(ue=-ue),s.polygonOffset(ue,se))):Me(s.POLYGON_OFFSET_FILL)}function We(H){H?le(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Ye(H){H===void 0&&(H=s.TEXTURE0+ee-1),q!==H&&(s.activeTexture(H),q=H)}function V(H,ue,se){se===void 0&&(q===null?se=s.TEXTURE0+ee-1:se=q);let ve=$[se];ve===void 0&&(ve={type:void 0,texture:void 0},$[se]=ve),(ve.type!==H||ve.texture!==ue)&&(q!==se&&(s.activeTexture(se),q=se),s.bindTexture(H,ue||te[H]),ve.type=H,ve.texture=ue)}function at(){const H=$[q];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function et(){try{s.compressedTexImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function b(){try{s.compressedTexImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function x(){try{s.texSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function R(){try{s.texSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function C(){try{s.compressedTexSubImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function I(){try{s.compressedTexSubImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function F(){try{s.texStorage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function O(){try{s.texStorage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function N(){try{s.texImage2D(...arguments)}catch(H){$e("WebGLState:",H)}}function z(){try{s.texImage3D(...arguments)}catch(H){$e("WebGLState:",H)}}function K(H){return d[H]!==void 0?d[H]:s.getParameter(H)}function ie(H,ue){d[H]!==ue&&(s.pixelStorei(H,ue),d[H]=ue)}function re(H){Ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function ce(H){qe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),qe.copy(H))}function me(H,ue){let se=c.get(ue);se===void 0&&(se=new WeakMap,c.set(ue,se));let ve=se.get(H);ve===void 0&&(ve=s.getUniformBlockIndex(ue,H.name),se.set(H,ve))}function Y(H,ue){const ve=c.get(ue).get(H);l.get(ue)!==ve&&(s.uniformBlockBinding(ue,ve,H.__bindingPointIndex),l.set(ue,ve))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,$={},f={},u=new WeakMap,_=[],S=null,m=!1,p=null,g=null,A=null,M=null,v=null,T=null,w=null,y=new ke(0,0,0),E=0,L=!1,U=null,B=null,G=null,k=null,X=null,Ve.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Me,bindFramebuffer:Ie,drawBuffers:we,useProgram:Ge,setBlending:pe,setMaterial:_e,setFlipSided:xe,setCullFace:Se,setLineWidth:Oe,setPolygonOffset:Ue,setScissorTest:We,activeTexture:Ye,bindTexture:V,unbindTexture:at,compressedTexImage2D:et,compressedTexImage3D:b,texImage2D:N,texImage3D:z,pixelStorei:ie,getParameter:K,updateUBOMapping:me,uniformBlockBinding:Y,texStorage2D:F,texStorage3D:O,texSubImage2D:x,texSubImage3D:R,compressedTexSubImage2D:C,compressedTexSubImage3D:I,scissor:re,viewport:ce,reset:oe}}function A1(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,x){return _?new OffscreenCanvas(b,x):Zr("canvas")}function m(b,x,R){let C=1;const I=et(b);if((I.width>R||I.height>R)&&(C=R/Math.max(I.width,I.height)),C<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const F=Math.floor(C*I.width),O=Math.floor(C*I.height);f===void 0&&(f=S(F,O));const N=x?S(F,O):f;return N.width=F,N.height=O,N.getContext("2d").drawImage(b,0,0,F,O),ze("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+F+"x"+O+")."),N}else return"data"in b&&ze("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),b;return b}function p(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(b,x,R,C,I,F=!1){if(b!==null){if(s[b]!==void 0)return s[b];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let O;C&&(O=e.get("EXT_texture_norm16"),O||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=x;if(x===s.RED&&(R===s.FLOAT&&(N=s.R32F),R===s.HALF_FLOAT&&(N=s.R16F),R===s.UNSIGNED_BYTE&&(N=s.R8),R===s.UNSIGNED_SHORT&&O&&(N=O.R16_EXT),R===s.SHORT&&O&&(N=O.R16_SNORM_EXT)),x===s.RED_INTEGER&&(R===s.UNSIGNED_BYTE&&(N=s.R8UI),R===s.UNSIGNED_SHORT&&(N=s.R16UI),R===s.UNSIGNED_INT&&(N=s.R32UI),R===s.BYTE&&(N=s.R8I),R===s.SHORT&&(N=s.R16I),R===s.INT&&(N=s.R32I)),x===s.RG&&(R===s.FLOAT&&(N=s.RG32F),R===s.HALF_FLOAT&&(N=s.RG16F),R===s.UNSIGNED_BYTE&&(N=s.RG8),R===s.UNSIGNED_SHORT&&O&&(N=O.RG16_EXT),R===s.SHORT&&O&&(N=O.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(R===s.UNSIGNED_BYTE&&(N=s.RG8UI),R===s.UNSIGNED_SHORT&&(N=s.RG16UI),R===s.UNSIGNED_INT&&(N=s.RG32UI),R===s.BYTE&&(N=s.RG8I),R===s.SHORT&&(N=s.RG16I),R===s.INT&&(N=s.RG32I)),x===s.RGB_INTEGER&&(R===s.UNSIGNED_BYTE&&(N=s.RGB8UI),R===s.UNSIGNED_SHORT&&(N=s.RGB16UI),R===s.UNSIGNED_INT&&(N=s.RGB32UI),R===s.BYTE&&(N=s.RGB8I),R===s.SHORT&&(N=s.RGB16I),R===s.INT&&(N=s.RGB32I)),x===s.RGBA_INTEGER&&(R===s.UNSIGNED_BYTE&&(N=s.RGBA8UI),R===s.UNSIGNED_SHORT&&(N=s.RGBA16UI),R===s.UNSIGNED_INT&&(N=s.RGBA32UI),R===s.BYTE&&(N=s.RGBA8I),R===s.SHORT&&(N=s.RGBA16I),R===s.INT&&(N=s.RGBA32I)),x===s.RGB&&(R===s.UNSIGNED_SHORT&&O&&(N=O.RGB16_EXT),R===s.SHORT&&O&&(N=O.RGB16_SNORM_EXT),R===s.UNSIGNED_INT_5_9_9_9_REV&&(N=s.RGB9_E5),R===s.UNSIGNED_INT_10F_11F_11F_REV&&(N=s.R11F_G11F_B10F)),x===s.RGBA){const z=F?mo:ot.getTransfer(I);R===s.FLOAT&&(N=s.RGBA32F),R===s.HALF_FLOAT&&(N=s.RGBA16F),R===s.UNSIGNED_BYTE&&(N=z===_t?s.SRGB8_ALPHA8:s.RGBA8),R===s.UNSIGNED_SHORT&&O&&(N=O.RGBA16_EXT),R===s.SHORT&&O&&(N=O.RGBA16_SNORM_EXT),R===s.UNSIGNED_SHORT_4_4_4_4&&(N=s.RGBA4),R===s.UNSIGNED_SHORT_5_5_5_1&&(N=s.RGB5_A1)}return(N===s.R16F||N===s.R32F||N===s.RG16F||N===s.RG32F||N===s.RGBA16F||N===s.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function v(b,x){let R;return b?x===null||x===hi||x===tr?R=s.DEPTH24_STENCIL8:x===Rn?R=s.DEPTH32F_STENCIL8:x===Yr&&(R=s.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===tr?R=s.DEPTH_COMPONENT24:x===Rn?R=s.DEPTH_COMPONENT32F:x===Yr&&(R=s.DEPTH_COMPONENT16),R}function T(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(b){const x=b.target;x.removeEventListener("dispose",y),U(x)}function E(b){const x=n.get(b);if(x.__webglInit===void 0)return;const R=b.source,C=u.get(R);if(C){const I=C[x.__cacheKey];I.usedTimes--,I.usedTimes===0&&L(b),Object.keys(C).length===0&&u.delete(R)}n.remove(b)}function L(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const R=b.source,C=u.get(R);delete C[x.__cacheKey],a.memory.textures--}function U(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(x.__webglFramebuffer[C]))for(let I=0;I<x.__webglFramebuffer[C].length;I++)s.deleteFramebuffer(x.__webglFramebuffer[C][I]);else s.deleteFramebuffer(x.__webglFramebuffer[C]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[C])}else{if(Array.isArray(x.__webglFramebuffer))for(let C=0;C<x.__webglFramebuffer.length;C++)s.deleteFramebuffer(x.__webglFramebuffer[C]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let C=0;C<x.__webglColorRenderbuffer.length;C++)x.__webglColorRenderbuffer[C]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[C]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const R=b.textures;for(let C=0,I=R.length;C<I;C++){const F=n.get(R[C]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(R[C])}n.remove(b)}let B=0;function G(){B=0}function k(){return B}function X(b){B=b}function ee(){const b=B;return b>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,b}function Q(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function ae(b,x){const R=n.get(b);if(b.isVideoTexture&&V(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&R.__version!==b.version){const C=b.image;if(C===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(R,b,x);return}}else b.isExternalTexture&&(R.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,R.__webglTexture,s.TEXTURE0+x)}function J(b,x){const R=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&R.__version!==b.version){Me(R,b,x);return}else b.isExternalTexture&&(R.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,R.__webglTexture,s.TEXTURE0+x)}function q(b,x){const R=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&R.__version!==b.version){Me(R,b,x);return}t.bindTexture(s.TEXTURE_3D,R.__webglTexture,s.TEXTURE0+x)}function $(b,x){const R=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&R.__version!==b.version){Ie(R,b,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+x)}const ge={[Zn]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},ye={[Bt]:s.NEAREST,[vd]:s.NEAREST_MIPMAP_NEAREST,[Lr]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[Ja]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},Ve={[_p]:s.NEVER,[Sp]:s.ALWAYS,[xp]:s.LESS,[$c]:s.LEQUAL,[vp]:s.EQUAL,[Kc]:s.GEQUAL,[yp]:s.GREATER,[Mp]:s.NOTEQUAL};function qe(b,x){if(x.type===Rn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===Ja||x.magFilter===Lr||x.magFilter===Ei||x.minFilter===qt||x.minFilter===Ja||x.minFilter===Lr||x.minFilter===Ei)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ge[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ge[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ge[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ye[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ye[x.minFilter]),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Lr&&x.minFilter!==Ei||x.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(b,x){let R=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const C=x.source;let I=u.get(C);I===void 0&&(I={},u.set(C,I));const F=Q(x);if(F!==b.__cacheKey){I[F]===void 0&&(I[F]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,R=!0),I[F].usedTimes++;const O=I[b.__cacheKey];O!==void 0&&(I[b.__cacheKey].usedTimes--,O.usedTimes===0&&L(x)),b.__cacheKey=F,b.__webglTexture=I[F].texture}return R}function te(b,x,R){return Math.floor(Math.floor(b/R)/x)}function le(b,x,R,C){const F=b.updateRanges;if(F.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,R,C,x.data);else{F.sort((ie,re)=>ie.start-re.start);let O=0;for(let ie=1;ie<F.length;ie++){const re=F[O],ce=F[ie],me=re.start+re.count,Y=te(ce.start,x.width,4),oe=te(re.start,x.width,4);ce.start<=me+1&&Y===oe&&te(ce.start+ce.count-1,x.width,4)===Y?re.count=Math.max(re.count,ce.start+ce.count-re.start):(++O,F[O]=ce)}F.length=O+1;const N=t.getParameter(s.UNPACK_ROW_LENGTH),z=t.getParameter(s.UNPACK_SKIP_PIXELS),K=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let ie=0,re=F.length;ie<re;ie++){const ce=F[ie],me=Math.floor(ce.start/4),Y=Math.ceil(ce.count/4),oe=me%x.width,H=Math.floor(me/x.width),ue=Y,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,oe,H,ue,se,R,C,x.data)}b.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,N),t.pixelStorei(s.UNPACK_SKIP_PIXELS,z),t.pixelStorei(s.UNPACK_SKIP_ROWS,K)}}function Me(b,x,R){let C=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(C=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(C=s.TEXTURE_3D);const I=Xe(b,x),F=x.source;t.bindTexture(C,b.__webglTexture,s.TEXTURE0+R);const O=n.get(F);if(F.version!==O.__version||I===!0){if(t.activeTexture(s.TEXTURE0+R),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const se=ot.getPrimaries(ot.workingColorSpace),ve=x.colorSpace===ji?null:ot.getPrimaries(x.colorSpace),Te=x.colorSpace===ji||se===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let z=m(x.image,!1,i.maxTextureSize);z=at(x,z);const K=r.convert(x.format,x.colorSpace),ie=r.convert(x.type);let re=M(x.internalFormat,K,ie,x.normalized,x.colorSpace,x.isVideoTexture);qe(C,x);let ce;const me=x.mipmaps,Y=x.isVideoTexture!==!0,oe=O.__version===void 0||I===!0,H=F.dataReady,ue=T(x,z);if(x.isDepthTexture)re=v(x.format===es,x.type),oe&&(Y?t.texStorage2D(s.TEXTURE_2D,1,re,z.width,z.height):t.texImage2D(s.TEXTURE_2D,0,re,z.width,z.height,0,K,ie,null));else if(x.isDataTexture)if(me.length>0){Y&&oe&&t.texStorage2D(s.TEXTURE_2D,ue,re,me[0].width,me[0].height);for(let se=0,ve=me.length;se<ve;se++)ce=me[se],Y?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ce.width,ce.height,K,ie,ce.data):t.texImage2D(s.TEXTURE_2D,se,re,ce.width,ce.height,0,K,ie,ce.data);x.generateMipmaps=!1}else Y?(oe&&t.texStorage2D(s.TEXTURE_2D,ue,re,z.width,z.height),H&&le(x,z,K,ie)):t.texImage2D(s.TEXTURE_2D,0,re,z.width,z.height,0,K,ie,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Y&&oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,re,me[0].width,me[0].height,z.depth);for(let se=0,ve=me.length;se<ve;se++)if(ce=me[se],x.format!==zn)if(K!==null)if(Y){if(H)if(x.layerUpdates.size>0){const Te=Tu(ce.width,ce.height,x.format,x.type);for(const fe of x.layerUpdates){const Fe=ce.data.subarray(fe*Te/ce.data.BYTES_PER_ELEMENT,(fe+1)*Te/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,fe,ce.width,ce.height,1,K,Fe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ce.width,ce.height,z.depth,K,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,re,ce.width,ce.height,z.depth,0,ce.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ce.width,ce.height,z.depth,K,ie,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,re,ce.width,ce.height,z.depth,0,K,ie,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Y&&oe&&t.texStorage2D(s.TEXTURE_2D,ue,re,me[0].width,me[0].height);for(let se=0,ve=me.length;se<ve;se++)ce=me[se],x.format!==zn?K!==null?Y?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ce.width,ce.height,K,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,se,re,ce.width,ce.height,0,ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ce.width,ce.height,K,ie,ce.data):t.texImage2D(s.TEXTURE_2D,se,re,ce.width,ce.height,0,K,ie,ce.data)}else if(x.isDataArrayTexture)if(Y){if(oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,re,z.width,z.height,z.depth),H)if(x.layerUpdates.size>0){const se=Tu(z.width,z.height,x.format,x.type);for(const ve of x.layerUpdates){const Te=z.data.subarray(ve*se/z.data.BYTES_PER_ELEMENT,(ve+1)*se/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,z.width,z.height,1,K,ie,Te)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,K,ie,z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,re,z.width,z.height,z.depth,0,K,ie,z.data);else if(x.isData3DTexture)Y?(oe&&t.texStorage3D(s.TEXTURE_3D,ue,re,z.width,z.height,z.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,K,ie,z.data)):t.texImage3D(s.TEXTURE_3D,0,re,z.width,z.height,z.depth,0,K,ie,z.data);else if(x.isFramebufferTexture){if(oe)if(Y)t.texStorage2D(s.TEXTURE_2D,ue,re,z.width,z.height);else{let se=z.width,ve=z.height;for(let Te=0;Te<ue;Te++)t.texImage2D(s.TEXTURE_2D,Te,re,se,ve,0,K,ie,null),se>>=1,ve>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),z.parentNode!==se){se.appendChild(z),d.add(x),se.onpaint=ve=>{const Te=ve.changedElements;for(const fe of d)Te.includes(fe.image)&&(fe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,z);else{const Te=s.RGBA,fe=s.RGBA,Fe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,fe,Fe,z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(me.length>0){if(Y&&oe){const se=et(me[0]);t.texStorage2D(s.TEXTURE_2D,ue,re,se.width,se.height)}for(let se=0,ve=me.length;se<ve;se++)ce=me[se],Y?H&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,K,ie,ce):t.texImage2D(s.TEXTURE_2D,se,re,K,ie,ce);x.generateMipmaps=!1}else if(Y){if(oe){const se=et(z);t.texStorage2D(s.TEXTURE_2D,ue,re,se.width,se.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,K,ie,z)}else t.texImage2D(s.TEXTURE_2D,0,re,K,ie,z);p(x)&&g(C),O.__version=F.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ie(b,x,R){if(x.image.length!==6)return;const C=Xe(b,x),I=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+R);const F=n.get(I);if(I.version!==F.__version||C===!0){t.activeTexture(s.TEXTURE0+R);const O=ot.getPrimaries(ot.workingColorSpace),N=x.colorSpace===ji?null:ot.getPrimaries(x.colorSpace),z=x.colorSpace===ji||O===N?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const K=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,re=[];for(let fe=0;fe<6;fe++)!K&&!ie?re[fe]=m(x.image[fe],!0,i.maxCubemapSize):re[fe]=ie?x.image[fe].image:x.image[fe],re[fe]=at(x,re[fe]);const ce=re[0],me=r.convert(x.format,x.colorSpace),Y=r.convert(x.type),oe=M(x.internalFormat,me,Y,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,ue=F.__version===void 0||C===!0,se=I.dataReady;let ve=T(x,ce);qe(s.TEXTURE_CUBE_MAP,x);let Te;if(K){H&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,oe,ce.width,ce.height);for(let fe=0;fe<6;fe++){Te=re[fe].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];x.format!==zn?me!==null?H?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Le.width,Le.height,me,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,oe,Le.width,Le.height,0,Le.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,Le.width,Le.height,me,Y,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,oe,Le.width,Le.height,0,me,Y,Le.data)}}}else{if(Te=x.mipmaps,H&&ue){Te.length>0&&ve++;const fe=et(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,oe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ie){H?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,re[fe].width,re[fe].height,me,Y,re[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,oe,re[fe].width,re[fe].height,0,me,Y,re[fe].data);for(let Fe=0;Fe<Te.length;Fe++){const mt=Te[Fe].image[fe].image;H?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,mt.width,mt.height,me,Y,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,oe,mt.width,mt.height,0,me,Y,mt.data)}}else{H?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,me,Y,re[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,oe,me,Y,re[fe]);for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];H?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,me,Y,Le.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,oe,me,Y,Le.image[fe])}}}p(x)&&g(s.TEXTURE_CUBE_MAP),F.__version=I.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function we(b,x,R,C,I,F){const O=r.convert(R.format,R.colorSpace),N=r.convert(R.type),z=M(R.internalFormat,O,N,R.normalized,R.colorSpace),K=n.get(x),ie=n.get(R);if(ie.__renderTarget=x,!K.__hasExternalTextures){const re=Math.max(1,x.width>>F),ce=Math.max(1,x.height>>F);I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?t.texImage3D(I,F,z,re,ce,x.depth,0,O,N,null):t.texImage2D(I,F,z,re,ce,0,O,N,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),Ye(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,C,I,ie.__webglTexture,0,We(x)):(I===s.TEXTURE_2D||I>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,C,I,ie.__webglTexture,F),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(b,x,R){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer){const C=x.depthTexture,I=C&&C.isDepthTexture?C.type:null,F=v(x.stencilBuffer,I),O=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(x),F,x.width,x.height):R?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(x),F,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,F,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,O,s.RENDERBUFFER,b)}else{const C=x.textures;for(let I=0;I<C.length;I++){const F=C[I],O=r.convert(F.format,F.colorSpace),N=r.convert(F.type),z=M(F.internalFormat,O,N,F.normalized,F.colorSpace);Ye(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(x),z,x.width,x.height):R?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(x),z,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,z,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(b,x,R){const C=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const I=n.get(x.depthTexture);if(I.__renderTarget=x,(!I.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),C){if(I.__webglInit===void 0&&(I.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),I.__webglTexture===void 0){I.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture),qe(s.TEXTURE_CUBE_MAP,x.depthTexture);const K=r.convert(x.depthTexture.format),ie=r.convert(x.depthTexture.type);let re;x.depthTexture.format===Ui?re=s.DEPTH_COMPONENT24:x.depthTexture.format===es&&(re=s.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,re,x.width,x.height,0,K,ie,null)}}else ae(x.depthTexture,0);const F=I.__webglTexture,O=We(x),N=C?s.TEXTURE_CUBE_MAP_POSITIVE_X+R:s.TEXTURE_2D,z=x.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ui)Ye(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,N,F,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,z,N,F,0);else if(x.depthTexture.format===es)Ye(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,N,F,0,O):s.framebufferTexture2D(s.FRAMEBUFFER,z,N,F,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(b){const x=n.get(b),R=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const C=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),C){const I=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,C.removeEventListener("dispose",I)};C.addEventListener("dispose",I),x.__depthDisposeCallback=I}x.__boundDepthTexture=C}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(R)for(let C=0;C<6;C++)rt(x.__webglFramebuffer[C],b,C);else{const C=b.texture.mipmaps;C&&C.length>0?rt(x.__webglFramebuffer[0],b,0):rt(x.__webglFramebuffer,b,0)}else if(R){x.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[C]),x.__webglDepthbuffer[C]===void 0)x.__webglDepthbuffer[C]=s.createRenderbuffer(),Ge(x.__webglDepthbuffer[C],b,!1);else{const I=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer[C];s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,F)}}else{const C=b.texture.mipmaps;if(C&&C.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ge(x.__webglDepthbuffer,b,!1);else{const I=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,F)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(b,x,R){const C=n.get(b);x!==void 0&&we(C.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),R!==void 0&&he(b)}function _e(b){const x=b.texture,R=n.get(b),C=n.get(x);b.addEventListener("dispose",y);const I=b.textures,F=b.isWebGLCubeRenderTarget===!0,O=I.length>1;if(O||(C.__webglTexture===void 0&&(C.__webglTexture=s.createTexture()),C.__version=x.version,a.memory.textures++),F){R.__webglFramebuffer=[];for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[N]=[];for(let z=0;z<x.mipmaps.length;z++)R.__webglFramebuffer[N][z]=s.createFramebuffer()}else R.__webglFramebuffer[N]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let N=0;N<x.mipmaps.length;N++)R.__webglFramebuffer[N]=s.createFramebuffer()}else R.__webglFramebuffer=s.createFramebuffer();if(O)for(let N=0,z=I.length;N<z;N++){const K=n.get(I[N]);K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Ye(b)===!1){R.__webglMultisampledFramebuffer=s.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let N=0;N<I.length;N++){const z=I[N];R.__webglColorRenderbuffer[N]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,R.__webglColorRenderbuffer[N]);const K=r.convert(z.format,z.colorSpace),ie=r.convert(z.type),re=M(z.internalFormat,K,ie,z.normalized,z.colorSpace,b.isXRRenderTarget===!0),ce=We(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,re,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,R.__webglColorRenderbuffer[N])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(R.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(R.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(F){t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture),qe(s.TEXTURE_CUBE_MAP,x);for(let N=0;N<6;N++)if(x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)we(R.__webglFramebuffer[N][z],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,z);else we(R.__webglFramebuffer[N],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(x)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let N=0,z=I.length;N<z;N++){const K=I[N],ie=n.get(K);let re=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,ie.__webglTexture),qe(re,K),we(R.__webglFramebuffer,b,K,s.COLOR_ATTACHMENT0+N,re,0),p(K)&&g(re)}t.unbindTexture()}else{let N=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(N=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(N,C.__webglTexture),qe(N,x),x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)we(R.__webglFramebuffer[z],b,x,s.COLOR_ATTACHMENT0,N,z);else we(R.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,N,0);p(x)&&g(N),t.unbindTexture()}b.depthBuffer&&he(b)}function xe(b){const x=b.textures;for(let R=0,C=x.length;R<C;R++){const I=x[R];if(p(I)){const F=A(b),O=n.get(I).__webglTexture;t.bindTexture(F,O),g(F),t.unbindTexture()}}}const Se=[],Oe=[];function Ue(b){if(b.samples>0){if(Ye(b)===!1){const x=b.textures,R=b.width,C=b.height;let I=s.COLOR_BUFFER_BIT;const F=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=n.get(b),N=x.length>1;if(N)for(let K=0;K<x.length;K++)t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,O.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);const z=b.texture.mipmaps;z&&z.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let K=0;K<x.length;K++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(I|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(I|=s.STENCIL_BUFFER_BIT)),N){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const ie=n.get(x[K]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,R,C,0,0,R,C,I,s.NEAREST),l===!0&&(Se.length=0,Oe.length=0,Se.push(s.COLOR_ATTACHMENT0+K),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Se.push(F),Oe.push(F),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),N)for(let K=0;K<x.length;K++){t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const ie=n.get(x[K]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,O.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const x=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function We(b){return Math.min(i.maxSamples,b.samples)}function Ye(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function V(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function at(b,x){const R=b.colorSpace,C=b.format,I=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||R!==Ln&&R!==ji&&(ot.getTransfer(R)===_t?(C!==zn||I!==An)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",R)),x}function et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=X,this.setTexture2D=ae,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=pe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R1(s,e){function t(n,i=ji){let r;const a=ot.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===yd)return s.BYTE;if(n===Md)return s.SHORT;if(n===Yr)return s.UNSIGNED_SHORT;if(n===Hc)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===tn)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===wd)return s.RGB;if(n===zn)return s.RGBA;if(n===Ui)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===wo)return s.RED;if(n===Wc)return s.RED_INTEGER;if(n===Ss)return s.RG;if(n===Xc)return s.RG_INTEGER;if(n===qc)return s.RGBA_INTEGER;if(n===Za||n===ja||n===Qa||n===eo)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===zl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===ho||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Wl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ql)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ho)return r.COMPRESSED_RG11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Jl||n===Zl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===hc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===fc||n===uo||n===pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:C1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends ss{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,_=null;const S=typeof XRWebGLBinding<"u",m=new I1,p={},g=t.getContextAttributes();let A=null,M=null;const v=[],T=[],w=new de;let y=null,E=null;const L=new pn;L.viewport=new bt;const U=new pn;U.viewport=new bt;const B=[L,U],G=new Tm;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=v[te];return le===void 0&&(le=new qo,v[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=v[te];return le===void 0&&(le=new qo,v[te]=le),le.getGripSpace()},this.getHand=function(te){let le=v[te];return le===void 0&&(le=new qo,v[te]=le),le.getHandSpace()};function ee(te){const le=T.indexOf(te.inputSource);if(le===-1)return;const Me=v[le];Me!==void 0&&(Me.update(te.inputSource,te.frame,c||a),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",ae);for(let te=0;te<v.length;te++){const le=T[te];le!==null&&(T[te]=null,v[te].disconnect(le))}k=null,X=null,m.reset();for(const te in p)delete p[te];if(e.setRenderTarget(A),u=null,f=null,d=null,i=null,M=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),E!==null){const te=E.camera;te.fov=E.fov,te.zoom=E.zoom,te.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ie=null,we=null;g.depth&&(we=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=g.stencil?es:Ui,Ie=g.stencil?tr:hi);const Ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new en(f.textureWidth,f.textureHeight,{format:zn,type:An,depthTexture:new ir(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new en(u.framebufferWidth,u.framebufferHeight,{format:zn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(te){for(let le=0;le<te.removed.length;le++){const Me=te.removed[le],Ie=T.indexOf(Me);Ie>=0&&(T[Ie]=null,v[Ie].disconnect(Me))}for(let le=0;le<te.added.length;le++){const Me=te.added[le];let Ie=T.indexOf(Me);if(Ie===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=T.length){T.push(Me),Ie=Ge;break}else if(T[Ge]===null){T[Ge]=Me,Ie=Ge;break}if(Ie===-1)break}const we=v[Ie];we&&we.connect(Me)}}const J=new D,q=new D;function $(te,le,Me){J.setFromMatrixPosition(le.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const Ie=J.distanceTo(q),we=le.projectionMatrix.elements,Ge=Me.projectionMatrix.elements,rt=we[14]/(we[10]-1),he=we[14]/(we[10]+1),pe=(we[9]+1)/we[5],_e=(we[9]-1)/we[5],xe=(we[8]-1)/we[0],Se=(Ge[8]+1)/Ge[0],Oe=rt*xe,Ue=rt*Se,We=Ie/(-xe+Se),Ye=We*-xe;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ye),te.translateZ(We),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),we[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const V=rt+We,at=he+We,et=Oe-Ye,b=Ue+(Ie-Ye),x=pe*he/at*V,R=_e*he/at*V;te.projectionMatrix.makePerspective(et,b,x,R,V,at),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ge(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let le=te.near,Me=te.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),G.near=U.near=L.near=le,G.far=U.far=L.far=Me,(k!==G.near||X!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,X=G.far),G.layers.mask=te.layers.mask|6,L.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;const Ie=te.parent,we=G.cameras;ge(G,Ie);for(let Ge=0;Ge<we.length;Ge++)ge(we[Ge],Ie);we.length===2?$(G,L,U):G.projectionMatrix.copy(L.projectionMatrix),E===null&&te.isPerspectiveCamera&&(E={camera:te,fov:te.fov,zoom:te.zoom}),ye(te,G,Ie)};function ye(te,le,Me){Me===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=nr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(te){return p[te]};let Ve=null;function qe(te,le){if(h=le.getViewerPose(c||a),_=le,h!==null){const Me=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let Ie=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Ie=!0);for(let he=0;he<Me.length;he++){const pe=Me[he];let _e=null;if(u!==null)_e=u.getViewport(pe);else{const Se=d.getViewSubImage(f,pe);_e=Se.viewport,he===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let xe=B[he];xe===void 0&&(xe=new pn,xe.layers.enable(he),xe.viewport=new bt,B[he]=xe),xe.matrix.fromArray(pe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(pe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(_e.x,_e.y,_e.width,_e.height),he===0&&(G.matrix.copy(xe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ie===!0&&G.cameras.push(xe)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const he=d.getDepthInformation(Me[0]);he&&he.isValid&&he.texture&&m.init(he,i.renderState)}if(we&&we.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let he=0;he<Me.length;he++){const pe=Me[he].camera;if(pe){let _e=p[pe];_e||(_e=new zd,p[pe]=_e);const xe=d.getCameraImage(pe);_e.sourceTexture=xe}}}}for(let Me=0;Me<v.length;Me++){const Ie=T[Me],we=v[Me];Ie!==null&&we!==void 0&&we.update(Ie,le,c||a)}Ve&&Ve(te,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Xe=new rf;Xe.setAnimationLoop(qe),this.setAnimationLoop=function(te){Ve=te},this.dispose=function(){}}}const N1=new Qe,df=new tt;df.set(-1,0,0,0,1,0,0,0,1);function D1(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,g,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,g,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=e.get(p),A=g.envMap,M=g.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(N1.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(df),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U1(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const T=v.program;n.uniformBlockBinding(M,T)}function c(M,v){let T=i[M.id];T===void 0&&(m(M),T=h(M),i[M.id]=T,M.addEventListener("dispose",g));const w=v.program;n.updateUBOMapping(M,w);const y=e.render.frame;r[M.id]!==y&&(f(M),r[M.id]=y)}function h(M){const v=d();M.__bindingPointIndex=v;const T=s.createBuffer(),w=M.__size,y=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,w,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=i[M.id],T=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let y=0,E=T.length;y<E;y++){const L=T[y];if(Array.isArray(L))for(let U=0,B=L.length;U<B;U++)u(L[U],y,U,w);else u(L,y,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,v,T,w){if(S(M,v,T,w)===!0){const y=M.__offset,E=M.value;if(Array.isArray(E)){let L=0;for(let U=0;U<E.length;U++){const B=E[U],G=p(B);_(B,M.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,M.__data)}}function _(M,v,T){typeof M=="number"||typeof M=="boolean"?v[0]=M:M.isMatrix3?(v[0]=M.elements[0],v[1]=M.elements[1],v[2]=M.elements[2],v[3]=0,v[4]=M.elements[3],v[5]=M.elements[4],v[6]=M.elements[5],v[7]=0,v[8]=M.elements[6],v[9]=M.elements[7],v[10]=M.elements[8],v[11]=0):ArrayBuffer.isView(M)?v.set(new M.constructor(M.buffer,M.byteOffset,v.length)):M.toArray(v,T)}function S(M,v,T,w){const y=M.value,E=v+"_"+T;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{const L=w[E];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(M){const v=M.uniforms;let T=0;const w=16;for(let E=0,L=v.length;E<L;E++){const U=Array.isArray(v[E])?v[E]:[v[E]];for(let B=0,G=U.length;B<G;B++){const k=U[B],X=Array.isArray(k.value)?k.value:[k.value];for(let ee=0,Q=X.length;ee<Q;ee++){const ae=X[ee],J=p(ae),q=T%w,$=q%J.boundary,ge=q+$;T+=$,ge!==0&&w-ge<J.storage&&(T+=w-ge),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=J.storage}}}const y=T%w;return y>0&&(T+=w-y),M.__size=T,M.__cache={},this}function p(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function A(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:A}}const F1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function O1(){return ti===null&&(ti=new Eo(F1,16,16,Ss,tn),ti.name="DFG_LUT",ti.minFilter=qt,ti.magFilter=qt,ti.wrapS=ri,ti.wrapT=ri,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Yu{constructor(e={}){const{canvas:t=wp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=An}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=u,m=new Set([qc,Xc,Wc]),p=new Set([An,hi,Yr,tr,Vc,Gc]),g=new Uint32Array(4),A=new Int32Array(4),M=new D;let v=null,T=null;const w=[],y=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,B=null,G=null,k=null,X=null;this._outputColorSpace=It;let ee=0,Q=0,ae=null,J=-1,q=null;const $=new bt,ge=new bt;let ye=null;const Ve=new ke(0);let qe=0,Xe=t.width,te=t.height,le=1,Me=null,Ie=null;const we=new bt(0,0,Xe,te),Ge=new bt(0,0,Xe,te);let rt=!1;const he=new nh;let pe=!1,_e=!1;const xe=new Qe,Se=new D,Oe=new bt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Ye(){return ae===null?le:1}let V=n;function at(P,W){return t.getContext(P,W)}let et,b,x,R,C,I,F,O,N,z,K,ie,re,ce,me,Y,oe,H,ue,se,ve,Te,fe;try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",xn,!1),V===null){const W="webgl2";if(V=at(W,P),V===null)throw at(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(P){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),$e("WebGLRenderer: "+P.message),P}function Fe(){et=new Ox(V),et.init(),ve=new R1(V,et),b=new Ax(V,et,e,ve),x=new E1(V,et),b.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),G=V.createFramebuffer(),k=V.createFramebuffer(),X=V.createFramebuffer(),R=new zx(V),C=new d1,I=new A1(V,et,x,C,b,ve,R),F=new Fx(L),O=new Vm(V),Te=new wx(V,O),N=new Bx(V,O,R,Te),z=new Vx(V,N,O,Te,R),H=new Hx(V,b,I),me=new Rx(C),K=new u1(L,F,et,b,Te,me),ie=new D1(L,C),re=new p1,ce=new y1(et),oe=new Tx(L,F,x,z,_,l),Y=new w1(L,z,b),fe=new U1(V,R,b,x),ue=new Ex(V,et,R),se=new kx(V,et,R),R.programs=K.programs,L.capabilities=b,L.extensions=et,L.properties=C,L.renderLists=re,L.shadowMap=Y,L.state=x,L.info=R}S!==An&&(E=new Wx(S,t.width,t.height,o,i,r));const Le=new L1(L,V);this.xr=Le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(Xe,te,!1))},this.getSize=function(P){return P.set(Xe,te)},this.setSize=function(P,W,ne=!0){if(Le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=P,te=W,t.width=Math.floor(P*le),t.height=Math.floor(W*le),ne===!0&&(t.style.width=P+"px",t.style.height=W+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(Xe*le,te*le).floor()},this.setDrawingBufferSize=function(P,W,ne){Xe=P,te=W,le=ne,t.width=Math.floor(P*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(S===An){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(we)},this.setViewport=function(P,W,ne,Z){P.isVector4?we.set(P.x,P.y,P.z,P.w):we.set(P,W,ne,Z),x.viewport($.copy(we).multiplyScalar(le).round())},this.getScissor=function(P){return P.copy(Ge)},this.setScissor=function(P,W,ne,Z){P.isVector4?Ge.set(P.x,P.y,P.z,P.w):Ge.set(P,W,ne,Z),x.scissor(ge.copy(Ge).multiplyScalar(le).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(P){x.setScissorTest(rt=P)},this.setOpaqueSort=function(P){Me=P},this.setTransparentSort=function(P){Ie=P},this.getClearColor=function(P){return P.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,ne=!0){let Z=0;if(P){let j=!1;if(ae!==null){const Re=ae.texture.format;j=m.has(Re)}if(j){const Re=ae.texture.type,Pe=p.has(Re),Ae=oe.getClearColor(),Ne=oe.getClearAlpha(),Be=Ae.r,nt=Ae.g,ct=Ae.b;Pe?(g[0]=Be,g[1]=nt,g[2]=ct,g[3]=Ne,V.clearBufferuiv(V.COLOR,0,g)):(A[0]=Be,A[1]=nt,A[2]=ct,A[3]=Ne,V.clearBufferiv(V.COLOR,0,A))}else Z|=V.COLOR_BUFFER_BIT}W&&(Z|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),B=P},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),oe.dispose(),re.dispose(),ce.dispose(),C.dispose(),F.dispose(),z.dispose(),Te.dispose(),fe.dispose(),K.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",mh),Le.removeEventListener("sessionend",gh),rs.stop()};function mt(P){P.preventDefault(),go("WebGLRenderer: Context Lost."),U=!0}function ut(){go("WebGLRenderer: Context Restored."),U=!1;const P=R.autoReset,W=Y.enabled,ne=Y.autoUpdate,Z=Y.needsUpdate,j=Y.type;Fe(),R.autoReset=P,Y.enabled=W,Y.autoUpdate=ne,Y.needsUpdate=Z,Y.type=j}function xn(P){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function bn(P){const W=P.target;W.removeEventListener("dispose",bn),oa(W)}function oa(P){la(P),C.remove(P)}function la(P){const W=C.get(P).programs;W!==void 0&&(W.forEach(function(ne){K.releaseProgram(ne)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,ne,Z,j,Re){W===null&&(W=Ue);const Pe=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ae=Gf(P,W,ne,Z,j);x.setMaterial(Z,Pe);let Ne=ne.index,Be=1;if(Z.wireframe===!0){if(Ne=N.getWireframeAttribute(ne),Ne===void 0)return;Be=2}const nt=ne.drawRange,ct=ne.attributes.position;let De=nt.start*Be,gt=(nt.start+nt.count)*Be;Re!==null&&(De=Math.max(De,Re.start*Be),gt=Math.min(gt,(Re.start+Re.count)*Be)),Ne!==null?(De=Math.max(De,0),gt=Math.min(gt,Ne.count)):ct!=null&&(De=Math.max(De,0),gt=Math.min(gt,ct.count));const Ht=gt-De;if(Ht<0||Ht===1/0)return;Te.setup(j,Z,Ae,ne,Ne);let Rt,Tt=ue;if(Ne!==null&&(Rt=O.get(Ne),Tt=se,Tt.setIndex(Rt)),j.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*Ye()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(j.isLine){let nn=Z.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*Ye()),j.isLineSegments?Tt.setMode(V.LINES):j.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else j.isPoints?Tt.setMode(V.POINTS):j.isSprite&&Tt.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Tt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,Ce=j._multiDrawCounts,hn=j._multiDrawCount,ft=Ne?O.get(Ne).bytesPerElement:1,Un=C.get(Z).currentProgram.getUniforms();for(let Qn=0;Qn<hn;Qn++)Un.setValue(V,"_gl_DrawID",Qn),Tt.render(nn[Qn]/ft,Ce[Qn])}else if(j.isInstancedMesh)Tt.renderInstances(De,Ht,j.count);else if(ne.isInstancedBufferGeometry){const nn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ce=Math.min(ne.instanceCount,nn);Tt.renderInstances(De,Ht,Ce)}else Tt.render(De,Ht)};function vr(P,W,ne,Z){B!==null&&P.isNodeMaterial&&B.setObject(Z,P),pe===!0&&me.setState(P,ne,!1),P.transparent===!0&&P.side===Qt&&P.forceSinglePass===!1?(P.side=mn,P.needsUpdate=!0,ha(P,W,Z),P.side=Di,P.needsUpdate=!0,ha(P,W,Z),P.side=Qt):ha(P,W,Z)}this.compile=function(P,W,ne=null){ne===null&&(ne=P),B!==null&&B.renderStart(P,W,ne),T=ce.get(ne),T.init(W),y.push(T),ne.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),P!==ne&&P.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),_e=this.localClippingEnabled,pe=me.init(this.clippingPlanes,_e),pe===!0&&me.setGlobalState(this.clippingPlanes,W),B!==null&&Y.render(T.state.shadowsArray,ne,W);const Z=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Re=j.material;if(Re)if(Array.isArray(Re))for(let Pe=0;Pe<Re.length;Pe++){const Ae=Re[Pe];vr(Ae,ne,W,j),Z.add(Ae)}else vr(Re,ne,W,j),Z.add(Re)}),T=y.pop(),B!==null&&B.renderEnd(),Z},this.compileAsync=function(P,W,ne=null){const Z=this.compile(P,W,ne);return new Promise(j=>{function Re(){if(Z.forEach(function(Pe){const Ne=C.get(Pe).currentProgram;(Ne===void 0||Ne.isReady())&&Z.delete(Pe)}),Z.size===0){j(P);return}setTimeout(Re,10)}et.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Uo=null;function Hf(P){Uo&&Uo(P)}function mh(){rs.stop()}function gh(){rs.start()}const rs=new rf;rs.setAnimationLoop(Hf),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(P){Uo=P,Le.setAnimationLoop(P),P===null?rs.stop():rs.start()},Le.addEventListener("sessionstart",mh),Le.addEventListener("sessionend",gh),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(P,W);const ne=Le.enabled===!0&&Le.isPresenting===!0,Z=E!==null&&(ae===null||ne)&&E.begin(L,ae);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(W),W=Le.getCamera()),P.isScene===!0&&P.onBeforeRender(L,P,W,ae),T=ce.get(P,y.length),T.init(W),T.state.textureUnits=I.getTextureUnits(),y.push(T),xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),he.setFromProjectionMatrix(xe,ai,W.reversedDepth),_e=this.localClippingEnabled,pe=me.init(this.clippingPlanes,_e),v=re.get(P,w.length),v.init(),w.push(v),Le.enabled===!0&&Le.isPresenting===!0){const Pe=L.xr.getDepthSensingMesh();Pe!==null&&Fo(Pe,W,-1/0,L.sortObjects)}Fo(P,W,0,L.sortObjects),v.finish(),B!==null&&B.updateLights(T.state.lightsArray),L.sortObjects===!0&&v.sort(Me,Ie),We=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,We&&oe.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&me.beginShadows();const j=T.state.shadowsArray;if(Y.render(j,P,W),pe===!0&&me.endShadows(),(Z&&E.hasRenderPass())===!1){const Pe=v.opaque,Ae=v.transmissive;if(T.setupLights(),W.isArrayCamera){const Ne=W.cameras;if(Ae.length>0)for(let Be=0,nt=Ne.length;Be<nt;Be++){const ct=Ne[Be];xh(Pe,Ae,P,ct)}We&&oe.render(P);for(let Be=0,nt=Ne.length;Be<nt;Be++){const ct=Ne[Be];_h(v,P,ct,ct.viewport)}}else Ae.length>0&&xh(Pe,Ae,P,W),We&&oe.render(P),_h(v,P,W)}ae!==null&&Q===0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),Z&&E.end(L),P.isScene===!0&&P.onAfterRender(L,P,W),Te.resetDefaultState(),J=-1,q=null,y.pop(),y.length>0?(T=y[y.length-1],I.setTextureUnits(T.state.textureUnits),pe===!0&&me.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,B!==null&&B.renderEnd()};function Fo(P,W,ne,Z){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLightProbeGrid)T.pushLightProbeGrid(P);else if(P.isLight)T.pushLight(P),P.castShadow&&T.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(he)){Z&&Oe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);const Pe=z.update(P),Ae=P.material;Ae.visible&&v.push(P,Pe,Ae,ne,Oe.z,null,W)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(he))){const Pe=z.update(P),Ae=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Oe.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(Ae)){const Ne=Pe.groups;for(let Be=0,nt=Ne.length;Be<nt;Be++){const ct=Ne[Be],De=Ae[ct.materialIndex];De&&De.visible&&v.push(P,Pe,De,ne,Oe.z,ct,W)}}else Ae.visible&&v.push(P,Pe,Ae,ne,Oe.z,null,W)}}const Re=P.children;for(let Pe=0,Ae=Re.length;Pe<Ae;Pe++)Fo(Re[Pe],W,ne,Z)}function _h(P,W,ne,Z){const{opaque:j,transmissive:Re,transparent:Pe}=P;T.setupLightsView(ne),pe===!0&&me.setGlobalState(L.clippingPlanes,ne),Z&&x.viewport($.copy(Z)),j.length>0&&ca(j,W,ne),Re.length>0&&ca(Re,W,ne),Pe.length>0&&ca(Pe,W,ne),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function xh(P,W,ne,Z){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){const De=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new en(1,1,{generateMipmaps:!0,type:De?tn:An,minFilter:Ei,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Re=T.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||$;Re.setSize(Pe.z*L.transmissionResolutionScale,Pe.w*L.transmissionResolutionScale);const Ae=L.getRenderTarget(),Ne=L.getActiveCubeFace(),Be=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(Ve),qe=L.getClearAlpha(),qe<1&&L.setClearColor(16777215,.5),L.clear(),We&&oe.render(ne);const nt=L.toneMapping;L.toneMapping=li;const ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),pe===!0&&me.setGlobalState(L.clippingPlanes,Z),ca(P,ne,Z),I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re),et.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let gt=0,Ht=W.length;gt<Ht;gt++){const Rt=W[gt],{object:Tt,geometry:nn,material:Ce,group:hn}=Rt;if(Ce.side===Qt&&Tt.layers.test(Z.layers)){const ft=Ce.side;Ce.side=mn,Ce.needsUpdate=!0,vh(Tt,ne,Z,nn,Ce,hn),Ce.side=ft,Ce.needsUpdate=!0,De=!0}}De===!0&&(I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re))}L.setRenderTarget(Ae,Ne,Be),L.setClearColor(Ve,qe),ct!==void 0&&(Z.viewport=ct),L.toneMapping=nt}function ca(P,W,ne){const Z=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Re=P.length;j<Re;j++){const Pe=P[j],{object:Ae,geometry:Ne,group:Be}=Pe;let nt=Pe.material;nt.allowOverride===!0&&Z!==null&&(nt=Z),Ae.layers.test(ne.layers)&&vh(Ae,W,ne,Ne,nt,Be)}}function vh(P,W,ne,Z,j,Re){B!==null&&j.isNodeMaterial&&B.setObject(P,j),P.onBeforeRender(L,W,ne,Z,j,Re),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(L,W,ne,Z,P,Re),j.transparent===!0&&j.side===Qt&&j.forceSinglePass===!1?(j.side=mn,j.needsUpdate=!0,L.renderBufferDirect(ne,W,Z,j,P,Re),j.side=Di,j.needsUpdate=!0,L.renderBufferDirect(ne,W,Z,j,P,Re),j.side=Qt):L.renderBufferDirect(ne,W,Z,j,P,Re),P.onAfterRender(L,W,ne,Z,j,Re)}function ha(P,W,ne){W.isScene!==!0&&(W=Ue);const Z=C.get(P),j=T.state.lights,Re=T.state.shadowsArray,Pe=j.state.version,Ae=K.getParameters(P,j.state,Re,W,ne,T.state.lightProbeGridArray),Ne=K.getProgramCacheKey(Ae);let Be=Z.programs;Z.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;const nt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Z.envMap=F.get(P.envMap||Z.environment,nt),Z.envMapRotation=Z.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Be===void 0&&(P.addEventListener("dispose",bn),Be=new Map,Z.programs=Be);let ct=Be.get(Ne);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Pe)return Mh(P,Ae),ct}else Ae.uniforms=K.getUniforms(P),B!==null&&P.isNodeMaterial&&B.build(P,ne,Ae),P.onBeforeCompile(Ae,L),ct=K.acquireProgram(Ae,Ne),Be.set(Ne,ct),Z.uniforms=Ae.uniforms;const De=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=me.uniform),Mh(P,Ae),Z.needsLights=Xf(P),Z.lightsStateVersion=Pe,Z.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.lightProbeGrid=T.state.lightProbeGridArray.length>0,Z.currentProgram=ct,Z.uniformsList=null,ct}function yh(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=io.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Mh(P,W){const ne=C.get(P);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Vf(P,W){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;M.setFromMatrixPosition(W.matrixWorld);for(let ne=0,Z=P.length;ne<Z;ne++){const j=P[ne];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function Gf(P,W,ne,Z,j){W.isScene!==!0&&(W=Ue),I.resetTextureUnits();const Re=W.fog,Pe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Ae=ae===null?L.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ot.workingColorSpace,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Be=F.get(Z.envMap||Pe,Ne),nt=Z.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ct=!!ne.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,Ht=!!ne.morphAttributes.color;let Rt=li;Z.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Rt=L.toneMapping);const Tt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nn=Tt!==void 0?Tt.length:0,Ce=C.get(Z),hn=T.state.lights;if(pe===!0&&(_e===!0||P!==q)){const wt=P===q&&Z.id===J;me.setState(Z,P,wt)}let ft=!1;Z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==hn.state.version||Ce.outputColorSpace!==Ae||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==Be||Z.fog===!0&&Ce.fog!==Re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==me.numPlanes||Ce.numIntersection!==me.numIntersection)||Ce.vertexAlphas!==nt||Ce.vertexTangents!==ct||Ce.morphTargets!==De||Ce.morphNormals!==gt||Ce.morphColors!==Ht||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==nn||!!Ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ce.__version=Z.version);let Un=Ce.currentProgram;ft===!0&&(Un=ha(Z,W,j),B&&Z.isNodeMaterial&&B.onUpdateProgram(Z,Un,Ce));let Qn=!1,Bi=!1,Cs=!1;const St=Un.getUniforms(),Ft=Ce.uniforms;if(x.useProgram(Un.program)&&(Qn=!0,Bi=!0,Cs=!0),Z.id!==J&&(J=Z.id,Bi=!0),Ce.needsLights){const wt=Vf(T.state.lightProbeGridArray,j);Ce.lightProbeGrid!==wt&&(Ce.lightProbeGrid=wt,Bi=!0)}if(Qn||q!==P){x.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),St.setValue(V,"projectionMatrix",P.projectionMatrix),St.setValue(V,"viewMatrix",P.matrixWorldInverse);const zi=St.map.cameraPosition;zi!==void 0&&zi.setValue(V,Se.setFromMatrixPosition(P.matrixWorld)),b.logarithmicDepthBuffer&&St.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),q!==P&&(q=P,Bi=!0,Cs=!0)}if(Ce.needsLights&&(hn.state.sunShadowMap.length>0&&St.setValue(V,"sunShadowMap",hn.state.sunShadowMap,I),hn.state.directionalShadowMap.length>0&&St.setValue(V,"directionalShadowMap",hn.state.directionalShadowMap,I),hn.state.spotShadowMap.length>0&&St.setValue(V,"spotShadowMap",hn.state.spotShadowMap,I),hn.state.pointShadowMap.length>0&&St.setValue(V,"pointShadowMap",hn.state.pointShadowMap,I)),j.isSkinnedMesh){St.setOptional(V,j,"bindMatrix"),St.setOptional(V,j,"bindMatrixInverse");const wt=j.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),St.setValue(V,"boneTexture",wt.boneTexture,I))}j.isBatchedMesh&&(St.setOptional(V,j,"batchingTexture"),St.setValue(V,"batchingTexture",j._matricesTexture,I),St.setOptional(V,j,"batchingIdTexture"),St.setValue(V,"batchingIdTexture",j._indirectTexture,I),St.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&St.setValue(V,"batchingColorTexture",j._colorsTexture,I));const ki=ne.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&H.update(j,ne,Un),(Bi||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,St.setValue(V,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Ft.envMapIntensity.value=W.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=O1()),Bi){if(St.setValue(V,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&Wf(Ft,Cs),Re&&Z.fog===!0&&ie.refreshFogUniforms(Ft,Re),ie.refreshMaterialUniforms(Ft,Z,le,te,T.state.transmissionRenderTarget[P.id]),Ce.needsLights&&Ce.lightProbeGrid){const wt=Ce.lightProbeGrid;Ft.probesSH.value=wt.texture,Ft.probesMin.value.copy(wt.boundingBox.min),Ft.probesMax.value.copy(wt.boundingBox.max),Ft.probesResolution.value.copy(wt.resolution)}io.upload(V,yh(Ce),Ft,I)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(io.upload(V,yh(Ce),Ft,I),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(V,"center",j.center),St.setValue(V,"modelViewMatrix",j.modelViewMatrix),St.setValue(V,"normalMatrix",j.normalMatrix),St.setValue(V,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){const wt=Z.uniformsGroups;for(let zi=0,Ps=wt.length;zi<Ps;zi++){const bh=wt[zi];fe.update(bh,Un),fe.bind(bh,Un)}}return Un}function Wf(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.sunLights.needsUpdate=W,P.sunLightShadows.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Xf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(P,W,ne){const Z=C.get(P);Z.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),C.get(P.texture).__webglTexture=W,C.get(P.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ne,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){const ne=C.get(P);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,ne=0){ae=P,ee=W,Q=ne;let Z=null,j=!1,Re=!1;if(P){const Ae=C.get(P);if(Ae.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),$.copy(P.viewport),ge.copy(P.scissor),ye=P.scissorTest,x.viewport($),x.scissor(ge),x.setScissorTest(ye),J=-1;return}else if(Ae.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ae.__hasExternalTextures)I.rebindTextures(P,C.get(P.texture).__webglTexture,C.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const nt=P.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&C.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const Ne=P.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Be=C.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?Z=Be[W][ne]:Z=Be[W],j=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?Z=C.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[ne]:Z=Be,$.copy(P.viewport),ge.copy(P.scissor),ye=P.scissorTest}else $.copy(we).multiplyScalar(le).floor(),ge.copy(Ge).multiplyScalar(le).floor(),ye=rt;if(ne!==0&&(Z=G),x.bindFramebuffer(V.FRAMEBUFFER,Z)&&x.drawBuffers(P,Z),x.viewport($),x.scissor(ge),x.setScissorTest(ye),j){const Ae=C.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,ne)}else if(Re){const Ae=W;for(let Ne=0;Ne<P.textures.length;Ne++){const Be=C.get(P.textures[Ne]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,ne,Ae)}}else if(P!==null&&ne!==0){const Ae=C.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,ne)}J=-1};function Sh(P){const W=C.get(P);return(W.__readFormat!==P.format||W.__readType!==P.type)&&(W.__readFormat=P.format,W.__readType=P.type,W.__formatReadable=b.textureFormatReadable(P.format),W.__typeReadable=b.textureTypeReadable(P.type)),W}this.readRenderTargetPixels=function(P,W,ne,Z,j,Re,Pe,Ae=0){if(!(P&&P.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=C.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){x.bindFramebuffer(V.FRAMEBUFFER,Ne);try{const Be=P.textures[Ae],nt=Be.format,ct=Be.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);const De=Sh(Be);if(De.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-Z&&ne>=0&&ne<=P.height-j&&V.readPixels(W,ne,Z,j,ve.convert(nt),ve.convert(ct),Re)}finally{const Be=ae!==null?C.get(ae).__webglFramebuffer:null;x.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,W,ne,Z,j,Re,Pe,Ae=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=C.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne)if(W>=0&&W<=P.width-Z&&ne>=0&&ne<=P.height-j){x.bindFramebuffer(V.FRAMEBUFFER,Ne);const Be=P.textures[Ae],nt=Be.format,ct=Be.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);const De=Sh(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(W,ne,Z,j,ve.convert(nt),ve.convert(ct),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Ht=ae!==null?C.get(ae).__webglFramebuffer:null;x.bindFramebuffer(V.FRAMEBUFFER,Ht);const Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ep(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(gt),V.deleteSync(Rt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,ne=0){const Z=Math.pow(2,-ne),j=Math.floor(P.image.width*Z),Re=Math.floor(P.image.height*Z),Pe=W!==null?W.x:0,Ae=W!==null?W.y:0;I.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,ne,0,0,Pe,Ae,j,Re),x.unbindTexture()},this.copyTextureToTexture=function(P,W,ne=null,Z=null,j=0,Re=0){let Pe,Ae,Ne,Be,nt,ct,De,gt,Ht;const Rt=P.isCompressedTexture?P.mipmaps[Re]:P.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,nt=ne.min.y,ct=ne.isBox3?ne.min.z:0;else{const Ft=Math.pow(2,-j);Pe=Math.floor(Rt.width*Ft),Ae=Math.floor(Rt.height*Ft),P.isDataArrayTexture?Ne=Rt.depth:P.isData3DTexture?Ne=Math.floor(Rt.depth*Ft):Ne=1,Be=0,nt=0,ct=0}Z!==null?(De=Z.x,gt=Z.y,Ht=Z.z):(De=0,gt=0,Ht=0);const Tt=ve.convert(W.format),nn=ve.convert(W.type);let Ce;W.isData3DTexture?(I.setTexture3D(W,0),Ce=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),Ce=V.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),Ce=V.TEXTURE_2D),x.activeTexture(V.TEXTURE0),x.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=x.getParameter(V.UNPACK_ROW_LENGTH),ft=x.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(V.UNPACK_SKIP_PIXELS),Qn=x.getParameter(V.UNPACK_SKIP_ROWS),Bi=x.getParameter(V.UNPACK_SKIP_IMAGES);x.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),x.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),x.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),x.pixelStorei(V.UNPACK_SKIP_ROWS,nt),x.pixelStorei(V.UNPACK_SKIP_IMAGES,ct);const Cs=P.isDataArrayTexture||P.isData3DTexture,St=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){const Ft=C.get(P),ki=C.get(W),wt=C.get(Ft.__renderTarget),zi=C.get(ki.__renderTarget);x.bindFramebuffer(V.READ_FRAMEBUFFER,wt.__webglFramebuffer),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Ps=0;Ps<Ne;Ps++)Cs&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(P).__webglTexture,j,ct+Ps),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,C.get(W).__webglTexture,Re,Ht+Ps)),V.blitFramebuffer(Be,nt,Pe,Ae,De,gt,Pe,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);x.bindFramebuffer(V.READ_FRAMEBUFFER,null),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||C.has(P)){const Ft=C.get(P),ki=C.get(W);x.bindFramebuffer(V.READ_FRAMEBUFFER,k),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,X);for(let wt=0;wt<Ne;wt++)Cs?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.__webglTexture,j,ct+wt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,j),St?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ki.__webglTexture,Re,Ht+wt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ki.__webglTexture,Re),j!==0?V.blitFramebuffer(Be,nt,Pe,Ae,De,gt,Pe,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):St?V.copyTexSubImage3D(Ce,Re,De,gt,Ht+wt,Be,nt,Pe,Ae):V.copyTexSubImage2D(Ce,Re,De,gt,Be,nt,Pe,Ae);x.bindFramebuffer(V.READ_FRAMEBUFFER,null),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else St?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(Ce,Re,De,gt,Ht,Pe,Ae,Ne,Tt,nn,Rt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Ce,Re,De,gt,Ht,Pe,Ae,Ne,Tt,Rt.data):V.texSubImage3D(Ce,Re,De,gt,Ht,Pe,Ae,Ne,Tt,nn,Rt):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,De,gt,Pe,Ae,Tt,nn,Rt.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,De,gt,Rt.width,Rt.height,Tt,Rt.data):V.texSubImage2D(V.TEXTURE_2D,Re,De,gt,Pe,Ae,Tt,nn,Rt);x.pixelStorei(V.UNPACK_ROW_LENGTH,hn),x.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(V.UNPACK_SKIP_ROWS,Qn),x.pixelStorei(V.UNPACK_SKIP_IMAGES,Bi),Re===0&&W.generateMipmaps&&V.generateMipmap(Ce),x.unbindTexture()},this.initRenderTarget=function(P){C.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),x.unbindTexture()},this.resetState=function(){ee=0,Q=0,ae=null,x.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function ff(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new vt;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(e){let u;if(t)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(t){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let _=0;_<u.count;++_)d.push(u.getX(_)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=$u(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let S=0;S<a[h].length;++S)u.push(a[h][S][f]);const _=$u(u);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}}return l}function $u(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new gn(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let f=0,u=h.count;f<u;f++)for(let _=0;_<t;_++){const S=h.getComponent(f,_);o.setComponent(f+d,_,S)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ku(s,e){if(e===fp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===mc||e===Rd){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===mc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function pf(s){const e=new Map,t=new Map,n=s.clone();return mf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)mf(s.children[n],e.children[n],t)}class B1 extends fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new G1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new Ju(t,lt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ju(t,lt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ny(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Vr.extractUrlBase(e);a=Vr.resolveURL(c,this.path)}else a=Vr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new tf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gf){try{a[lt.KHR_BINARY_GLTF]=new iy(e)}catch(d){i&&i(d);return}r=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(d){case lt.KHR_MATERIALS_UNLIT:a[d]=new H1;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[d]=new sy(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[d]=new ry;break;case lt.KHR_MESH_QUANTIZATION:a[d]=new ay;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function k1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function zt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class z1{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ln);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new no(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yc(h),c.distance=d;break;case"spot":c=new vm(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class H1{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return oi}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class V1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class G1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(i)}}class W1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class X1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class q1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,It)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Y1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class $1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(r[0],r[1],r[2],Ln),Promise.all(i)}}class K1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class J1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,It)),Promise.all(i)}}class Z1{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class j1{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){const n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Q1{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class ey{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ty{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Ju{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(u){return u.buffer}):a.ready.then(function(){const u=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(u),h,d,f,i.mode,i.filter),u})})}else return null}}class ny{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,u=[];for(const _ of d){const S=new Qe,m=new D,p=new Vn,g=new D(1,1,1),A=new ps(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&g.fromBufferAttribute(l.SCALE,v),A.setMatrixAt(v,S.compose(m,p,g));let M=null;for(const v in l)if(v==="_COLOR_0"){const T=l[v];A.instanceColor=new _o(T.array,T.itemSize,T.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(M===null){const w=A.geometry;M=new vt,M.name=w.name;for(const y in w.attributes)M.setAttribute(y,w.attributes[y]);for(const y in w.morphAttributes)M.morphAttributes[y]=w.morphAttributes[y];w.index!==null&&M.setIndex(w.index),M.morphTargetsRelative=w.morphTargetsRelative;for(const y of w.groups)M.addGroup(y.start,y.count,y.materialIndex);w.boundingBox!==null&&(M.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(M.boundingSphere=w.boundingSphere.clone()),M.drawRange.start=w.drawRange.start,M.drawRange.count=w.drawRange.count,M.userData=Object.assign({},w.userData),A.geometry=M}const T=l[v];M.setAttribute(v,new _o(T.array,T.itemSize,T.normalized))}Ct.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),u.push(A)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}}const gf="glTF",Pr=12,Zu={JSON:1313821514,BIN:5130562};class iy{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Pr,r=new DataView(e,Pr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Zu.JSON){const c=new Uint8Array(e,Pr+a,o);this.content=n.decode(c)}else if(l===Zu.BIN){const c=Pr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=Tc[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Tc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],u=Qs[f.componentType];c[d]=u.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(u){for(const _ in u.attributes){const S=u.attributes[_],m=l[_];m!==void 0&&(S.normalized=m)}d(u)},o,c,Ln,f)})})}}class ry{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class ay{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class _f extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,f=d*d,u=f*d,_=e*c,S=_-c,m=-2*u+3*f,p=u-f,g=1-m,A=p-f+d;for(let M=0;M!==o;M++){const v=a[S+M+o],T=a[S+M+l]*h,w=a[_+M+o],y=a[_+M]*h;r[M]=g*v+A*T+m*w+p*y}return r}}const oy=new Vn;class ly extends _f{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return oy.fromArray(r).normalize().toArray(r),r}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:Bt,9729:qt,9984:vd,9985:Ja,9986:Lr,9987:Ei},Qu={33071:ri,33648:co,10497:Zn},Ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cy={CUBICSPLINE:void 0,LINEAR:Kr,STEP:$r},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function us(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function dy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fy(s){let e;const t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bl(t.attributes):e=s.indices+":"+bl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bl(s.targets[n]);return e}function bl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function py(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const my=new Qe;class gy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new k1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new So(this.options.manager):this.textureLoader=new Sm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return us(r,o,i),ii(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Vr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ml[i.type],o=Qs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new gn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ml[i.type],c=Qs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let S,m;if(u&&u!==d){const p=Math.floor(f/u),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let A=t.cache.get(g);A||(S=new c(o,p*u,i.count*u/h),A=new a0(S,u/h),t.cache.add(g,A)),m=new eh(A,l,f%u/h,_)}else o===null?S=new c(i.count*l):S=new c(o,f,i.count*l),m=new gn(S,l,_);if(i.sparse!==void 0){const p=Ml.SCALAR,g=Qs[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,v=new g(a[1],A,i.sparse.count*p),T=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new gn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,y=v.length;w<y;w++){const E=v[w];if(m.setX(E,T[w*l]),l>=2&&m.setY(E,T[w*l+1]),l>=3&&m.setZ(E,T[w*l+2]),l>=4&&m.setW(E,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=ju[f.magFilter]||qt,h.minFilter=ju[f.minFilter]||Ei,h.wrapS=Qu[f.wrapS]||Zn,h.wrapT=Qu[f.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==qt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(f,u){let _=f;t.isImageBitmapLoader===!0&&(_=function(S){const m=new Yt(S);m.needsUpdate=!0,f(m)}),t.load(Vr.resolveURL(d,r.path),_,void 0,u)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),ii(d,a),d.userData.mimeType=a.mimeType||py(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Od,Jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fd,Jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Es}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const d=i[lt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new ke(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ln),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,It)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Qt);const h=r.alphaMode||Sl.OPAQUE;if(h===Sl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Sl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==oi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==oi){const d=r.emissiveFactor;o.emissive=new ke().setRGB(d[0],d[1],d[2],Ln)}return r.emissiveTexture!==void 0&&a!==oi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),ii(d,r),t.associations.set(d,{materials:e}),r.extensions&&us(i,d,r),d})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ed(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=fy(c),d=i[h];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ed(new vt,c,t),c.mode===On.TRIANGLE_STRIP?f=f.then(u=>Ku(u,Rd)):c.mode===On.TRIANGLE_FAN&&(f=f.then(u=>Ku(u,mc))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?hy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let u=0,_=h.length;u<_;u++){const S=h[u],m=a[u];let p;const g=c[u];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0){const A=r.isSkinnedMesh===!0,M=S.hasAttribute("skinIndex")&&S.hasAttribute("skinWeight");A&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&M?new d0(S,g):new $t(S,g),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===On.LINES)p=new g0(S,g);else if(m.mode===On.LINE_STRIP)p=new ih(S,g);else if(m.mode===On.LINE_LOOP)p=new _0(S,g);else if(m.mode===On.POINTS)p=new x0(S,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ii(p,r),m.extensions&&us(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let u=0,_=d.length;u<_;u++)t.associations.set(d[u],{meshes:e,primitives:u});if(d.length===1)return r.extensions&&us(i,d[0],r),d[0];const f=new Je;r.extensions&&us(i,f,r),t.associations.set(f,{meshes:e});for(let u=0,_=d.length;u<_;u++)f.add(d[u]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(bs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new th(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){const u=i.channels[d],_=i.samplers[u.sampler],S=u.target,m=S.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,g=i.parameters!==void 0?i.parameters[_.output]:_.output;S.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",g)),c.push(_),h.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const f=d[0],u=d[1],_=d[2],S=d[3],m=d[4],p=[];for(let A=0,M=f.length;A<M;A++){const v=f[A],T=u[A],w=_[A],y=S[A],E=m[A];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const L=n._createAnimationTracks(v,T,w,y,E);if(L)for(let U=0;U<L.length;U++)p.push(L[U])}const g=new vc(r,void 0,p);return ii(g,i),g})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(f,my)});for(let u=0,_=d.length;u<_;u++)h.add(d[u]);if(h.userData.pivot!==void 0&&d.length>0){const u=h.userData.pivot,_=d[0];h.pivot=new D().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],_.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ud:c.length>1?h=new Je:c.length===1?h=c[0]:h=new Ct,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ii(h,r),r.extensions&&us(n,h,r),r.matrix!==void 0){const d=new Qe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Je;n.name&&(r.name=i.createUniqueName(n.name)),ii(r,n),n.extensions&&us(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const f=l[h];f.parent!==null?r.add(pf(f)):r.add(f)}const c=h=>{const d=new Map;for(const[f,u]of i.associations)(f instanceof Jn||f instanceof Yt)&&d.set(f,u);return h.traverse(f=>{const u=i.associations.get(f);u!=null&&d.set(f,u)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}qi[r.path]===qi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(qi[r.path]){case qi.weights:h=na;break;case qi.rotation:h=ia;break;case qi.translation:case qi.scale:h=Mo;break;default:n.itemSize===1?h=na:h=Mo;break}const d=i.interpolation!==void 0?cy[i.interpolation]:Kr,f=this._getArrayFromAccessor(n);for(let u=0,_=l.length;u<_;u++){const S=new h(l[u]+"."+qi[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),a.push(S)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ia?ly:_f;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _y(s,e,t){const n=e.attributes,i=new Oi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=wc(Qs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],u=f.min,_=f.max;if(u!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(u[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(u[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(u[2]),Math.abs(_[2]))),f.normalized){const S=wc(Qs[f.componentType]);l.multiplyScalar(S)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new ui;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ed(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Tc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ot.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ii(s,e),_y(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?uy(s,e.targets,t):s})}const is=[{id:"trojan",name:"Trojan",description:"Twin blades. Explosive close-range damage.",color:"#edb96a",weapon:"Twin sabers",skill:"Scent Sword",range:2.1},{id:"warrior",name:"Warrior",description:"Steel resolve. A sweeping defensive fighter.",color:"#a8c6dd",weapon:"Iron glaive",skill:"Hercules",range:2.3},{id:"archer",name:"Archer",description:"Swift shots. Precision at a distance.",color:"#87c9a3",weapon:"Recurve bow",skill:"Scatter",range:10},{id:"fire",name:"Fire Taoist",description:"Elemental fire. Dangerous area magic.",color:"#eb8e70",weapon:"Ember staff",skill:"Fire Circle",range:9},{id:"water",name:"Water Taoist",description:"Restoring water. Resilient spellcasting.",color:"#87c8ed",weapon:"Jade staff",skill:"Azure Shield",range:9}],Zt={city:{id:"city",name:"Twin Haven",width:48,height:48,spawn:{x:24,y:24},portal:{x:34,y:24,to:"wilds",label:"Phoenix Fields"},obstacles:[{x:11,y:13,w:8,h:6,type:"building",height:5},{x:28,y:12,w:7,h:6,type:"building",height:5},{x:12,y:30,w:6,h:7,type:"building",height:5},{x:31,y:31,w:7,h:5,type:"building",height:5},{x:7,y:23,w:5,h:3,type:"water",height:0},{x:40,y:15,w:2,h:2,type:"tree",height:3},{x:8,y:36,w:2,h:2,type:"tree",height:3},{x:40,y:35,w:2,h:2,type:"tree",height:3}],npcs:[{id:"guide",name:"Captain Shen",role:"quest",x:22,y:21},{id:"smith",name:"Master Wu",role:"compose",x:29,y:21},{id:"healer",name:"Herbalist Lin",role:"shop",x:20,y:26}]},wilds:{id:"wilds",name:"Phoenix Fields",width:48,height:48,spawn:{x:12,y:24},portal:{x:8,y:24,to:"city",label:"Twin Haven"},obstacles:[{x:25,y:13,w:2,h:2,type:"tree",height:3},{x:29,y:27,w:2,h:2,type:"tree",height:3},{x:15,y:13,w:2,h:2,type:"tree",height:3},{x:13,y:33,w:2,h:2,type:"tree",height:3},{x:32,y:18,w:6,h:8,type:"water",height:0},{x:21,y:30,w:2,h:2,type:"rock",height:1},{x:35,y:34,w:2,h:2,type:"rock",height:1},{x:40,y:9,w:2,h:2,type:"tree",height:3}],npcs:[{id:"scout",name:"Scout Mei",role:"quest",x:10,y:21}]}},xf={trojan:{attack:42,defense:10,range:2.1,cooldown:.7},warrior:{attack:36,defense:19,range:2.3,cooldown:.78},archer:{attack:31,defense:8,range:10,cooldown:.62},fire:{attack:39,defense:6,range:9,cooldown:.82},water:{attack:30,defense:11,range:9,cooldown:.8}},xy=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],Pt=(s,e)=>Math.hypot(s.x-e.x,s.y-e.y),vf=(s,e,t)=>s>=t.x&&s<t.x+t.w&&e>=t.y&&e<t.y+t.h,Gr=(s,e)=>Number.isFinite(s)&&Number.isFinite(e),vy=s=>JSON.parse(JSON.stringify(s)),je=(s,e,t={})=>({ok:s,message:e,...t});function ms(s,e,t){const n=typeof s=="string"?Zt[s]:s;return!n||!Gr(e,t)||e<1||t<1||e>=n.width-1||t>=n.height-1?!1:!n.obstacles.some(i=>vf(Math.round(e),Math.round(t),i))}function yf(s,e,t){const n=Math.round(e.x),i=Math.round(e.y),r=Math.round(t.x),a=Math.round(t.y);if(!ms(s,r,a))return[];const o=(u,_)=>`${u},${_}`,l=[{x:n,y:i,g:0,f:Math.hypot(r-n,a-i)}],c=new Map([[o(n,i),0]]),h=new Map,d=new Set;let f=0;for(;l.length&&f++<2400;){l.sort((S,m)=>S.f-m.f);const u=l.shift(),_=o(u.x,u.y);if(!d.has(_)){if(u.x===r&&u.y===a){const S=[];let m=u;for(;h.has(o(m.x,m.y));)S.unshift({x:m.x,y:m.y}),m=h.get(o(m.x,m.y));return S}d.add(_);for(const[S,m]of xy){const p=u.x+S,g=u.y+m,A=o(p,g);if(!ms(s,p,g)||d.has(A)||S&&m&&(!ms(s,u.x+S,u.y)||!ms(s,u.x,u.y+m)))continue;const M=u.g+(S&&m?Math.SQRT2:1);M>=(c.get(A)??1/0)||(c.set(A,M),h.set(A,u),l.push({x:p,y:g,g:M,f:M+Math.hypot(r-p,a-g)}))}}}return[]}function yy(s,e,t){if(!Gr(t.x,t.y)||Pt(e,t)>16.01||!ms(s,t.x,t.y))return!1;const n=Zt[s],i=e.x+.5,r=e.y+.5,a=t.x+.5,o=t.y+.5,l=a-i,c=o-r,h=Math.sign(l),d=Math.sign(c);let f=Math.floor(i),u=Math.floor(r),_=Math.floor(a),S=Math.floor(o);const m=l===0?1/0:Math.abs(1/l),p=c===0?1/0:Math.abs(1/c);let g=l===0?1/0:((h>0?f+1:f)-i)/l,A=c===0?1/0:((d>0?u+1:u)-r)/c;const M=(v,T)=>n.obstacles.some(w=>(w.height??3)>2&&vf(v,T,w));if(M(f,u))return!1;for(let v=0;v<100&&(f!==_||u!==S);v++){if(Math.abs(g-A)<1e-9){if(M(f+h,u)||M(f,u+d))return!1;f+=h,u+=d,g+=m,A+=p}else g<A?(f+=h,g+=m):(u+=d,A+=p);if(M(f,u))return!1}return!0}const xs=["weapon","offhand","armor","helmet","boots","garment","ring","necklace"],My=["sword","glaive","spear","bow","staff","wand","dagger","shield","quiver","orb","light-armor","heavy-armor","crown","boots","cape","ring","necklace"],Sy=["saber","longsword","cleaver","halberd","recurve","longbow","shortbow","ember","jade","crystal","ivory","jade-leather","crimson-iron","bronze","cloudstep","iron","crimson","storm","round","leather","flame","phoenix"],by=["single","dual","two-hand","ranged","caster"];function td(s){if(!s||typeof s!="object"||!My.includes(s.model))return;const e=n=>typeof n=="string"&&/^#[0-9a-f]{6}$/i.test(n),t={model:s.model};Sy.includes(s.type)&&(t.type=s.type);for(const n of["color","trim","glow"])e(s[n])&&(t[n]=s[n].toLowerCase());return by.includes(s.grip)&&(t.grip=s.grip),t}function gs(s,e,t,n,i,r=0,a=0,o=0,l=1,c){return{id:s,name:e,icon:t,quality:n,slot:i,attack:r,defense:a,plus:o,qty:l,...c?{appearance:c}:{}}}function Ty(s,e){const n={trojan:[[e.weapon,"sword","saber","#b9d4d3","#8c6440","dual"],["Jade longsword","sword","longsword","#7fc1a3","#d8b974","single"],["Crimson cleaver","sword","cleaver","#ce655a","#e0b76a","single"]],warrior:[[e.weapon,"glaive","halberd","#a5b8c6","#9a7248","two-hand"],["Jade battle sword","sword","longsword","#7fc1a3","#d8b974","single"],["Phoenix spear","spear","storm","#ddbd72","#bd604d","two-hand"]],archer:[[e.weapon,"bow","recurve","#a78359","#d8b974","ranged"],["Jade longbow","bow","longbow","#7fc1a3","#d8b974","ranged"],["Crimson shortbow","bow","shortbow","#ce655a","#dfbf76","ranged"]],fire:[[e.weapon,"staff","ember","#b27750","#edaa63","caster"],["Ivory flame wand","wand","ivory","#e7dfc5","#dc8b63","caster"],["Crimson crystal staff","staff","crystal","#ce655a","#dfbf76","caster"]],water:[[e.weapon,"staff","jade","#7fc1a3","#d8b974","caster"],["Ivory tide wand","wand","ivory","#e7dfc5","#81bdd1","caster"],["Azure crystal staff","staff","crystal","#81bdd1","#e2dbc2","caster"]]}[e.id].map(([a,o,l,c,h,d],f)=>gs(f===0?`${s}-weapon`:`${s}-weapon-${f}`,a,"weapon",f===0?"refined":"unique","weapon",[12,18,22][f],0,f===0?1:0,1,{model:o,type:l,color:c,trim:h,grip:d,...f===2?{glow:c}:{}})),i=(a,o,l,c,h,d)=>gs(`${s}-${a}`,o,l,"normal",l,c,h,0,1,d);n.push(i("armor","Traveler armor","armor",0,6,{model:"light-armor",type:"jade-leather",color:"#6e9c83",trim:"#d4b579"}),i("armor-iron","Crimson iron armor","armor",0,11,{model:"heavy-armor",type:"crimson-iron",color:"#a9584e",trim:"#d7b26c"}),i("boots","Cloudstep boots","boots",0,2,{model:"boots",type:"cloudstep",color:"#665044",trim:"#bda477"}),i("boots-iron","Iron greaves","boots",0,4,{model:"boots",type:"iron",color:"#a6b5be",trim:"#9b7250"}),i("helmet","Iron Crown","helmet",0,3,{model:"crown",type:"bronze",color:"#ae824f",trim:"#dec382"}),i("garment-crimson","Crimson cape","garment",0,2,{model:"cape",type:"crimson",color:"#b84548",trim:"#e5bc71"}),i("garment-ivory","Ivory cape","garment",0,1,{model:"cape",type:"ivory",color:"#e9e0c9",trim:"#96b4aa"}));const r={trojan:["Storm dagger",6,0,{model:"dagger",type:"storm",color:"#a9cad0",trim:"#c79860",grip:"single"}],warrior:["Bronze shield",0,6,{model:"shield",type:"round",color:"#ae824f",trim:"#dec382"}],archer:["Leather quiver",3,1,{model:"quiver",type:"leather",color:"#825d43",trim:"#c3a276"}],fire:["Flame orb",4,1,{model:"orb",type:"flame",color:"#dd9563",trim:"#d2b778",glow:"#eead69"}],water:["Jade orb",4,1,{model:"orb",type:"jade",color:"#7fc1a3",trim:"#d8b974",glow:"#91d6c0"}]}[e.id];return n.push(i("offhand",r[0],"offhand",r[1],r[2],r[3])),n.push(i("necklace","Jade pendant","necklace",0,2,{model:"necklace",type:"jade",color:"#9ccbb8",trim:"#d4bc7b",glow:"#a9dbc7"})),n.push(gs(`${s}-potion`,"Health potion","potion","normal","consumable",0,0,0,5),gs(`${s}-stone`,"Composition stone","stone","unique","material",0,0,0,1)),n}function ra(s,e,t="trojan"){const n=is.find(r=>r.id===t)??is[0],i={id:s,name:String(e||"Wanderer").replace(/[<>\x00-\x1f]/g,"").trim().slice(0,20)||"Wanderer",classId:n.id,class:n.id,color:n.color,range:xf[n.id].range,zone:"city",x:24,y:24,hp:300,maxHp:300,stamina:100,maxStamina:100,mana:100,maxMana:100,xp:0,nextXp:100,level:1,gold:125,inventory:Ty(s,n),equipment:{weapon:`${s}-weapon`,armor:`${s}-armor`,boots:`${s}-boots`},quest:{accepted:!1,kills:0,claimed:!1},target:null,path:[],jump:null,cooldown:0,skillCooldown:0,shield:0,xpGauge:0,xpReadyUntil:0,pkMode:"peace",facing:2,lastMessage:"Welcome to Twin Haven. Speak with Captain Shen or enter Phoenix Fields."};return gr(i)}function Mf(s,e=s?.id||"local-player",t=s?.name,n=s?.classId){const i=ra(e,t,n);if(!s||typeof s!="object")return i;for(const r of["level","gold","xp","nextXp","maxHp","maxMana"])Number.isFinite(s[r])&&s[r]>=0&&(i[r]=Math.min(1e6,Math.floor(s[r])));if(i.level=Math.max(1,Math.min(120,i.level)),i.maxHp=Math.max(300,i.maxHp),i.maxMana=Math.max(100,i.maxMana),i.nextXp=Math.max(100,i.nextXp),i.hp=i.maxHp,i.mana=i.maxMana,Array.isArray(s.inventory)){const r=i.inventory,a=[...xs,"consumable","material"],o=s.inventory.slice(0,100).filter(l=>l&&typeof l.id=="string"&&typeof l.name=="string"&&a.includes(l.slot));o.length&&(i.inventory=o.map(l=>({id:l.id.slice(0,100),name:l.name.slice(0,60),icon:String(l.icon||"weapon").slice(0,20),quality:String(l.quality||"normal").slice(0,20),slot:l.slot,attack:Math.max(0,Math.min(200,Number(l.attack)||0)),defense:Math.max(0,Math.min(200,Number(l.defense)||0)),plus:Math.max(0,Math.min(12,Math.floor(Number(l.plus)||0))),qty:Math.max(0,Math.min(999,Math.floor(Number(l.qty)||0))),...td(l.appearance||r.find(c=>c.name===l.name&&c.slot===l.slot)?.appearance)?{appearance:td(l.appearance||r.find(c=>c.name===l.name&&c.slot===l.slot)?.appearance)}:{}})));for(const l of r)xs.includes(l.slot)&&!i.inventory.some(c=>c.name===l.name&&c.slot===l.slot)&&i.inventory.push(l);i.equipment={};for(const[l,c]of Object.entries(s.equipment||{}))xs.includes(l)&&i.inventory.some(h=>h.id===c&&h.slot===l)&&(i.equipment[l]=c)}return s.quest&&typeof s.quest=="object"&&(i.quest={accepted:!!s.quest.accepted,kills:Math.max(0,Math.min(5,Number(s.quest.kills)||0)),claimed:!!s.quest.claimed}),gr(i)}function Io(){const s={time:0,players:[],enemies:[],drops:[],effects:[],npcs:[],nextId:1,chat:[]};for(const[t,n]of Object.entries(Zt))for(const i of n.npcs)s.npcs.push({...i,zone:t,hp:1,maxHp:1});const e=[["Pheasant",16,23],["Pheasant",18,27],["Pheasant",20,21],["Pheasant",22,25],["Pheasant",18,18],["Pheasant",24,20],["Pheasant",23,29],["Pheasant",27,23],["Bandit",27,35],["Bandit",31,31],["Bandit",34,30],["Rock Guardian",38,38]];for(const[t,n,i]of e){const r=t==="Rock Guardian",a=t==="Bandit";s.enemies.push({id:`enemy-${s.nextId++}`,name:t,type:r?"guardian":a?"bandit":"pheasant",zone:"wilds",x:n,y:i,spawnX:n,spawnY:i,hp:r?260:a?115:65,maxHp:r?260:a?115:65,attack:r?28:a?19:8,defense:r?13:a?7:2,aggressive:a||r,target:null,cooldown:0,respawnAt:0,wanderAt:4+s.nextId%5,facing:0})}return s}function Lo(s,e){return s.players.some(t=>t.id===e.id)?!1:(s.players.push(e),e)}function Li(s,e){s.effects.push({id:`effect-${s.nextId++}`,start:s.time,duration:.65,...e})}function Sf(s){const e=xf[s.classId];let t=e.attack+(s.level-1)*3,n=e.defense+(s.level-1)*2;for(const[i,r]of Object.entries(s.equipment)){const a=s.inventory.find(o=>o.id===r&&o.slot===i);!a||!xs.includes(i)||(t+=(a.attack??0)+(a.attack>0?a.plus*4:0),n+=(a.defense??0)+(a.defense>0?a.plus*2:0))}return{...e,attack:t,defense:n}}const bo=Sf;function gr(s){const e=Sf(s);return s.attack=e.attack,s.defense=e.defense,s}function za(s,e){return gr(s),je(!0,e,{equipment:{...s.equipment},stats:{attack:s.attack,defense:s.defense}})}function bf(s,e,t){for(e.xp+=t,e.xpGauge=Math.min(100,e.xpGauge+12),e.xpGauge===100&&!e.xpReadyUntil&&(e.xpReadyUntil=s.time+20);e.xp>=e.nextXp;)e.xp-=e.nextXp,e.level++,e.nextXp=Math.round(e.nextXp*1.35),e.maxHp+=24,e.hp=e.maxHp,e.maxMana+=8,e.mana=e.maxMana,e.lastMessage=`Level ${e.level}! Your vitality and attack have increased.`,Li(s,{kind:"level",zone:e.zone,x:e.x,y:e.y,text:"LEVEL UP",color:"#f1d581",duration:1.4});gr(e)}function Tf(s,e,t,n){if(t.hp<=0||(t.hp=Math.max(0,t.hp-n),t.target=e.id,Li(s,{kind:"damage",zone:t.zone,x:t.x,y:t.y,amount:n,text:String(n),color:"#ffe4a3",targetId:t.id}),t.hp))return;t.target=null,t.respawnAt=s.time+12,bf(s,e,t.type==="guardian"?65:t.type==="bandit"?35:22),t.type==="pheasant"&&e.quest.accepted&&!e.quest.claimed&&(e.quest.kills=Math.min(5,e.quest.kills+1));const i=t.type==="guardian"?55:t.type==="bandit"?22:9;s.drops.push({id:`drop-${s.nextId++}`,zone:t.zone,x:Math.round(t.x),y:Math.round(t.y),name:"Silver",icon:"gold",quality:"normal",gold:i,ownerId:e.id,expiresAt:s.time+60}),s.nextId%3===0&&s.drops.push({id:`drop-${s.nextId++}`,zone:t.zone,x:Math.round(t.x)+.4,y:Math.round(t.y),name:"Composition stone",icon:"stone",quality:"unique",item:gs(`loot-${s.nextId}`,"Composition stone","stone","unique","material"),expiresAt:s.time+60}),e.lastMessage=`Defeated ${t.name}. ${t.type==="pheasant"&&e.quest.accepted?`Pheasants: ${e.quest.kills}/5. `:""}Pick up the silver.`,Li(s,{kind:"death",zone:t.zone,x:t.x,y:t.y,duration:.7})}function wf(s,e,t){const n=bo(e);if(e.cooldown>0||e.jump||t.hp<=0||Pt(e,t)>n.range)return!1;e.cooldown=n.cooldown;const i=e.classId==="fire"||e.classId==="water";if(i&&e.mana<3)return!1;i&&(e.mana-=3);const r=Math.max(1,Math.round(n.attack-t.defense));return Tf(s,e,t,r),Li(s,{kind:i?"magic":e.classId==="archer"?"arrow":"slash",zone:e.zone,x:e.x,y:e.y,toX:t.x,toY:t.y,targetId:t.id,color:e.color,duration:.3}),!0}function nd(s,e,t,n,i){const r=Pt(s,e);if(r<.005)return!0;const a=Math.min(r,t*n),o=s.x+(e.x-s.x)/r*a,l=s.y+(e.y-s.y)/r*a;return ms(i,o,l)?(s.x=o,s.y=l,s.facing=(Math.round(Math.atan2(e.y-s.y,e.x-s.x)/(Math.PI/4))+8)%8,a>=r):!1}function Ec(s,e){const t=Zt[e].spawn;s.zone=e,s.x=t.x,s.y=t.y,s.path=[],s.target=null,s.jump=null,s.lastMessage=`Entered ${Zt[e].name}.`}function wy(s,e,t){const n=s.players.find(a=>a.id===e);if(!n||!t||typeof t.type!="string")return je(!1,"Unknown player or command.");const i=t.type;if(i==="respawn")return n.hp>0?je(!1,"You are already standing."):(Ec(n,"city"),n.hp=n.maxHp,n.mana=n.maxMana,n.stamina=100,n.shield=0,je(!0,"Returned safely to Twin Haven."));if(n.hp<=0)return je(!1,"You have fallen. Return to Twin Haven to continue.");let r;if(i==="move"){if(n.jump||!Gr(t.x,t.y))return je(!1,"Wait until you land.");const a={x:Math.round(t.x),y:Math.round(t.y)};if(!ms(n.zone,a.x,a.y))return je(!1,"That ground is blocked.");const o=yf(n.zone,n,a);return!o.length&&Pt(n,a)>.7?je(!1,"There is no clear path."):(n.path=o,n.running=t.run!==!1,n.target=null,je(!0,"Moving."))}if(i==="jump"){if(n.jump||!Gr(t.x,t.y))return je(!1,"Wait until you land.");const a={x:Math.round(t.x),y:Math.round(t.y)};return n.stamina<10?je(!1,"Not enough stamina to jump."):yy(n.zone,n,a)?Pt(n,a)<.5?je(!1,"Choose a more distant landing."):(n.stamina-=10,n.path=[],n.target=null,n.jump={fromX:n.x,fromY:n.y,toX:a.x,toY:a.y,t:0,duration:.45+Pt(n,a)*.012},je(!0,"Jump!")):je(!1,"Cannot jump there. Choose clear ground within 16 paces.")}if(i==="attack"){const a=s.enemies.find(o=>o.id===t.targetId&&o.zone===n.zone&&o.hp>0);return a?(n.target=a.id,n.path=[],wf(s,n,a),je(!0,`Attacking ${a.name}.`)):je(!1,"Choose a living creature.")}if(i==="skill"){if(n.skillCooldown>0||n.jump)return je(!1,"Your skill is recovering.");const a=n.classId==="fire"||n.classId==="water",o=a?20:15;if(a?n.mana<o:n.stamina<o)return je(!1,`Not enough ${a?"mana":"stamina"}.`);const l=Gr(t.x,t.y)?{x:t.x,y:t.y}:{x:n.x+6,y:n.y};a?n.mana-=o:n.stamina-=o,n.skillCooldown=n.classId==="water"?6:1.6;const c=bo(n),h=Math.max(.001,Pt(n,l)),d=(l.x-n.x)/h,f=(l.y-n.y)/h,u=n.xpGauge>=100?1.5:1;u>1&&(n.xpGauge=0,n.xpReadyUntil=0);const _=s.enemies.filter(S=>S.zone===n.zone&&S.hp>0);if(n.classId==="water")n.shield=100,n.hp=Math.min(n.maxHp,n.hp+85),Li(s,{kind:"shield",zone:n.zone,x:n.x,y:n.y,color:n.color,duration:1.2}),r=je(!0,"Azure Shield restores vitality and absorbs 100 damage.");else{let S=0;for(const m of _){const p=m.x-n.x,g=m.y-n.y,A=p*d+g*f,M=Math.abs(p*f-g*d);(n.classId==="trojan"?A>=0&&A<=11&&M<=1.35:n.classId==="warrior"?Pt(n,m)<=6:n.classId==="fire"?Pt(l,m)<=4.5&&Pt(n,l)<=12:A>=0&&A<=12&&M<=2.7+A*.22)&&(Tf(s,n,m,Math.max(1,Math.round((c.attack*1.35-m.defense)*u))),S++)}Li(s,{kind:n.classId==="trojan"?"line":n.classId==="archer"?"scatter":"burst",zone:n.zone,x:n.classId==="fire"?l.x:n.x,y:n.classId==="fire"?l.y:n.y,fromX:n.x,fromY:n.y,toX:n.x+d*11,toY:n.y+f*11,color:n.color,duration:.55}),r=je(!0,`${is.find(m=>m.id===n.classId).skill}${S?`: ${S} ${S===1?"hit":"hits"}`:". Aim toward a creature."}`)}return n.lastMessage=r.message,r}if(i==="potion"){const a=n.inventory.find(o=>o.icon==="potion"&&o.qty>0);return a?n.hp===n.maxHp&&n.mana===n.maxMana?je(!1,"Health and mana are full."):(a.qty--,n.hp=Math.min(n.maxHp,n.hp+140),n.mana=Math.min(n.maxMana,n.mana+45),Li(s,{kind:"heal",zone:n.zone,x:n.x,y:n.y,text:"+140",color:"#9bebb1"}),je(!0,"Potion restores 140 health and 45 mana.")):je(!1,"No potions left. Visit Herbalist Lin.")}if(i==="pickup"){const a=s.drops.filter(o=>o.zone===n.zone&&Pt(n,o)<=3.2&&(!t.dropId||o.id===t.dropId));if(!a.length)return je(!1,"Move within three paces of the loot.");for(const o of a)if(o.gold&&(n.gold+=o.gold),o.item){const l=n.inventory.find(c=>c.slot==="material"&&c.name===o.item.name);l?l.qty+=o.item.qty:n.inventory.push(o.item)}return s.drops=s.drops.filter(o=>!a.includes(o)),je(!0,`Collected ${a.length} ${a.length===1?"drop":"drops"}.`)}if(i==="interact"){const a=s.npcs.find(o=>o.id===t.npcId&&o.zone===n.zone);if(!a||Pt(n,a)>6)return je(!1,"Move closer to speak.");if(a.role==="quest")return je(!0,n.quest.claimed?"You have our thanks, traveler. The fields are safer.":n.quest.accepted?`Defeat five Pheasants in Phoenix Fields. Progress: ${n.quest.kills}/5.`:"Pheasants are overrunning the fields. Defeat five for 150 silver and a refined ring.",{npc:a,dialog:"quest"});if(a.role==="compose")return je(!0,"Use a composition stone and 25 silver to improve equipped gear. Each tier strengthens its stats.",{npc:a,dialog:"compose"});if(a.role==="shop"){n.hp=n.maxHp,n.mana=n.maxMana;let o=n.inventory.find(c=>c.icon==="potion");o||(o=gs(`${n.id}-potion`,"Health potion","potion","normal","consumable",0,0,0,0),n.inventory.push(o));const l=Math.min(8-o.qty,Math.floor(n.gold/8));return o.qty+=Math.max(0,l),n.gold-=Math.max(0,l)*8,je(!0,`Health and mana restored. ${l>0?`Purchased ${l} potions for ${l*8} silver.`:"Your supplies are ready."}`,{npc:a,dialog:"shop"})}}if(i==="quest_accept")return n.quest.accepted?je(!1,"This task is already in your journal."):s.npcs.find(o=>o.role==="quest"&&o.zone===n.zone&&Pt(n,o)<=6)?(n.quest.accepted=!0,je(!0,"Task accepted: defeat five Pheasants in Phoenix Fields.")):je(!1,"Speak with Captain Shen or Scout Mei first.");if(i==="quest_claim"){if(!n.quest.accepted||n.quest.kills<5||n.quest.claimed)return je(!1,"Defeat five Pheasants before claiming your reward.");if(!s.npcs.find(l=>l.role==="quest"&&l.zone===n.zone&&Pt(n,l)<=6))return je(!1,"Return to Captain Shen or Scout Mei for your reward.");n.quest.claimed=!0,n.gold+=150,bf(s,n,80);const o=gs(`${n.id}-quest-ring`,"Phoenix ring","ring","refined","ring",8,0,1,1,{model:"ring",type:"phoenix",color:"#d0ad57",glow:"#e3c777"});return n.inventory.push(o),n.equipment.ring=o.id,gr(n),je(!0,"Task complete! +150 silver, +80 experience, and a Phoenix ring equipped.")}if(i==="equip"){const a=n.inventory.find(o=>o.id===t.itemId);return!a||!xs.includes(a.slot)?je(!1,"Choose equipment from your inventory."):n.equipment[a.slot]===a.id?(delete n.equipment[a.slot],za(n,`Unequipped ${a.name}.`)):(n.equipment[a.slot]=a.id,za(n,`Equipped ${a.name}.`))}if(i==="unequip"){if(!xs.includes(t.slot))return je(!1,"Choose an equipment slot.");const a=n.inventory.find(o=>o.id===n.equipment[t.slot]);return a?(delete n.equipment[t.slot],za(n,`Unequipped ${a.name}.`)):je(!1,"That slot is already empty.")}if(i==="compose"){const a=n.inventory.find(c=>c.id===t.itemId),o=s.npcs.find(c=>c.role==="compose"&&c.zone===n.zone&&Pt(n,c)<=6),l=n.inventory.find(c=>c.icon==="stone"&&c.qty>0);return o?!a||!xs.includes(a.slot)||a.attack<=0&&a.defense<=0||a.plus>=12?je(!1,"Choose equipment below +12."):!l||n.gold<25?je(!1,"Composition needs one stone and 25 silver."):(l.qty--,n.gold-=25,a.plus++,za(n,`${a.name} is now +${a.plus}.`)):je(!1,"Visit Master Wu to compose equipment.")}if(i==="portal"){const a=Zt[n.zone].portal;return n.jump||Pt(n,a)>3.2?je(!1,"Move onto the glowing portal."):(Ec(n,a.to),je(!0,`Entered ${Zt[n.zone].name}.`))}return i==="pk_mode"?(n.pkMode=n.pkMode==="peace"?"team":"peace",je(!0,`Mode: ${n.pkMode}.`)):je(!1,"Unknown command.")}function Ey(s,e){const t=Math.max(0,Math.min(.1,Number(e)||0));s.time+=t,s.effects=s.effects.filter(n=>s.time-n.start<n.duration),s.drops=s.drops.filter(n=>n.expiresAt>s.time);for(const n of s.players){if(n.cooldown=Math.max(0,n.cooldown-t),n.skillCooldown=Math.max(0,n.skillCooldown-t),n.hp<=0){n.path=[],n.target=null,n.jump=null;continue}if(n.stamina=Math.min(n.maxStamina,n.stamina+t*(n.path.length?5:12)),n.mana=Math.min(n.maxMana,n.mana+t*3.5),n.zone==="city"&&(n.hp=Math.min(n.maxHp,n.hp+t*8)),n.xpReadyUntil&&s.time>=n.xpReadyUntil&&(n.xpGauge=0,n.xpReadyUntil=0),n.jump){const a=n.jump;a.t=Math.min(a.duration,a.t+t);const o=a.t/a.duration;n.x=a.fromX+(a.toX-a.fromX)*o,n.y=a.fromY+(a.toY-a.fromY)*o,o>=1&&(n.jump=null,Li(s,{kind:"land",zone:n.zone,x:n.x,y:n.y,duration:.35}));continue}if(n.target){const a=s.enemies.find(o=>o.id===n.target&&o.zone===n.zone&&o.hp>0);if(!a)n.target=null;else{const o=bo(n);Pt(n,a)<=o.range?(n.path=[],wf(s,n,a)):n.path.length||(n.path=yf(n.zone,n,a))}}let i=(n.running===!1?4.5:7.5)*t;for(;n.path.length&&i>0;){const a=n.path[0],o=Pt(n,a);o<=i?(n.x=a.x,n.y=a.y,n.path.shift(),i-=o):(nd(n,a,i,1,n.zone),i=0)}const r=Zt[n.zone].portal;Pt(n,r)<.8&&!n.path.length&&Ec(n,r.to)}for(const n of s.enemies){if(n.cooldown=Math.max(0,n.cooldown-t),n.hp<=0){s.time>=n.respawnAt&&(n.hp=n.maxHp,n.x=n.spawnX,n.y=n.spawnY,n.target=null);continue}let i=s.players.find(r=>r.id===n.target&&r.zone===n.zone&&r.hp>0);if(i&&Pt(n,i)>15&&(n.target=null,i=null),!i&&n.aggressive&&(i=s.players.filter(r=>r.zone===n.zone&&r.hp>0&&Pt(n,r)<6).sort((r,a)=>Pt(n,r)-Pt(n,a))[0],i&&(n.target=i.id)),i){if(Pt(n,i)>1.6)nd(n,i,n.type==="pheasant"?3:3.5,t,n.zone);else if(!i.jump&&n.cooldown<=0){n.cooldown=1.2;let r=Math.max(1,n.attack-Math.round(bo(i).defense*.5));if(i.shield>0){const a=Math.min(r,i.shield);i.shield-=a,r-=a}i.hp=Math.max(0,i.hp-r),Li(s,{kind:"damage",zone:i.zone,x:i.x,y:i.y,text:String(r),amount:r,color:"#f39788",targetId:i.id}),i.hp||(i.lastMessage="You have fallen. Press Return to Town to revive.")}}}}function _r(s,e){const t=s.players.find(a=>a.id===e),n=t?.zone??"city",i=Zt[n];for(const a of s.players)gr(a);const r={time:s.time,selfId:e,zone:n,zoneName:i.name,width:i.width,height:i.height,portal:i.portal,obstacles:i.obstacles,players:s.players.filter(a=>a.zone===n),enemies:s.enemies.filter(a=>a.zone===n),npcs:s.npcs.filter(a=>a.zone===n),drops:s.drops.filter(a=>a.zone===n),effects:s.effects.filter(a=>a.zone===n),chat:s.chat.slice(-30)};return vy(r)}function Ay(s,e,t=e.id){const n=new Je;n.name=`world-${t}`;const i=new Je,r=new Je;n.add(i,r);const a=Cy(t==="city"?4294:5065),o=t==="city",l=o?[{x:8.8,z:20.7,w:5,d:2.1,angle:-.11},{x:23.1,z:14.8,w:5.8,d:3,angle:.12},{x:37.5,z:27.5,w:6.6,d:2.6,angle:-.16},{x:27.1,z:33.4,w:3.1,d:5,angle:-.12},{x:20,z:33,w:2.2,d:5.1,angle:.08},{x:11.9,z:25.5,w:1.5,d:3.7,angle:-.08}]:[],c=[],h=[],d=[],f=[],u=[],_=[],S=[],m=[],p=(b,x={})=>new Es({color:b,roughness:.84,...x}),g={stone:p("#aab3b8"),stoneDark:p("#59666e"),stoneLight:p("#d4d3c5"),plaster:p("#d4cdc0"),plasterWarm:p("#bbb4a7"),plasterGray:p("#b5c1c4"),red:p("#98382f"),redLight:p("#c6533c"),wood:p("#4e3531"),woodDark:p("#262f35"),roof:p("#293f52",{roughness:.35,metalness:.22}),roofLight:p("#3d5263",{roughness:.58}),roofDark:p("#192d40",{roughness:.64}),roofRust:p("#4a424e",{roughness:.78}),gold:p("#d2a15c",{metalness:.47,roughness:.43}),moss:p("#486454"),bark:p("#574637"),barkPale:p("#7c7053"),bamboo:p("#6e8651"),bambooJoint:p("#a3a66f"),leaf:p("#3c665a"),leafLight:p("#648e70"),leafDark:p("#244e45"),cherry:p("#dca7af"),cherryLight:p("#f1c9cc"),grass:p("#7b9056"),grassDark:p("#557748"),earth:p("#5a625d"),sand:p("#7b817b"),ceramic:p("#5d847c",{roughness:.58}),cloth:p("#bf9c6b"),clothRed:p("#b1332a"),iron:p("#4c5350",{metalness:.55,roughness:.5}),lantern:p("#d84d2e",{emissive:"#ff6d2c",emissiveIntensity:1.05,roughness:.7}),lampPaper:p("#ebce91",{emissive:"#efad59",emissiveIntensity:.5,roughness:.6}),window:p("#dcb47d",{emissive:"#eea550",emissiveIntensity:.55,roughness:.65}),water:p("#244d55",{metalness:.2,roughness:.25,transparent:!0,opacity:.91}),waterDeep:p("#172f3d",{roughness:.7})},A=Ha((b,x)=>{b.fillStyle="#ffffff",b.fillRect(0,0,x,x);for(let R=0;R<17e3;R++)b.fillStyle=R%4?"rgba(109,103,81,.07)":"rgba(87,90,68,.10)",b.fillRect(a()*x,a()*x,.5+a()*2.3,.5+a()*1.5);for(let R=0;R<80;R++){b.strokeStyle="rgba(132,121,91,.025)",b.lineWidth=1+a()*2;const C=a()*x;b.beginPath(),b.moveTo(C,0),b.lineTo(C+a()*25,x),b.stroke()}}),M=Ha((b,x)=>{b.fillStyle="#ffffff",b.fillRect(0,0,x,x);for(let R=0;R<230;R++){const C=a()*x;b.strokeStyle=R%3?"rgba(84,66,47,.05)":"rgba(67,49,32,.12)",b.lineWidth=.4+a()*1.6,b.beginPath(),b.moveTo(C,0),b.bezierCurveTo(C+5,x/3,C-4,x*2/3,C+2,x),b.stroke()}});m.push(A,M);for(const b of["plaster","plasterWarm","plasterGray","stone","stoneDark","stoneLight"])g[b].map=A;for(const b of["red","redLight","wood","woodDark"])g[b].map=M;const v=new Ct,T=(b,x,R,C=0,I=0,F=0,O=!0)=>{const N=new $t(x,R);return N.position.set(C,I,F),N.castShadow=O,N.receiveShadow=!0,b.add(N),N},w=(b,x,R,C,I,F,O,N,z=!0)=>T(b,new As(x,R,C),I,F,O,N,z),y=(b,x,R,C,I,F,O,N,z=10)=>T(b,new Cn(x,R,C,z),I,F,O,N),E=(b,x,R,C,I,F,O,N,z=8)=>{const K=T(b,new Bn(1,z,Math.max(4,z/2)),I,F,O,N);return K.scale.set(x,R,C),K},L=(b,x,R,C,I,F=C)=>{const O=new D(...x),N=new D(...R),z=N.clone().sub(O),K=T(b,new Cn(F,C,z.length(),7),I);return K.position.copy(O.add(N).multiplyScalar(.5)),K.quaternion.setFromUnitVectors(new D(0,1,0),z.normalize()),K},U=(b,x,R,C,I,F,O)=>T(b,new Nn(x,R,6,42),C,I,F,O),B=(b,x,R,C,I,F,O,N)=>T(b,Py(x,R,C,.055),I,F,O,N),G=Ha((b,x)=>{b.fillStyle="#26333b",b.fillRect(0,0,x,x);for(let R=0;R<8;R++)for(let C=0;C<8;C++){const I=Math.floor(a()*20);b.fillStyle=`rgb(${70+I},${83+I},${89+I})`;const F=C*64+R%2*32;for(const O of[-512,0]){b.fillRect(F+O+2,R*64+2,60,60),b.strokeStyle="rgba(158,174,177,.10)",b.lineWidth=1,b.strokeRect(F+O+3,R*64+3,58,58);for(let N=0;N<35;N++)b.fillStyle=N%2?"rgba(69,74,57,.09)":"rgba(241,227,198,.12)",b.fillRect(F+O+a()*60+2,R*64+a()*60+2,a()*3+1,1)}}});G.repeat.set(4,4),m.push(G);const k=Ha((b,x)=>{b.fillStyle=o?"#46534e":"#8a8374",b.fillRect(0,0,x,x);for(let R=0;R<2e4;R++)b.fillStyle=R%3?"rgba(208,197,142,.05)":"rgba(43,76,42,.09)",b.fillRect(a()*x,a()*x,a()*12+1,a()*3+1);for(let R=0;R<45;R++){const C=a()*x,I=a()*x,F=a()*50+10,O=b.createRadialGradient(C,I,0,C,I,F);O.addColorStop(0,"rgba(194,181,130,.16)"),O.addColorStop(1,"rgba(194,181,130,0)"),b.fillStyle=O,b.fillRect(C-F,I-F,F*2,F*2)}});k.repeat.set(8,8),m.push(k);const X=p(o?"#ffffff":"#8da77b",{map:k,roughness:1}),ee=T(i,new ws(112,112,32,32),X,24,-.09,24,!1);ee.rotation.x=-Math.PI/2;let Q=null,ae=G;if(typeof window<"u"){ae=new So().load("./art/materials/worn-slate.webp"),ae.colorSpace=It,ae.wrapS=ae.wrapT=Zn,ae.anisotropy=8,m.push(ae);const b=new So().load("./art/materials/dragon-brocade.webp",x=>{Q=x.image;for(const R of S)qe(R.canvas,R.text,Q),R.texture.needsUpdate=!0});b.colorSpace=It,m.push(b)}const J=p("#ffffff",{map:ae,bumpMap:ae,bumpScale:.055,roughness:.91}),q=b=>{b.updateMatrix();const x=b.geometry.attributes.position,R=b.geometry.attributes.uv,C=new D;for(let I=0;I<x.count;I++)C.fromBufferAttribute(x,I).applyMatrix4(b.matrix),R.setXY(I,C.x/4.4,C.z/4.4);R.needsUpdate=!0};if(o){const b=(I,F,O,N,z)=>{const K=O-I,ie=N-F,re=w(i,z,.045,Math.hypot(K,ie),J,(I+O)/2,-.037,(F+N)/2,!1);re.rotation.y=Math.atan2(K,ie),q(re)};b(5,24,44,24,5.3),b(24,5,24,44,4.8),b(14.5,20,24,23,3.2),b(30.5,18.5,26,23,3),b(15,29,23,26,3),b(33,29.5,26,26,3.1);const x=p("#30473c",{roughness:1});for(const I of l){const F=new ns,O=I.w/2,N=I.d/2;F.moveTo(-O,-.2*N),F.bezierCurveTo(-O*1.08,-N*.92,-O*.4,-N,.05*O,-N*.83),F.bezierCurveTo(O*.55,-N*1.09,O*1.03,-N*.62,O,.12*N),F.bezierCurveTo(O*.92,N*.8,O*.37,N*1.05,-.12*O,N*.91),F.bezierCurveTo(-O*.64,N,-O*1.08,N*.4,-O,-.2*N),T(i,new Ks(F,16),x,I.x,-.005,I.z,!1).rotation.set(-Math.PI/2,0,I.angle);for(let K=0;K<6;K++){const ie=K/6*Math.PI*2+.2,re=I.x+Math.sin(ie)*O*.85,ce=I.z+Math.cos(ie)*N*.8;he(i,re,ce,.13+a()*.09,!1)}for(let K=0;K<12;K++){const ie=I.x+(a()-.5)*I.w*.7,re=I.z+(a()-.5)*I.d*.66,ce=.14+a()*.15;for(let me=0;me<5;me++){const Y=me/5*Math.PI*2,oe=new D(ie+Math.sin(Y)*ce,.12+a()*.14,re+Math.cos(Y)*ce);E(i,.055,.023,ce*.65,me%2?g.leafLight:g.leaf,(ie+oe.x)/2,oe.y,(re+oe.z)/2,5).rotation.set(-.4,Y,0)}}}const R=new ns;R.moveTo(-6.5,-5.9),R.bezierCurveTo(-7.6,-5.6,-7.5,-2.6,-7.15,-.8),R.lineTo(-7,3.9),R.quadraticCurveTo(-6.9,5.7,-4.4,6.15),R.lineTo(3,6.45),R.quadraticCurveTo(6.8,6.5,7.4,4.4),R.lineTo(7.1,-3.6),R.quadraticCurveTo(7,-6.2,4.5,-6),R.lineTo(-2.4,-6.3),R.closePath();const C=T(i,new Ks(R,16),J,24.5,-.007,24.5,!1);C.rotation.x=-Math.PI/2,q(C);for(let I=3;I<=45;I+=1.25)B(i,.35,.16,1.17,g.stone,5.1,.02,I),B(i,.35,.16,1.17,g.stone,44.9,.02,I)}else{const b=k.clone();b.repeat.set(1,1),b.needsUpdate=!0,m.push(b);const x=p("#b18f6e",{map:b,bumpMap:b,bumpScale:.055,roughness:1,vertexColors:!0}),R=new vt,C=[],I=[],F=[],O=[],N=86;for(let z=0;z<=N;z++){const K=3+z*.5,ie=24+Math.sin((K-4)*.12)*1.1,re=2.3+Math.sin(z*.53)*.17+Math.sin(z*.19)*.24,ce=re+(a()-.5)*.19,me=re+(a()-.5)*.19;for(const[Y,oe,H]of[[ie-ce,-.08,[.69,.78,.66]],[ie,-.031+Math.sin(z*.37)*.006,[1,1,1]],[ie+me,-.08,[.69,.78,.66]]])C.push(K,oe,Y),I.push(K/3.8,Y/3.8),O.push(...H);if(z<N){const Y=z*3;for(let oe=0;oe<2;oe++)F.push(Y+oe,Y+oe+1,Y+oe+3,Y+oe+1,Y+oe+4,Y+oe+3)}}R.setAttribute("position",new He(C,3)),R.setAttribute("normal",new He(new Float32Array(C.length),3)),R.setAttribute("uv",new He(I,2)),R.setAttribute("color",new He(O,3)),R.setIndex(F),R.computeVertexNormals(),T(i,R,x,0,0,0,!1);for(let z=0;z<90;z++){const K=4+a()*40,ie=24+Math.sin((K-4)*.12)*1.1+(a()>.5?1:-1)*(2.2+a()*1.4);he(i,K,ie,.08+a()*.12,!1)}}function $(b,x,R,C,I,F,O=!0){const N=new vt,z=[],K=[],ie=[],re=24,ce=20,me=(oe,H)=>{const ue=Math.abs(H)/(R/2),se=Math.abs(oe)/(x/2);return C+I*Math.pow(1-ue,1.55)+.2*Math.pow(ue,6)+.27*Math.pow(se,7)*Math.pow(ue,4)};for(let oe=0;oe<=ce;oe++)for(let H=0;H<=re;H++){const ue=(H/re-.5)*x,se=(oe/ce-.5)*R;if(z.push(ue,me(ue,se),se),K.push(H/re,oe/ce),H<re&&oe<ce){const ve=oe*(re+1)+H;ie.push(ve,ve+re+1,ve+1,ve+1,ve+re+1,ve+re+2)}}N.setAttribute("position",new He(z,3)),N.setAttribute("uv",new He(K,2)),N.setIndex(ie),N.computeVertexNormals();const Y=T(b,N,F);if(Y.material.side=Qt,O){const oe=x>5?.34:.29,H=new Cn(.036,.036,1,5),ue=Math.floor(x/oe),se=8,ve=(ue+1)*se*2,Te=new ps(H,F,ve);let fe=0;for(let Fe=0;Fe<=ue;Fe++)for(let Le of[-1,1])for(let mt=0;mt<se;mt++){const ut=(Fe/ue-.5)*(x-.12),xn=Le*(mt/se)*R/2,bn=Le*((mt+1)/se)*R/2,oa=new D(ut,me(ut,xn)+.035,xn),la=new D(ut,me(ut,bn)+.035,bn),vr=la.clone().sub(oa);v.position.copy(oa.add(la).multiplyScalar(.5)),v.quaternion.setFromUnitVectors(new D(0,1,0),vr.clone().normalize()),v.scale.set(1,vr.length(),1),v.updateMatrix(),Te.setMatrixAt(fe++,v.matrix)}Te.castShadow=!1,Te.receiveShadow=!0,b.add(Te)}for(const oe of[-1,1]){const H=[];for(let ue=0;ue<=18;ue++){const se=(ue/18-.5)*x;H.push(new D(se,me(se,oe*R/2)-.025,oe*R/2))}T(b,new fn(new yn(H),18,.045,5,!1),g.roofDark)}L(b,[-x/2-.08,C+I+.035,0],[x/2+.08,C+I+.035,0],.11,F);for(const oe of[-1,1]){const H=oe*(x/2-.02),ue=[new D(H-oe*.1,C+I+.03,0),new D(H+oe*.16,C+I+.13,0),new D(H+oe*.3,C+I+.45,0)];T(b,new fn(new yn(ue),8,.075,6,!1),g.gold),E(b,.09,.11,.08,g.gold,H+oe*.29,C+I+.43,0)}if(x>3.8)for(const oe of[-1,1])Ve(b,oe*(x/2-.13),C+I+.1,0,oe,x>7?.95:.68);return Y}function ge(b,x,R,C,I=.42){const F=new Je;F.position.set(x,R,C),b.add(F),y(F,.016,.016,.34,g.iron,0,.23,0,5);const O=E(F,I*.56,I*.73,I*.56,g.lantern,0,-.18,0,12);y(F,I*.34,I*.34,.075,g.gold,0,.1,0,10),y(F,I*.32,I*.32,.065,g.gold,0,-.47,0,10);for(let N=0;N<8;N++){const z=N*Math.PI/4;L(F,[Math.sin(z)*I*.24,.075,Math.cos(z)*I*.24],[Math.sin(z)*I*.49,-.21,Math.cos(z)*I*.49],.009,g.gold),L(F,[Math.sin(z)*I*.49,-.21,Math.cos(z)*I*.49],[Math.sin(z)*I*.24,-.45,Math.cos(z)*I*.24],.009,g.gold)}for(let N=0;N<3;N++)y(F,.012,.009,.22,g.clothRed,(N-1)*.04,-.6,0,4);return F.userData.dynamic=!0,h.push({group:F,phase:a()*6,body:O}),qs(F),F}function ye(b,x,R,C,I=1.2,F=1,O=!1){const N=new Je;N.position.set(x,R,C),O&&(N.rotation.y=Math.PI/2),b.add(N),w(N,I,F,.06,g.window,0,0,0);for(const ie of[-1,1])w(N,I+.12,.1,.12,g.red,0,ie*F/2,.03),w(N,.1,F+.12,.12,g.red,ie*I/2,0,.03);for(let ie=-1;ie<=1;ie++)w(N,.035,F,.1,g.woodDark,ie*I/4,0,.06);for(let ie=-1;ie<=1;ie++)w(N,I,.035,.1,g.woodDark,0,ie*F/4,.06);const z=w(N,I*.38,.035,.1,g.wood,0,0,.075);z.rotation.z=Math.PI/4;const K=w(N,I*.38,.035,.1,g.wood,0,0,.075);K.rotation.z=-Math.PI/4}function Ve(b,x,R,C,I=1,F=1){const O=new Je;O.position.set(x,R,C),O.rotation.y=I<0?Math.PI:0,O.scale.setScalar(F),b.add(O),E(O,.24,.14,.12,g.gold,-.13,.15,0,10),E(O,.14,.18,.12,g.gold,.11,.33,0,10),E(O,.15,.09,.1,g.gold,.25,.36,0,10);for(const z of[-1,1]){E(O,.025,.025,.018,g.woodDark,.19,.39,z*.1,8),L(O,[-.23,.13,z*.08],[-.29,.015,z*.13],.037,g.gold,.025),L(O,[.02,.13,z*.08],[.08,.015,z*.13],.032,g.gold,.022);const K=[new D(.06,.43,z*.07),new D(.025,.6,z*.13),new D(-.07,.64,z*.14)];T(O,new fn(new yn(K),7,.024,5,!1),g.gold)}const N=[new D(-.28,.15,0),new D(-.44,.21,0),new D(-.53,.46,0),new D(-.7,.43,0)];T(O,new fn(new yn(N),12,.043,6,!1),g.gold);for(let z=0;z<5;z++)E(O,.045,.06,.026,g.gold,-.35+z*.1,.3+Math.sin(z*.7)*.035,0,8)}function qe(b,x,R){const C=b.getContext("2d"),I=b.width,F=b.height;C.fillStyle="#152637",C.fillRect(0,0,I,F),R&&(C.save(),C.globalAlpha=.52,C.drawImage(R,0,0,I,F),C.restore()),C.fillStyle="rgba(9,24,33,.28)",C.fillRect(I*.18,F*.045,I*.64,F*.91),C.strokeStyle="#b99759",C.lineWidth=8,C.strokeRect(7,8,I-14,F-16),C.strokeStyle="rgba(215,179,103,.45)",C.lineWidth=2,C.strokeRect(20,22,I-40,F-44),C.font='bold 176px "Songti SC", "Noto Serif CJK SC", serif',C.textAlign="center",C.textBaseline="middle",[...x].slice(0,4).forEach((O,N)=>{C.fillStyle="rgba(10,15,22,.65)",C.fillText(O,I/2+3,163+N*219+5),C.fillStyle="#e1be78",C.fillText(O,I/2,163+N*219)}),C.fillStyle="#a43a30",C.fillRect(I*.66,F*.895,I*.19,F*.05),C.strokeStyle="#d09b58",C.lineWidth=2,C.strokeRect(I*.69,F*.902,I*.13,F*.036)}function Xe(b,x,R,C,I,F,O,N=0){const z=new Je;z.position.set(x,R,C),z.rotation.y=N,b.add(z);const K=document.createElement("canvas");K.width=256,K.height=1024,qe(K,O,Q);const ie=new kd(K);ie.colorSpace=It,ie.anisotropy=4,m.push(ie),S.push({canvas:K,texture:ie,text:O});const re=p("#ffffff",{map:ie,side:Qt,roughness:.92}),ce=T(z,new ws(I,F,8,20),re,0,-F/2,0,!1),me=ce.geometry.attributes.position.array.slice();L(z,[-I*.64,.035,0],[I*.64,.035,0],.038,g.gold),L(z,[-I*.54,-F,0],[I*.54,-F,0],.026,g.gold);for(const Y of[-1,1])L(z,[Y*I*.47,-F,0],[Y*I*.47,-F-.28,0],.012,g.gold),E(z,.035,.07,.035,g.clothRed,Y*I*.47,-F-.29,0,8);return _.push({group:z,cloth:ce,original:me,height:F,phase:a()*6}),z}function te(b,x,R=7,C=.42){const I=new yn([new D(...b),new D((b[0]+x[0])/2,(b[1]+x[1])/2-.7,(b[2]+x[2])/2),new D(...x)]);T(i,new fn(I,32,.018,5,!1),g.woodDark);for(let F=0;F<R;F++){const O=I.getPoint((F+.5)/R);ge(r,O.x,O.y-.14,O.z,C*(F%2?.95:1.12))}}function le(){const b=new Je;b.position.set(24,0,18),i.add(b);for(const C of[-1,1]){B(b,.9,.28,.9,g.stoneDark,C*3.1,.12,0),B(b,.62,.46,.62,g.stoneLight,C*3.1,.46,0),y(b,.23,.27,3.9,g.red,C*3.1,2.56,0,12),y(b,.29,.29,.12,g.gold,C*3.1,.83,0,12),y(b,.3,.3,.14,g.gold,C*3.1,4.37,0,12);for(const I of[-.25,.25])L(b,[C*3.1,3.43,0],[C*2.34,4.4,I],.08,g.redLight);Xe(r,24+C*2.6,4.35,18.24,.64,2.5,C<0?"龍門武院":"天道酬勤"),ge(r,24+C*1.94,4.17,18.17,.48)}w(b,6.9,.28,.42,g.red,0,4.47,0),w(b,6.95,.07,.49,g.gold,0,4.65,0),w(b,2,.64,.2,g.woodDark,0,4.19,.18),U(b,.23,.027,g.gold,0,4.22,.3),w(b,.06,.4,.035,g.gold,0,4.22,.33);const x=w(b,.4,.06,.035,g.gold,0,4.22,.33);x.rotation.z=.43,$(b,7.6,2.6,4.74,.92,g.roofDark);for(const C of[-1,1]){const I=[new D(C*3.5,4.74,1.25),new D(C*2.7,4.91,1.25),new D(C*1.4,4.98,1.25),new D(0,4.99,1.25)];T(b,new fn(new yn(I),20,.025,5,!1),g.gold)}const R=new yc("#ff9445",8,7,2);R.position.set(24,3.5,18.8),n.add(R)}function Me(){const b=(I,F,O=1.05)=>{const N=new Je;N.position.set(I,0,F),i.add(N),w(N,O,.4,.59,g.wood,0,.25,0),w(N,O+.06,.07,.64,g.woodDark,0,.07,0);const z=T(N,new Cn(.305,.305,O,16,1,!1,0,Math.PI),g.red,0,.45,0);z.rotation.z=Math.PI/2;for(const K of[-1,1]){w(N,.07,.4,.025,g.iron,K*O*.32,.25,.31),w(N,.07,.4,.025,g.iron,K*O*.32,.25,-.31);const ie=[];for(let re=0;re<=14;re++){const ce=re/14*Math.PI;ie.push(new D(K*O*.32,.45+Math.sin(ce)*.315,Math.cos(ce)*.315))}T(N,new fn(new yn(ie),14,.018,5,!1),g.gold)}w(N,.14,.18,.035,g.gold,0,.36,.33),U(N,.04,.012,g.iron,0,.35,.36);for(const K of[-1,1]){const ie=U(N,.065,.016,g.iron,K*(O/2+.016),.31,0);ie.rotation.y=Math.PI/2}},x=(I,F,O=.26)=>{const N=[[.1,0],[.76,.2],[1,.65],[.86,1.2],[.39,1.43],[.3,1.64],[.47,1.75]].map(([ie,re])=>new de(ie*O,re*O)),z=T(i,new ta(N,12),g.cloth,I,.02,F);z.rotation.y=a()*5;const K=U(i,O*.32,.012,g.woodDark,I,O*1.55,F);K.rotation.x=Math.PI/2,L(i,[I,O*1.52,F],[I+.13,O*1.36,F+.06],.01,g.woodDark)},R=(I,F,O=1.45)=>{for(const N of[-O*.41,O*.41])for(const z of[-.27,.27])w(i,.07,.78,.07,g.red,I+N,.41,F+z);w(i,O+.12,.1,.76,g.wood,I,.85,F),w(i,O-.1,.07,.54,g.woodDark,I,.27,F);for(let N=0;N<4;N++)w(i,.02,.015,.73,g.woodDark,I-O*.35+N*O*.23,.906,F,!1)};R(18.6,27,1.35);for(let I=0;I<4;I++)rt(i,18.14+I*.3,.91,26.88,.1+I%2*.035);w(i,.48,.055,.32,g.red,18.73,.94,27.16);for(let I=0;I<9;I++){const F=I*2.4,O=E(i,.09,.018,.025,g.leafLight,18.73+Math.sin(F)*.15,.99+a()*.035,27.16+Math.cos(F)*.09,6);O.rotation.y=F}x(17.74,27.22,.22),x(17.9,27.6,.27),x(18.29,27.65,.2),b(19.12,28.16,.94),R(29.45,18.25,1.55),w(i,.37,.14,.31,g.iron,29.32,1.01,18.26),w(i,.18,.18,.19,g.iron,29.32,1.12,18.26),w(i,.66,.11,.29,g.iron,29.29,1.26,18.26);const C=T(i,new _s(.15,.34,8),g.iron,29.8,1.27,18.26);C.rotation.z=-Math.PI/2,w(i,.15,.09,.15,g.iron,28.97,1.3,18.25),L(i,[28.89,.94,18.4],[29.12,.98,18.4],.025,g.wood);for(const I of[-.54,.54])L(i,[31.18+I,.05,18.05],[31.18+I,1.93,17.87],.038,g.wood);L(i,[30.58,.56,17.99],[31.8,.56,17.99],.035,g.red),L(i,[30.58,1.58,17.91],[31.8,1.58,17.91],.035,g.red);for(let I=0;I<3;I++){const F=30.83+I*.34;L(i,[F,.12,18.04],[F,2.2,17.85],.021,g.wood);const O=T(i,new _s(.085,.32,4),g.iron,F,2.32,17.84);O.scale.z=.3,y(i,.04,.04,.09,g.gold,F,2.13,17.85,8)}b(32.26,18.05,1.07)}function Ie(b,x,R){const C=new Je;C.position.set(x,0,R),b.add(C);const I=[new D(0,0,0),new D(-.15,1.3,.06),new D(.1,2.3,0),new D(.4,3.25,.1)];T(C,new fn(new yn(I),14,.16,8,!1),g.bark);const F=new ps(new Bn(1,6,4),g.leafLight,1400);let O=0;for(let N=0;N<14;N++){const z=N*2.399,K=1.2+a()*.8,ie=new D(Math.sin(z)*K,2.9+a()*.65,Math.cos(z)*K),re=[new D(.15,2.3,0),new D(ie.x*.6,ie.y+.45,ie.z*.6),ie];T(C,new fn(new yn(re),12,.035,6,!1),g.bark);for(let ce=0;ce<5;ce++){const me=ie.clone().add(new D((a()-.5)*.65,0,(a()-.5)*.65)),Y=.95+a()*1.35,oe=new yn([me,new D(me.x+.12,me.y-Y*.55,me.z+.07),new D(me.x+.2,me.y-Y,me.z+.12)]);T(C,new fn(oe,9,.008,4,!1),g.leafDark,0,0,0,!1);for(let H=0;H<20;H++){const ue=oe.getPoint(H/20);v.position.set(ue.x+(H%2?.065:-.065),ue.y,ue.z),v.rotation.set(.4,z+H*.2,.2),v.scale.set(.065,.035,.125),v.updateMatrix(),F.setMatrixAt(O++,v.matrix)}}}F.receiveShadow=!0,F.castShadow=!1,C.add(F),qs(C)}function we(b,x,R,C=1){const I=new Je;I.position.set(x,0,R),I.scale.setScalar(C),b.add(I),he(I,0,0,.7);const F=T(I,new Nn(.45,.16,10,28),g.stoneLight,0,.92,0);F.scale.set(.8,1.55,.68),F.rotation.z=-.17,E(I,.36,.58,.25,g.stoneDark,-.32,.56,.04,12),E(I,.24,.38,.19,g.stoneLight,.25,1.42,.01,12),E(I,.39,.09,.24,g.moss,-.04,.38,.06,10)}function Ge(b,x){const R=new Je,C=b.x+(b.w-1)/2,I=b.y+(b.h-1)/2;R.position.set(C,0,I),n.add(R);const F=b.w-.35,O=b.h-.35,N=x===0?4.05:x===1?3.1:2.65,z=[g.plaster,g.plasterGray,g.plasterWarm,g.plaster][x];B(R,F+.25,.34,O+.25,g.stoneDark,0,.11,0),B(R,F,.2,O,g.stone,0,.32,0),w(R,F-.42,N-.5,O-.45,z,0,N/2+.25,-.1),w(R,F-.32,.12,1.1,g.wood,0,.48,O/2-.35);for(let Y=0;Y<3;Y++)w(R,2.3-Y*.15,.1,.33,g.stoneLight,0,.07+Y*.11,O/2-.12-Y*.27);const K=x===0?5:4;for(let Y=0;Y<K;Y++){const oe=(Y/(K-1)-.5)*(F-.45);y(R,.2,.24,.22,g.stoneDark,oe,.57,O/2-.33,8),y(R,.12,.15,N-.5,g.red,oe,N/2+.4,O/2-.33,10),y(R,.19,.19,.1,g.gold,oe,N-.06,O/2-.33,8),w(R,.42,.19,.3,g.red,oe,N+.08,O/2-.33),w(R,.66,.11,.25,g.wood,oe,N+.25,O/2-.32),w(R,.23,.12,.65,g.redLight,oe,N+.35,O/2-.24),L(R,[oe,N-.6,O/2-.33],[oe+.4,N+.02,O/2-.33],.045,g.gold),L(R,[oe,N-.6,O/2-.33],[oe-.4,N+.02,O/2-.33],.045,g.gold)}for(const Y of[-1,1])w(R,.15,N-.5,O-.35,g.red,Y*(F/2-.25),N/2+.3,-.1),ye(R,Y*(F/2-.14),N*.61,-.5,1.6,1.1,!0),ye(R,Y*(F*.31),N*.6,O/2-.3,1.3,1.15),w(R,.15,N-.2,.15,g.red,Y*(F/2-.2),N/2+.3,-O/2+.2);w(R,F+.1,.22,.24,g.red,0,N+.08,O/2-.23),w(R,F+.1,.18,.24,g.gold,0,N+.24,O/2-.23);for(const Y of[-1,1]){w(R,.73,2,.09,g.red,Y*.39,1.48,O/2-.24);for(let H=0;H<3;H++){w(R,.57,.38,.035,g.redLight,Y*.39,.86+H*.55,O/2-.175);for(let ue=0;ue<2;ue++)E(R,.027,.027,.03,g.gold,Y*.39-.18+ue*.36,.86+H*.55,O/2-.14)}const oe=U(R,.065,.015,g.gold,Y*.16,1.48,O/2-.11);oe.rotation.x=.15}const ie=g.woodDark;w(R,1.85,.48,.12,ie,0,N-.12,O/2-.1);for(let Y=-1;Y<=1;Y++){const oe=w(R,.16,.16,.03,g.gold,Y*.5,N-.12,O/2-.025);oe.rotation.z=Math.PI/4,w(R,.035,.27,.04,g.gold,Y*.5,N-.12,O/2+.005)}const re=x===2?g.roofRust:x===1?g.roofLight:g.roof;if($(R,F+1.05,O+.95,N+.36,x===0?1.65:1.18,re),x===0){w(R,5.6,1.55,3.75,g.red,0,N+1.85,-.12);for(const Y of[-1,1]){w(R,5.9,.18,.18,g.gold,0,N+2.48,Y*1.9);for(let oe=0;oe<7;oe++)ye(R,(oe-3)*.72,N+1.92,Y*1.91,.5,.84)}$(R,6.6,4.9,N+2.53,1.2,g.roofDark),w(R,3.45,1.13,2.45,g.red,0,N+3.8,-.1);for(let Y=-1;Y<=1;Y++)ye(R,Y*.88,N+3.83,1.18,.6,.64);$(R,4.65,3.65,N+4.35,1.05,g.roof),y(R,.07,.12,1.05,g.gold,0,N+5.8,-.05,10);for(let Y=0;Y<4;Y++)E(R,.15-Y*.025,.06,.15-Y*.025,g.gold,0,N+5.45+Y*.18,-.05,10);E(R,.11,.16,.11,g.gold,0,N+6.32,-.05,10);for(const Y of[-1,1]){B(R,.74,.3,.74,g.stoneDark,Y*(F/2-.15),.47,O/2-.15),E(R,.3,.38,.43,g.stone,Y*(F/2-.15),.91,O/2-.15),E(R,.26,.28,.24,g.stoneLight,Y*(F/2-.15),1.36,O/2+.02);for(let oe=0;oe<6;oe++)E(R,.09,.11,.09,g.stoneDark,Y*(F/2-.15)+Math.cos(oe)*.22,1.35+Math.sin(oe)*.2,O/2-.01)}}else if(x===1){w(R,F-.9,.16,.65,g.wood,0,N-.25,O/2-.15);for(let Y=0;Y<11;Y++)w(R,.045,.43,.045,g.red,(Y/10-.5)*(F-1),N,O/2+.13);w(R,F-.9,.06,.08,g.gold,0,N+.23,O/2+.13);for(let Y=0;Y<4;Y++)rt(R,-F/2+.65,.5,-1.3+Y*.58,.25+a()*.1)}else if(x===2)B(R,1.3,1.15,1.1,g.stoneDark,-F/2+.9,.95,O/2-1),T(R,new sh(.33,18),g.woodDark,-F/2+.9,.9,O/2-.43),w(R,.6,.24,.04,g.lantern,-F/2+.9,.75,O/2-.395),w(R,.65,3.5,.65,g.stoneDark,-F/2+.9,2.5,-O/2+.9),w(R,.83,.17,.83,g.stone,-F/2+.9,4.32,-O/2+.9),w(R,.95,.19,.45,g.iron,F/2-.9,.88,O/2-.9),w(R,.36,.49,.33,g.iron,F/2-.9,.6,O/2-.9),w(R,.6,.14,.5,g.wood,F/2-.9,.37,O/2-.9);else{const Y=w(R,F-1,.07,.85,g.clothRed,0,2.15,O/2-.15);Y.rotation.x=.12;for(let oe=0;oe<9;oe++)w(R,.26,.025,.84,g.cloth,(oe/8-.5)*(F-1.6),2.2,O/2-.15);for(let oe of[-1,1])y(R,.43,.43,.1,g.wood,oe*1.8,1.1,O/2-.65,12),y(R,.07,.12,.62,g.red,oe*1.8,.74,O/2-.65,8),rt(R,oe*1.8,1.17,O/2-.65,.12)}const ce=new Je;ce.position.copy(R.position),r.add(ce),ge(ce,-F*.38,N-.05,O/2+.13,.42),ge(ce,F*.38,N-.05,O/2+.13,.42),x===0?(Xe(r,C-F*.35,N-.1,I+O/2+.11,.7,2.85,"龍門武院"),Xe(r,C+F*.35,N-.1,I+O/2+.11,.7,2.85,"萬古長青")):x===1?Xe(r,C+F*.4,N-.05,I+O/2+.13,.58,2.05,"百草生香"):x===3&&Xe(r,C-F*.39,N-.06,I+O/2+.13,.55,1.9,"清風明月"),qs(R);const me=[];R.traverse(Y=>{Y.isMesh&&(Array.isArray(Y.material)||(Y.material=Y.material.clone(),Y.material.transparent=!0,Y.material.userData.baseOpacity=Y.material.opacity,me.push(Y.material)))}),u.push({group:R,materials:me,x:C,z:I,w:F,d:O,opacity:1})}function rt(b,x,R,C,I=.3){const F=[[.18,0],[.36,.12],[.4,.4],[.28,.65],[.18,.7],[.2,.78]].map(([O,N])=>new de(O*I/.4,N*I/.4));T(b,new ta(F,12),g.ceramic,x,R,C),y(b,I*.5,I*.5,.04,g.wood,x,R+I*1.98,C,10)}function he(b,x,R,C,I=!0){const F=new rh(C,1),O=F.attributes.position;for(let z=0;z<O.count;z++){const K=.9+a()*.2;O.setXYZ(z,O.getX(z)*K,O.getY(z)*K*.64,O.getZ(z)*K)}F.computeVertexNormals();const N=T(b,F,g.stoneDark,x,C*.37,R);N.rotation.y=a()*7,N.scale.set(1.2,1,.8+a()*.4),I&&C>.4&&E(b,C*.55,C*.1,C*.5,g.moss,x-C*.15,C*.82,R+C*.05)}function pe(b,x,R,C=!1,I=1){const F=new Je;F.position.set(x,0,R),F.scale.setScalar(I),b.add(F);const O=[new D(0,0,0),new D(.1,1.1,.03),new D(-.12,2,-.06),new D(.08,3.25,.05)];T(F,new fn(new yn(O),10,.14,7,!1),g.bark);const N=new ps(new Bn(1,8,5),C?g.cherry:p("#c3ccb0",{roughness:1}),C?900:540);let z=0;for(let ie=0;ie<9;ie++){const re=ie*2.4+a()*.4,ce=1.7+ie*.18,me=1.25+a()*.65,Y=new D(Math.sin(re)*me,ce+.7+a()*.4,Math.cos(re)*me),oe=new D(Y.x*.48,ce+.32,Y.z*.48);L(F,[0,ce-.35,0],oe.toArray(),.075,g.bark,.045),L(F,oe.toArray(),Y.toArray(),.045,g.bark,.018);for(let H=0;H<2;H++){const ue=Y.clone().add(new D((a()-.5)*.9,.25+a()*.25,(a()-.5)*.8));L(F,oe.toArray(),ue.toArray(),.025,g.bark,.008)}for(let H=0;H<(C?100:60);H++){const ue=a()*Math.PI*2,se=Math.sqrt(a()),ve=(a()-.5)*.95;v.position.set(Y.x+Math.sin(ue)*se*(C?.92:.8),Y.y+ve,Y.z+Math.cos(ue)*se*(C?.78:.66)),v.rotation.set(a()*2,a()*6,a()*2);const Te=C?.14+a()*.075:.11+a()*.075;v.scale.set(Te,Te*(C?.7:.26),Te*(C?.9:.45)),v.updateMatrix(),N.setMatrixAt(z,v.matrix),N.setColorAt(z++,new ke(C?"#e9b4bf":"#6e8e63").multiplyScalar(.82+a()*.34))}}N.receiveShadow=!0,N.castShadow=!0,F.add(N);const K=6;for(let ie=0;ie<K;ie++){const re=ie/K*Math.PI*2;L(F,[0,.26,0],[Math.sin(re)*.45,.03,Math.cos(re)*.45],.07,g.bark,.015)}if(C)for(let ie=0;ie<14;ie++)d.push({x:x+(a()-.5)*4,z:R+(a()-.5)*4,y:a()*4,phase:a()*8});qs(F)}function _e(b,x,R,C=13){const I=new Je;I.position.set(x,0,R),b.add(I);const F=C*24,O=new ps(new Bn(1,5,3),g.leafLight,F);let N=0;for(let z=0;z<C;z++){const K=a()*6.28,ie=a()*.85,re=Math.sin(K)*ie,ce=Math.cos(K)*ie,me=2.5+a()*1.8;L(I,[re,0,ce],[re+.18,me,ce+.1],.033,g.bamboo,.018);for(let Y=.4;Y<me;Y+=.44)y(I,.042,.042,.025,g.bambooJoint,re+.18*Y/me,Y,ce+.1*Y/me,6);for(let Y=0;Y<3;Y++){const oe=me-.4-Y*.53,H=Y%2?-1:1,ue=re+H*(.5+a()*.3),se=ce+(a()-.5)*.8;L(I,[re,oe,ce],[ue,oe+.25,se],.015,g.bamboo,.006);for(let ve=0;ve<8;ve++)v.position.set(ue+(a()-.5)*.54,oe+.15+a()*.25,se+(a()-.5)*.5),v.rotation.set(a()*2,a()*6,a()*2),v.scale.set(.2,.018,.035),v.updateMatrix(),O.setMatrixAt(N++,v.matrix)}}O.receiveShadow=!0,O.castShadow=!1,I.add(O),qs(I)}function xe(b){const x=b.x+(b.w-1)/2,R=b.y+(b.h-1)/2,C=b.w-.08,I=b.h-.08,F=Ef(C,I,o?.65:1.15),O=T(i,new Ks(F,12),g.waterDeep,x,-.015,R,!1);O.rotation.x=-Math.PI/2;const N=T(r,new Ks(F,18),g.water,x,.036,R,!1);N.rotation.x=-Math.PI/2,N.userData.dynamic=!0,c.push(N);const z=2*(C+I);for(let K=0;K<z/.44;K++){const ie=K/(z/.44)*Math.PI*2,re=Math.sign(Math.sin(ie))*Math.pow(Math.abs(Math.sin(ie)),.4)*C*.49,ce=Math.sign(Math.cos(ie))*Math.pow(Math.abs(Math.cos(ie)),.4)*I*.49;he(i,x+re,R+ce,.22+a()*.16,!0)}for(let K=0;K<(o?7:13);K++){const ie=x+(a()-.5)*C*.65,re=R+(a()-.5)*I*.65,ce=y(i,.13+a()*.09,.13,.025,g.leaf,ie,.065,re,12);if(ce.rotation.y=a()*6,K%3===0){for(let me=0;me<5;me++){const Y=me*1.256,oe=E(i,.07,.055,.12,g.cherryLight,ie+Math.sin(Y)*.06,.13,re+Math.cos(Y)*.06);oe.rotation.y=Y}E(i,.045,.05,.045,g.gold,ie,.15,re)}}for(let K=0;K<3;K++){const ie=new Je;r.add(ie),E(ie,.07,.045,.25,K%2?g.clothRed:g.gold,0,0,0);const re=T(ie,new _s(.1,.2,3),g.clothRed,0,0,-.24);re.rotation.x=-Math.PI/2,f.push({group:ie,cx:x,cz:R,w:C*.32,d:I*.3,phase:a()*6,speed:.1+a()*.08})}for(let K=0;K<18;K++){const ie=x+(a()-.5)*C*.78,re=R-I*.43+a()*.23;for(let ce=0;ce<3;ce++){const me=ie+a()*.15,Y=re+a()*.15,oe=.4+a()*.5;L(i,[me,.02,Y],[me+.07,oe,Y],.013,g.grassDark,.005),ce===0&&y(i,.035,.035,.16,g.wood,me+.07,oe,Y,5)}}}function Se(){const{x:b,y:x}=e.portal,R=new Je;R.position.set(b,0,x),R.rotation.y=Math.PI/2,i.add(R);const C=o?g.red:g.stoneDark;for(const z of[-1,1]){B(R,.72,.22,.72,g.stone,z*2.05,.1,0),B(R,.5,.35,.5,g.stoneDark,z*2.05,.36,0),y(R,.19,.22,3.5,C,z*2.05,2.2,0,12),y(R,.25,.25,.12,g.gold,z*2.05,.65,0,10);for(const K of[-.3,.3])L(R,[z*2.05,2.6,0],[z*1.4,3.55,K],.075,g.wood)}w(R,4.7,.26,.34,C,0,3.95,0),w(R,4.7,.07,.38,g.gold,0,4.1,0),w(R,1.5,.56,.17,g.woodDark,0,3.72,.12);for(let z=-1;z<=1;z++){const K=w(R,.13,.2,.03,g.gold,z*.36,3.72,.22);K.rotation.z=.2}$(R,5.3,1.85,4.16,.76,o?g.roof:g.roofDark);const I=new Je;I.position.set(b,0,x),I.rotation.y=Math.PI/2,r.add(I),ge(I,-1.5,3.6,.1,.4),ge(I,1.5,3.6,.1,.4);const F=new Es({color:"#baae72",emissive:"#8eaf8a",emissiveIntensity:.5,metalness:.55,roughness:.4}),O=U(r,1.18,.045,F,b,.08,x);O.rotation.x=Math.PI/2;const N=U(r,.97,.018,F,b,.08,x);N.rotation.x=Math.PI/2;for(let z=0;z<12;z++){const K=z/12*Math.PI*2,ie=w(i,.1,.025,.24,g.gold,b+Math.sin(K)*1.4,.055,x+Math.cos(K)*1.4,!1);ie.rotation.y=K}}for(const[b,x]of e.obstacles.entries())if(x.type==="building")Ge(x,Math.min(b,3));else if(x.type==="water")xe(x);else if(x.type==="tree"){const R=x.x+.5,C=x.y+.5;o&&x.y>34&&x.x>30?_e(i,R,C,17):pe(i,R,C,o,o?1.12:1.25);for(let I=0;I<5;I++)he(i,R+(a()-.5)*1.3,C+(a()-.5)*1.3,.12+a()*.13,!1)}else if(x.type==="rock")for(let R=0;R<4;R++)he(i,x.x+a()*1.1,x.y+a()*1.1,.4+a()*.4);if(Se(),o){le(),Me(),te([18.4,4.55,19],[29.3,4.55,18.3],8,.38),te([18,3.95,28.8],[29.6,3.95,30.6],7,.34),Ie(i,7.35,23.35),we(i,10.25,24.9,.85);const b=new yc("#e8ad61",4,5,2);b.position.set(9.4,1.7,22.3),n.add(b);for(const[x,R]of[[11,13],[34,12],[12,36],[37,35]])B(i,.52,.2,.52,g.stoneDark,x,.11,R),y(i,.07,.1,2.35,g.wood,x,1.3,R,8),w(i,.65,.07,.08,g.gold,x+.15,2.5,R),ge(r,x+.32,2.2,R,.34);for(const[x,R]of[[10.8,17],[18,13.5],[28.3,13],[31.3,34.5]])rt(i,x,.02,R,.32),_e(i,x,R,4);for(let x=0;x<24;x++)for(const R of[0,47.5])B(i,1.95,.8,.45,g.stoneDark,x*2+.5,.32,R),w(i,1.98,.1,.57,g.roofDark,x*2+.5,.78,R),B(i,.45,.8,1.95,g.stoneDark,R,.32,x*2+.5),w(i,.57,.1,1.98,g.roofDark,R,.78,x*2+.5)}else{for(let R=0;R<16;R++){const C=R/16*Math.PI*2,I=31+a()*6;pe(i,24+Math.sin(C)*I,24+Math.cos(C)*I,!1,1.25+a()*.35)}_e(i,15.4,13.3,8),_e(i,29.5,27.4,8),B(i,1.6,.18,1.4,g.stoneDark,35.4,.12,34.5),B(i,.3,1.45,.32,g.stone,35,.84,34.5);const b=B(i,.3,1.4,.32,g.stone,35.7,.57,34.5);b.rotation.z=.7;const x=B(i,1.8,.23,.45,g.stoneDark,35.5,.35,35.2);x.rotation.y=-.25}const Oe=[],Ue=[],We=o?1500:700;for(let b=0;b<We;b++){const x=1+a()*46,R=1+a()*46,C=e.obstacles.some(N=>x>N.x-.5&&x<N.x+N.w-.5&&R>N.y-.5&&R<N.y+N.h-.5),I=Math.abs(R-(24+Math.sin((x-4)*.12)*1.1))<2.8,F=l.some(N=>((x-N.x)/(N.w*.47))**2+((R-N.z)/(N.d*.47))**2<1);o&&e.obstacles.some(N=>N.type==="building"&&x>N.x-.85&&x<N.x+N.w-.15&&R>N.y-.85&&R<N.y+N.h-.15);const O=o?F:!I&&(Math.sin(x*.54+R*.21)+Math.sin(R*.63-x*.13)>.28||e.obstacles.some(N=>N.type==="tree"&&Math.hypot(x-N.x,R-N.y)<3.5));if(!(C||!O)){for(let N=0;N<(o?3:1);N++)Oe.push({x:x+(a()-.5)*.15,z:R+(a()-.5)*.15,h:o?.12+a()*.3:.22+a()*.22,a:a()*Math.PI*2});b%(o?12:65)===0&&Ue.push({x,z:R})}}const Ye=o?new Bn(1,6,4):Ry(),V=new ps(Ye,g.grass,Oe.length);Oe.forEach((b,x)=>{v.position.set(b.x,o?b.h/2:-.074,b.z),v.rotation.set(.13,b.a,.13),v.scale.set(o?.1:.9,o?b.h*.32:b.h,o?.08:.9),v.updateMatrix(),V.setMatrixAt(x,v.matrix),V.setColorAt(x,new ke().setHSL(.22+a()*.05,.22,.35+a()*.12))}),V.material.side=Qt,V.receiveShadow=!0,i.add(V);for(const b of Ue)E(i,o?.05:.028,o?.05:.028,o?.05:.028,o?g.cherry:g.gold,b.x,o?.3:.15,b.z,5);const at=new ps(new Bn(1,5,3),g.cherryLight,d.length);r.add(at);for(let b=0;b<14;b++){const x=b/14*Math.PI*2,R=64+a()*8;T(i,new Bn(1,12,8),p(b%2?"#72816f":"#84917b"),24+Math.sin(x)*R,-2.8,24+Math.cos(x)*R,!1).scale.set(13+a()*8,7+a()*8,13+a()*8)}qs(i),s.add(n);let et=0;return{group:n,update(b=0,x){const R=Math.min(.1,Math.max(0,b-et));et=b,h.forEach(C=>{C.group.rotation.z=Math.sin(b*.9+C.phase)*.04,C.body.material.emissiveIntensity=1.05+Math.sin(b*2.4+C.phase)*.06}),_.forEach(C=>{const I=C.cloth.geometry.attributes.position;for(let F=0;F<I.count;F++){const O=C.original[F*3],N=C.original[F*3+1],z=(C.height*.5-N)/C.height;I.setXYZ(F,O,N,C.original[F*3+2]+Math.sin(b*1.45+C.phase+O*5-z*3)*.065*z*z)}I.needsUpdate=!0,C.cloth.geometry.computeVertexNormals(),C.group.rotation.z=Math.sin(b*.55+C.phase)*.008}),c.forEach((C,I)=>{C.position.y=.037+Math.sin(b*1.1+I)*.006,C.material.roughness=.26+Math.sin(b*.5)*.03}),f.forEach(C=>{const I=b*C.speed+C.phase;C.group.position.set(C.cx+Math.sin(I)*C.w,.075,C.cz+Math.cos(I)*C.d),C.group.rotation.y=Math.atan2(Math.cos(I)*C.w,-Math.sin(I)*C.d)}),d.forEach((C,I)=>{const F=((C.y-b*.22)%4.2+4.2)%4.2;v.position.set(C.x+Math.sin(b*.4+C.phase)*.4,F,C.z+Math.cos(b*.3+C.phase)*.25),v.rotation.set(b*.6+C.phase,C.phase,b*.7),v.scale.set(.065,.018,.045),v.updateMatrix(),at.setMatrixAt(I,v.matrix)}),d.length&&(at.instanceMatrix.needsUpdate=!0),x&&u.forEach(C=>{const I=x.x-C.x,F=x.y-C.z,N=I<C.w*.55&&F<C.d*.55&&I>-C.w*.7-2&&F>-C.d*.7-2&&I+F<0?.3:1;C.opacity+=(N-C.opacity)*Math.min(1,R*8);for(const z of C.materials)z.opacity=C.opacity*(z.userData.baseOpacity??1),z.depthWrite=C.opacity>.8})},dispose(){s.remove(n);const b=new Set,x=new Set;n.traverse(R=>{R.geometry&&b.add(R.geometry),R.material&&(Array.isArray(R.material)?R.material:[R.material]).forEach(C=>x.add(C))}),b.forEach(R=>R.dispose()),x.forEach(R=>R.dispose()),m.forEach(R=>R.dispose()),Object.values(g).forEach(R=>R.dispose())}}}function Ry(){const s=[],e=[],t=[];for(let i=0;i<7;i++){const r=i*2.399,a=.18+i%3*.055,o=.65+i%4*.12,l=s.length/3;for(let c=0;c<=5;c++){const h=c/5,d=Math.sin(Math.PI*h)*.04+.003,f=a*h*h;for(const u of[-1,0,1]){const _=Math.sin(r)*f+Math.cos(r)*d*u,S=Math.cos(r)*f-Math.sin(r)*d*u;s.push(_,o*h-h*h*.17+(u===0?.018:0),S),e.push((u+1)/2,h)}if(c<5)for(let u=0;u<2;u++){const _=l+c*3+u;t.push(_,_+3,_+1,_+1,_+3,_+4)}}}const n=new vt;return n.setAttribute("position",new He(s,3)),n.setAttribute("uv",new He(e,2)),n.setIndex(t),n.computeVertexNormals(),n}function Cy(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ha(s){const e=document.createElement("canvas");e.width=e.height=512,s(e.getContext("2d"),512);const t=new kd(e);return t.colorSpace=It,t.wrapS=t.wrapT=Zn,t.anisotropy=4,t}function Ef(s,e,t){const n=new ns,i=-s/2,r=-e/2;return n.moveTo(i+t,r),n.lineTo(i+s-t,r),n.quadraticCurveTo(i+s,r,i+s,r+t),n.lineTo(i+s,r+e-t),n.quadraticCurveTo(i+s,r+e,i+s-t,r+e),n.lineTo(i+t,r+e),n.quadraticCurveTo(i,r+e,i,r+e-t),n.lineTo(i,r+t),n.quadraticCurveTo(i,r,i+t,r),n}function Py(s,e,t,n){const i=Math.min(n,e/3,t/3,s/3),r=Ef(s-i*2,e-i*2,i),a=new cr(r,{depth:Math.max(.01,t-i*2),bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:1,steps:1,curveSegments:2});return a.translate(0,0,-t/2+i),a}function qs(s){s.updateMatrixWorld(!0);const e=s.matrixWorld.clone().invert(),t=new Map,n=[];s.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||Array.isArray(i.material)||i.userData.dynamic)return;let r=i.parent;for(;r&&r!==s;){if(r.userData.dynamic)return;r=r.parent}const a=`${i.material.uuid}/${i.castShadow?1:0}/${i.receiveShadow?1:0}`;let o=t.get(a);o||t.set(a,o={geometries:[],material:i.material,cast:i.castShadow,receive:i.receiveShadow});let l=i.geometry.clone();if(l.index){const c=l;l=l.toNonIndexed(),c.dispose()}l.attributes.uv||l.setAttribute("uv",new He(new Float32Array(l.attributes.position.count*2),2));for(const c of Object.keys(l.attributes))["position","normal","uv","color"].includes(c)||l.deleteAttribute(c);l.applyMatrix4(e.clone().multiply(i.matrixWorld)),o.geometries.push(l),n.push(i)});for(const i of n)i.removeFromParent(),i.geometry.dispose();for(const i of t.values()){if(!i.geometries.length)continue;const r=ff(i.geometries,!1);if(i.geometries.forEach(o=>o.dispose()),!r)continue;r.computeBoundingSphere();const a=new $t(r,i.material);a.castShadow=i.cast,a.receiveShadow=i.receive,s.add(a)}}const vs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Iy=new pr(-1,1,1,-1,0,1);class Ly extends vt{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}}const Ny=new Ly;class No{constructor(e){this._mesh=new $t(Ny,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Af extends Rs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ri.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new No(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class id extends Rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Dy extends Rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Uy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Af(vs),this.copyPass.material.blending=ln,this.timer=new wm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(a instanceof id?n=!0:a instanceof Dy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fy extends Rs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class Oy{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,f=l-d,u=c-d,_=e-f,S=t-u;let m,p;_>S?(m=1,p=0):(m=0,p=1);const g=_-m+h,A=S-p+h,M=_-1+2*h,v=S-1+2*h,T=l&255,w=c&255,y=this.perm[T+this.perm[w]]%12,E=this.perm[T+m+this.perm[w+p]]%12,L=this.perm[T+1+this.perm[w+1]]%12;let U=.5-_*_-S*S;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[y],_,S));let B=.5-g*g-A*A;B<0?i=0:(B*=B,i=B*B*this._dot(this.grad3[E],g,A));let G=.5-M*M-v*v;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[L],M,v)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),f=Math.floor(n+c),u=1/6,_=(h+d+f)*u,S=h-_,m=d-_,p=f-_,g=e-S,A=t-m,M=n-p;let v,T,w,y,E,L;g>=A?A>=M?(v=1,T=0,w=0,y=1,E=1,L=0):g>=M?(v=1,T=0,w=0,y=1,E=0,L=1):(v=0,T=0,w=1,y=1,E=0,L=1):A<M?(v=0,T=0,w=1,y=0,E=1,L=1):g<M?(v=0,T=1,w=0,y=0,E=1,L=1):(v=0,T=1,w=0,y=1,E=1,L=0);const U=g-v+u,B=A-T+u,G=M-w+u,k=g-y+2*u,X=A-E+2*u,ee=M-L+2*u,Q=g-1+3*u,ae=A-1+3*u,J=M-1+3*u,q=h&255,$=d&255,ge=f&255,ye=this.perm[q+this.perm[$+this.perm[ge]]]%12,Ve=this.perm[q+v+this.perm[$+T+this.perm[ge+w]]]%12,qe=this.perm[q+y+this.perm[$+E+this.perm[ge+L]]]%12,Xe=this.perm[q+1+this.perm[$+1+this.perm[ge+1]]]%12;let te=.6-g*g-A*A-M*M;te<0?i=0:(te*=te,i=te*te*this._dot3(this.grad3[ye],g,A,M));let le=.6-U*U-B*B-G*G;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[Ve],U,B,G));let Me=.6-k*k-X*X-ee*ee;Me<0?a=0:(Me*=Me,a=Me*Me*this._dot3(this.grad3[qe],k,X,ee));let Ie=.6-Q*Q-ae*ae-J*J;return Ie<0?o=0:(Ie*=Ie,o=Ie*Ie*this._dot3(this.grad3[Xe],Q,ae,J)),32*(i+r+a+o)}noise4d(e,t,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,f,u,_;const S=(e+t+n+i)*l,m=Math.floor(e+S),p=Math.floor(t+S),g=Math.floor(n+S),A=Math.floor(i+S),M=(m+p+g+A)*c,v=m-M,T=p-M,w=g-M,y=A-M,E=e-v,L=t-T,U=n-w,B=i-y,G=E>L?32:0,k=E>U?16:0,X=L>U?8:0,ee=E>B?4:0,Q=L>B?2:0,ae=U>B?1:0,J=G+k+X+ee+Q+ae,q=a[J][0]>=3?1:0,$=a[J][1]>=3?1:0,ge=a[J][2]>=3?1:0,ye=a[J][3]>=3?1:0,Ve=a[J][0]>=2?1:0,qe=a[J][1]>=2?1:0,Xe=a[J][2]>=2?1:0,te=a[J][3]>=2?1:0,le=a[J][0]>=1?1:0,Me=a[J][1]>=1?1:0,Ie=a[J][2]>=1?1:0,we=a[J][3]>=1?1:0,Ge=E-q+c,rt=L-$+c,he=U-ge+c,pe=B-ye+c,_e=E-Ve+2*c,xe=L-qe+2*c,Se=U-Xe+2*c,Oe=B-te+2*c,Ue=E-le+3*c,We=L-Me+3*c,Ye=U-Ie+3*c,V=B-we+3*c,at=E-1+4*c,et=L-1+4*c,b=U-1+4*c,x=B-1+4*c,R=m&255,C=p&255,I=g&255,F=A&255,O=o[R+o[C+o[I+o[F]]]]%32,N=o[R+q+o[C+$+o[I+ge+o[F+ye]]]]%32,z=o[R+Ve+o[C+qe+o[I+Xe+o[F+te]]]]%32,K=o[R+le+o[C+Me+o[I+Ie+o[F+we]]]]%32,ie=o[R+1+o[C+1+o[I+1+o[F+1]]]]%32;let re=.6-E*E-L*L-U*U-B*B;re<0?h=0:(re*=re,h=re*re*this._dot4(r[O],E,L,U,B));let ce=.6-Ge*Ge-rt*rt-he*he-pe*pe;ce<0?d=0:(ce*=ce,d=ce*ce*this._dot4(r[N],Ge,rt,he,pe));let me=.6-_e*_e-xe*xe-Se*Se-Oe*Oe;me<0?f=0:(me*=me,f=me*me*this._dot4(r[z],_e,xe,Se,Oe));let Y=.6-Ue*Ue-We*We-Ye*Ye-V*V;Y<0?u=0:(Y*=Y,u=Y*Y*this._dot4(r[K],Ue,We,Ye,V));let oe=.6-at*at-et*et-b*b-x*x;return oe<0?_=0:(oe*=oe,_=oe*oe*this._dot4(r[ie],at,et,b,x)),27*(h+d+f+u+_)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}const Va={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new de},cameraProjectionMatrix:{value:new Qe},cameraInverseProjectionMatrix:{value:new Qe},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Ga={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Wa={uniforms:{tDiffuse:{value:null},resolution:{value:new de}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Qi extends Rs{constructor(e,t,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new ir;a.format=es,a.type=tr,this.normalRenderTarget=new en(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:tn,depthTexture:a}),this.ssaoRenderTarget=new en(this.width,this.height,{type:tn,depthBuffer:!1}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Wt({defines:Object.assign({},Va.defines),uniforms:Ri.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:ln}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new tm,this.normalMaterial.blending=ln,this.blurMaterial=new Wt({defines:Object.assign({},Wa.defines),uniforms:Ri.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Wt({defines:Object.assign({},Ga.defines),uniforms:Ri.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:ln}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:Ri.clone(vs.uniforms),vertexShader:vs.vertexShader,fragmentShader:vs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:gd,blendDst:Il,blendEquation:Zi,blendSrcAlpha:md,blendDstAlpha:Il,blendEquationAlpha:Zi}),this._fsQuad=new No(null),this._originalClearColor=new ke}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Qi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Qi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Qi.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Qi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ln,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Qi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=dd,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new D;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=bs.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){const n=new Oy,i=16,r=new Float32Array(i);for(let a=0;a<i;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new Eo(r,4,4,wo,Rn),this.noiseTexture.wrapS=Zn,this.noiseTexture.wrapT=Zn,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}Qi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const By={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ar extends Rs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,a,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new en(r,a,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new en(r,a,{type:tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=By;this.highPassUniforms=Ri.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ri.clone(vs.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:vs.vertexShader,fragmentShader:vs.fragmentShader,premultipliedAlpha:!0,blending:lo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new No(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Wt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ar.BlurDirectionX=new de(1,0);ar.BlurDirectionY=new de(0,1);const Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ky extends Rs{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ri.clone(Xa.uniforms),this.material=new Zd({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new No(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function zy(s,e,t){const n=s.getSize(new de),i=new en(n.x,n.y,{type:tn,samples:4}),r=new Uy(s,i);r.addPass(new Fy(e,t));const a=new Qi(e,t,n.x,n.y,12);a.kernelRadius=.55,a.minDistance=.001,a.maxDistance=.025,r.addPass(a);const o=new ar(n,.19,.5,1.75);r.addPass(o);const l=new Af({uniforms:{tDiffuse:{value:null}},vertexShader:`varying vec2 vUv;
      void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){
        vec4 pixel=texture2D(tDiffuse,vUv);
        float luma=dot(pixel.rgb,vec3(.2126,.7152,.0722));
        vec3 c=mix(vec3(luma),pixel.rgb,1.06);
        c*=mix(vec3(.91,.99,1.08),vec3(1.055,1.015,.945),smoothstep(.08,.8,luma));
        float vignette=1.-.12*smoothstep(.2,.8,length((vUv-.5)*vec2(1.15,1.)));
        gl_FragColor=vec4(c*vignette,pixel.a);
      }`});return r.addPass(l),r.addPass(new ky),{render(c){r.render(c)},resize(c,h){a.enabled=c>=700,r.setSize(c,h)},dispose(){for(const c of r.passes)c.dispose?.();r.dispose()}}}const sd={trojan:{plate:"#772e31",dark:"#231c26",cloth:"#34202d",metal:"#c5a15c",edge:"#f4d996",gem:"#cc6652"},warrior:{plate:"#526f83",dark:"#25313c",cloth:"#354b61",metal:"#acb8bd",edge:"#e3ded0",gem:"#79bacd"},archer:{plate:"#37756c",dark:"#243a31",cloth:"#355348",metal:"#bf9f5e",edge:"#f0d7a1",gem:"#82d2aa"},fire:{plate:"#953d35",dark:"#3a2029",cloth:"#b5a98e",metal:"#d3ad64",edge:"#f3dab0",gem:"#f5a160"},water:{plate:"#327d86",dark:"#153946",cloth:"#649b9d",metal:"#c4c4ac",edge:"#f0e2ba",gem:"#7de0d0"}},Xt=(s,e=0,t=.7,n={})=>new Es({color:s,metalness:e,roughness:t,...n}),Ur=s=>s?.appearance||s||null;let ds;function Rf(){return ds||(ds=new So().load("./art/materials/dragon-brocade.webp"),ds.colorSpace=It,ds.wrapS=ds.wrapT=Zn,ds.anisotropy=4),ds}function Pn(s,e,t,n=[0,0,0],i=null){const r=new $t(e,t);return r.position.set(...n),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}function Mi(s,e,t,n,i=14){return Pn(s,new Bn(1,i,Math.max(8,i-4)),e,t,n)}function Lt(s,e,t,n=.008,i=!1,r=32){const a=new yn(e.map(o=>new D(...o)),i);return Pn(s,new fn(a,r,n,5,i),t)}function bi(s,e,t,n,i,r=n){const a=new D(...e),o=new D(...t),l=o.clone().sub(a),c=Pn(s,new Cn(r,n,l.length(),10),i,a.add(o).multiplyScalar(.5).toArray());return c.quaternion.setFromUnitVectors(new D(0,1,0),l.normalize()),c}function an(s,e,t,n=.012,i=.004){const r=new ns;return e.forEach((a,o)=>o?r.lineTo(...a):r.moveTo(...a)),r.closePath(),Pn(s,new cr(r,{depth:n,bevelEnabled:i>0,bevelSize:i,bevelThickness:i,bevelSegments:2,steps:1,curveSegments:3}),t)}function Yi(s,e,t,n=-Math.PI,i=Math.PI,r=40){const a=[],o=[],l=[];for(let h=0;h<e.length;h++){const[d,f,u,_=0]=e[h];for(let S=0;S<=r;S++){const m=n+(i-n)*S/r;if(a.push(Math.sin(m)*f,d,Math.cos(m)*u+_),o.push(S/r,h/(e.length-1)),h<e.length-1&&S<r){const p=h*(r+1)+S;l.push(p,p+1,p+r+1,p+1,p+r+2,p+r+1)}}}const c=new vt;return c.setAttribute("position",new He(a,3)),c.setAttribute("uv",new He(o,2)),c.setIndex(l),c.computeVertexNormals(),Pn(s,c,t)}function Ti(s,e,t,n,i,r=[Math.PI/2,0,0],a=[1,1,1]){const o=Pn(s,new Nn(e,t,5,28),n,i,a);return o.rotation.set(...r),o}function ni(s,e,t,n,i,r=-Math.PI,a=Math.PI,o=0,l=.006){return Lt(s,Array.from({length:33},(c,h)=>{const d=r+(a-r)*h/32;return[Math.sin(d)*t,e,Math.cos(d)*n+o]}),i,l)}function Tl(s,e,t,n=.007){return Mi(s,t,e,[n,n,n*.5],8)}function Ji(s,e,t,n=.026){const i=Pn(s,new Cn(n*1.12,n*1.12,.012,8),t.gold,e);return i.rotation.x=Math.PI/2,Pn(s,new Fi(n),t.gem,[e[0],e[1],e[2]+.011],[1,1.3,.45])}function so(s,e,t,n,i,r,a=0,o=0){const l=an(s,[[e-n*.42,t],[e+n*.38,t+.012],[e+n*.5+o,t-i*.38],[e+o,t-i],[e-n*.43+o,t-i*.55]],r,.009,.004);return l.position.z=a,l}function Hy(s,e,t){const n=s.classId||s.class||(e==="npc"?s.role==="shop"?"water":s.role==="compose"?"fire":"warrior":"trojan"),i={...sd[n]||sd.trojan};t?.model==="heavy-armor"&&(i.plate=t.color||i.plate);const r=n==="warrior"?.78:.65;return{palette:i,key:n,plate:Xt(i.plate,.44,.39),dark:Xt(i.dark,.14,.72),cloth:Xt(i.cloth,.02,.87,{side:Qt}),gold:Xt(i.metal,r,.34),edge:Xt(i.edge,.76,.28),steel:Xt("#b4c7c8",.8,.27),gem:Xt(i.gem,.26,.19,{emissive:i.gem,emissiveIntensity:.2}),silk:Xt("#ffffff",.02,.77,{map:Rf(),side:Qt})}}function Cf(s){s.updateMatrixWorld(!0);const e=s.matrixWorld.clone().invert(),t=new Map,n=[];s.traverse(i=>{if(!i.isMesh||i.userData.dynamic||Array.isArray(i.material))return;let r=i.parent;for(;r&&r!==s;){if(r.userData.dynamic)return;r=r.parent}let a=i.geometry.clone();if(a.index){const l=a;a=a.toNonIndexed(),l.dispose()}for(const l of Object.keys(a.attributes))["position","normal","uv"].includes(l)||a.deleteAttribute(l);a.attributes.uv||a.setAttribute("uv",new He(new Float32Array(a.attributes.position.count*2),2));const o=e.clone().multiply(i.matrixWorld);if(a.applyMatrix4(o),o.determinant()<0)for(const l of Object.values(a.attributes)){const c=l.array,h=l.itemSize;for(let d=0;d<l.count;d+=3)for(let f=0;f<h;f++){const u=(d+1)*h+f,_=(d+2)*h+f,S=c[u];c[u]=c[_],c[_]=S}}t.has(i.material)||t.set(i.material,[]),t.get(i.material).push(a),n.push(i)}),n.forEach(i=>{i.removeFromParent(),i.geometry.dispose()});for(const[i,r]of t){const a=ff(r,!1);r.forEach(o=>o.dispose()),a&&Pn(s,a,i)}}function Vy({model:s,bones:e,nodes:t,player:n={},kind:i="player",armor:r,boots:a,helmet:o,garment:l}){const c=Ur(r),h=Ur(a),d=Ur(o),f=Ur(l),u=Hy(n,i,c),_=[],S=[],m=[],p=["fire","water"].includes(u.key),g=c?.model==="heavy-armor"||u.key==="warrior";s.updateMatrixWorld(!0);function A(v,T,w){if(!T)return null;const y=new Je;return y.name=`Martial_${v}`,s.add(y),w(y),Cf(y),s.updateMatrixWorld(!0),T.attach(y),_.push(y),y}for(const[v,T]of Object.entries(t||{}))/Gear_Armor_(Pauldron|Bracers|Belt|Sash)|Gear_Hood/.test(v)&&(T.visible=!1);if(d&&t.Hair_Topknot&&(t.Hair_Topknot.visible=!1),!d&&t.Hair_Topknot&&(t.Hair_Topknot.visible=!0),c||i==="npc"||i==="enemy"){A("Cuirass",e.spine_03,v=>{Yi(v,[[1.045,.15,.112],[1.12,.175,.128],[1.27,.225,.15],[1.405,.242,.135],[1.455,.19,.11]],u.dark),Yi(v,[[1.19,.19,.145],[1.29,.229,.158],[1.39,.237,.147],[1.425,.19,.12]],u.plate,-1.37,1.37,26),ni(v,1.423,.193,.124,u.gold,-1.42,1.42,0,.008),ni(v,1.195,.193,.15,u.gold,-1.42,1.42,0,.007);const T=p||u.key==="archer"?3:5,w=g?12:u.key==="archer"?8:10;for(let E=0;E<T;E++){const L=1.22-E*.037,U=.195-E*.007,B=.148-E*.004;for(let G=0;G<w;G++){const k=(G/(w-1)-.5)*2.7,X=new Je;X.position.set(Math.sin(k)*U,L,Math.cos(k)*B),X.rotation.y=k,v.add(X),so(X,0,0,.049,.052,(E+G)%3?u.plate:u.dark,0),bi(X,[-.02,-.006,.014],[.02,-.006,.014],.003,u.gold),Tl(X,[0,-.013,.018],u.edge,.004)}}const y=new Je;y.position.set(0,1.324,.166),v.add(y);for(const E of[-1,1]){an(y,[[E*.012,.017],[E*.055,.074],[E*.142,.084],[E*.104,.044],[E*.14,.014],[E*.077,.025],[E*.053,-.031],[E*.018,-.014]],u.gold,.008,.003);for(let L=0;L<3;L++)Lt(y,[[E*.03,.008-L*.005,.015],[E*.062,.04-L*.015,.018],[E*(.12-L*.012),.063-L*.017,.012]],u.edge,.0025,!1,12)}Ji(y,[0,.012,.025],u,.027),Yi(v,[[1.415,.122,.095],[1.467,.112,.09],[1.49,.104,.085]],u.silk,-2.5,2.5,28),ni(v,1.485,.107,.088,u.gold,-2.55,2.55,0,.004),Lt(v,[[-.11,1.45,.12],[-.077,1.405,.166],[.045,1.27,.168]],u.gold,.006),Lt(v,[[.11,1.45,.12],[.075,1.4,.166],[-.05,1.27,.169]],u.edge,.004);for(let E=0;E<4;E++){const L=so(v,0,1.4-E*.06,.1+E*.015,.075,u.plate,-.155);L.rotation.y=Math.PI}});for(const v of[-1,1]){const T=v<0?"r":"l";A(`DragonShoulder_${T}`,e[`upperarm_${T}`],y=>{const E=new Je;E.position.set(v*.235,1.443,-.059),E.scale.set(v*(p?.72:u.key==="archer"?.8:1),p?.82:1,p?.86:1),y.add(E),Mi(E,u.dark,[.035,.012,0],[g?.195:.17,.075,.15]);for(let L=0;L<3;L++){const U=.015+L*.045,B=.07-L*.037;an(E,[[U-.095,B],[U-.02,B+.045],[U+.108,B+.034],[U+.203,B-.005],[U+.132,B-.029],[U+.162,B-.075],[U+.043,B-.043],[U-.072,B-.035]],L===1?u.gold:u.plate,.024,.008).position.z=-.065+L*.017,Lt(E,[[U-.08,B+.012,.002],[U+.01,B+.046,.025],[U+.103,B+.029,.025],[U+.175,B-.004,.005]],u.edge,.005,!1,18)}Mi(E,u.gold,[.055,.029,.103],[.086,.04,.046]),Mi(E,u.plate,[.065,.014,.135],[.06,.026,.029]),Lt(E,[[-.015,.023,.11],[.025,.079,.125],[.078,.075,.12],[.13,.038,.105]],u.edge,.007,!1,18),Lt(E,[[.015,.069,.08],[-.013,.117,.045],[-.083,.14,-.015],[-.114,.11,-.07]],u.gold,.011,!1,20),Mi(E,u.gem,[.027,.043,.147],[.012,.008,.009],8);for(let L=0;L<4;L++)Tl(E,[.015+L*.037,-.007-L*.012,.106],u.edge,.006)}),A(`Bracer_${T}`,e[`lowerarm_${T}`],y=>{const E=v*.515,L=v*.69,U=1.441,B=-.067;bi(y,[E,U,B],[L,U,B],.058,u.dark,.049);for(const k of[E,L])Ti(y,.059,.008,u.gold,[k,U,B],[0,Math.PI/2,0]);const G=new Je;G.position.set(v*.6,U,B+.055),y.add(G),an(G,[[-.095,-.038],[-.078,.045],[0,.062],[.092,.037],[.081,-.038],[0,-.052]],u.plate,.016,.006);for(let k=0;k<3;k++)Lt(G,[[-.075+k*.011,-.025,.023],[-.03+k*.015,.015,.028],[.045+k*.012,.025,.026]],k%2?u.edge:u.gold,.004,!1,12);Ji(G,[0,.003,.033],u,.014),p&&(Pn(y,new Cn(.102,.061,.16,24,1,!0),u.silk,[v*.63,U,B]).quaternion.setFromUnitVectors(new D(0,1,0),new D(v,0,0)),Ti(y,.103,.006,u.gold,[v*.71,U,B],[0,Math.PI/2,0]),Ti(y,.094,.003,u.edge,[v*.697,U,B],[0,Math.PI/2,0]))});const w=A(`Tassets_${T}`,p?e.pelvis:e[`thigh_${T}`]||e.pelvis,y=>{const E=v*.105,L=.97,U=p?.82:g?.38:.33,B=new Je;B.position.set(E,L,.146),B.rotation.z=v*-.045,y.add(B),an(B,[[-.095,0],[.095,0],[.116,-U*.55],[.064,-U],[0,-U-.035],[-.09,-U*.9],[-.113,-U*.47]],u.silk,.008,.002);for(let G=0;G<3;G++){const k=-.022-G*.078,X=.19+G*.012;so(B,0,k,X,.124,G===1?u.dark:u.plate,.024+(2-G)*.005),Lt(B,[[-X*.4,k-.014,.045],[0,k-.026,.056],[X*.4,k-.014,.045]],u.gold,.005,!1,18);for(const ee of[-1,1])Tl(B,[ee*X*.27,k-.035,.047],u.edge,.005)}if(p){Lt(B,[[-.078,-.26,.012],[-.08,-U*.8,.012],[0,-U+.012,.012],[.075,-U*.8,.012],[.075,-.26,.012]],u.gold,.006,!1,24);for(let G=0;G<3;G++)Ji(B,[0,-.32-G*.085,.023],u,.013)}});p&&w&&w.traverse(y=>{y.isMesh&&m.push({geometry:y.geometry,base:y.geometry.attributes.position.array.slice(),side:v})})}A("Girdle",e.pelvis,v=>{if(p){Yi(v,[[.13,.29,.22],[.4,.26,.2],[.7,.21,.16],[.95,.185,.145]],u.cloth,1.42,4.86,34),ni(v,.135,.292,.222,u.gold,1.42,4.86,0,.007);for(const w of[1.45,2.1,3.15,4.2,4.82])Lt(v,[[Math.sin(w)*.183,.94,Math.cos(w)*.148],[Math.sin(w)*.22,.6,Math.cos(w)*.177],[Math.sin(w)*.289,.14,Math.cos(w)*.222]],u.gold,.004,!1,24)}Yi(v,[[.94,.175,.137],[.982,.184,.14],[1.025,.175,.135]],u.dark),ni(v,.946,.179,.14,u.gold,-Math.PI,Math.PI,0,.006),ni(v,1.02,.178,.139,u.gold,-Math.PI,Math.PI,0,.006);const T=new Je;T.position.set(0,.985,.16),v.add(T),an(T,[[-.064,.018],[-.034,.048],[.034,.048],[.064,.018],[.052,-.035],[0,-.05],[-.052,-.035]],u.gold,.02,.005),an(T,[[-.045,.013],[0,.033],[.045,.013],[.028,-.025],[0,-.034],[-.028,-.025]],u.dark,.025,.002),Ji(T,[0,0,.034],u,.024);for(const w of[-1,1]){Lt(v,[[w*.08,.99,.158],[w*.14,.935,.15],[w*.185,.89,.11]],u.gold,.007,!1,18);for(let y=0;y<3;y++)Ti(v,.012,.0035,u.gold,[w*(.14+y*.016),.92-y*.014,.13-y*.008],[0,0,0])}})}if(h)for(const v of[-1,1]){const T=v<0?"r":"l",w=h.type==="iron"?u.steel:u.plate;A(`Greave_${T}`,e[`calf_${T}`],y=>{const E=new Je;E.position.x=v*.089,y.add(E),Yi(E,[[.15,.053,.058],[.24,.066,.067],[.37,.075,.071],[.46,.067,.063]],u.dark),Yi(E,[[.15,.056,.071],[.28,.071,.08],[.43,.071,.079],[.5,.056,.067]],w,-1.15,1.15,20),Lt(E,[[0,.17,.076],[0,.29,.09],[0,.43,.088],[0,.515,.057]],u.gold,.007,!1,26);for(const L of[.2,.31,.43])ni(E,L,.074,.084,u.gold,-.94,.94,0,.005);an(E,[[-.054,.48],[0,.535],[.054,.48],[.039,.438],[0,.42],[-.039,.438]],u.gold,.015,.006).position.z=.053,Ji(E,[0,.48,.077],u,.018)}),A(`Sabatons_${T}`,e[`foot_${T}`],y=>{const E=new Je;E.position.x=v*.089,y.add(E),Mi(E,u.dark,[0,.068,.063],[.067,.055,.145]);for(let L=0;L<3;L++){const U=new Je;U.position.set(0,.101-L*.012,.035+L*.055),E.add(U),an(U,[[-.063,0],[.063,0],[.058,-.033],[0,-.047],[-.058,-.033]],w,.045,.009).rotation.x=Math.PI/2}ni(E,.12,.063,.071,u.gold,-Math.PI,Math.PI,-.03,.006)})}d&&A("PhoenixCoronet",e.Head,v=>{const T=Xt(d.trim||u.palette.metal,.77,.3),w=Xt(d.color||u.palette.plate,.45,.4);Yi(v,[[1.69,.105,.1],[1.72,.115,.105],[1.745,.106,.1]],w,-2.8,2.8,36),ni(v,1.698,.11,.105,T,-2.8,2.8,0,.006),ni(v,1.74,.11,.104,u.edge,-2.8,2.8,0,.004);for(const E of[-1,1]){const L=an(v,[[E*.014,1.706],[E*.051,1.755],[E*.114,1.782],[E*.177,1.862],[E*.16,1.76],[E*.124,1.725],[E*.06,1.718]],T,.013,.005);L.position.z=.102,Lt(v,[[E*.043,1.725,.127],[E*.086,1.753,.127],[E*.126,1.777,.124],[E*.166,1.831,.118]],u.edge,.004,!1,22),bi(v,[E*.09,1.742,-.03],[E*.18,1.82,-.14],.009,T,.003),Mi(v,u.gem,[E*.18,1.82,-.14],[.012,.012,.012],8)}const y=new Je;y.position.set(0,1.733,.128),v.add(y),an(y,[[0,.105],[.034,.039],[.027,-.025],[0,-.045],[-.027,-.025],[-.034,.039]],T,.014,.004),Ji(y,[0,.017,.026],u,.022),Lt(v,[[-.09,1.72,-.025],[0,1.77,-.13],[.09,1.72,-.025]],T,.007,!1,24)});let M=null;return f&&A("BrocadeMantle",e.spine_03,v=>{const L=[],U=[],B=[];for(let ae=0;ae<=26;ae++)for(let J=0;J<=16;J++){const q=J/16,$=ae/26,ge=.63*(.63+$*.58),ye=(q-.5)*ge;if(L.push(ye,1.451-$*1.03+Math.cos((q-.5)*Math.PI)*$*.035,-.17-.2*$*$+Math.cos(q*Math.PI*6)*$*.016),U.push(q,1-$),J<16&&ae<26){const Ve=ae*17+J;B.push(Ve,Ve+16+1,Ve+1,Ve+1,Ve+16+1,Ve+16+2)}}const G=new vt;G.setAttribute("position",new He(L,3)),G.setAttribute("uv",new He(U,2)),G.setIndex(B),G.computeVertexNormals();const k=Xt(f.color||u.palette.cloth,.02,.78,{side:mn,map:Rf()});k.onBeforeCompile=ae=>{ae.fragmentShader=ae.fragmentShader.replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec4 brocadeTexel = texture2D( map, vMapUv );
          float goldThread = smoothstep(0.035, 0.18, brocadeTexel.r - brocadeTexel.b);
          vec3 dyedSilk = diffuseColor.rgb * (0.72 + brocadeTexel.b * 0.7);
          diffuseColor.rgb = mix(dyedSilk, brocadeTexel.rgb * 1.25, goldThread);
          diffuseColor.a *= brocadeTexel.a;
        #endif
      `)},k.customProgramCacheKey=()=>"martial-dyed-brocade-v1";const X=Pn(v,G,k);X.userData.dynamic=!0;const ee=Xt(f.color||u.palette.cloth,.02,.9,{side:Di}),Q=Pn(v,G.clone(),ee);Q.position.z=.004,Q.userData.dynamic=!0,M={mesh:X,lining:Q,base:G.attributes.position.array.slice(),rows:26,columns:16},S.push(M);for(const ae of[-1,1])Mi(v,u.gold,[ae*.13,1.432,-.163],[.035,.024,.018]),Lt(v,[[ae*.13,1.43,-.16],[ae*.2,1.4,-.1],[ae*.17,1.39,.04]],u.gold,.006,!1,16)}),{attachments:_,cape:M,classPalette:u.palette,update(v=0,T=0){for(const w of m){const y=w.geometry.attributes.position;for(let E=0;E<y.count;E++){const L=w.base[E*3],U=w.base[E*3+1],B=w.base[E*3+2],G=Math.pow(bs.clamp((.71-U)/.59,0,1),2);y.setXYZ(E,L+Math.sin(v*2.1+w.side*.7)*G*.008,U,B+Math.cos((L-w.side*.105)*22)*G*.018+Math.sin(v*2.8+w.side*.6-U*2)*G*(.012+T*.02))}y.needsUpdate=!0,w.geometry.computeVertexNormals()}for(const w of S)for(const y of[w.mesh.geometry,w.lining.geometry]){const E=y.attributes.position;for(let L=0;L<E.count;L++){const U=w.base[L*3],B=w.base[L*3+1],G=w.base[L*3+2],k=bs.clamp((1.451-B)/1.03,0,1);E.setXYZ(L,U+Math.sin(v*2.1-k*3)*k*.018,B+Math.sin(v*2.8+U*8)*k*.008,G-T*.18*k*k+Math.sin(v*3.2-k*5+U*7)*k*(.016+T*.023))}E.needsUpdate=!0,y.computeVertexNormals()}},dispose(){for(const v of _)v.removeFromParent()}}}function rd(s,e={}){const t=Ur(e)||{},n=new Je;n.name=`MartialWeapon_${t.model||"sword"}`,s.add(n);const i=Xt(t.color||"#bdced1",.82,.26),r=Xt("#e3ece5",.9,.19),a=Xt(t.trim||"#c6a562",.76,.3),o=Xt("#2a252a",.1,.79),l=Xt("#913c3c",.02,.85),c=Xt(t.glow||"#7bc1b6",.3,.2,{emissive:t.glow||"#549b92",emissiveIntensity:.45}),h=t.model||"sword",d=["glaive","spear"].includes(h),f=["staff","wand"].includes(h);if(h==="bow"){const u=Xt(t.color||"#5b4838",.1,.6);for(const _ of[-1,1]){const S=[[0,0,0],[.12,_*.28,0],[.18,_*.57,.015],[.06,_*.79,.04],[-.02,_*.88,.065]];Lt(n,S,u,.038,!1,42),Lt(n,S.map(m=>[m[0]+.021,m[1],m[2]+.015]),a,.01,!1,42);for(let m=0;m<3;m++)so(n,.17,_*(.4+m*.09),.1,.14,a,.025,.02).rotation.z=_<0?Math.PI:0}bi(n,[-.02,-.88,.065],[-.02,.88,.065],.004,r),bi(n,[0,-.13,0],[0,.13,0],.045,o),Ji(n,[0,0,.043],{gold:a,gem:c},.04)}else if(f){const u=h==="wand"?1.2:1.8;bi(n,[0,-.65,0],[0,u-.55,0],.025,o,.027);for(const S of[-.61,-.22,.17,u-.6]){Ti(n,.03,.009,a,[0,S,0]);for(let m=0;m<2;m++)Ti(n,.027,.003,r,[0,S+.025+m*.014,0])}const _=new Je;_.position.y=u-.45,n.add(_);for(const S of[-1,1])Lt(_,[[0,-.1,0],[S*.12,.04,0],[S*.14,.19,0],[S*.055,.3,0]],a,.016,!1,28),an(_,[[S*.02,-.025],[S*.09,.015],[S*.18,.13],[S*.14,-.015],[S*.055,-.08]],i,.017,.004);Pn(_,new Fi(.11),c,[0,.18,0],[.65,1.4,.65]),Ti(_,.09,.007,a,[0,.18,0],[0,0,.4])}else{if(d){bi(n,[0,-.85,0],[0,1.35,0],.027,o);for(const A of[-.8,-.2,.2,1.25])Ti(n,.03,.007,a,[0,A,0]),Ti(n,.03,.003,r,[0,A+.025,0])}const u=new Je;d&&(u.position.y=1.18),n.add(u);const _=h==="dagger",S=_?.65:d?.86:1.3,m=t.type==="cleaver"?.23:_?.1:.145,p=[[-m*.42,.13],[m*.44,.13],[m*.45,S*.49],[m*.74,S*.8],[m*1.5,S],[m*.13,S*.91],[-m*.41,S*.66]];an(u,p,i,.027,.008).position.z=-.013,an(u,[[m*.41,.17],[m*.42,S*.49],[m*.72,S*.8],[m*1.5,S],[m*.4,S*.83],[m*.22,S*.49],[m*.22,.17]],r,.006,.001).position.z=.016,Lt(u,[[-m*.11,.26,.021],[-m*.08,S*.62,.024],[m*.28,S*.84,.025]],a,.005,!1,28);for(let A=0;A<3;A++)an(u,[[-.015,.3+A*.085],[0,.33+A*.085],[.015,.3+A*.085],[0,.286+A*.085]],c,.005,.001).position.z=.022;const g=an(u,[[-.24,.074],[-.18,.14],[-.085,.12],[0,.16],[.085,.12],[.18,.14],[.24,.074],[.14,.06],[.065,.086],[0,.05],[-.065,.086],[-.14,.06]],a,.045,.007);if(g.position.z=-.022,Lt(u,[[-.205,.091,.028],[-.13,.113,.035],[0,.106,.042],[.13,.113,.035],[.205,.091,.028]],r,.006,!1,28),Ji(u,[0,.107,.05],{gold:a,gem:c},.027),!d){bi(n,[0,-.23,0],[0,.065,0],.035,o);for(let A=0;A<8;A++){const M=-.2+A*.032;Lt(n,[[-.033,M,.012],[0,M+.022,.035],[.033,M,.012]],l,.006,!1,10)}Mi(n,a,[0,-.25,0],[.055,.045,.04]);for(const A of[-1,1])Lt(n,[[0,-.27,0],[A*.04,-.33,0],[A*.025,-.46,.01]],l,.009,!1,20);for(let A=0;A<5;A++)bi(n,[(A-2)*.009,-.44,.01],[(A-2)*.013,-.56-Math.abs(A-2)*.005,.012],.004,l)}}return Cf(n),n}const Pi=Math.PI*2,$i=bs.clamp,En=s=>Array.isArray(s)?s:Object.values(s||{}),Ac=s=>new ke(s||"#8aa69a"),Pf={trojan:"#477c71",warrior:"#536d7b",archer:"#657750",fire:"#994c3e",water:"#588392"};let Rc=null,If=[];const ro=new Map,dh=(s,e)=>(ro.has(s)||ro.set(s,e()),ro.get(s)),Gy=dh("sphere",()=>new Bn(1,18,14)),qa=dh("box",()=>new As(1,1,1)),ao=dh("cylinder",()=>new Cn(1,1,1,16));function Ke(s,e=0,t=.8,n={}){return new Es({color:s,metalness:e,roughness:t,...n})}function Ze(s,e,t,n=0,i=0,r=0,a=1,o=1,l=1){const c=new $t(e,t);return c.position.set(n,i,r),c.scale.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}function Et(s,e=0,t=0,n=0){const i=new Je;return i.position.set(e,t,n),s.add(i),i}function ht(s,e,t,n,i,r,a,o){return Ze(s,Gy,e,t,n,i,r,a,o)}function Nt(s,e,t,n,i=.03){const r=new D(...t),a=new D(...n),o=a.clone().sub(r),l=Ze(s,ao,e,...r.clone().add(a).multiplyScalar(.5).toArray(),i,o.length(),i);return l.quaternion.setFromUnitVectors(new D(0,1,0),o.normalize()),l}function vn(s,e=20){return new ta(s.map(t=>new de(...t)),e)}function ad(s,e,t=.82){const n=new ns;return n.moveTo(-s*.5,0),n.lineTo(s*.5,0),n.lineTo(s*t*.5,-e),n.quadraticCurveTo(0,-e-.1,-s*t*.5,-e),n.closePath(),new cr(n,{depth:.025,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.015,bevelThickness:.015})}function Wy(s,e){const t=s.equipment?.[e];return En(s.inventory).find(n=>n.id===t&&n.slot===e)}function on(s,e){return Wy(s,e)?.appearance}function wl(s){return JSON.stringify([s.classId,s.equipment,En(s.inventory).filter(e=>Object.values(s.equipment||{}).includes(e.id)).map(e=>[e.id,e.appearance,e.plus])])}function Ya(s,e=!1){s.traverse(t=>{if(t.isMesh){e&&![...ro.values()].includes(t.geometry)&&t.geometry?.dispose();for(const n of Array.isArray(t.material)?t.material:[t.material])n?.dispose()}}),s.removeFromParent()}function Wr(s,e={},t=!1){const n=Et(s),i=Ke(e.color||"#c4d2cf",.8,.27),r=Ke(e.trim||"#a4864c",.72,.36),a=Ke("#3b3026"),o=t?.68:e.type==="cleaver"?1.15:1.3,l=t?.1:e.type==="cleaver"?.22:.12,c=new ns;c.moveTo(-l*.5,.14),c.lineTo(l*.52,.14),c.lineTo(l*.65,o*.77),c.lineTo(e.type==="saber"?l*.85:0,o),c.lineTo(-l*.48,o*.86),c.closePath();const h=new cr(c,{depth:.035,bevelEnabled:!0,bevelSize:.016,bevelThickness:.012,bevelSegments:1});Ze(n,h,i,0,0,-.017),Nt(n,r,[-.24,.1,0],[.24,.1,0],.035),Nt(n,a,[0,-.2,0],[0,.08,0],.042);for(let d=0;d<5;d++){const f=Ze(n,new Nn(.043,.007,4,12),r,0,-.18+d*.046);f.rotation.x=Math.PI*.5}if(ht(n,r,0,-.22,0,.062,.055,.055),e.glow){const d=Ke(e.glow,.35,.2,{emissive:e.glow,emissiveIntensity:.75});ht(n,d,0,.1,.055,.045,.065,.025)}return n}function Xy(s,e={}){if(["sword","dagger"].includes(e.model||"sword"))return Wr(s,e,e.model==="dagger");const t=Et(s),n=Ke(e.color||"#745239",.13,.6),i=Ke(e.trim||"#c6a76a",.65,.3);if(Ke("#b8c4bd",.8,.28),e.model==="bow"){const r=[new D(0,-.8,.04),new D(.26,-.5,0),new D(.13,0,0),new D(.26,.5,0),new D(0,.8,.04)];Ze(t,new fn(new yn(r),36,.033,8,!1),n),Nt(t,Ke("#b9b19b"),[0,-.8,.04],[0,.8,.04],.009),Nt(t,i,[.13,-.13,0],[.13,.13,0],.044),t.rotation.z=-.18}else{const r=["glaive","spear"].includes(e.model);Nt(t,n,[0,-.72,0],[0,r?1.38:1.05,0],.035);for(const a of[-.67,-.28,.25,r?1.28:.92])Nt(t,i,[0,a,0],[0,a+.07,0],.05);if(r){const a=Wr(t,e,!0);if(a.position.y=1.31,e.model==="glaive"){const o=Wr(t,e,!0);o.position.set(.12,1.2,0),o.rotation.z=-.6,o.scale.set(.8,.7,.8)}}else{const a=e.glow||e.trim||"#8bbfaa",o=Ke(a,.25,.17,{emissive:a,emissiveIntensity:.75}),l=e.model==="wand"?.65:1.14;Nt(t,i,[-.17,l-.1,0],[0,l+.29,0],.023),Nt(t,i,[.17,l-.1,0],[0,l+.29,0],.023),Ze(t,new Fi(.15),o,0,l+.12,0,.7,1.4,.7),e.model==="wand"&&(t.scale.y=.65)}}return t}function qy(s={},e="player"){const t=new Je,n=Et(t),i=Et(n,0,1.25),r=Et(i,0,.16),a=Et(r,0,.81),o=Et(a,0,.21),l=e==="npc",c=s.type==="bandit",h=on(s,"armor"),d=h?.color||(l?s.role==="shop"?"#847761":"#365d68":c?"#6a4338":Pf[s.classId]||"#55796d"),f=h?.trim||"#bda16a",u=h?.model==="heavy-armor",_=Ke("#bd9474",0,.85),S=Ke("#c9a182",0,.83),m=Ke("#231f1a",0,.91),p=Ke(d,.04,.88),g=Ke(Ac(d).multiplyScalar(.62),.02,.9),A=Ke(f,.62,.39),M=Ke(d,u?.55:.24,u?.4:.63),v=Ke("#453c30",0,.84),T=Ke("#292723");Ze(r,vn([[.27,-.18],[.31,0],[.38,.38],[.42,.57],[.28,.68]]),p,0,0,0,1,1,.65),ht(r,p,0,.4,0,.43,.29,.25),Ze(r,vn([[.31,.03],[.36,.3],[.4,.49],[.32,.56]]),M,0,0,0,1,1,.75);const w=Nt(r,A,[-.25,.57,.21],[.1,.1,.28],.032),y=Nt(r,g,[.24,.57,.21],[-.12,.06,.28],.051);w.scale.z=.55,y.scale.z=.55;for(let q=0;q<4;q++)for(let $=0;$<6;$++){const ge=($/5-.5)*2.3,ye=Ze(r,qa,q%2?M:g,Math.sin(ge)*.34,.39-q*.11,Math.cos(ge)*.27,.105,.118,.027);ye.rotation.y=ge,ht(r,A,Math.sin(ge)*.353,.415-q*.11,Math.cos(ge)*.29,.012,.012,.012)}Ze(i,vn([[.29,-.07],[.34,-.015],[.34,.09],[.3,.13]]),v,0,.03,0,1,1,.82),Ze(i,qa,A,0,.08,.295,.15,.115,.04);const E=[];for(const[q,$,ge]of[[-.25,.13,-.09],[.25,.13,.09],[0,.26,0],[0,-.26,0]]){const ye=Ze(i,ad(.3,.52),p,q,-.03,$);ye.rotation.z=ge,$<0&&(ye.rotation.y=Math.PI),E.push(ye),Nt(ye,A,[-.13,-.43,.04],[.13,-.43,.04],.012)}Ze(a,ao,_,0,-.025,0,.105,.25,.105),Ze(a,vn([[.17,-.2],[.16,-.05],[.12,0]]),g,0,-.02,0,1,1,.85),ht(o,_,0,0,.015,.175,.235,.169),ht(o,S,0,-.072,.047,.153,.143,.149),ht(o,m,0,.11,-.026,.181,.153,.167),ht(o,m,0,.24,-.05,.115,.115,.11),Ze(o,ao,A,0,.22,-.05,.118,.035,.115),ht(o,_,-.174,-.008,0,.035,.065,.03),ht(o,_,.174,-.008,0,.035,.065,.03);const L=Ze(o,new _s(.039,.12,4),S,0,-.01,.183,1,1,1);L.rotation.x=Math.PI*.5;for(const q of[-1,1]){ht(o,T,q*.071,.028,.159,.04,.012,.012);const $=Nt(o,m,[q*.035,.063,.166],[q*.111,.071,.144],.013);$.scale.z=.6,ht(o,S,q*.1,-.047,.137,.058,.04,.027)}Nt(o,Ke("#7a5747"),[-.04,-.112,.154],[.04,-.112,.154],.009);const U=[],B=[];for(const q of[-1,1]){const $=Et(r,q*.46,.49,0),ge=Et($,0,-.5,0),ye=Et(ge,0,-.44,.015),Ve=Ze($,vn([[.14,0],[.158,-.16],[.125,-.4],[.115,-.5]]),p);if(Ve.scale.z=.88,ht($,M,0,.005,-.005,u?.245:.19,.135,.22),u){const we=Ze($,new Nn(.18,.022,5,16,Math.PI),A,0,.005,.03);we.rotation.x=Math.PI*.5}Ze(ge,vn([[.11,.04],[.104,-.18],[.075,-.42]]),_),Ze(ge,vn([[.113,-.13],[.107,-.27],[.08,-.37]]),g),Nt(ge,A,[-.08,-.15,.084],[.08,-.15,.084],.016),ht(ye,_,0,-.045,.005,.083,.11,.072),U.push({shoulder:$,elbow:ge,hand:ye,side:q});const qe=Et(i,q*.185,-.12,0),Xe=Et(qe,0,-.55,0),te=Et(Xe,0,-.5,0);Ze(qe,vn([[.164,0],[.16,-.23],[.112,-.54]]),g,0,0,0,1,1,.91),ht(Xe,g,0,.015,.015,.12,.12,.12),Ze(Xe,vn([[.115,0],[.11,-.24],[.075,-.49]]),g);const le=on(s,"boots"),Me=Ke(le?.color||"#493d32",le?.type==="iron"?.6:.03,.64),Ie=Ke(le?.trim||"#9a8058",.35,.48);Ze(Xe,vn([[.119,-.18],[.127,-.23],[.096,-.5]]),Me),ht(te,Me,0,-.025,.065,.101,.08,.18),Ze(te,qa,v,0,-.067,.065,.195,.04,.32),Ze(Xe,ao,Ie,0,-.218,0,.126,.035,.125),le?.type==="iron"&&ht(Xe,Ie,0,-.27,.094,.09,.17,.03),B.push({thigh:qe,knee:Xe,foot:te,side:q})}const G=on(s,"weapon")||{model:l&&s.role!=="quest"?"staff":"sword",color:"#bec7be",trim:"#ac8d52",type:"saber"},k=Xy(U[1].hand,G);if(k.position.set(.015,-.02,.1),k.rotation.x=-.13,k.rotation.z=-.09,G.grip==="dual"&&!on(s,"offhand")){const q=Wr(U[0].hand,G);q.position.set(0,-.03,.1),q.rotation.z=.12}const X=on(s,"offhand");if(X?.model==="dagger")Wr(U[0].hand,X,!0).position.set(0,-.02,.08);else if(X?.model==="shield"){const q=Et(U[0].elbow,-.06,-.22,.17),$=Ke(X.color,.65,.4),ge=Ke(X.trim,.7,.3),ye=Ze(q,new Cn(.32,.32,.06,24),$);ye.rotation.x=Math.PI*.5,Ze(q,new Nn(.3,.028,6,32),ge,0,0,.04),ht(q,ge,0,0,.06,.11,.11,.07);for(let Ve=0;Ve<8;Ve++)ht(q,ge,Math.cos(Ve/8*Pi)*.24,Math.sin(Ve/8*Pi)*.24,.054,.016,.016,.016)}else if(X?.model==="orb"){const q=Ke(X.color,.15,.2,{emissive:X.glow||X.color,emissiveIntensity:.8});ht(U[0].hand,q,0,.14,.1,.135,.135,.135)}else if(X?.model==="quiver"){const q=Et(r,-.23,.3,-.3);q.rotation.z=-.25,Ze(q,vn([[.105,-.38],[.12,.25],[.13,.31]]),v);for(let $=0;$<5;$++){const ge=($%3-1)*.05;Nt(q,A,[ge,-.1,$%2*.06],[ge,.53,$%2*.06],.008),Ze(q,qa,p,ge,.46,$%2*.06,.055,.13,.009)}}const ee=on(s,"helmet");if(ee){const q=Ke(ee.color||"#aa824e",.7,.35),$=Ke(ee.trim||"#dec382",.75,.29);Ze(o,vn([[.178,.08],[.183,.18],[.11,.27],[.03,.29]]),q,0,0,-.008,1.1,1,1.05),Ze(o,vn([[.18,.08],[.187,.105],[.185,.13]]),$,0,0,0,1.1,1,1.04);const ge=Ze(o,ad(.08,.3,1.3),$,0,.37,.04);ge.rotation.x=-.2,ht(o,q,-.19,-.02,-.03,.035,.16,.11),ht(o,q,.19,-.02,-.03,.035,.16,.11)}const Q=on(s,"necklace");if(Q){const q=Ke(Q.trim||"#cdb178",.75,.35),$=Ke(Q.color||"#99bfa9",.2,.2);Nt(r,q,[-.12,.61,.25],[0,.38,.31],.012),Nt(r,q,[.12,.61,.25],[0,.38,.31],.012),Ze(r,new Fi(.065),$,0,.36,.32,.7,1.2,.3)}let ae=null;const J=on(s,"garment");if(J||l){const q=new ws(.92,1.58,12,18),ge=q.attributes.position.array.slice(),ye=Ke(J?.color||d,.02,.87,{side:Qt}),Ve=Ze(r,q,ye,0,-.1,-.31);Ve.rotation.x=-.08,ae={mesh:Ve,base:ge};for(const qe of[-1,1])ht(r,A,qe*.25,.6,.18,.06,.045,.025)}return{root:t,body:n,hips:i,torso:r,neck:a,head:o,arms:U,legs:B,waistPanels:E,cape:ae,weapon:k,weaponDesc:G,height:2.82,phase:Math.random()*Pi}}function Cc(s={},e="player"){if(!Rc)return qy(s,e);const t=new Je,n=pf(Rc);t.add(n),n.scale.setScalar(1.55);const i={},r={},a=on(s,"armor"),o=on(s,"boots"),l=on(s,"helmet"),c=on(s,"garment"),h=a?.color||(e==="npc"?s.role==="shop"?"#c0b58f":s.role==="compose"?"#ae7050":"#4f7293":s.type==="bandit"?"#8c5548":Pf[s.classId]||"#567c6d");n.traverse(v=>{if(v.isBone&&(i[v.name]=v),r[v.name]=v,v.name.startsWith("Gear_")&&(v.visible=v.name.startsWith("Gear_Armor_")?!!a||e==="npc":v.name==="Gear_Boots"?!!o:v.name==="Gear_Hood"?!!l:!1),["Base_Tunic","Base_Sleeves","Base_Trousers"].includes(v.name)&&(v.visible=!a&&e!=="npc"),v.name==="Base_Shoes"&&(v.visible=!o),v.name==="Hair_Cap"&&(v.visible=!1),v.name==="Hair_Topknot"&&(v.visible=!l),e==="npc"&&s.role!=="quest"&&/Gear_Armor_Pauldron|Gear_Armor_Sash/.test(v.name)&&(v.visible=!1),!v.isMesh)return;v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,v.material=Array.isArray(v.material)?v.material.map(w=>w.clone()):v.material.clone();const T=Array.isArray(v.material)?v.material:[v.material];for(const w of T)w.roughness=Math.max(.55,w.roughness||.7),w.envMapIntensity=.6,/Tunic|Sleeves|Trousers|Pauldron|Bracers/.test(v.name)&&!/Regular_Male|Superhero|Eyes|Hair/.test(w.name)&&(w.color.copy(Ac(h).lerp(new ke("#ffffff"),.12)).multiplyScalar(1.2),w.metalness=.03,w.onBeforeCompile=y=>{y.fragmentShader=y.fragmentShader.replace("#include <map_fragment>",`
            #ifdef USE_MAP
              vec4 clothTexel = texture2D( map, vMapUv );
              float clothValue = dot(clothTexel.rgb, vec3(0.2126, 0.7152, 0.0722));
              diffuseColor.rgb *= clamp(clothValue * 2.1, 0.42, 1.15);
              diffuseColor.a *= clothTexel.a;
            #endif
          `)},w.customProgramCacheKey=()=>"jade-dyed-cloth-v1",a?.model==="heavy-armor"&&/Pauldron|Bracers|Tunic/.test(v.name)&&(w.metalness=.35,w.roughness=.48)),/Shoes|Boots/.test(v.name)&&o&&(w.color.multiply(Ac(o.color).lerp(new ke("#ffffff"),.25)),o.type==="iron"&&(w.metalness=.5,w.roughness=.45))});const d=new km(n),f={};for(const v of If)f[v.name]=d.clipAction(v);const u={root:t,model:n,bones:i,nodes:r,mixer:d,actions:f,height:2.95,phase:Math.random()*Pi,animation:null,animationTime:0,cape:null,licensed:!0};u.wardrobe=Vy({model:n,bones:i,nodes:r,player:s,kind:e,armor:a,boots:o,helmet:l,garment:c});const _=on(s,"weapon")||(e!=="player"?{model:e==="npc"&&s.role==="shop"?"staff":e==="npc"&&s.role==="quest"?"glaive":"sword",color:"#b7c2bd",trim:"#b59a60",type:"saber"}:null);u.weaponDesc=_;const S=i.hand_r||i.Hand_R,m=i.hand_l||i.Hand_L,p=i.spine_03||i.Spine2;if(i.Head,S&&_){const v=Et(S);v.rotation.x=Math.PI*.5,v.scale.setScalar(.66);const T=rd(v,_);T.position.set(0,.01,.02),u.weapon=T}const g=on(s,"offhand");if(m&&(g?.model==="dagger"||!g&&_?.grip==="dual")){const v=Et(m);v.rotation.x=Math.PI*.5,v.scale.setScalar(.66),rd(v,g||_)}if(m&&g?.model==="shield"){const v=Et(m,0,.02,-.06);v.scale.setScalar(.65),v.rotation.x=Math.PI*.5;const T=Ke(g.color,.65,.4),w=Ke(g.trim,.7,.3);Ze(v,new Cn(.38,.38,.065,28),T).rotation.x=Math.PI*.5,Ze(v,new Nn(.35,.03,6,36),w,0,0,.045),ht(v,w,0,0,.065,.11,.11,.08)}if(m&&g?.model==="orb"){const v=Ke(g.color,.25,.2,{emissive:g.glow||g.color,emissiveIntensity:1});ht(m,v,0,.08,.1,.1,.1,.1)}if(p&&g?.model==="quiver"){const v=Et(p,-.17,.04,-.18);v.rotation.z=-.3,Ze(v,vn([[.07,-.22],[.09,.17]]),Ke(g.color||"#77543e"));const T=Ke("#cab68d",.35,.6);for(let w=0;w<5;w++)Nt(v,T,[(w%3-1)*.035,-.1,w%2*.04],[(w%3-1)*.035,.32,w%2*.04],.006)}const A=on(s,"necklace");if(p&&A){const v=Ke(A.trim||"#cfac6e",.7,.35);Nt(p,v,[-.08,.08,.14],[0,-.06,.19],.008),Nt(p,v,[.08,.08,.14],[0,-.06,.19],.008),Ze(p,new Fi(.045),Ke(A.color||"#a5cbb9",.2,.25),0,-.08,.19,.7,1.3,.4)}const M=on(s,"ring");if(S&&M){const v=i.ring_01_r||i.index_01_r||S,T=Ke(M.trim||"#d0b678",.8,.26),w=Ke(M.color||"#91c9b1",.3,.18,{emissive:M.glow||M.color||"#82c1a4",emissiveIntensity:.65}),y=Et(v,0,v===S?.075:.018,0);Ze(y,new Nn(.014,.0035,5,14),T).rotation.x=Math.PI*.5,Ze(y,new Fi(.01),w,0,0,.017)}return Pc(u,"Idle_Loop",0),d.update(Math.random()*1.5),u}function Pc(s,e,t=.13,n=!1){if(s.animation===e)return;const i=s.actions[e]||s.actions.Idle_Loop;if(!i)return;const r=s.actions[s.animation];i.reset(),i.enabled=!0,i.setLoop(n?Ed:Ad,n?1:1/0),i.clampWhenFinished=n,i.setEffectiveWeight(1).setEffectiveTimeScale(1),i.play(),r&&t>0?(r.fadeOut(t),i.fadeIn(t)):r?.stop(),s.animation=e}function Yy(){const s=new Je,e=Et(s,0,.48),t=Ke("#785c39"),n=Ke("#9d8050"),i=Ke("#d9b77e"),r=Ke("#a54c3c"),a=Ke("#282c24"),o=Ke("#235d4a",.22,.43),l=Ke("#e2d7b7"),c=Ke("#977443");ht(e,t,0,0,0,.28,.29,.42),ht(e,i,0,.04,.27,.21,.26,.2);const h=Et(e,0,.19,.28),d=Et(h,0,.19,.04);ht(h,o,0,0,0,.105,.21,.115);const f=Ze(h,new Nn(.105,.022,6,28),l,0,.075,0);f.rotation.x=Math.PI/2,ht(d,o,0,0,0,.13,.14,.145);const u=Ze(d,new _s(.055,.19,6),c,0,-.025,.19);u.rotation.x=Math.PI*.5;for(const p of[-1,1]){ht(d,r,p*.118,.015,.055,.023,.058,.065),ht(d,a,p*.115,.028,.07,.024,.024,.024);const g=ht(d,a,p*.065,.12,-.065,.025,.085,.03);g.rotation.x=-.4}const _=[],S=[];for(const p of[-1,1]){const g=Et(e,p*.22,.04,0);_.push(g),ht(g,n,p*.035,-.025,-.09,.11,.21,.29);for(let M=0;M<5;M++){const v=ht(g,M%2?i:t,p*.065,-.1-M*.023,-.05-M*.045,.025,.13,.2);v.rotation.x=-.3}const A=Et(s,p*.11,.33,.02);S.push(A),Nt(A,c,[0,0,0],[0,-.28,.03],.025);for(let M=-1;M<=1;M++)Nt(A,c,[0,-.27,.02],[M*.06,-.28,.14],.014)}const m=Et(e,0,.04,-.32);m.rotation.x=-.5;for(let p=-2;p<=2;p++){const g=ht(m,p%2?n:t,p*.045,.07,-.43,.04,.035,.64-Math.abs(p)*.075);g.rotation.y=p*.12}return{root:s,body:e,neck:h,head:d,wings:_,birdLegs:S,tail:m,height:1.2,phase:Math.random()*Pi}}function $y(){const s={type:"bandit",classId:"warrior",equipment:{},inventory:[]},e=Cc(s,"enemy");return e.root.scale.setScalar(1.35),e.height*=1.35,e.root.traverse(t=>{t.isMesh&&t.material?.isMeshStandardMaterial&&(t.material.color.lerp(new ke("#747a69"),.7),t.material.roughness=.95,t.material.metalness=.12)}),e}class Ky{constructor(){this.supportsUnrenderedStep=!0,this.width=1,this.height=1,this.clock=0,this.zone=null,this.entities=new Map,this.effects=new Map,this.pointer=null,this.lastState=null,this.cameraReady=!1,this.zoom=1.22,this.raycaster=new zm,this.ground=new Si(new D(0,1,0),0),this.target=new D(24,0,24),this.screenOffset={x:0,y:0}}async init(e){this.container=e;try{const n=await new B1().loadAsync("./models/jade-warrior.glb");Rc=n.scene,If=n.animations,this.modelLoaded=!0}catch(n){console.warn("The character model could not load; using the articulated fallback.",n),this.modelLoaded=!1}this.renderer=new Yu({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.8)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ud,this.renderer.info.autoReset=!1,this.renderer.outputColorSpace=It,this.renderer.toneMapping=qr,this.renderer.toneMappingExposure=1.04,this.renderer.setClearColor("#899caa"),this.canvas=this.renderer.domElement,this.canvas.style.cssText="display:block;width:100%;height:100%;touch-action:none",this.canvas.setAttribute("aria-label","Jade Realm three-dimensional game world. Click to travel, right click to jump, Space to attack."),e.appendChild(this.canvas),this.app={canvas:this.canvas},this.onWheel=n=>{n.preventDefault(),this.zoom=$i(this.zoom*Math.exp(-n.deltaY*75e-5),.7,1.8)},this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.scene=new Vh,this.scene.background=new ke("#899caa"),this.scene.fog=new Qc("#899caa",88,150),this.camera=new pr(-10,10,10,-10,.1,180),this.scene.add(new _u("#c6d4e5","#756455",1.85));const t=new no("#c6d5ed",.95);t.position.set(-15,12,5),this.scene.add(t),this.sun=new no("#ffd6a0",3.8),this.sun.position.set(12,30,4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:80}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3,this.scene.add(this.sun,this.sun.target),this.entityGroup=new Je,this.effectGroup=new Je,this.scene.add(this.entityGroup,this.effectGroup),this.selection=this.makeRing("#f5dd94",.53,.025),this.scene.add(this.selection),this.hoverRing=this.makeRing("#dbe9bf",.47,.017),this.scene.add(this.hoverRing),this.pointerRing=this.makeRing("#f4e1a2",.29,.02),this.scene.add(this.pointerRing),this.pointerRing.visible=!1,this.labels=document.createElement("div"),this.labels.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:2",e.appendChild(this.labels),this.presentation=zy(this.renderer,this.scene,this.camera),this.resize()}makeRing(e,t,n){const i=new $t(new lh(t-n,t+n,48),new oi({color:e,transparent:!0,opacity:.8,side:Qt,depthWrite:!1}));return i.rotation.x=-Math.PI*.5,i.position.y=.025,i.visible=!1,i}resize(){if(!this.renderer)return;this.width=this.container.clientWidth||window.innerWidth,this.height=this.container.clientHeight||window.innerHeight,this.renderer.setSize(this.width,this.height,!1);const e=this.width<650?37:45;this.camera.left=-this.width/e/2,this.camera.right=this.width/e/2,this.camera.top=this.height/e/2,this.camera.bottom=-this.height/e/2,this.camera.updateProjectionMatrix(),this.presentation?.resize(this.width,this.height)}rebuildZone(e){this.environment?.dispose?.(),this.zone=e,this.environment=Ay(this.scene,Zt[e]||Zt.city,e),this.cameraReady=!1}setPointer(e,t){this.pointer={x:e,y:t}}worldToScreen(e,t,n=0){const i=new D(e,n,t).project(this.camera);return{x:(i.x+1)*this.width/2,y:(1-i.y)*this.height/2}}screenToWorld(e,t){const n=this.canvas.getBoundingClientRect(),i=new de((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1);this.raycaster.setFromCamera(i,this.camera);const r=new D;return this.raycaster.ray.intersectPlane(this.ground,r),{x:r.x,y:r.z}}entityPosition(e){if(!e.jump)return{x:e.x,y:e.y,lift:0};const t=e.jump,n=$i(t.progress??t.t/t.duration,0,1);return{x:t.fromX+(t.toX-t.fromX)*n,y:t.fromY+(t.toY-t.fromY)*n,lift:Math.sin(n*Math.PI)*2.5}}pickEntity(e,t,n=this.lastState){if(!n||!this.canvas)return null;const i=this.canvas.getBoundingClientRect(),r=(e-i.left)*this.width/i.width,a=(t-i.top)*this.height/i.height;let o=null,l=47;for(const c of[...En(n.enemies),...En(n.npcs),...En(n.players),...En(n.drops)]){if(c.id===this.self?.id||c.zone!==this.zone||c.hp===0)continue;const h=this.entityPosition(c),d=this.entities.get(c.id)?.rig,f=this.worldToScreen(h.x,h.y,h.lift+(d?.height||.6)*.48),u=Math.hypot(r-f.x,(a-f.y)*.78);u<l&&(l=u,o=c)}return o}makeLabel(e,t){const n=document.createElement("div"),i=t==="npc"?"#ffe2a1":t==="enemy"?"#ffdfc8":t==="drop"?"#f6d892":"#e4f1de";n.style.cssText=`position:absolute;transform:translate(-50%,-100%);text-align:center;white-space:nowrap;color:${i};font:500 11px/1.35 'Trebuchet MS',sans-serif;text-shadow:0 1px 3px #17271a,0 0 5px #17271a;letter-spacing:.3px`;const r=document.createElement("div");if(r.textContent=e.name||"Wanderer",n.appendChild(r),t==="npc"){const l=document.createElement("div");l.textContent=e.role==="quest"?"QUEST":e.role==="compose"?"FORGEMASTER":"HERBALIST",l.style.cssText="font-size:8px;letter-spacing:1.5px;color:#d1c7a0;margin-top:1px",n.prepend(l)}const a=document.createElement("div");a.style.cssText="width:40px;height:3px;background:#111d18bb;border:1px solid #1d261c;margin:4px auto 0;border-radius:2px;overflow:hidden";const o=document.createElement("div");return o.style.cssText=`height:100%;background:${t==="enemy"?"#c38463":"#94b887"};width:100%`,a.appendChild(o),["enemy","player"].includes(t)&&n.appendChild(a),this.labels.appendChild(n),{el:n,title:r,fill:o,bar:a}}makeEntity(e,t){let n;if(t==="drop"){const a=new Je,o=Ke(e.icon==="stone"?"#94c8b4":"#d4af62",.7,.3,{emissive:e.icon==="stone"?"#609b81":"#8d682c",emissiveIntensity:.2});Ze(a,new Fi(.14),o,0,.18,0),n={root:a,height:.45,phase:0}}else n=e.type==="pheasant"?Yy():e.type==="guardian"?$y():Cc(e,t);this.entityGroup.add(n.root);const i=this.makeLabel(e,t),r={rig:n,label:i,kind:t,key:wl(e),lastX:e.x,lastY:e.y,angle:Math.PI/2-(e.facing||0)*Math.PI/4,motion:0,attack:0,previousCooldown:0,previousSkill:0,landing:0,jumping:!1};return this.entities.set(e.id,r),r}updateRig(e,t,n,i){const r=e.rig,a=this.entityPosition(t),o=a.x-e.lastX,l=a.y-e.lastY,c=Math.hypot(o,l),h=n===0?e.speed||0:c<5?c/Math.max(n,.001):0,d=h>.08||t.path?.length>0;e.speed=h,e.lastX=a.x,e.lastY=a.y,((t.cooldown||0)>e.previousCooldown+.08||(t.skillCooldown||0)>e.previousSkill+.08)&&(e.attack=.48),e.previousCooldown=t.cooldown||0,e.previousSkill=t.skillCooldown||0,e.attack=Math.max(0,e.attack-n),e.jumping&&!t.jump&&(e.landing=.22),e.jumping=!!t.jump,e.landing=Math.max(0,e.landing-n);let f=Math.PI/2-(t.facing??2)*Math.PI/4;if(c>.001&&c<5&&(f=Math.atan2(o,l)),t.jump&&(f=Math.atan2(t.jump.toX-t.jump.fromX,t.jump.toY-t.jump.fromY)),e.attack){const v=En(i.enemies).find(T=>T.id===t.target);v&&(f=Math.atan2(v.x-t.x,v.y-t.y))}const u=Math.atan2(Math.sin(f-e.angle),Math.cos(f-e.angle));if(e.angle+=u*Math.min(1,n*15),r.root.position.set(a.x,a.lift,a.y),r.root.rotation.y=e.angle,e.motion+=((d?1:0)-e.motion)*Math.min(1,n*12),r.phase+=Math.min(h,10)*n*2.4,r.licensed){let v;const T=t.jump?$i(t.jump.t/t.jump.duration,0,1):0;t.jump?v=T<.16?"Jump_Start":"Jump_Loop":e.landing>0?v="Jump_Land":e.attack>0?v=["staff","wand","bow"].includes(r.weaponDesc?.model)?"Spell_Simple_Shoot":"Sword_Attack":d?v=t.running===!1?"Walk_Loop":h>6?"Sprint_Loop":"Jog_Fwd_Loop":v=e.kind==="player"&&["sword","dagger","glaive","spear"].includes(r.weaponDesc?.model)?"Sword_Idle":"Idle_Loop",Pc(r,v,t.jump||e.attack?.07:.12,/Jump_Start|Jump_Land|Sword_Attack|Spell_Simple_Shoot/.test(v));const w=r.actions[v];if(w&&d&&!t.jump&&!e.attack&&w.setEffectiveTimeScale($i(h/(t.running===!1?4.5:7.5),.7,1.3)),w&&/Sword_Attack|Spell_Simple_Shoot/.test(v)&&w.setEffectiveTimeScale(w.getClip().duration/.5),w&&v==="Jump_Start"&&w.setEffectiveTimeScale(2.6),w&&v==="Jump_Land"&&w.setEffectiveTimeScale(w.getClip().duration/.27),r.mixer.update(n),r.wardrobe?.update(this.clock,e.motion),r.animationTime=w?.time||0,r.cape){const y=r.cape.mesh.geometry.attributes.position,E=r.cape.base;for(let L=0;L<y.count;L++){const U=E[L*3],B=E[L*3+1],G=(.525-B)/1.05;y.setXYZ(L,U*(.8+G*.4),B,E[L*3+2]-G*G*(.08+e.motion*.3+(t.jump?.3:0))+Math.sin(this.clock*3.4+U*6-G*4)*G*(.025+e.motion*.05))}y.needsUpdate=!0,r.cape.mesh.geometry.computeVertexNormals()}r.root.updateMatrixWorld(!0);return}if(r.birdLegs){r.body.position.y=.48+Math.sin(this.clock*2.4+r.phase)*.018+Math.abs(Math.sin(r.phase*2))*.03*e.motion,r.head.rotation.x=Math.sin(this.clock*1.7+r.phase)*.09,r.wings.forEach((v,T)=>{v.rotation.z=Math.sin(this.clock*2+T*Math.PI)*.08+e.motion*.2}),r.birdLegs.forEach((v,T)=>v.rotation.x=Math.sin(r.phase+T*Math.PI)*.6*e.motion);return}if(!r.arms){r.root.children[0].rotation.y+=n*.9,r.root.children[0].position.y=.2+Math.sin(this.clock*2)*.035;return}const _=e.motion,S=Math.sin(r.phase),m=t.running===!1?.55:.86,p=Math.sin(this.clock*2.25+r.phase*.04),g=t.jump?$i(t.jump.t/t.jump.duration,0,1):0,A=t.jump?Math.sin(g*Math.PI):0,M=e.landing/.22;r.body.position.y=Math.abs(Math.cos(r.phase*2))*.055*_+p*.014-M*.13,r.body.rotation.x=_*.11-A*.2+M*.12,r.hips.rotation.y=S*.085*_,r.torso.rotation.y=-S*.11*_,r.torso.rotation.z=Math.cos(r.phase)*.025*_,r.head.rotation.y=Math.sin(this.clock*.48+r.phase*.05)*.045*(1-_),r.head.rotation.x=-.025+p*.018;for(let v=0;v<2;v++){const T=r.phase+v*Math.PI,w=Math.sin(T),y=r.legs[v],E=r.arms[v];y.thigh.rotation.x=w*m*_-A*(v?.95:.6)+M*.3,y.knee.rotation.x=Math.max(0,-Math.cos(T))*.95*_+A*1.25+M*.36,y.foot.rotation.x=-.12*_+A*.2,E.shoulder.rotation.x=-w*.57*_-.05-A*.82,E.shoulder.rotation.z=-E.side*(.08+p*.012+A*.22),E.elbow.rotation.x=-.18-_*(.28+Math.max(0,w)*.23)-A*.55,E.elbow.rotation.z=0}if(r.weaponDesc?.model==="bow"&&(r.arms[1].shoulder.rotation.x-=.35,r.arms[0].shoulder.rotation.x-=.18),e.attack>0){const v=1-e.attack/.48,T=Math.sin(v*Math.PI);r.torso.rotation.y+=Math.sin(v*Pi-1.1)*.7,r.arms[1].shoulder.rotation.x=-1.7+v*2.7,r.arms[1].shoulder.rotation.z=-.25-T*.85,r.arms[1].elbow.rotation.x=-.5+T*.35,r.arms[0].shoulder.rotation.x=-.6-T*.35,r.body.rotation.z=Math.sin(v*Pi)*.08}else r.body.rotation.z*=.85;if(r.waistPanels.forEach((v,T)=>{v.rotation.x=Math.sin(r.phase+T)*_*.11+A*.25}),r.cape){const v=r.cape.mesh.geometry.attributes.position,T=r.cape.base;for(let w=0;w<v.count;w++){const y=T[w*3],E=T[w*3+1],L=(.79-E)/1.58;v.setXYZ(w,y*(.8+L*.4),E,T[w*3+2]-L*L*(.15+_*.48+A*.5)+Math.sin(this.clock*3.1+y*5-L*4)*L*(.045+_*.07))}v.needsUpdate=!0,r.cape.mesh.geometry.computeVertexNormals()}}draw(e,t,n=1/60,i=!0){if(!this.renderer||!e)return;n=$i(n>1?n/1e3:n,0,.06),this.clock+=n;const r=En(e.players).find(m=>m.id===t)||En(e.players)[0];if(!r)return;this.self=r,this.lastState=e;const a=r.zone||"city";a!==this.zone&&this.rebuildZone(a);const o=this.entityPosition(r),l=new D(o.x,0,o.y);this.cameraReady||(this.target.copy(l),this.cameraReady=!0),this.target.lerp(l,1-Math.exp(-n*10));const c=this.target.clone();c.y=.8;const h=e.sceneMode==="intro";if(h&&this.width>800){const m=this.width/45*.145;c.x-=m*Math.SQRT1_2,c.z+=m*Math.SQRT1_2}const d=this.zoom*(h?1.32:1);Math.abs(this.camera.zoom-d)>1e-4&&(this.camera.zoom=d,this.camera.updateProjectionMatrix()),this.camera.position.copy(c).add(new D(40,32.66,40)),this.camera.lookAt(c),this.camera.updateMatrixWorld(),this.sun.position.set(this.target.x-18,26,this.target.z-14),this.sun.target.position.copy(this.target),this.sun.target.updateMatrixWorld(),this.environment?.update?.(this.clock,o);const f=new Set;for(const[m,p]of[[e.players,"player"],[e.enemies,"enemy"],[e.npcs,"npc"],[e.drops,"drop"]])for(const g of En(m)){if(g.zone&&g.zone!==a||g.hp===0)continue;f.add(g.id);let A=this.entities.get(g.id),M=wl(g);A&&M!==A.key&&(Ya(A.rig.root,!0),A.label.el.remove(),this.entities.delete(g.id),A=null),A||(A=this.makeEntity(g,p)),A.rig.root.visible=!0,A.label.title.textContent!==g.name&&(A.label.title.textContent=g.name||"Wanderer"),this.updateRig(A,g,n,e);const v=this.entityPosition(g),T=this.worldToScreen(v.x,v.y,v.lift+A.rig.height+.17);A.label.el.style.display=T.x<-100||T.x>this.width+100||T.y<-40||T.y>this.height+80?"none":"block",A.label.el.style.left=`${T.x}px`,A.label.el.style.top=`${T.y}px`,A.label.fill.style.width=`${$i(g.hp/(g.maxHp||1),0,1)*100}%`,A.label.bar.style.display=p==="player"&&g.id!==t||p==="enemy"&&g.hp<g.maxHp?"block":"none"}for(const[m,p]of this.entities)f.has(m)||(p.rig.root.visible=!1,p.label.el.style.display="none");const u=e.selectedTarget||e.targetId||r.target,_=[...En(e.enemies),...En(e.npcs)].find(m=>m.id===u&&m.hp>0&&m.zone===a);this.selection.visible=!!_,_&&this.selection.position.set(_.x,.04,_.y);const S=this.pointer?this.pickEntity(this.pointer.x,this.pointer.y,e):null;if(this.hoverRing.visible=!!S&&S.id!==u,S&&this.hoverRing.position.set(S.x,.035,S.y),this.pointerRing.visible=!!this.pointer&&!S,this.pointer){const m=this.screenToWorld(this.pointer.x,this.pointer.y);this.pointerRing.position.set(m.x,.032,m.y)}this.drawEffects(En(e.effects),e.time??0),i&&(this.renderer.info.reset(),this.presentation.render(n))}drawEffects(e,t){const n=new Set;for(const i of e){if(i.zone&&i.zone!==this.zone)continue;const r=$i((t-(i.start||0))/(i.duration||.65),0,1);if(r>=1)continue;const a=i.id||`${i.kind}:${i.x}:${i.y}:${i.start}`,o=i.kind||i.type||"hit";n.add(a);let l=this.effects.get(a);if(!l){const c=new Je;this.effectGroup.add(c);const h=i.color||(/fire|magic/.test(o)?"#efad65":/heal|shield/.test(o)?"#8bd0b9":"#fff2ba"),d=new oi({color:h,transparent:!0,opacity:.8,side:Qt,depthWrite:!1,blending:lo});if(/damage|text/.test(o)||i.amount!==void 0||i.damage!==void 0){const f=document.createElement("div");f.textContent=i.text||String(i.amount??i.damage??""),f.style.cssText="position:absolute;color:#ffe6ac;font:bold 19px Georgia,serif;text-shadow:0 2px 3px #3a2416;transform:translate(-50%,-50%);pointer-events:none",this.labels.appendChild(f),l={root:c,label:f,mat:d}}else if(/slash|line/.test(o)){const f=Ze(c,new Nn(.85,.026,4,42,Math.PI*1.15),d,0,1.3,0);f.rotation.set(.4,.2,-.4),l={root:c,mat:d,slash:f}}else if(/arrow|magic/.test(o)){const f=Ze(c,new Bn(o==="arrow"?.05:.13,8,6),d,0,.85,0);l={root:c,mat:d,ball:f},o==="arrow"&&Nt(c,d,[0,.85,-.28],[0,.85,.3],.018)}else{const f=Ze(c,new Nn(.65,.025,5,48),d);if(f.rotation.x=-Math.PI*.5,/fire|circle/.test(o))for(let u=0;u<12;u++)ht(c,d,Math.cos(u/12*Pi)*.8,.15,Math.sin(u/12*Pi)*.8,.05,.25,.05);l={root:c,mat:d,ring:f}}l.root.position.set(i.x??i.fromX??0,.07,i.y??i.fromY??0),this.effects.set(a,l)}if(l.mat.opacity=Math.sin(r*Math.PI)*.85,l.label){const c=this.worldToScreen(i.x,i.y,1.8+r*1.6);l.label.style.left=`${c.x}px`,l.label.style.top=`${c.y}px`,l.label.style.opacity=String(1-r)}l.slash&&(l.slash.rotation.z=-.8+r*3.6,l.root.rotation.y=Math.atan2((i.toX??i.x+1)-i.x,(i.toY??i.y)-i.y),l.root.scale.setScalar(.7+r*.8)),l.ball&&(l.root.position.x=bs.lerp(i.x,i.toX??i.x,r),l.root.position.z=bs.lerp(i.y,i.toY??i.y,r),l.root.rotation.y=Math.atan2((i.toX??i.x)-i.x,(i.toY??i.y)-i.y)),l.ring&&(l.root.scale.setScalar(.5+r*(/circle|hercules/.test(o)?6:2.4)),l.root.position.y=/shield/.test(o)?.8+Math.sin(r*Math.PI)*.4:.04)}for(const[i,r]of this.effects)n.has(i)||(Ya(r.root,!0),r.label?.remove(),this.effects.delete(i))}equipmentPreview(e){if(!this.renderer)return"";const t=wl(e);if(this.previewKey===t)return this.previewData;this.previewRenderer||(this.previewRenderer=new Yu({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.previewRenderer.setSize(380,420),this.previewRenderer.setPixelRatio(1),this.previewRenderer.outputColorSpace=It,this.previewRenderer.toneMapping=qr,this.previewRenderer.toneMappingExposure=1.2);const n=new Vh,i=Cc(e);n.add(i.root),i.root.rotation.y=-.35,i.licensed&&(Pc(i,["sword","dagger","glaive","spear"].includes(i.weaponDesc?.model)?"Sword_Idle":"Idle_Loop",0),i.mixer.update(.4)),n.add(new _u("#edf4ef","#687563",2.8));const r=new no("#fff1d4",3.4);r.position.set(-3,5,5),n.add(r);const a=new pn(30,380/420,.1,50);a.position.set(3.5,2.6,6.1),a.lookAt(0,1.38,0),this.previewRenderer.render(n,a);const o=this.previewRenderer.domElement.toDataURL("image/png");return Ya(i.root,!0),this.previewKey=t,this.previewData=o,o}getDebugState(){const e=this.self?this.entities.get(this.self.id):null,t=e?.rig,n=i=>{const r=t?.bones?.[i];return r?{position:r.position.toArray().map(a=>+a.toFixed(4)),quaternion:r.quaternion.toArray().map(a=>+a.toFixed(4))}:null};return{engine:"three",modelLoaded:!!this.modelLoaded,avatarCount:[...this.entities.values()].filter(i=>i.rig.root.visible).length,cameraZoom:this.camera?.zoom||1,projection:this.camera?{origin:this.worldToScreen(0,0),x:this.worldToScreen(1,0),y:this.worldToScreen(0,1),elevation:this.worldToScreen(0,0,1)}:null,player:e?{animation:t.animation||(e.jumping?"procedural jump":e.motion>.1?"procedural run":"procedural idle"),animationTime:+((t.animationTime||this.clock)%100).toFixed(4),rootPosition:t.root.position.toArray().map(i=>+i.toFixed(3)),boneRotations:{hand_r:n("hand_r"),calf_r:n("calf_r"),thigh_r:n("thigh_r"),spine_03:n("spine_03")},gearSlots:{...this.self.equipment},visibleEquipmentMeshes:t.nodes?Object.values(t.nodes).filter(i=>i.isMesh&&i.visible&&i.name.startsWith("Gear_")).map(i=>i.name):[]}:null,drawCalls:this.renderer?.info.render.calls||0,triangles:this.renderer?.info.render.triangles||0}}destroy(){this.presentation?.dispose(),this.environment?.dispose?.();for(const e of this.entities.values())Ya(e.rig.root,!0),e.label.el.remove();this.entities.clear(),this.canvas?.removeEventListener("wheel",this.onWheel),this.labels?.remove(),this.renderer?.dispose(),this.canvas?.remove(),this.previewRenderer?.dispose()}}const od={sword:"M6 18 18 6M6 6l12 12M3 21l4-4M17 7l4-4M4 14l6 6M14 4l6 6",shield:"M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6zM12 8v8M8 12h8",bow:"M5 3c16 2 16 16 0 18M5 3l8 9-8 9M4 12h16M17 9l3 3-3 3",magic:"M12 3v18M3 12h18M5 5l14 14M5 19 19 5M9 3l3 3 3-3M9 21l3-3 3 3",bag:"M7 7V5a5 5 0 0 1 10 0v2M4 7h16l1 14H3zM9 12h6",potion:"M9 3h6M9 3v5l-4 7a4 4 0 0 0 3 6h8a4 4 0 0 0 3-6l-4-7V3M7 14h10",jump:"M5 19c0-10 14-10 14 0M15 15l4 4 3-4M4 21h5",scroll:"M6 4h12v16H6zM6 4H4a2 2 0 0 0 0 4h2M18 16h2a2 2 0 0 1 0 4h-2M9 9h6M9 13h5",coin:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M9 9h6v6H9z",help:"M9 8a3 3 0 1 1 5 2c-2 1-2 2-2 4M12 17h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18",volume:"M3 9h4l5-4v14l-5-4H3zM16 8c3 2 3 6 0 8M19 5c5 4 5 10 0 14",arrow:"M4 12h16M15 7l5 5-5 5",connect:"M8 8h8v8H8zM12 3v5M12 16v5M3 12h5M16 12h5",gem:"M3 8l4-5h10l4 5-9 13zM3 8h18M7 3l5 18 5-18",chat:"M4 4h16v12H8l-4 4z",fullscreen:"M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5",moon:"M17 3a9 9 0 1 0 4 14A9 9 0 0 1 17 3",map:"M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2zM9 3v16M15 5v16"},pt=s=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${od[s]||od.gem}"/></svg>`,fh=s=>({trojan:"sword",warrior:"shield",archer:"bow",taoist:"magic",fire:"magic",water:"magic"})[s]||"sword",Gt=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),be=s=>document.querySelector(s);let cn=null;try{cn=JSON.parse(localStorage.getItem("jade-realm-save-v1")||"null")}catch{}let ci=cn?.classId||"trojan",_n=Io(),kt="local-hero",dt,Ut="intro",In=null,qn=null,Sn=!1,or=!1,oo=!1,Fr=!1,yi=null,El=0,Al=0,Mn={x:28,y:24},$a=[],Rl=!1,Ni=ra(kt,cn?.name||"Wanderer",ci);Lo(_n,Ni);dt=_r(_n,kt);be("#app").innerHTML=`
<header class="app-header"><div class="emblem"><span>龍</span></div><div class="brand">JADE REALM<small>CONQUER WEB · 3D REALM</small></div><div class="header-divider"></div><span class="header-label">THE ROAD TO IMMORTALITY</span><div class="header-spacer"></div><span class="status" id="status"><i class="status-dot"></i> SOLO REALM</span><button class="header-link" id="connect-btn" title="Connect to multiplayer server">${pt("connect")}<span>Multiplayer</span></button><button class="header-link" id="help-btn" title="Controls">${pt("help")}</button></header>
<main class="game-shell"><div id="game"></div><div class="hud">
<div class="player-card panel"><div class="portrait" id="portrait">${pt(fh(ci))}<span class="level" id="level">1</span></div><div><div class="player-name" id="player-name">Wanderer</div><div class="player-class" id="player-class">TROJAN · NOVICE</div><div class="meter"><i id="hp-bar"></i></div><div class="meter stamina"><i id="stamina-bar"></i></div><div class="meter mana"><i id="mana-bar"></i></div></div><span class="resource-text" id="hp-text"></span></div>
<div class="zone-heading"><small>THE JADE PROVINCE</small><h1 id="zone-title">Twin Haven</h1><p id="zone-desc">A sanctuary beneath the mountain</p></div>
<div class="minimap panel"><div class="minimap-head"><span>WORLD MAP</span>${pt("map")}</div><canvas id="minimap" width="264" height="224"></canvas><div class="map-coords"><span id="coords">24, 24</span><span id="map-zone">SAFE ZONE</span></div></div>
<div class="quest-card panel"><div class="eyebrow">${pt("scroll")} YOUR JOURNEY</div><h3 id="quest-title">A warrior’s beginning</h3><p id="quest-description">The captain has a task for you. Speak to him in the city courtyard.</p><div class="quest-progress" id="quest-progress"></div><button class="link-button" id="quest-btn">Find the captain ${pt("arrow")}</button></div>
<div class="target-card panel" id="target-card"><b id="target-name"></b><div class="meter"><i id="target-hp"></i></div></div>
<div class="chat-card panel"><div class="chat-tabs"><b>REALM</b><span>EVENTS</span></div><div class="chat-log" id="chat-log"></div><form class="chat-input" id="chat-form">${pt("chat")}<input id="chat-text" maxlength="140" aria-label="Chat message" placeholder="Press Enter to chat…"></form></div>
<div class="dock-caption">CLICK TO MOVE <span style="opacity:.5">·</span> RIGHT CLICK TO JUMP</div><div class="action-dock panel"><button class="dock-button" id="attack-btn" title="Attack nearest target · Space"><small>SPACE</small>${pt("sword")}</button><button class="dock-button gold" id="skill-btn" title="Class skill · Q"><small>Q</small>${pt("magic")}</button><button class="dock-button blue" id="jump-btn" title="Jump toward cursor · J"><small>J</small>${pt("jump")}</button><button class="dock-button purple" id="potion-btn" title="Use healing potion · 1"><small>1</small>${pt("potion")}<span class="count" id="potion-count">5</span></button><div class="dock-divider"></div><button class="dock-button" id="interact-btn" title="Interact or use nearby portal · E"><small>E</small>${pt("scroll")}</button><div class="xp-meter"><i id="xp-bar"></i></div></div>
<div class="gold-display">${pt("coin")}<span id="gold">0</span> silver</div><div class="utility-dock"><button class="utility-button" id="bag-btn" title="Inventory · I">${pt("bag")}<small>I</small></button><button class="utility-button" id="sound-btn" title="Enable sound">${pt("volume")}</button><button class="utility-button" id="travel-btn" title="Travel between city and wilds">${pt("map")}</button><button class="utility-button" id="fullscreen-btn" title="Fullscreen · F">${pt("fullscreen")}</button></div>
<div class="toast hidden" id="toast" role="status"></div></div><div class="zone-flash" id="zone-flash"></div><div class="overlay" id="intro"></div><div class="overlay hidden" id="modal"></div></main>`;const Dn=new Ky;be("#intro").innerHTML='<section class="modal loading-modal"><div class="eyebrow">JADE REALM</div><h2>The gates are opening</h2><p>Preparing your world…</p><div class="loading-realm"><i></i></div></section>';await Dn.init(be("#game"));let Jy=()=>is.find(e=>e.id===ci)?.description||"Master the blade. Close the distance, strike, and leap away.";function Lf(){be("#intro").innerHTML=`<section class="modal intro-modal"><div class="intro-figure" aria-hidden="true"></div><div class="intro-content"><div class="intro-crest">龍</div><h2>Enter the Jade Realm</h2><div class="subtitle">YOUR JOURNEY BEGINS WITH A SINGLE LEAP</div><p>An open world of ancient cities, untamed wilds,<br>and the art of the blade. Choose your path.</p><div class="class-grid" style="grid-template-columns:repeat(${is.length},1fr)">${is.map(s=>`<button class="class-option ${ci===s.id?"active":""}" data-class="${s.id}">${pt(fh(s.id))}<span>${Gt(s.name)}</span></button>`).join("")}</div><div class="class-description">${Gt(Jy())}</div><label class="name-label" for="hero-name">YOUR CHARACTER’S NAME</label><input class="name-input" id="hero-name" maxlength="18" value="${Gt(cn?.name||"Wanderer")}" autocomplete="off"><button id="start-btn" class="primary">${cn?"CONTINUE YOUR JOURNEY":"BEGIN YOUR JOURNEY"} ${pt("arrow")}</button><p class="intro-note">A living 3D world · Animated characters · Free to explore<br>Progress saves in this browser. Multiplayer is available through your own server.</p></div></section>`,document.querySelectorAll("[data-class]").forEach(s=>s.onclick=()=>{cn={...cn,name:be("#hero-name").value},ci=s.dataset.class,Ut==="intro"&&(_n=Io(),Ni=ra(kt,cn?.name||"Wanderer",ci),Lo(_n,Ni),dt=_r(_n,kt)),Lf()}),be("#start-btn").onclick=()=>Ic(be("#hero-name").value),be("#hero-name").onkeydown=s=>{s.key==="Enter"&&Ic(s.target.value)}}function Ic(s){_n=Io();const e=s.trim().slice(0,18)||"Wanderer";Ni=cn?.classId===ci?Mf(cn,kt,e,ci):ra(kt,e,ci),Lo(_n,Ni),dt=_r(_n,kt),Ut="play",be("#intro").classList.add("hidden"),lr("Welcome",`${Ni.name}, your story begins in Twin Haven.`),lr("Guide","Click to walk. Right click to jump. E to speak."),Ot("Speak to Captain Shen to begin your first quest."),xr(),aa()}function At(){return dt?.players?.find(s=>s.id===kt)||Ni}function lr(s,e){$a.push({name:s,text:e}),$a=$a.slice(-3),be("#chat-log").innerHTML=$a.map(t=>`<div><span>${Gt(t.name)}</span> ${Gt(t.text)}</div>`).join("")}let ld;function Ot(s){s&&(be("#toast").textContent=s,be("#toast").classList.remove("hidden"),clearTimeout(ld),ld=setTimeout(()=>be("#toast").classList.add("hidden"),2700))}function Nf(s){if(Fr)try{yi??=new AudioContext;const e=yi.createOscillator(),t=yi.createGain();e.connect(t),t.connect(yi.destination),e.type=s==="attack"?"triangle":"sine",e.frequency.setValueAtTime(s==="attack"?280:s==="jump"?480:660,yi.currentTime),e.frequency.exponentialRampToValueAtTime(s==="attack"?70:240,yi.currentTime+.13),t.gain.setValueAtTime(.025,yi.currentTime),t.gain.exponentialRampToValueAtTime(.001,yi.currentTime+.16),e.start(),e.stop(yi.currentTime+.17)}catch{}}function Mt(s,{quiet:e=!1}={}){if(Ut!=="play"&&s.type!=="respawn")return{ok:!1};if(Sn)return qn?.readyState!==WebSocket.OPEN?{ok:!1}:(qn.send(JSON.stringify({type:"command",command:s})),{ok:!0});const t=At().zone,n=wy(_n,kt,s)||{ok:!0};if(dt=_r(_n,kt),n.message&&!e&&Ot(n.message),n.ok&&["attack","skill","jump","pickup"].includes(s.type)&&Nf(s.type),s.type==="interact"&&n.ok){const i=n.npc||dt.npcs.find(r=>r.id===s.npcId);i&&Uf(i)}return n.ok&&["quest_accept","quest_claim","compose","equip","unequip"].includes(s.type)&&(lr("Journey",n.message||"Your progress has been updated."),aa()),t!==At().zone&&Df(),xr(),n}function Df(){In=null,or=!1,be("#zone-flash").style.opacity=".5",setTimeout(()=>be("#zone-flash").style.opacity="0",100),lr("Realm",`You entered ${Zt[At().zone]?.name||At().zone}.`)}function ys(s){be("#modal").innerHTML=`<section class="modal">${s}<button class="modal-close" id="close-modal" aria-label="Close">×</button></section>`,be("#modal").classList.remove("hidden"),be("#close-modal").onclick=kn}function kn(){be("#modal").classList.add("hidden"),Ut==="dead"&&(Ut="play")}function Uf(s){const e=s.role||"steward",t=At(),n=t.quest||{};/steward|quest|task/i.test(e)||/shen|steward/i.test(s.name)?(ys(`<div class="eyebrow">${pt("scroll")} CITY CAPTAIN</div><h2>${Gt(s.name)}</h2><p>Welcome, traveler. Beyond the eastern gate, pheasants have overrun the fields. Clear five of them and return to me. You will be rewarded for your help.</p><div class="equipped-row">${pt("coin")}<span>Reward: 150 silver, 80 experience & a Phoenix ring</span></div><div class="dialog-options">${n.accepted?n.claimed?'<button id="done-quest">The fields are safe. Thank you, traveler.</button>':`<button id="claim-quest" ${n.kills<5?"disabled":""}>${n.kills>=5?"I have cleared the fields. Claim reward.":`Pheasants defeated: ${n.kills||0} / 5`}</button>`:'<button id="accept-quest">I will help. Accept the quest.</button>'}<button id="npc-leave">Continue exploring</button></div>`),be("#accept-quest")?.addEventListener("click",()=>{Mt({type:"quest_accept"}),kn()}),be("#claim-quest")?.addEventListener("click",()=>{Mt({type:"quest_claim"}),kn()}),be("#done-quest")?.addEventListener("click",kn)):/forge|compose/i.test(e)?(ys(`<div class="eyebrow">${pt("gem")} THE FORGE</div><h2>${Gt(s.name)}</h2><p>Your weapon carries your spirit. Bring an upgrade stone and I can strengthen it. Each composition consumes one stone and 25 silver, adding one enhancement level.</p><div class="dialog-options"><button id="npc-forge">Open equipment & composition</button><button id="npc-leave">Leave the forge</button></div>`),be("#npc-forge").onclick=wi):(ys(`<div class="eyebrow">${pt("potion")} CITY HEALER</div><h2>${Gt(s.name)}</h2><p>Rest your blade for a moment. The city is a sanctuary. I restore your health and mana, and refill your supplies to eight potions for eight silver each. Healing potions will keep you safe in the wilds.</p><div class="dialog-options"><button id="npc-heal">Use a healing potion</button><button id="npc-leave">Continue exploring</button></div>`),be("#npc-heal").onclick=()=>{Mt({type:"potion"}),kn()}),be("#npc-leave")?.addEventListener("click",kn)}const Cl=[{id:"helmet",name:"Helmet",icon:"shield"},{id:"necklace",name:"Necklace",icon:"gem"},{id:"armor",name:"Armor",icon:"shield"},{id:"garment",name:"Garment",icon:"scroll"},{id:"weapon",name:"Weapon",icon:"sword"},{id:"offhand",name:"Off-hand",icon:"shield"},{id:"ring",name:"Ring",icon:"gem"},{id:"boots",name:"Boots",icon:"jump"}];let fs="weapon";function Zy(s){const e=s?.appearance?.model,t=/armor/.test(e||"")?"armor":e==="crown"?"helmet":e==="boots"?"boots":e==="cape"?"garment":e==="shield"?"offhand":["sword","glaive","spear","dagger"].includes(e)?"weapon":/potion/i.test(s?.name||"")?"potion":null;return t?`<span class="item-art art-${t}" aria-hidden="true"></span>`:pt(e==="bow"?"bow":["staff","wand","orb"].includes(e)?"magic":/stone|gem|pendant|ring/i.test(s?.name||"")?"gem":"scroll")}function wi(){const s=At(),e=s.inventory||[],t=s.equipment||{},n=e.find(a=>a.id===t[fs]);let i="";try{i=Dn.equipmentPreview?.(s)||""}catch{}const r=Cl.map(a=>{const o=e.find(l=>l.id===t[a.id]);return`<button class="gear-slot ${o?"filled":""} ${fs===a.id?"selected":""}" data-slot="${a.id}" title="${Gt(o?.name||a.name+" · empty")}"><span>${pt(a.icon)}</span><small>${a.name}</small>${o?`<b>+${o.plus||0}</b>`:""}</button>`}).join("");ys(`<div class="eyebrow">${pt("bag")} CHARACTER & EQUIPMENT</div><h2>Your belongings</h2><div class="inventory-meta"><span>${Gt(s.name)} · Level ${s.level} · ${Gt(is.find(a=>a.id===s.classId)?.name||s.classId)}</span><span>${s.gold.toLocaleString()} silver</span></div><div class="equipment-layout"><aside class="paperdoll"><div class="paperdoll-stage"><div class="paperdoll-halo"></div><img id="equipment-preview" alt="Your character with currently equipped pieces" src="${Gt(i||"./art/body.png")}"><span class="paperdoll-title">${Gt(s.name)}</span></div><div class="gear-slots">${r}</div><div class="paperdoll-stats"><span>Attack <b>${s.attack??"—"}</b></span><span>Defense <b>${s.defense??"—"}</b></span></div><div class="gear-detail"><small>${Gt(Cl.find(a=>a.id===fs)?.name).toUpperCase()}</small><b>${Gt(n?.name||"Empty slot")}${n?.plus?` +${n.plus}`:""}</b><p>${n?`${n.attack?`Attack +${n.attack}`:""}${n.attack&&n.defense?" · ":""}${n.defense?`Defense +${n.defense}`:""}`:"Choose a piece in your bag to equip it."}</p><div>${n?'<button id="unequip-slot">Remove piece</button>':""}<button class="compose-button" id="compose-equipped" ${n?"":"disabled"}>Compose +1</button></div></div></aside><div class="bag-content"><div class="bag-title">YOUR BAG <span>${e.length} pieces</span></div><div class="items-grid">${e.map(a=>{const o=Cl.some(c=>c.id===a.slot),l=t[a.slot]===a.id;return`<div class="item ${l?"item-equipped":""} ${a.quality==="super"?"super":""}" data-item="${Gt(a.id)}"><div class="item-icon">${Zy(a)}</div><b>${Gt(a.name)}${a.plus?` +${a.plus}`:""}${a.qty>1?` ×${a.qty}`:""}</b><small>${Gt(a.slot||"Consumable")}${a.attack?` · ATK ${a.attack}`:a.defense?` · DEF ${a.defense}`:""}</small>${o?`<button data-equip="${Gt(a.id)}" title="${l?"Remove this piece":"Equip to "+a.slot}">${l?"Equipped":"Equip"}</button>`:/potion/i.test(a.name)?"<button data-potion>Use potion</button>":"<small>Composition material</small>"}</div>`}).join("")}</div><p class="bag-hint">Each piece occupies its own slot. Weapons, armor, helmets, boots and garments change your character’s appearance. Compose near Master Wu using one stone and 25 silver.</p></div></div>`),be("#modal .modal").classList.add("inventory-modal"),document.querySelectorAll("[data-slot]").forEach(a=>a.onclick=()=>{fs=a.dataset.slot,wi()}),document.querySelectorAll("[data-equip]").forEach(a=>a.onclick=()=>{fs=e.find(l=>l.id===a.dataset.equip)?.slot||fs,Mt({type:"equip",itemId:a.dataset.equip}),Sn||wi()}),document.querySelectorAll("[data-potion]").forEach(a=>a.onclick=()=>{Mt({type:"potion"}),Sn||wi()}),be("#unequip-slot")?.addEventListener("click",()=>{Mt({type:"unequip",slot:fs}),Sn||wi()}),be("#compose-equipped").onclick=()=>{n&&(Mt({type:"compose",itemId:n.id}),Sn||wi())}}function jy(){const s=At();return[...dt.enemies||[]].filter(e=>e.hp>0).sort((e,t)=>Math.hypot(e.x-s.x,e.y-s.y)-Math.hypot(t.x-s.x,t.y-s.y))[0]}function ph(){const s=dt.enemies?.find(t=>t.id===In&&t.hp>0)||jy();if(!s)return Ot("No enemies nearby. Travel through the eastern gate.");In=s.id,!Mt({type:"attack",targetId:s.id}).ok&&Math.hypot(s.x-At().x,s.y-At().y)>2&&Mt({type:"move",x:s.x-1,y:s.y},{quiet:!0})}function Ff(){const s=At(),e=r=>Math.hypot(r.x-s.x,r.y-s.y),t=dt.drops?.find(r=>e(r)<2.5),n=[...dt.npcs||[]].sort((r,a)=>e(r)-e(a))[0],i=Zt[s.zone]?.portal;if(t)return Mt({type:"pickup",dropId:t.id});if(n&&e(n)<4)return Mt({type:"interact",npcId:n.id});if(i&&e(i)<3)return Mt({type:"portal"});Ot("Move closer to a character, item, or portal.")}function Lc(){const s=Zt[At().zone];s&&(or=!0,In=null,Mt({type:"move",x:s.portal.x,y:s.portal.y}),Ot("Walking to the realm gate…"))}function Qy(){const s=At();if(s.quest?.accepted&&!s.quest.claimed&&s.quest.kills<5){s.zone==="city"?Lc():Ot("Hunt five pheasants in the wilds. Space attacks; Q casts your class skill.");return}if(s.zone!=="city"){Lc();return}const e=dt.npcs.find(t=>/steward|quest|task/i.test(t.role)||/shen|steward/i.test(t.name));e&&(Math.hypot(e.x-s.x,e.y-s.y)<4?Mt({type:"interact",npcId:e.id}):(Mt({type:"move",x:e.x+1,y:e.y+1}),Ot(`Approach ${e.name}, then press E.`)))}function eM(){ys(`<div class="eyebrow">${pt("help")} FIELD GUIDE</div><h2>The art of movement</h2><p>Use positioning to control each encounter. Leap out of danger, aim your skill, and return for the finishing strike.</p><div class="controls-grid">${[["Click","Walk / select enemy"],["Right click","Jump to cursor"],["WASD","Walk in screen direction"],["Scroll","Zoom the 3D camera"],["Space","Attack nearest target"],["Q","Aim & cast class skill"],["J","Jump toward cursor"],["E","Talk / loot / use portal"],["1","Healing potion"],["I","Inventory & composition"],["F","Toggle fullscreen"],["Escape","Close a panel"]].map(([s,e])=>`<div class="control-row"><span class="key">${s}</span>${e}</div>`).join("")}</div><p>On touch screens, tap the ground to walk. Use the skill bar to attack, jump and interact. Progress is saved on this device.</p>`)}function tM(){ys(`<div class="eyebrow">${pt("connect")} MULTIPLAYER</div><h2>Join a shared realm</h2><p>Run the included authoritative game server, then enter its WebSocket address. Players on the same server share monsters, loot, and realm chat.</p><label class="name-label" for="server-url">SERVER ADDRESS</label><input class="connect-input" id="server-url" value="${Gt(localStorage.getItem("jade-realm-server")||(location.port==="8787"?`ws://${location.host}`:"ws://localhost:8787"))}" placeholder="wss://your-server.example"><button class="primary" id="join-server">CONNECT TO REALM ${pt("arrow")}</button><p>The hosted preview runs solo. For multiplayer hosting, see the Docker instructions in the GitHub repository.</p>`),be("#join-server").onclick=()=>nM(be("#server-url").value.trim())}function cd(){Sn=!1,kt="local-hero",_n=Io(),Ni=cn?Mf(cn,kt,cn.name,cn.classId):ra(kt,"Wanderer",ci),Lo(_n,Ni),dt=_r(_n,kt),be("#status").innerHTML='<i class="status-dot"></i> SOLO REALM'}function nM(s){if(!/^wss?:\/\//.test(s))return Ot("Use a ws:// or wss:// server address.");if(location.protocol==="https:"&&s.startsWith("ws:")&&!/ws:\/\/(localhost|127\.0\.0\.1)(:|\/)/.test(s))return Ot("A secure page requires a wss:// server.");const e=qn;qn=null,e?.close(),Sn&&cd();let t;try{t=new WebSocket(s)}catch{return Ot("That server address is invalid.")}qn=t,Ot("Connecting to shared realm…"),t.onopen=()=>{qn===t&&(t.send(JSON.stringify({type:"join",name:At().name,classId:At().classId})),localStorage.setItem("jade-realm-server",s))},t.onmessage=n=>{if(qn!==t)return;let i;try{i=JSON.parse(n.data)}catch{return}if(i.type==="welcome"&&(kt=i.id||i.state?.selfId,Sn=!0,dt=i.state||dt,Ut="play",kn(),be("#intro").classList.add("hidden"),be("#status").innerHTML='<i class="status-dot"></i> SHARED REALM',Ot("Connected. You are in a shared realm.")),i.type==="state"&&(dt=i.state,dt?.selfId&&(kt=dt.selfId),At().hp>0&&Ut==="dead"&&(Ut="play",kn()),Rl&&be("#modal .inventory-modal")&&(Rl=!1,wi()),xr()),i.type==="result"){const r=i.result||i;r.ok&&["equip","unequip","compose","potion"].includes(i.command)&&(Rl=!0),r.message&&(!r.ok||!["move","attack","jump"].includes(i.command))&&Ot(r.message),r.ok&&r.npc&&Uf(r.npc)}i.type==="chat"&&lr(i.name||i.from,i.text),i.type==="error"&&Ot(i.message)},t.onerror=()=>{qn===t&&Ot("Could not connect. Check the address and that the server is running.")},t.onclose=()=>{qn===t&&(qn=null,Sn&&(cd(),Ut="play",kn(),Ot("Server disconnected. Returned to your solo character.")))}}function iM(){const s=be("#minimap"),e=s.getContext("2d"),t=At(),n=Zt[t.zone];if(!n)return;const i=132,r=2.3;e.clearRect(0,0,264,224),e.fillStyle="#283c2c",e.beginPath(),e.moveTo(i,8),e.lineTo(248,106),e.lineTo(i,208),e.lineTo(16,106),e.closePath(),e.fill(),e.strokeStyle="#b3bb8055",e.stroke();const a=(c,h)=>({x:i+(c-h)*r,y:8+(c+h)*r*.9});e.fillStyle="#859367";for(const c of n.obstacles){const h=a(c.x,c.y);e.fillRect(h.x-4,h.y-4,9,9)}for(const c of dt.npcs||[]){const h=a(c.x,c.y);e.fillStyle="#d5be7d",e.fillRect(h.x-2,h.y-2,4,4)}for(const c of dt.enemies||[]){if(c.hp<=0)continue;const h=a(c.x,c.y);e.fillStyle="#b07850",e.fillRect(h.x-1.5,h.y-1.5,3,3)}const o=a(n.portal.x,n.portal.y);e.strokeStyle="#99d7d2",e.lineWidth=2,e.beginPath(),e.arc(o.x,o.y,5,0,Math.PI*2),e.stroke();const l=a(t.x,t.y);e.shadowColor="#fff3be",e.shadowBlur=8,e.fillStyle="#fff0b4",e.beginPath(),e.arc(l.x,l.y,4,0,Math.PI*2),e.fill(),e.shadowBlur=0}function xr(){const s=At();if(!s)return;const e=is.find(i=>i.id===s.classId);be("#player-name").textContent=s.name,be("#player-class").textContent=`${e?.name||s.classId} · ${s.level<5?"NOVICE":"ADVENTURER"}`.toUpperCase(),be("#level").textContent=s.level,be("#portrait").innerHTML=pt(fh(s.classId))+`<span class="level" id="level">${s.level}</span>`,be("#hp-text").textContent=`${Math.ceil(s.hp)} / ${s.maxHp}`,be("#hp-bar").style.width=`${100*s.hp/s.maxHp}%`,be("#stamina-bar").style.width=`${100*s.stamina/(s.maxStamina||100)}%`,be("#mana-bar").style.width=`${100*s.mana/(s.maxMana||100)}%`,be("#xp-bar").style.width=`${100*s.xp/(s.nextXp||100)}%`,be("#gold").textContent=Math.floor(s.gold||0).toLocaleString(),be("#potion-count").textContent=(s.inventory||[]).filter(i=>/potion/i.test(i.name)).reduce((i,r)=>i+(r.qty??1),0),be("#zone-title").textContent=Zt[s.zone]?.name||"Twin Haven",be("#zone-desc").textContent=s.zone==="city"?"A sanctuary beneath the mountain":"Beyond the gate, a path of your own",be("#coords").textContent=`${Math.round(s.x)}, ${Math.round(s.y)}`,be("#map-zone").textContent=s.zone==="city"?"SAFE ZONE":"HUNTING GROUNDS";const t=s.quest||{};be("#quest-title").textContent=t.accepted?t.claimed?"A path of your own":"Trouble in the fields":"A warrior’s beginning",be("#quest-description").textContent=t.accepted?t.claimed?"Continue your training. Find better gear and strengthen your weapon at the forge.":t.kills>=5?"The fields are clear. Return to Captain Shen for your reward.":"Travel through the eastern gate and defeat five pheasants in the wilds.":"The captain has a task for you. Speak to him in the city courtyard.",be("#quest-progress").innerHTML=t.accepted&&!t.claimed?`<span>Pheasants defeated</span><span>${Math.min(5,t.kills||0)} / 5</span>`:"",be("#quest-btn").innerHTML=`${t.accepted?t.claimed?"Explore the wilds":t.kills>=5?"Return to the city":"Travel to the wilds":"Find the captain"} ${pt("arrow")}`;const n=dt.enemies?.find(i=>i.id===In&&i.hp>0);be("#target-card").style.display=n?"block":"none",n&&(be("#target-name").textContent=n.name,be("#target-hp").style.width=`${100*n.hp/n.maxHp}%`),iM(),s.hp<=0&&Ut==="play"&&(Ut="dead",ys(`<div class="eyebrow">${pt("moon")} THE CYCLE CONTINUES</div><h2>A moment to rise again</h2><p>Your journey is far from over. Return to the safety of Twin Haven, restore your strength, and try again.</p><button class="primary" id="respawn-btn">RETURN TO THE CITY ${pt("arrow")}</button>`),be("#respawn-btn").onclick=()=>{Mt({type:"respawn"}),Sn?(be("#respawn-btn").disabled=!0,be("#respawn-btn").textContent="RETURNING…"):(Ut="play",kn(),Ot("Your strength is restored."))})}function aa(){if(Sn||Ut==="intro")return;const s=At();cn={version:1,name:s.name,classId:s.classId,level:s.level,xp:s.xp,gold:s.gold,nextXp:s.nextXp,maxHp:s.maxHp,maxMana:s.maxMana,inventory:s.inventory,equipment:s.equipment,quest:s.quest};try{localStorage.setItem("jade-realm-save-v1",JSON.stringify(cn))}catch{}}be("#attack-btn").onclick=ph;be("#skill-btn").onclick=()=>Mt({type:"skill",x:Mn.x,y:Mn.y});be("#jump-btn").onclick=()=>{matchMedia("(pointer:coarse)").matches?(oo=!oo,Ot(oo?"Tap a landing point to jump.":"Tap to walk.")):Mt({type:"jump",x:Mn.x,y:Mn.y})};be("#potion-btn").onclick=()=>Mt({type:"potion"});be("#interact-btn").onclick=Ff;be("#bag-btn").onclick=wi;be("#help-btn").onclick=eM;be("#connect-btn").onclick=tM;be("#travel-btn").onclick=Lc;be("#quest-btn").onclick=Qy;be("#sound-btn").onclick=()=>{Fr=!Fr,be("#sound-btn").style.color=Fr?"#efce87":"#7e9a80",Ot(Fr?"Sound enabled":"Sound muted"),Nf("jump")};const Of=()=>{document.fullscreenElement?document.exitFullscreen():be(".game-shell").requestFullscreen?.().catch(()=>Ot("Fullscreen is unavailable in this browser."))};be("#fullscreen-btn").onclick=Of;be("#modal").onclick=s=>{s.target===be("#modal")&&kn()};be("#chat-form").onsubmit=s=>{s.preventDefault();const e=be("#chat-text").value.trim();e&&(Sn?qn.send(JSON.stringify({type:"chat",text:e})):lr(At().name,e),be("#chat-text").value="",be("#chat-text").blur())};be("#game").addEventListener("pointermove",s=>{Mn=Dn.screenToWorld(s.clientX,s.clientY),Dn.setPointer?.(s.clientX,s.clientY)});be("#game").addEventListener("pointerdown",s=>{if(Ut!=="play"||s.button===1)return;if(Mn=Dn.screenToWorld(s.clientX,s.clientY),s.button===2||oo){In=null,or=!1,Mt({type:"jump",x:Math.round(Mn.x),y:Math.round(Mn.y)});return}const e=Dn.pickEntity?.(s.clientX,s.clientY,dt),t=typeof e=="object"?e:[...dt.enemies||[],...dt.npcs||[],...dt.drops||[]].find(n=>n.id===e);if(t){if(dt.enemies?.some(n=>n.id===t.id)){In=t.id,ph();return}if(dt.npcs?.some(n=>n.id===t.id)){Math.hypot(t.x-At().x,t.y-At().y)<4?Mt({type:"interact",npcId:t.id}):(Mt({type:"move",x:t.x+1,y:t.y+1}),Ot(`Approach ${t.name}, then press E.`));return}if(dt.drops?.some(n=>n.id===t.id)){Mt({type:"pickup",dropId:t.id});return}}In=null,or=!1,Mt({type:"move",x:Math.round(Mn.x),y:Math.round(Mn.y)})});be("#game").addEventListener("contextmenu",s=>s.preventDefault());let Yn=new Set;document.addEventListener("keydown",s=>{if(["INPUT","TEXTAREA"].includes(s.target.tagName))return;if(s.key==="Escape")return kn();if(s.key.toLowerCase()==="f")return Of();if(Ut==="intro"&&s.key==="Enter"){Ic(be("#hero-name")?.value||"Wanderer");return}if(Ut!=="play"||(s.code==="Space"&&(s.preventDefault(),s.repeat||ph()),s.repeat))return;Yn.add(s.key.toLowerCase()),{q:()=>Mt({type:"skill",x:Mn.x,y:Mn.y}),j:()=>Mt({type:"jump",x:Math.round(Mn.x),y:Math.round(Mn.y)}),e:Ff,i:wi,1:()=>Mt({type:"potion"}),enter:()=>be("#chat-text").focus()}[s.key.toLowerCase()]?.()});document.addEventListener("keyup",s=>Yn.delete(s.key.toLowerCase()));window.addEventListener("blur",()=>{Yn.clear(),aa()});let Pl=0;function Bf(s,e=!0){if(Ut==="play"&&!Sn&&(Ey(_n,s),dt=_r(_n,kt)),Ut==="play"){const t=At();if(Pl+=s,Pl>.12){let n=0,i=0;(Yn.has("w")||Yn.has("arrowup"))&&(n--,i--),(Yn.has("s")||Yn.has("arrowdown"))&&(n++,i++),(Yn.has("a")||Yn.has("arrowleft"))&&(n--,i++),(Yn.has("d")||Yn.has("arrowright"))&&(n++,i--),(n||i)&&(In=null,Mt({type:"move",x:Math.round(t.x)+n,y:Math.round(t.y)+i},{quiet:!0})),Pl=0}if(or){const n=Zt[t.zone]?.portal;n&&Math.hypot(t.x-n.x,t.y-n.y)<2.5&&(Mt({type:"portal"}),or=!1)}}(Dn.supportsUnrenderedStep||e)&&Dn.draw({...dt,selectedTarget:In,sceneMode:Ut},kt,s,e),El+=s,Al+=s,El>.1&&(xr(),El=0),Al>4&&(aa(),Al=0)}let hd=At().zone,Nc=performance.now(),Do=!1;function kf(s){hd!==At().zone&&(Df(),hd=At().zone);const e=Math.min((s-Nc)/1e3,.05);Nc=s,Do||Bf(e),requestAnimationFrame(kf)}requestAnimationFrame(kf);window.advanceTime=s=>{Do=!0;for(let e=0;e<Math.ceil(s/16.6667);e++)Bf(1/60,!1);Dn.draw({...dt,selectedTarget:In,sceneMode:Ut},kt,Dn.supportsUnrenderedStep?0:1/60),xr()};window.resumeLiveTime=()=>{Do=!1,Nc=performance.now()};window.render_game_to_text=()=>{const s=At();return JSON.stringify({mode:Ut,connection:Sn?"websocket":"solo",coordinateSystem:"3D world: logical x/y map to ground x/z, elevation is vertical y; isometric camera follows player",selfId:kt,player:s,zone:Zt[s.zone]?.name,enemies:dt.enemies?.filter(e=>e.hp>0).map(e=>({id:e.id,name:e.name,x:e.x,y:e.y,hp:e.hp,maxHp:e.maxHp})),npcs:dt.npcs,drops:dt.drops,portal:Zt[s.zone]?.portal,targetId:In,modal:!be("#modal").classList.contains("hidden"),renderer:Dn.getDebugState()})};function zf(){Dn.resize(),Do&&Dn.draw({...dt,selectedTarget:In,sceneMode:Ut},kt,0)}window.addEventListener("resize",zf);document.addEventListener("fullscreenchange",zf);window.addEventListener("beforeunload",aa);Lf();xr();
