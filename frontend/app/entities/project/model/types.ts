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