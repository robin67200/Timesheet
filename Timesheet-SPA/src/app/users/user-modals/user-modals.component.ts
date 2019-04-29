import { SimpleModalComponent } from 'ngx-simple-modal';
import { Component} from '@angular/core';
export interface UserModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-user-modals',
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
export class UserModalsComponent extends SimpleModalComponent<UserModel, boolean> implements UserModel {
  title: string;
  message: string;

  constructor() {
    super();
  }

  confirm() {
    this.result = true;
    this.close();
  }



}
