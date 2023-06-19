import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { canActivateGuard } from './shared/guards/can-activate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
