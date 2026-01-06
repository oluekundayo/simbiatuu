import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmgComponent } from './smg.component';

describe('SmgComponent', () => {
  let component: SmgComponent;
  let fixture: ComponentFixture<SmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
