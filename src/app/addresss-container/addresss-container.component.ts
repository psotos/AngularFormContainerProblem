import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addresss-container',
  templateUrl: './addresss-container.component.html',
  styleUrls: ['./addresss-container.component.css']
})
export class AddresssContainerComponent implements OnInit {
  addressesForm: FormArray;

  constructor() { }

  ngOnInit() {
    this.addressesForm = new FormArray([]);
  }

}
