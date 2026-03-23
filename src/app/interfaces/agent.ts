export interface Agent {
  id: number;
  name: string;
  description: string;
  status: 'concept' | 'active' | 'archived' | 'in development';
  photo: string;
  identity: string;
  icon: string;
  constellation_role: string[];
  energy: string[];
}