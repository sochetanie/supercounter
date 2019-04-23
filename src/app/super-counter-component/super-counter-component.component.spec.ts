import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterComponentComponent } from './super-counter-component.component';

describe('SuperCounterComponentComponent', () => {
  let component: SuperCounterComponentComponent;
  let fixture: ComponentFixture<SuperCounterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
