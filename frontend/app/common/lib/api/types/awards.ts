export interface AwardImage {
  uuid: string;
  mime_type: string;
  original_url: string;
  preview_url: string;
}

export interface AwardProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  time: string;
  link: string;
}

export interface AwardItem {
  id: number;
  title: string;
  description: string;
  award_image: AwardImage;
  award_icon: AwardImage;
  project: AwardProject | null; // Проект может быть null, если награда общая за студию
}

export interface AwardsResponse {
  message: string;
  data: {
    awards: AwardItem[];
  };
}
