import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsFacadeService } from '../domain/items.facade';

@Component({
  selector: 'lib-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  itemsFacade = inject(ItemsFacadeService);
  items$ = this.itemsFacade.getState();
  constructor(){
    this.itemsFacade.dispatch({type:'add', payload:[9,8]})
  }
}


