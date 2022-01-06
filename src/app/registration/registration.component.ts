import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import * as firebase from 'firebase/app';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(public service: ServiceService) {}

  areas = [
    { id: 1, value: 'Cotton Ball' },
    { id: 2, value: 'Art and Craft' },
    { id: 1, value: 'Social Media' },
    { id: 1, value: 'Fund Rising' },
    { id: 1, value: 'Creating Awareness' },
  ];

  ngOnInit() {
    ////this.service.getRegisters();
    this.resetForm();
  }

  /*/*onSubmit(){
    if(this.service.form.valid){
      this.service.insertRegister(this.service.form.value);
      this.service.form.reset();
    }
  }*/

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      $key: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: '',
      contactnumber1: '',
      contactnumber2: '',
      address: '',
      pincode: 0,
      area: '',
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.service.firestore.collection('registration').add(data);
    this.resetForm(form);
  }
}
