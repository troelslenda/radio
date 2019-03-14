import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionMenuComponent } from './expression-menu.component';

describe('ExpressionMenuComponent', () => {
  let component: ExpressionMenuComponent;
  let fixture: ComponentFixture<ExpressionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
