import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

quickLogin(arg0: string,arg1: string) 
{
  this.mail = arg0;
  this.password = arg1;
}

  mail = "";
  password = "";
  
  logeoExitoso = false;
  errorMessage = "";

  userData : any;

  constructor(private router: Router, private Auth : AuthService, private toast : ToastService) {}
  ngOnInit(): void 
  {}

  registrarse()
  {
    this.router.navigateByUrl('register');
  }

  async login()
  {
    if(this.mail == "" || this.password == "")
    {
      this.toast.showError('ERROR','Todos los campos son requeridos');
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
      this.toast.showSuccess('Logueo exitoso','Redirigiendo');
      setTimeout(() => {
        this.router.navigate(['/bienvenida']); // Cambia '/otra-ruta' a la ruta deseada
      }, 500);
    }
  }

}
