import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerivceComponent } from './serivce.component';

describe('SerivceComponent', () => {
  let component: SerivceComponent;
  let fixture: ComponentFixture<SerivceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerivceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerivceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
