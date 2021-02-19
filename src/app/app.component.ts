import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Aprendendo Angular!";
  palavra = "Aulas da Gama Academy é top!!!";

  constructor(){}

  eventoRecebido($event){
    console.log("app component: Evento recebido com sucesso!", $event)

    
  }
 
 

 }

 

