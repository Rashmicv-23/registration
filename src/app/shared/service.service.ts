import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

export interface Registration {
  $key: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  contactnumber1: string;
  contactnumber2: string;
  address: string;
  pincode: number;
  area: string;
}
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(public firestore: AngularFirestore) {}

  ////registrationList!: AngularFireList<any>;
  formData!: Registration;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
    dob: new FormControl(''),
    contactnumber1: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    contactnumber2: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl(''),
    area: new FormControl(0),
  });

  /*/* getRegisters() {
  this.registrationList = this.firebase.list('registers');
  return this.registrationList.snapshotChanges();
}

insertRegister(register: any) {
  this.registrationList.push({
    firstName: register.firstName,
    lastName: register.lastName,
    email: register.email,
    password: register.password,
    dob: register.dob,
    contactnumber1: register.contactnumber1,
    contactnumber2: register.contactnumber2,
    address: register.address,
    pincode: register.pincode,
    area: register.area,
  });
}

updateRegister(register: any) {
  this.registrationList.update(register.$key,
    {
    firstName: register.firstName,
    lastName: register.lastName,
    email: register.email,
    password: register.password,
    dob: register.dob,
    contactnumber1: register.contactnumber1,
    contactnumber2: register.contactnumber2,
    address: register.address,
    pincode: register.pincode,
    area: register.area,
  });
}

deleteRegister($key: string){
  this.registrationList.remove($key);
}*/
}
