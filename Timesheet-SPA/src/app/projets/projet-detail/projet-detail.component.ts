import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TimeSheetsService } from 'src/app/services/timeSheets.service';

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {

  id: number;
  projet: any;

  constructor(route: ActivatedRoute, private service: TimeSheetsService) {
    route.params.forEach((params: Params) => {
      if (params.id != null) {
        this.id = +params.id;
      }
    });
  }

  ngOnInit() {
    this.service.getProjetsById(this.id).subscribe(res => {
      this.projet = res;
      // const currentCode = codes.find(c => c.OP_CODE === this.societe.operationCode);
    });
  }
}
