import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable()
export class ClientsService {

    constructor(private http: HttpClient) {}
      getClientById(id: number) {
        return this.http.get<Client>('http://localhost:5000/api/clients/' + id);
      }
      getClients() {
        return this.http.get<Client[]>('http://localhost:5000/api/clients');
      }
      postClient(client: Client) {
        return this.http.post<Client>('http://localhost:5000/api/clients', client);
      }
      putClient(id: number, client: Client) {
        return this.http.put<Client>('http://localhost:5000/api/clients/' + id, client);
      }
      deleteClientById(id: number) {
        return this.http.delete<Client>('http://localhost:5000/api/clients/' + id);
      }
}