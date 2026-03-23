export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'concept' | 'active' | 'archived';
  photo: string;
}