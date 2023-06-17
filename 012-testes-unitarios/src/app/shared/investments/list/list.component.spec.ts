import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_LIST } from '../../services/investments-list.mock';
import { Investment } from '../../models/investment';
import { InvestmentsService } from '../../services/investments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const mockList: Array<Investment> = MOCK_LIST;
  let service: InvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(InvestmentsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should return investiments list', () => {
    let invetments = component.investimentList;
    spyOn(service, 'getInvestments').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.getInvestments).toHaveBeenCalledWith();
    expect(component.investimentList.length).toBe(5);
    expect(component.investimentList[0].name).toEqual('Banco 1');
    expect(component.investimentList[4].name).toEqual('Banco 5');

    // expect(invetments.length).toEqual(4);
    // expect(invetments[0].name).toEqual('Bradesco');
    // expect(invetments[3].name).toEqual('Santander');
  });

  it('(I) should return investiments list', () => {
    spyOn(service, 'getInvestments').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let invetments =
      fixture.debugElement.nativeElement.querySelectorAll('.investiment-item');

    expect(invetments.length).toBe(5);
    expect(invetments[0].textContent.trim()).toBe('Banco 1 | $1,000.00');
    expect(invetments[4].textContent.trim()).toBe('Banco 5 | $5,000.00');
  });
});
