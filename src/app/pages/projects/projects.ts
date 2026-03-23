import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectListComponent } from '../../components/project-list/project-list';
import { ProjectService } from '../../services/project-service';

@Component({
  selector: 'app-projects',
  imports: [ProjectListComponent],
  template: `
    <section>
      <input
        type="text"
        placeholder="Search projects"
        #filter
        (input)="filterResults(filter.value)"
      />
    </section>

    <section class="results">
      @for (project of filteredProjects; track project.id) {
        <app-project-list [project]="project"></app-project-list>
      }
    </section>
  `,
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects: Project[] = [];
  filteredProjects: Project[] = [];

  private projectService: ProjectService = inject(ProjectService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.projects = this.projectService.getAll();
    this.filteredProjects = this.projects;
  }

  filterResults(text: string) {
    const searchText = text.trim().toLowerCase();

    if (!searchText) {
      this.filteredProjects = this.projects;
      this.changeDetectorRef.markForCheck();
      return;
    }

    this.filteredProjects = this.projects.filter((project) =>
      project.name.toLowerCase().includes(searchText) ||
      project.status.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText)
    );

    this.changeDetectorRef.markForCheck();
  }
}
