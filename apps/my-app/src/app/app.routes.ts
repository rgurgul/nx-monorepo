import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path:'items', loadComponent: ()=>import('@nx-monorepo/items').then(c=>c.ItemsComponent)}
];
