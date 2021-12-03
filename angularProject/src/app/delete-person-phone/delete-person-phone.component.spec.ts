import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonPhoneComponent } from './delete-person-phone.component';

describe('DeletePersonPhoneComponent', () => {
  let component: DeletePersonPhoneComponent;
  let fixture: ComponentFixture<DeletePersonPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
