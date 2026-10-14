// Run the unchanged shared skill client with this project's installed Playwright.
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "playwright")
    return {
      url: new URL("../node_modules/playwright/index.mjs", import.meta.url)
        .href,
      shortCircuit: true,
    };
  return nextResolve(specifier, context);
}
