/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DepositoDatailComponent } from './deposito-datail.component';

describe('DepositoDatailComponent', () => {
  let component: DepositoDatailComponent;
  let fixture: ComponentFixture<DepositoDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
