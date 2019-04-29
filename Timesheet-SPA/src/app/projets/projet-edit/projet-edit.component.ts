import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjetsService } from '../services/projet.service';
import { Projet } from '../models/projet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projet-edit',
  templateUrl: './projet-edit.component.html',
  styleUrls: ['./projet-edit.component.css']
})
export class ProjetEditComponent implements OnInit {

  hasError = false;
  errorMessage: string;
  id: number;
  editProjet: FormGroup;
  projet = new Projet('Mrs', 'App', 0, 0);

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    route: ActivatedRoute,
    private service: ProjetsService
  ) {
    this.editProjet = fb.group({
      name: new FormControl(this.projet.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      type: new FormControl(this.projet.type, [
        Validators.required
      ]),
      price: new FormControl(this.projet.price, [
        Validators.required
      ]),
      clientId: new FormControl(this.projet.clientId, [
        Validators.required
      ])
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  get name() {return this.editProjet.get('name'); }
  get type() {return this.editProjet.get('type'); }
  get price() {return this.editProjet.get('price'); }
  get clientId() {return this.editProjet.get('clientId'); }
  
  ngOnInit() {
    this.service.getProjetById(this.id).subscribe(res => {
      this.editProjet.patchValue(res);

    });
  }

  edit() {
    if (this.editProjet.valid) {
    const newProjet = new Projet('Mrs', 'App', 0, 0);
    newProjet.name = this.editProjet.value.name;
    newProjet.type = this.editProjet.value.type;
    newProjet.price = this.editProjet.value.price;
    newProjet.clientId = this.editProjet.value.clientId;
    this.service.putProjet(this.id, newProjet).subscribe(res => {
      this.router.navigate(['/projets/detail/' + this.id]);
    });
  } else {
    this.hasError = true;
// tslint:disable-next-line: max-line-length
    this.errorMessage = 'Formulaire incomplet : Veuillez remplir correctement les champs. Ces derniers sont obligatoires et le nom doit comporter min 4 caractères';
  }
  }

  

}
