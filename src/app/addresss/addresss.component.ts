import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, Validators, NG_VALIDATORS, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-addresss',
  templateUrl: './addresss.component.html',
  styleUrls: ['./addresss.component.css'],
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddresssComponent),
    multi: true,
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddresssComponent),
    multi: true,
  }]
})
export class AddresssComponent implements OnInit, ControlValueAccessor {
  addressForm: FormGroup;
  onChange: Function = () => { };
  onTouched: Function = () => { };

  constructor() {

    this.addressForm = new FormGroup({
      addressLine1: new FormControl(null, [Validators.required]),
      addressLine2: new FormControl(null),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required])
    });
   }

  ngOnInit() {

    // // Validation
    // const control = this.controlDir.control;

    // let validators: any;

    // if (!!control.validator) {
    //   validators = [control.validator, Validators.required];
    // } else {
    //   validators = Validators.required;
    // }

    // control.setValidators(validators);
    // control.updateValueAndValidity();
  }

  writeValue(data: any) {
    console.log('data', data);
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

  validate(control: AbstractControl): ValidationErrors {
    return (!this.addressForm.valid && {invalid: true}) || {};
  }

}
