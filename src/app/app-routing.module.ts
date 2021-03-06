import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RotaInesistenteComponent } from './rota-inesistente/rota-inesistente.component';

const routes: Routes = [{  
   path: 'login',
   component: LoginComponent 
 
  },{
    path: 'home',
   component: HomeComponent

   },{
     path: 'extrato',
     component: ExtratoComponent
   },{
     path:'',
     redirectTo: 'home',
     pathMatch: 'full'
     
   },{
     path: '**',
     component: RotaInesistenteComponent

   }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
