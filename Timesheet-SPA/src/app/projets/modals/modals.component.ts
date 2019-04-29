import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface ProjetModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-modals',
  template:
  `
    <div class="modal-content">
      <div class="modal-header">
        <h4><i class="icon-globe"></i>&nbsp;{{ title || "Confirmation" }}</h4>
      </div>
      <div class="modal-body">
        {{message}}
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary btn-sm" (click)="confirm()">
          Confirm
        </button>
        <button type="button" class="btn btn-outline-primary btn-sm" (click)="close()">
          Annuler
        </button>
      </div>
    </div>
  `
})
export class ModalsComponent extends SimpleModalComponent<ProjetModel, boolean> implements ProjetModel {
  message: string;
  title: string;

  constructor() {
    super();
  }
  confirm() {
    this.result = true;
    this.close();
  }



}
