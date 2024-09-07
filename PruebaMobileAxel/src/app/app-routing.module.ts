import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  { path: 'user-list', component: UserListComponent }, // Definir la ruta para el componente
  { path: '', redirectTo: '/user-list', pathMatch: 'full' } // Redirigir al componente cuando se abra la aplicacion

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
