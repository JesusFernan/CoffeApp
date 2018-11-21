import { Component, ViewChild } from '@angular/core';
import { Nav, NavController  } from 'ionic-angular'; 
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { OrdenarPage } from '../pages/ordenar/ordenar';
import { CarritoPage } from '../pages/carrito/carrito';
import { PerfilPage } from '../pages/perfil/perfil';
 
 
  
@Component({
  templateUrl: '../pages/menu/menu.html'
})
export class MyApp {
   
  @ViewChild(Nav) navCtrl: NavController;
   

  rootPage: any = LoginPage;
   

     
  abrirPaginas(paginaNombre: string){
    
    if(paginaNombre == 'login'){
        this.navCtrl.push(LoginPage);
    }
    if(paginaNombre == 'registrar'){
        this.navCtrl.push(RegisterPage);
    }
    if(paginaNombre == 'inicio'){
        this.navCtrl.push(HomePage);
    }
    if(paginaNombre == 'productos'){
        this.navCtrl.push(HomePage);
    }
    if(paginaNombre == 'ordenar'){
        this.navCtrl.push(OrdenarPage);
    }
    if(paginaNombre == 'carrito'){
        this.navCtrl.push(CarritoPage);
    }
    if(paginaNombre == 'perfil'){
        this.navCtrl.push(PerfilPage);

    }
  }
}

