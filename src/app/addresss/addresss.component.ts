import { Component, OnInit, Self } from '@angular/core';
import { NgControl, ControlValueAccessor, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresss',
  templateUrl: './addresss.component.html',
  styleUrls: ['./addresss.component.css']
})
export class AddresssComponent implements OnInit, ControlValueAccessor {
  addressForm: FormGroup;
  private onTouched: () => void;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;

    this.addressForm = new FormGroup({
      addressLine1: new FormControl(null, [Validators.required]),
      addressLine2: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required])
    });
   }

  ngOnInit() {

    // Validation
    const control = this.controlDir.control;

    let validators: any;

    if (!!control.validator) {
      validators = [control.validator, Validators.required];
    } else {
      validators = Validators.required;
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  writeValue(data: any) {
    console.log('data');
    console.dir(data);
    if (!!data) {
      this.addressForm.setValue(data);
    }
  }

  registerOnChange(fn: any) {
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void ) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.addressForm.disable() : this.addressForm.enable();
  }



}
