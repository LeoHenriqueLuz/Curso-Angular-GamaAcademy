import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

listaFrutas = [
  "laranja",
  "uva",
  "banana",
  "melancia"
]
infoCarro = [{
  marca: "volkwagem",
  modelo:"gol G7 ",
  anoFab: 2020,
  placa: "GWE 2345"

},
{
  marca: "volkwagem",
  modelo:"gol G7 ",
  anoFab: 2020,
  placa: "GWE 2345"

},{
  marca: "volkwagem",
  modelo:"golf G4 ",
  anoFab: 2020,
  placa: "GYJ 2745"

},{
  marca: "Fiat",
  modelo:"Siena ",
  anoFab: 2017,
  placa: "GHD 1075"

}]

MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

PREFIXO_IMAGE_URL="https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images";

condicao= false;


trocarValor(){
  this.condicao = !this.condicao;
}

soma(n1, n2){
  return n1 + n2;

}


  

}
