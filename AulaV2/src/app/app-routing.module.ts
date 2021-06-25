import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Calculator", component:CalculatorComponent},
  {path:"EvRef", component: EvAndRefComponent},
  {path:"Clinica", component: ClinicaVeterinariaComponent},
  {path:"notfound", component: FourOFourComponent},
  {path:"ListaCompras", component:ListaDeComprasComponent ,children:[
    {path:"add", component:AddComponent},
    {path:"buy", component:BuyComponent},
  ]},
  {path:"**", redirectTo: "notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
