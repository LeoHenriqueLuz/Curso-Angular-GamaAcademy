import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

@Output() clicado = new EventEmitter();
 
imgURL = 'https://i.pinimg.com/originals/89/1a/32/891a32e521fd29f11a75f1007f1bad79.jpg';
  
valorInput = ""; 
valorContador = 10; 

constructor() { }

  ngOnInit(): void {
  }

  onClick($event){
    console.log("clicou!", $event);
  }

  digitouAlgumaCoisa($event){
    this.valorInput= $event.target.value 
    console.log( $event);
  }
  moveuMouse(){
    console.log("Mouse se moveu!");


  }
  onClickBotaoEmissor($event){
    console.log("Butão data binding: Emitindo evento para Appcomponent!", $event)
    this.clicado.emit($event);
  }

  

}
