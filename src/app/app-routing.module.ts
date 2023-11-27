import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/sales/parent/parent.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CatalogsComponent } from './pages/catalogs/catalogs/catalogs.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'catalogs',
    component: CatalogsComponent,
  },
  {
    path: 'sales',
    component: ParentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
