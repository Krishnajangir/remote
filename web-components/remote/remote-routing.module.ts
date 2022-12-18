// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/remote/components/home/home.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class RemoteRoutingModule { }
export const routing = RouterModule.forRoot(
  [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  ],
  { useHash: true }
);
