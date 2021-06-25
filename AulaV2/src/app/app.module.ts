import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { FormsModule } from '@angular/forms';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    NavBarComponent,
    EvAndRefComponent,
    ClinicaVeterinariaComponent,
    FourOFourComponent,
    ListaDeComprasComponent,
    BuyComponent,
    AddComponent,
    CookiesComponent,
    PColorComponent,
    ChuckComponent,
    SColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
