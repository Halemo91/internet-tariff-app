import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { Tariff } from '../models/tariff.interface';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  private apiUrl = 'https://my-json-server.typicode.com/Halemo91/internet-tariff-app';
  errorMessage = "failed to load tariffs, please try again later!";

  constructor(private http: HttpClient) { }

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(`${this.apiUrl}/tariffs`).pipe(
      catchError(() => {
        throw new Error(this.errorMessage);
      }),
    );
  }
}
