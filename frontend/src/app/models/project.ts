export interface IProject {
  id: number;
  acf: {
    title: string;
    image: string;
    github: string;
    deploy_link: string;
    tech: {
      term_id: number;
      name: string;
      slug: string;
      term_group: number;
      term_taxonomy_id: number;
      taxonomy: string;
      description: string;
      parent: number;
      count: number;
      filter: string;
    }[];
    description: string;
    is_main_project: string;
  };
}
