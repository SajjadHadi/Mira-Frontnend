import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Statement } from '../../interfaces/statement';
import { LlmService } from '../../services/llm.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
  statements: Statement[] = [];
  loading = true;
  cols: Column[];

  constructor(private llmService: LlmService) {
    const allCols: Column[] = [
      { field: 'id', header: 'ID' },
      { field: 'statement', header: 'Statement' },
      { field: 'disorders', header: 'Detected Disorders' },
      { field: 'created_at', header: 'Date' }
    ];

    // Filter out the ID column
    this.cols = allCols.filter(col => col.field !== 'id');
  }

  ngOnInit() {
    this.loadStatements();
  }

  loadStatements(page: number = 1, perPage: number = 10) {
    this.loading = true;
    this.llmService.getStatements(page, perPage).subscribe({
      next: (response) => {
        this.statements = response.statements;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading statements:', err);
        this.loading = false;
      }
    });
  }
}
