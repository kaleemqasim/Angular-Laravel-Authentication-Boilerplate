import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: PublicLayoutComponent,
    loadChildren: () => import('./modules/common/common.module').then(m => m.default)
  },
  {
    path:'auth',
    component: PublicLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.default)
  },
  {
    path: 'dashboard',
    component: PrivateLayoutComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.default)
  },
  { 
    path: '**', pathMatch: 'full', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
