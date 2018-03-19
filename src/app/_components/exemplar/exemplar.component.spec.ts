import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplarComponent } from './exemplar.component';

describe('ExemplarComponent', () => {
  let component: ExemplarComponent;
  let fixture: ComponentFixture<ExemplarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
