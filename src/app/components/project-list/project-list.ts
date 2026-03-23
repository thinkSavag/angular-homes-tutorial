import { Component, input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-list',
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="project().photo"
        alt="Photo of {{ project().name }}"
        crossorigin
      />

      <div class="listing-content">
        <h2 class="listing-heading">{{ project().name }}</h2>

        <p class="listing-description">
          {{ project().description }}
        </p>

        <p class="listing-status">
          Status: {{ project().status }}
        </p>

        <a class="listing-link" href="#">
          Chat now...
        </a>
      </div>
    </section>
  `,
  styleUrls: ['./project-list.css'],
})
export class ProjectListComponent {
  project = input.required<Project>();
}
