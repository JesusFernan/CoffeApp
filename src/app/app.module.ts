import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage} from '../pages/menu/menu';
import { UsuarioProvider } from '../pages/usuario.service';
import { RegisterPage } from '../pages/register/register';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http'; 
import { OrdenarPage } from '../pages/ordenar/ordenar';
import { CarritoPage } from '../pages/carrito/carrito';
import { PerfilPage } from '../pages/perfil/perfil'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    OrdenarPage,
    CarritoPage,
    PerfilPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    OrdenarPage,
    CarritoPage,
    PerfilPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
  ]
})
export class AppModule {}
