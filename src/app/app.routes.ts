import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landscapes-component',
    loadComponent: () => import('./components/landscape-list/landscape-list.component').then(mod => mod.LandscapeListComponent)
  }, {
    path: 'landscapes-component/:id',
    loadComponent: () => import('./components/landscape-item/landscape-item.component').then(mod => mod.LandscapeItemComponent)
  },
  {
    path: 'landscapes-routes',
    loadChildren: () => import('./routes/landscapes-routes')
  }, {
    path: '**', redirectTo: 'landscapes-component', pathMatch: 'full' // 此為當找不到符合的路徑時，統一將路徑導回 'landscapes-component'
  }
];
