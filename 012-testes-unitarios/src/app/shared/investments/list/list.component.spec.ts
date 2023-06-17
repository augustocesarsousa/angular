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
});
