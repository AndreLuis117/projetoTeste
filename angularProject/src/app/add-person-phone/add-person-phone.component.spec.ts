import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonPhoneComponent } from './add-person-phone.component';

describe('AddPersonPhoneComponent', () => {
  let component: AddPersonPhoneComponent;
  let fixture: ComponentFixture<AddPersonPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
