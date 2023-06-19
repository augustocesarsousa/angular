import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { canActivateGuard } from './shared/guards/can-activate.guard';
import { canDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { canMatchGuard } from './shared/guards/can-match.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canActivateGuard],
    canDeactivate: [canDeactivateGuard],
  },

  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canMatch: [canMatchGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
