import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Agent } from '../../interfaces/agent';
import { AgentListComponent } from '../../components/agent-list/agent-list';
import { AgentService } from 'src/app/services/agent-service';

@Component({
  selector: 'app-agents',
  imports: [AgentListComponent],
  template: `
    <section>
      <input
        type="text"
        placeholder="Search the thinking team"
        #filter
        (input)="filterResults(filter.value)"
      />
    </section>

    <section class="results">
      @for (agent of filteredAgents; track agent.id) {
        <app-agent-list [agent]="agent"></app-agent-list>
      }
    </section>
  `,
  styleUrls: ['./agents.css'],
})
export class Agents {
  agents: Agent[] = [];
  filteredAgents: Agent[] = [];

  private agentService: AgentService = inject(AgentService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.agents = this.agentService.getAll();
    this.filteredAgents = this.agents;
  }
  
  filterResults(text: string) {
    const searchText = text.trim().toLowerCase();

    if (!searchText) {
      this.filteredAgents = this.agents;
      this.changeDetectorRef.markForCheck();
      return;
    }

    this.filteredAgents = this.agents.filter((agent) =>
      agent.name.toLowerCase().includes(searchText) ||
      agent.identity.toLowerCase().includes(searchText) ||
      agent.description.toLowerCase().includes(searchText)

    );

    this.changeDetectorRef.markForCheck();
  }
}
