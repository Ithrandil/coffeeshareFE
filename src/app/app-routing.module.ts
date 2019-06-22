import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyComponent } from './components/why/why.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  { path: 'why', component: WhyComponent },
  { path: 'registration', component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
