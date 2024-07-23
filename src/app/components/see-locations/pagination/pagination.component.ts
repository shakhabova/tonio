import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input()
  collectionSize = 0;

  @Input()
  pageSize = 5;

  @Input()
  currentPage = 1;

  @Input()
  maxSize = 2;

  @Input ()
  firstLastButtons = false;

  @Input ()
nextPreviusButtons = true;

@Input () 
small = false;

totalPages: any [] = [];

constructor() {}

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  ngOnChanges(changes: SimpleChange) {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= && this.selectPageNumber(previousPage);
  }
}
