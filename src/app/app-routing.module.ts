import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }, { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
