/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserModalsComponent } from './user-modals.component';

describe('UserModalsComponent', () => {
  let component: UserModalsComponent;
  let fixture: ComponentFixture<UserModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
