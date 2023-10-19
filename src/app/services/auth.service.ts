import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  logueado : boolean = false;

  
  constructor(private afs: AngularFireAuth, private afAuth : AngularFireAuth, private router : Router) 
  {   }

  registrar(mail : string, password : string)
  {
    return this.afAuth.createUserWithEmailAndPassword(mail, password);
  }

  obtenerDatosUsuario()
  {
    return this.afAuth.authState;
  }

  logOut()
  {
    this.afAuth.signOut();
  }

  async logIn(email : string, password: string)
  {
    this.logueado = true;
    let errorMessage = '';
    let logeoExitoso = false;
    let usuario : any;
    let retorno = {
      datosUsuario : "",
      validacion : false,
      error : ""
    }
    usuario = await this.afAuth.signInWithEmailAndPassword(email,password).then(userCredential => {
      // Inicio de sesión exitoso
      console.log('Usuario autenticado:', userCredential.user);
      errorMessage = ''; // Limpiar el mensaje de error en caso de éxito

      // Redirige a la página principal o a la ruta deseada
      this.router.navigate(['/dashboard']); // Cambia '/dashboard' a la ruta deseada
    })
    .catch(error => {
      // Manejar el error
      
      console.error('Error al iniciar sesión:', error);
      errorMessage = "Error: Credenciales incorrectas.";
      console.log(errorMessage);
    })
    .finally( ()=>
    {
      if(errorMessage == "")
      {
        logeoExitoso = true;
        setTimeout(() => {
          this.router.navigate(['/home']); // Cambia '/otra-ruta' a la ruta deseada
        }, 3000);
      }

      retorno = {
        datosUsuario : usuario,
        validacion : logeoExitoso,
        error : errorMessage
      }
       
      
    });
    
     

    return retorno;
  }
}
