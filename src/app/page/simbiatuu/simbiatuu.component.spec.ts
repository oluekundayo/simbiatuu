import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimbiatuuComponent } from './simbiatuu.component';

describe('SimbiatuuComponent', () => {
  let component: SimbiatuuComponent;
  let fixture: ComponentFixture<SimbiatuuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimbiatuuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimbiatuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
