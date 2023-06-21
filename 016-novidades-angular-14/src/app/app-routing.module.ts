import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { SobreComponent } from './pages/components/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Página Home' },
  { path: 'sobre/:id', component: SobreComponent, title: 'Página Sobre' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
