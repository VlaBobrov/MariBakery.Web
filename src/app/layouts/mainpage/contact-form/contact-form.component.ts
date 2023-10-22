import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../../constants/my-constants';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent  implements OnInit {
  public contactFormImagePath = new String(imagePath.imagePath+'1-2.png');   
  
  emailFormControl = new FormControl('', [Validators.required, phoneValidator]);
  nameFormControl = new FormControl('', [Validators.required, nameValidator]);

  matcher = new MyErrorStateMatcher();
  ngOnInit(): void  {

  }
}
function phoneValidator(control: FormControl): { [key: string]: boolean } | null {
  const valid = /^\d{3}-\d{3}-\d{4}$/.test(control.value);

  return valid ? null : { invalidPhone: true };
}
function nameValidator(control: FormControl): { [key: string]: boolean } | null {
  const valid = /^[A-Za-z\s]*$/.test(control.value);

  return valid ? null : { invalidName: true };
}