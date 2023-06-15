import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent],
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): should return 100', () => {
    expect(component.getPoupanca).toEqual(100);
  });

  it('(U) getCarteira(): should return 20', () => {
    expect(component.getCarteira).toEqual(20);
  });

  it('(U) setPoupanca(): should transfer from carteira to poupanca', () => {
    component.setPoupanca('20');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(120);
    expect(component.getCarteira).toEqual(0);
  });

  it('(U) setCarteira(): should transfer from poupanca to carteira', () => {
    component.setCarteira('100');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(120);
  });
});
