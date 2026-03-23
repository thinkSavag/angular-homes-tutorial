import { Component, input } from '@angular/core';
import { Agent } from '../../interfaces/agent';

@Component({
  selector: 'app-agent-list',
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="agent().photo"
        alt="Photo of {{ agent().name }}"
        crossorigin
      />

      <div class="listing-content">
        <h2 class="listing-heading">{{ agent().name }}</h2>

        <p class="listing-description">
          {{ agent().description }}
        </p>

        <p class="listing-status">
          Status: {{ agent().status }}
        </p>

        <a class="listing-link" href="#">
          Chat now...
        </a>
      </div>
    </section>
  `,
  styleUrls: ['./agent-list.css'],
})
export class AgentListComponent {
  agent = input.required<Agent>();
}
