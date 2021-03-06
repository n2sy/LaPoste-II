import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddComponent } from './add/add.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AllowModifGuard } from './allow-modif.guard';
import { AllowLoginGuard } from './allow-login.guard';
import { ExitLoginGuard } from './exit-login.guard';
let my_routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv', //component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [AllowModifGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AllowLoginGuard],
    canDeactivate: [ExitLoginGuard],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const MY_ROUTING = RouterModule.forRoot(my_routes);
