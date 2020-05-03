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

interface Job {
  title: string;
  company: string;
  image: string;
  location: string;
  description: string;
  date: string;
}

interface PullRequest {
  repo: string;
  org: string;
  name: string;
  number: number;
  date: string;
  image: string;
  description: string;
}

declare module "*.yml" {
  export const content: Array<string>;
  export const links: Array<Link>;
  export const description: string;
  export const projects: Array<Project>;
  export const jobs: Array<Job>;
  export const pulls: Array<PullRequest>;
}
