import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintoPasoPage } from './quinto-paso.page';

describe('QuintoPasoPage', () => {
  let component: QuintoPasoPage;
  let fixture: ComponentFixture<QuintoPasoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoPasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
