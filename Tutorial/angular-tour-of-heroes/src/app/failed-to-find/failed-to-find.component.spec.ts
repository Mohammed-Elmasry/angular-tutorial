import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedToFindComponent } from './failed-to-find.component';

describe('FailedToFindComponent', () => {
  let component: FailedToFindComponent;
  let fixture: ComponentFixture<FailedToFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedToFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedToFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
