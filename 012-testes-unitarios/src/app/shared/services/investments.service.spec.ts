import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { InvestmentsService } from './investments.service';
import { HttpClient } from '@angular/common/http';
import { Investment } from '../models/investment';

describe('InvestmentsService', () => {
  let service: InvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const BASE_URL =
    'https://raw.githubusercontent.com/augustocesarsousa/angular/main/json-server/investiments.json';

  const MOCK_LIST: Array<Investment> = [
    {
      name: 'Banco 1',
      value: 1000,
    },
    {
      name: 'Banco 2',
      value: 2000,
    },
    {
      name: 'Banco 3',
      value: 3000,
    },
    {
      name: 'Banco 4',
      value: 4000,
    },
    {
      name: 'Banco 5',
      value: 5000,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(InvestmentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should return investments list mock', (done) => {
    service.getInvestments().subscribe((res: Array<Investment>) => {
      expect(res[0].name).toEqual('Banco 1');
      expect(res[0].value).toEqual(1000);

      expect(res[4].name).toEqual('Banco 5');
      expect(res[4].value).toEqual(5000);
      done();
    });

    const REQ = httpTestingController.expectOne(BASE_URL);
    REQ.flush(MOCK_LIST);

    expect(REQ.request.method).toEqual('GET');
  });
});
