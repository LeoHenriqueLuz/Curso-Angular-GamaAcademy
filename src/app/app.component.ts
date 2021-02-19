import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Exemplos de Property e Event Binding";
  palavra = "msg enviado de component pai p/ component filho!";

  constructor(){}

  eventoRecebido($event){
    console.log("app component: Evento recebido com sucesso!", $event)

    
  }
 
 

 }

 

