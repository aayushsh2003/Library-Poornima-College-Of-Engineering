export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'workshop' | 'lecture' | 'exhibition';
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  priority: 'high' | 'medium' | 'low';
}

export interface DatabaseResource {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  image: string;
}