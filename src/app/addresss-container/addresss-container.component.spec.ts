import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresssContainerComponent } from './addresss-container.component';

describe('AdresssContainerComponent', () => {
  let component: AddresssContainerComponent;
  let fixture: ComponentFixture<AddresssContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresssContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresssContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
