import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTypingComponent } from './animated-typing.component';

describe('AnimatedTypingComponent', () => {
  let component: AnimatedTypingComponent;
  let fixture: ComponentFixture<AnimatedTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedTypingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
