import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TimeSheetsService } from 'src/app/services/timeSheets.service';

@Component({
  selector: 'app-projet-edit',
  templateUrl: './projet-edit.component.html',
  styleUrls: ['./projet-edit.component.css']
})
export class ProjetEditComponent implements OnInit {

  id: number;
  editProjet: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
    route: ActivatedRoute,
    private service: TimeSheetsService
  ) {
    this.editProjet = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      clientId: ['', Validators.required]
    });
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getProjetsById(this.id).subscribe(res => {
      this.editProjet.patchValue(res);
    });
  }

  edit() {
    this.service.putProjets(this.id, this.editProjet.value).subscribe(res => {
      this.router.navigate(['/projets/detail/' + this.id]);
    });
}

}
