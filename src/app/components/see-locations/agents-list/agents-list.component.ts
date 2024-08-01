import { Component, computed, signal } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";

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
  imports: [PaginationComponent],
  templateUrl: './agents-list.component.html',
  styleUrl: './agents-list.component.css'
})
export class AgentsListComponent {
  agents: AgentModel[] = [
    {
      name: 'Agent Name1',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name12',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name13',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
    {
      name: 'Agent Name4',
      address: 'Clarendon ave. 78',
      phone: '+1 755 1002 678',
      email: 'h.kojima@gmail.com',
      workHours: 'Mon-Fri, 10 AM - 5 PM'
    },
  ];

  displayAgents = computed(() => {
    const filtered = this.filteredAgents();
    const sliceStart = this.currentPageIndex() * this.pageSize;
    const sliced = filtered.slice(sliceStart, sliceStart + this.pageSize);
    return sliced;
  });

  filteredAgents = computed(() => this.agents.filter(agent => agent.name.toLowerCase().includes(this.search().toLowerCase())));

  search = signal('');
  currentPage = signal(1);
  currentPageIndex = computed(() => this.currentPage() - 1);

  readonly pageSize = 12;

  onSearch(event: Event): void {
    const inputEl: HTMLInputElement | null = event.target as HTMLInputElement;
    const searchText = inputEl.value;
    this.search.set(searchText);
  }
}
