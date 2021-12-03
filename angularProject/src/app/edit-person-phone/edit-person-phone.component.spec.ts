import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonPhoneComponent } from './edit-person-phone.component';

describe('EditPersonPhoneComponent', () => {
  let component: EditPersonPhoneComponent;
  let fixture: ComponentFixture<EditPersonPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
