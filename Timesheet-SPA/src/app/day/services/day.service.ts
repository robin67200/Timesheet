import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Day } from '../model/day';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  constructor(private http: HttpClient) {}

  getDaysByCritere(critere: any) {
    return this.http.get(
      'http://localhost:5000/api/days/' + critere.name + '/' + critere.month
    );
  }

  putDays(days: Day[]) {
    return this.http.put('http://localhost:5000/api/days', days);
  }
}
