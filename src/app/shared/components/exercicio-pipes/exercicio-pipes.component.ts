import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

  @Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers: [
    DecimalPipe,
  ],
})
export class ExercicioPipesComponent {

  constructor(
    private decimalPipe: DecimalPipe 
    ) {}
  

  serieFilme ={
  titulo: "Game of thrones",
  avaliacao: 9.9898989865,
  dataLancamento: new Date(2011, 4, 17),
  precoAssinaturaHBO: 34.90

};
  compras = [{
  produto: 'lâmpada',
  valor: 399.99,
  quantidade: 2,
  peso: 0,
  data: new Date(2020, 1, 1, 15, 20),

},{produto: 'farinha',
  valor: 450.37,
  quantidade: 2,
  peso: 29.33333,
  data: new Date(2020, 1, 10, 19, 30),}];

  getPesoFormat(peso: number){
    if(peso <= 0 ){
      return'sem peso';
    }
    return this.decimalPipe.transform(peso, '1.1-2') + 'kg';
  }
  

}
