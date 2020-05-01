interface Link {
  name: string;
  href: string;
}

declare module "*.yml" {
  export const content: Array<string>;
  export const links: Array<Link>;
}
