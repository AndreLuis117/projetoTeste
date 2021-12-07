import { PhoneNumberTypeObject } from "../PhoneNumberType/PhoneNumberTypeObject";

export class PersonPhoneObject {
    businessEntityID: number;
    phoneNumber: string;
    phoneNumberTypeID: number;
    phoneNumberType: PhoneNumberTypeObject;
}