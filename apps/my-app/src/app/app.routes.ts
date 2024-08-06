import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path:'items', loadComponent: ()=>import('@nx-monorepo/items').then(c=>c.ItemsComponent)},
    {path:'cart', loadComponent: ()=>import('@nx-monorepo/cart').then(c=>c.CartComponent)},
];
