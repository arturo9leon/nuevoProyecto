import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { EvaluaComponent } from './component/pages/evalua/evalua.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'evalua', component: EvaluaComponent }
    ]
  },
  { path: '**', redirectTo: 'login' },
];
