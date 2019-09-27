import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyComponent } from './components/why/why.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'why', component: WhyComponent },
  { path: 'registration', component: RegisterFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
