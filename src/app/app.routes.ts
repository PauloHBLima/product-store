import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { EditComponent } from './features/edit/edit.component';
import { Observable } from 'rxjs';
import { ProductsService } from './services/products.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product',
    loadComponent: () => import('./features/edit/edit.component').then(
      (m) => m.EditComponent),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const productsService = inject(ProductsService);
      productsService.get(route.paramMap.get('id') as string)

      return productsService.get(route.paramMap.get('id') as string);
      },
    },

    loadComponent: () => import('./features/edit/edit.component').then(
      (m) => m.EditComponent),
  },
];
