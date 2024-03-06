export interface IExperience {
  id: number;
  count?: number;
  acf: {
    firm: string;
    position: string;
    logo: string;
    link: string;
    description: string;
    tools: string;
    start_date: string;
    end_date: string;
    still_working: boolean;
  };
}
