import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projectBaseUrl = 'https://storage.googleapis.com/newedg-assets/projects';
  projects: Project[] = [
    {
      id: 0,
      name: 'Legal AI',
      description: 'AI assisted legal document preparation',
      status: 'active',
      photo: `${this.projectBaseUrl}/LegalAI.png`,
    },
    {
      id: 1,
      name: 'PetPy Fact Extract',
      description: 'Veterinary data extraction system',
      status: 'concept',
      photo: `${this.projectBaseUrl}/FactExtract.png`,
    },
    {
      id: 2,
      name: 'Multi-Agent System',
      description: 'Experimental agent coordination platform',
      status: 'active',
      photo: `${this.projectBaseUrl}/MultiAgent.png`,
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}