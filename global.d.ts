// Lets TypeScript accept plain stylesheet imports such as `import "./globals.css"`.
// Newer TypeScript versions (including the one bundled with VS Code) report
// side-effect imports that have no type declaration.
declare module "*.css";
