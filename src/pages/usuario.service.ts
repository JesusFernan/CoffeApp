import { ToastController, NavController, NavParams } from "ionic-angular";
import { Injectable } from "@angular/core";
import { Usuario } from "./models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../app/config/config";
 
import "rxjs/add/operator/map";
 

@Injectable()
export class UsuarioProvider {

  public navCtrl: NavController
  public navParams: NavParams
   
  
   
  constructor(
    public http: HttpClient,
    private toastCtrl: ToastController, 
   
  ) {  }
  
    usuarioToast(name: any) {
    let toast = this.toastCtrl.create({
      message: "El usuario " +name+" fué creado con exito!",
      duration: 4000,
      position: "top"
    });

    toast.present();
  }

  loginToast(name: any){
    let toast = this.toastCtrl.create({
      message: "Bienvenid@ "+name+"!",
      duration: 4000,
      position: "top"
    });
    toast.present();
  }

  

  login(usuario: Usuario, recuerdame: boolean = false  ) {
    
    if(recuerdame){
      localStorage.setItem('email', usuario.email);
    }else{
      localStorage.removeItem('email');
    }
    
    
    
    let url = URL_SERVICIOS + "/login";

    return this.http.post(url, usuario).map((resp: any) => {
      
      localStorage.setItem("id", resp.id);
      localStorage.setItem("token", resp.token);
      localStorage.setItem("usuario", JSON.stringify(resp.usuario));
      
      this.loginToast(resp.usuario.nombre);
       
      return true;
    });
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario";

    return this.http.post(url, usuario).map((resp: any) => {
           this.usuarioToast(usuario.nombre);
       
      
      
      return resp.usuario;
    });
  }
}
