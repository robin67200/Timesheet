import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/projet';

@Injectable()
export class ProjetsService {

    constructor(private http: HttpClient) {}
      getProjets() {
        return this.http.get<Projet[]>('http://localhost:5000/api/projets');
      }
      getProjetById(id: number) {
        return this.http.get<Projet>('http://localhost:5000/api/projets/' + id);
      }
      putProjet(id: number, projet: any) {
        return this.http.put<Projet>('http://localhost:5000/api/projets/' + id, projet);
      }
      postProjet(projet: Projet) {
        return this.http.post<Projet>('http://localhost:5000/api/projets/', projet);
      }
      deleteProjetById(id: number) {
        return this.http.delete<Projet>('http://localhost:5000/api/projets/' + id);
      }

}