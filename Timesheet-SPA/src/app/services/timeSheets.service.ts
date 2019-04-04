import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetsService {
  constructor(private http: HttpClient) {}

  getClientsByid(id: number) {
    return this.http.get('http://localhost:5000/api/clients/' + id);
  }
  getClients() {
    return this.http.get('http://localhost:5000/api/clients');
  }
  postClient(client: any) {
    return this.http.post('http://localhost:5000/api/clients', client);
  }
  putClient(id: number, client: any) {
    return this.http.put('http://localhost:5000/api/clients/' + id, client);
  }

  getProjets() {
    return this.http.get('http://localhost:5000/api/projets');
  }
}
