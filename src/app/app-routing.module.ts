import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { AdvicesComponent } from './advices/advices.component';
import { RoleGuardService } from './role-guard.service';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard, RoleGuardService],
    data: {
      expectedRole: 'User.Admin'
    }
  },
  {
    path: 'advices',
    component: AdvicesComponent,
    canActivate: [MsalGuard, RoleGuardService],
    data: {
      expectedRole: 'User.Gestor'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [MsalGuard, RoleGuardService],
    data: {
      expectedRole: 'User.Admin'
    }
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
