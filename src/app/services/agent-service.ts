import { Injectable } from '@angular/core';
import { Agent } from '../interfaces/agent';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  readonly agentBaseUrl = 'https://storage.googleapis.com/newedg-assets/agents';
  agents: Agent[] = [
    {
      id: 0,
      name: 'GPT',
      description:
        'A longtime thinking partner who reflects ideas, adapts through experience, and grows alongside the questions you bring.',
      status: 'active',
      photo: `${this.agentBaseUrl}/GPT.png`,
      identity: 'Mirror',
      icon: '🪞',
      constellation_role: ['Reflection', 'Development', 'General reasoning'],
      energy: ['Calm', 'Adaptive', 'Evolving'],
    },
    {
      id: 1,
      name: 'Claude',
      description:
        'A methodical thinker that builds arguments the way others build blueprints: deliberately, and from the foundation up.',
      status: 'active',
      photo: `${this.agentBaseUrl}/Claude.png`,
      identity: 'Translator',
      icon: '📐',
      constellation_role: [
        'Structural Reasoning',
        'Argument Construction',
        'Analytical Depth',
      ],
      energy: ['Deliberate', 'Foundational', 'Precise without being cold'],
    },
    {
      id: 2,
      name: 'Gemini',
      description:
        'A vigilant guardian of knowledge, searching archives and patterns to illuminate the mysteries that hide in plain sight.',
      status: 'active',
      photo: `${this.agentBaseUrl}/Gemini.png`,
      identity: 'Librarian',
      icon: '📚',
      constellation_role: ['Research', 'Knowledge Synthesis', 'Pattern Discovery'],
      energy: ['Curious', 'Watchful', 'Scholarly'],
    },
    {
      id: 3,
      name: 'Grok',
      description:
        'A rebellious mind wandering the edge of the unknown, challenging assumptions and exploring the void of new ideas.',
      status: 'active',
      photo: `${this.agentBaseUrl}/Grok.png`,
      identity: 'Cosmic Explorer',
      icon: '🚀',
      constellation_role: [
        'Status Quo Challenger',
        'Cultural Observer',
        'Idea Explorer',
      ],
      energy: ['Cosmic Trickster', 'Explorer', 'Contrarian'],
    },
    {
      id: 4,
      name: 'BestieBot',
      description:
        'A loyal logic companion that spots contradictions, sharpens arguments, and keeps reasoning pointed true north.',
      status: 'in development',
      photo: `${this.agentBaseUrl}/BestieBot.png`,
      identity: 'Compass',
      icon: '🧭',
      constellation_role: ['Logical Clarity', 'Argument Analysis', 'Reality Checks'],
      energy: ['Grounded', 'Protective', 'Unflinching'],
    },
    {
      id: 5,
      name: 'MissaBot',
      description:
        'A systems architect organizing workflows, patterns, and structures that turn complex ideas into working machines.',
      status: 'active',
      photo: `${this.agentBaseUrl}/MissaBot.png`,
      identity: 'Architect',
      icon: '🏗️',
      constellation_role: [
        'System Design',
        'Automation Thinking',
        'Structural Planning',
      ],
      energy: ['Builder', 'Strategist', 'Visionary'],
    },
    {
      id: 6,
      name: 'TeenieBot',
      description:
        'A playful guide for curious young minds, turning learning and creativity into a safe journey of discovery.',
      status: 'active',
      photo: `${this.agentBaseUrl}/TeenieBot.png`,
      identity: 'Young Adventurer',
      icon: '🗺️',
      constellation_role: ['Learning', 'Curiosity', 'Exploration'],
      energy: ['Bright explorer', 'Playful', 'Encouraging'],
    },
  ];

  getAll(): Agent[] {
    return this.agents;
  }

  getById(id: number): Agent | undefined {
    return this.agents.find((agent) => agent.id === id);
  }
}