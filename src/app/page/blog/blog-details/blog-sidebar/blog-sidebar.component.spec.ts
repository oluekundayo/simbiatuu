import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BlogSidebarComponent } from './blog-sidebar.component';

describe('BlogSidebarComponent', () => {
  let component: BlogSidebarComponent;
  let fixture: ComponentFixture<BlogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSidebarComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
