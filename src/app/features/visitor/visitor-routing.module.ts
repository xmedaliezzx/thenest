import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./visitor-navigator/visitor-navigator.component').then(
        (c) => c.VisitorNavigatorComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./containers/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorRoutingModule {}
