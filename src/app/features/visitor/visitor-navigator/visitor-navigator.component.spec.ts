import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNavigatorComponent } from './visitor-navigator.component';

describe('VisitorNavigatorComponent', () => {
  let component: VisitorNavigatorComponent;
  let fixture: ComponentFixture<VisitorNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VisitorNavigatorComponent]
    });
    fixture = TestBed.createComponent(VisitorNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
