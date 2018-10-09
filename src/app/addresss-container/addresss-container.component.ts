import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-addresss-container',
  templateUrl: './addresss-container.component.html',
  styleUrls: ['./addresss-container.component.css'],
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddresssContainerComponent),
    multi: true,
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddresssContainerComponent),
    multi: true,
  }]
})
export class AddresssContainerComponent implements OnInit, ControlValueAccessor {
  addressesForm: FormGroup;
  onChange: Function = () => { };
  onTouched: Function = () => { };

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

  print() {
    console.log('address array', this.addressesForm.value);
  }


  writeValue(data: any) {
    console.log('data', data);
    if (!!data) {
      this.addressesForm.setValue(data);
    }
  }

  registerOnChange(fn: any) {
    this.addressesForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void ) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.addressesForm.disable() : this.addressesForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors {
    return (!this.addressesForm.valid && {invalid: true}) || {};
  }

}
