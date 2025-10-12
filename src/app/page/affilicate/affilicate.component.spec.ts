import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilicateComponent } from './affilicate.component';

describe('AffilicateComponent', () => {
  let component: AffilicateComponent;
  let fixture: ComponentFixture<AffilicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffilicateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffilicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
