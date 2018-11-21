import { Component } from "@angular/core";
import { IonicPage, NavController,} from "ionic-angular";
import "rxjs/add/operator/map";
import { NgForm } from "@angular/forms";
import { Usuario } from "../models/usuario.model";
import { UsuarioProvider } from "../usuario.service";
import { HttpClient } from "@angular/common/http";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
 

 
 
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})


export class LoginPage {

  recuerdame: boolean = false;
  email: string;
  isUserLoggedIn: any = false;
  userInfo: any = {};
  
  constructor(
    public http: HttpClient,
    public NavCtrl: NavController,
    public _usuarioService: UsuarioProvider,
    
  ) {}
   
 
  ngOnInit(): void {
     

     this.email = localStorage.getItem('email') || '';
      if( this.email.length > 1){
          this.recuerdame = true;
      }
 
  }
  
   
  registro(){
    this.NavCtrl.push(RegisterPage);
  }
 
  login(forma: NgForm) {
    
    let usuario = new Usuario(
      null,
      
      forma.value.email  ,
      forma.value.password ,
      
      null
    );
     
    
    this._usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe(resp => {
        
        this.NavCtrl.push(HomePage);
        console.log(resp);
        
    });
  
  /*         
  console.log('formulario valido?',forma.valid);
  console.log(forma.value);
  */
  }
}
