import { ITech } from './tech';

export interface IProject {
  id: number;
  acf: {
    title: string;
    image: string;
    github: string;
    deploy_link: string;
    tech: ITech[];
    description: string;
    is_main_project: string;
  };
}
