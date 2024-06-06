import {Routes} from '@angular/router';
import {LogInComponent} from "./core/components/log-in/log-in.component";
import {SignUpComponent} from "./core/components/sign-up/sign-up.component";
import {HomeComponent} from "./core/components/home/home.component";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {LogoutComponent} from "./core/components/logout/logout.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', component: NotFoundComponent}
];
