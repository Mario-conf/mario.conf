import data from './work-projects.json';

export type WorkProject = {
  id: string;
  title: string;
  category: string;
  year: number;
  link: string;
};

export const allWorkItems: WorkProject[] = data.workProjects;
