export interface ReviewImage {
  uuid: string;
  mime_type: string;
  original_url: string;
  preview_url: string | null;
}

export interface ReviewProject {
  id: number;
  title: string;
  description: string;
  price: number;
  time: string;
  image: string;
  image_mobile: string | null;
  video_cover: string | null;
  link: string;
  is_big: boolean;
}

export interface ReviewItem {
  id: number;
  fio: string;
  position: string;
  content: string;
  document: string | null; // Ссылка на скачивание/просмотр PDF/картинки письма
  image: ReviewImage | null; // Аватарка автора
  project: ReviewProject;
}

export interface ReviewsResponse {
  message: string;
  data: {
    pagination: {
      page: number;
      per_page: number;
      total: number;
      last_page: number;
    };
    items: ReviewItem[];
  };
}
