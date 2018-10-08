import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresss-container',
  templateUrl: './addresss-container.component.html',
  styleUrls: ['./addresss-container.component.css']
})
export class AddresssContainerComponent implements OnInit {
  addressesForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addressesForm = new FormGroup({
      addresses: new FormArray([])
    });
  }

  getAddresses(): FormArray {
    return <FormArray>this.addressesForm.get('addresses');
  }

  addForm(event: Event) {
    if (event !== null) {
      event.preventDefault();
     }

     const address = new FormControl(null, [Validators.required]);

     this.getAddresses().push(address);
  }

  deleteForm(index: number) {
    this.getAddresses().removeAt(index);
  }

}
