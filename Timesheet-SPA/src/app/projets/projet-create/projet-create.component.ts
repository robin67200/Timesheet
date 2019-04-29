import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projet.service';
import { Projet } from '../models/projet';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-projet-create',
  templateUrl: './projet-create.component.html',
  styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {

  createProjet: FormGroup;
  clients: any;
  hasError = false;
  errorMessage: string;
  projet = new Projet('Mrs.', 'App', 0, 5);


  constructor(
    private service: ProjetsService,
    fb: FormBuilder,
    private router: Router
  ) {
    this.createProjet = fb.group({
      name : new FormControl(this.projet.name, [
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
      ]),
    });
  }

  get name() {return this.createProjet.get('name'); }
  get type() {return this.createProjet.get('type'); }
  get price() {return this.createProjet.get('price'); }
  get clientId() {return this.createProjet.get('clientId'); }

  ngOnInit() {}



  send() {
    /*this.service.postClient(this.createProjet).subscribe(res => {
      this.router.navigate(['/clients']);
    });*/
  }

  Save() {
    if (this.createProjet.valid) {
      const newProjet = new Projet('Mrs', 'App', 0, 5);
      newProjet.name = this.createProjet.value.name;
      newProjet.price = this.createProjet.value.price;
      newProjet.type = this.createProjet.value.type;
      newProjet.clientId = this.createProjet.value.clientId;
      this.service.postProjet(newProjet).subscribe(res => {
        this.router.navigate(['/clients']);
      });
    } else {
      this.hasError = true;
      
// tslint:disable-next-line: max-line-length
      this.errorMessage = 'Formulaire incomplet : Veuillez remplir correctement les champs. Ces derniers sont obligatoires et le nom doit comporter min 4 caractères';
    }
  }
}
