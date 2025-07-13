import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 26;
  @Input() maxVisiblePages: number = 5;

  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];
  goToPageValue: number = 1;

  ngOnChanges() {
    this.updatePages();
  }

  updatePages() {
    this.pages = [];
    const half = Math.floor(this.maxVisiblePages / 2);
    let start = Math.max(this.currentPage - half, 1);
    let end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);

    if (end - start < this.maxVisiblePages - 1) {
      start = Math.max(end - this.maxVisiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
      this.updatePages();
    }
  }

  onGoToPage() {
    const page = Math.max(1, Math.min(this.goToPageValue, this.totalPages));
    this.onPageChange(page);
    this.goToPageValue = page;
  }
}
