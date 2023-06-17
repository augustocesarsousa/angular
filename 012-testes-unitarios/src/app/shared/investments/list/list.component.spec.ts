import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should return investiments list', () => {
    let invetments = component.investimentList;

    expect(invetments.length).toEqual(4);
    expect(invetments[0].name).toEqual('Bradesco');
    expect(invetments[3].name).toEqual('Santander');
  });

  it('(I) should return investiments list', () => {
    let invetments =
      fixture.debugElement.nativeElement.querySelectorAll('.investiment-item');

    expect(invetments.length).toBe(4);
    expect(invetments[0].textContent.trim()).toBe('Bradesco | $1,000.00');
    expect(invetments[3].textContent.trim()).toBe('Santander | $3,230.00');
  });
});
