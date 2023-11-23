import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GithubapiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit
{
  userData : any
  mensajeLog = ""
  constructor(private githubApi : GithubapiService, private auth : AuthService, private router : Router)
  {}

  async ngOnInit() 
  {
    this.githubApi.getGithubProfile().subscribe(datos =>
    {
      this.userData = datos;
      console.log(this.userData);
    })

    console.log(this.auth.logueado);

    if(this.auth.logueado)
    {
      this.mensajeLog = "Log Out";
      
    }
    else
    {
      this.mensajeLog = "Log In";
    }

  }

  redirigir()
  {
    if(this.auth.logueado)
    {
      this.auth.logOut();
      this.userData = null;
      this.mensajeLog = "Log In";
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }

  redirigirAlta()
  {
    this.router.navigate(['/alta-producto']);
  }

  redirigirDetalle()
  {
    this.router.navigate(['/detalle-producto']);
  }

  redirigirLista()
  {
    this.router.navigate(['/lista-producto']);
  }

  redirigirContainer()
  {
    this.router.navigate(['/lista-container']);
  }

  redirigirCargaContainer()
  {
    this.router.navigate(['/carga-container']);
  }
}
