interface Link {
  name: string;
  href: string;
}

interface Tag {
  name: string;
  href?: string;
}

interface Project {
  image: string;
  title: string;
  tags: Array<Tag>;
  slideshow: Array<string>;
  description: string;
  date: string;
}

declare module "*.yml" {
  export const content: Array<string>;
  export const links: Array<Link>;
  export const description: string;
  export const projects: Array<Project>;
}
