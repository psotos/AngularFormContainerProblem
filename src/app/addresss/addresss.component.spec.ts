import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresssComponent } from './addresss.component';

describe('AdresssComponent', () => {
  let component: AddresssComponent;
  let fixture: ComponentFixture<AddresssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
