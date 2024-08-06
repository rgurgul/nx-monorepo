import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {ItemsComponent} from '@nx-monorepo/items'

export interface IMenu {
  path: string;
  name: string;
}

@Component({
  selector: 'lib-menu',
  template: `
    <nav>
      <ul class="flex space-x-2 flex-col gap-6">
        @for (menu of _menus; track menu) {
        <li class="">
          <a
            class="rounded px-4 py-3 bg-red-400"
            routerLinkActive="bg-blue-600"
            [routerLink]="menu.path"
            >{{ menu.name }}</a
          >
        </li>
        }
      </ul>
    </nav>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ItemsComponent],
})
export class MenuComponent {
  _menus!: IMenu[];
  @Input()
  set menus(menu: IMenu[]) {
    this._menus = menu;
  }
}
