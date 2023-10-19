import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail = "admin@admin.com";
  password = "123456";
  
  logeoExitoso = false;
  errorMessage = "";

  userData : any;

  constructor(private router: Router, private Auth : AuthService) {}
  ngOnInit(): void 
  {}

  async login()
  {
    if(this.mail == "" || this.password == "")
    {
      this.errorMessage = "Error: Rellena todos los campos.";
    }
    else
    {
      let retorno = await this.Auth.logIn(this.mail,this.password)

      this.errorMessage = retorno.error;
      this.userData = retorno.datosUsuario;
      this.logeoExitoso = retorno.validacion;
        
    }

    if(this.errorMessage == "")
    {
      this.logeoExitoso = true;
      setTimeout(() => {
        this.router.navigate(['/bienvenida']); // Cambia '/otra-ruta' a la ruta deseada
      }, 3000);
    }
  }

}
