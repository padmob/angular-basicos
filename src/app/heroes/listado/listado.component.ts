import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan america'];

  heroeBorrado: string = '';

  BorrarHeroe()
  {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
