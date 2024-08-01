import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, model, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  collectionSize = input(0);
  pageSize = input(5);
  currentPage = model(1);
  maxSize = input(2);
  firstLastButtons = input(false);
  nextPreviousButtons = input(true);
  small = input(false);
  totalPages: any [] = [];

  ngOnChanges() {
    this.totalPages = new Array(Math.ceil(this.collectionSize() / this.pageSize()));
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage.set(pageNumber);
  }

  next() {
    const nextPage = this.currentPage() + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  previous() {
    const previousPage = this.currentPage() - 1;
    previousPage >= 0 && this.selectPageNumber(previousPage);
  }
}
