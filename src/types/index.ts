export interface Business {
  id: string;
  name: string;
  description: string;
  logo?: string;
  industry: string;
  socialMedia: {
    platform: string;
    handle: string;
    url: string;
  }[];
}

export interface ContentPiece {
  id: string;
  businessId: string;
  title: string;
  content: string;
  platform: string;
  status: 'draft' | 'scheduled' | 'published';
  scheduledFor?: Date;
  createdAt: Date;
}

export interface Analytics {
  platform: string;
  metrics: {
    followers: number;
    engagement: number;
    reach: number;
  };
  trends: {
    date: Date;
    value: number;
  }[];
}