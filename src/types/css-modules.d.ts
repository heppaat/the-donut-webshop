declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Plain global stylesheets imported for their side effects (e.g. ./globals.css)
declare module "*.css";
