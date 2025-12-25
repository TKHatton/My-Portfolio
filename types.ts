
export interface WorkItem {
  id: string;
  title: string;
  category: 'art' | 'tool' | 'learning';
  description: string;
  image: string;
  fullStory?: string;
  meaning?: string;
  url?: string;
}

export interface WIPItem {
  id: string;
  title: string;
  description: string;
  status: string;
  image?: string;
  url?: string;
}

export interface Course {
  title: string;
  description: string;
}
