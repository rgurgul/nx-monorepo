import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsFacadeService } from '../domain/items.facade';
import { GridComponent } from '@nx-monorepo/shared-ui';

@Component({
  selector: 'lib-items',
  standalone: true,
  imports: [CommonModule, GridComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  itemsFacade = inject(ItemsFacadeService);
  items$ = this.itemsFacade.getState();
}
