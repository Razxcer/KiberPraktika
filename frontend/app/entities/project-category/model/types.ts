export interface ProjectCategoryItem {
  id: number;
  name: string;
}

export interface ProjectCategoriesResponse {
  message: string;
  data: ProjectCategoryItem[];
}