import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-addresss-container',
  templateUrl: './addresss-container.component.html',
  styleUrls: ['./addresss-container.component.css']
})
export class AddresssContainerComponent implements OnInit {
  @Input()
  addressesForm: FormArray;

  constructor(public control: ControlContainer) { }

  ngOnInit() {
  }

  addForm(event: Event) {
    if (event !== null) {
      event.preventDefault();
     }

     const address = new FormControl(null, [Validators.required]);

     this.addressesForm.push(address);
  }

  deleteForm(index: number) {
    this.addressesForm.removeAt(index);
  }

  print() {
    console.log('address array', this.addressesForm.value);
  }

}
