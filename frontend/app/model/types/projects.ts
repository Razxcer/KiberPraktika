import * from './awards.ts';
export interface ProjectImage {
  uuid: string;
  mime_type: string;
  original_url: string;
  preview_url: string;
}

export interface ProjectItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  time: string;
  image: ProjectImage;
  image_mobile: ProjectImage;
  video_cover: ProjectImage | null;
  link: string;
  is_big: boolean;
  is_case: boolean;
}

export interface ProjectsResponse {
  message: string;
  data: {
    pagination: {
      page: string;
      per_page: string;
      last_page: string;
      total: string;
    };
    items: ProjectItem[];
  };
}

export interface ProjectCategoryItem {
  id: number;
  name: string;
}

export interface ProjectCategoriesResponse {
  message: string;
  data: ProjectCategoryItem[];
}

export interface ProjectContent {
  data: {
    content: string;
  };
  type: string;
}

export interface ProjectItemShow {
  id: number;
  title: string;
  description: string;
  price: number;
  time: string;
  image?: ProjectImage;
  image_mobile?: ProjectImage;
  video_cover?: ProjectImage | null;
  link: string;
  is_big: boolean;
  is_case: boolean;
  content: ProjectContent[];
}

export interface ProjectResponseShow {
  message: string;
  data: {
    project: ProjectItemShow;
  };
  awards: AwardItem[];
}