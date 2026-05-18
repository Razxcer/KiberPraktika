export interface NewsAuthor {
  id: number;
  last_name: string;
  first_name: string;
  image: string;
  positions: string[];
}

export interface NewsTag {
  id: number;
  name: string;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  slug: string;
  image_preview: string; 
  is_popular: number;
  is_news: number;
  published_at: number;
  authors: NewsAuthor[]; 
  tags: NewsTag[];       
}

export interface NewsResponse {
  message: string;
  data: {
    pagination: {
      page: string;
      per_page: string;
      last_page: string;
      total: string;
    };
    items: NewsItem[];
  };
}