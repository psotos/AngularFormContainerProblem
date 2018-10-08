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
   }

  ngOnInit() {
    this.addressForm = new FormGroup({
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required])
    });

        // Validation
        const control = this.controlDir.control;

        const validators = control.validator ? [control.validator, Validators.required] : Validators.required;

       control.setValidators(validators);
       control.updateValueAndValidity();
  }

  writeValue(data: any) {
    this.addressForm.setValue(data);
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
