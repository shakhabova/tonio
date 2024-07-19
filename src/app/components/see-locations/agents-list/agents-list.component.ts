import { Component, signal } from '@angular/core';

interface AgentModel {
  name: string;
  address: string;
  phone: string;
  email: string;
  workHours: string;
}

@Component({
  selector: 'app-agents-list',
  standalone: true,
  imports: [],
  templateUrl: './agents-list.component.html',
  styleUrl: './agents-list.component.css'
})
export class AgentsListComponent {
  agents: AgentModel[] = [
    {
      name: 'Agent Name',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
  ]

  filteredAgents = signal([...this.agents]);

  onSearch(event: Event): void {
    const inputEl: HTMLInputElement | null = event.target as HTMLInputElement;

    const searchText = inputEl.value;
    this.filteredAgents.set(this.agents.filter(agent => agent.name.toLowerCase().includes(searchText.toLowerCase())));
  }
}
