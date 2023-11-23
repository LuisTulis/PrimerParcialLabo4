import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{


  public form : FormGroup
  constructor(private formBuilder : FormBuilder, private auth : AuthService, private router : Router, private toast : ToastService, private firestore : FirestoreService)
  {
    this.auth.enRegistro = true;
    this.form = this.formBuilder.group({
      email : ['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password : ['',[Validators.required]],
      })
  }
  
  logeoExitoso = false;
  errorMessage = "";

  userData : any;

  registrarse() 
  {
    console.log(this.form.controls);
    
    console.log(this.form.controls['email'].value, this.form.controls['password'].value) 
    
    if(this.form.valid)
    {
      this.auth.registrar(this.form.controls['email'].value, this.form.controls['password'].value)
      this.auth.enRegistro = false;
      this.router.navigateByUrl('/terminos');
      this.auth.logIn(this.form.controls['email'].value, this.form.controls['password'].value)
    }
    else
    {
      this.toast.showError('Error','Hay errores en los campos...');
    }
  }
}
