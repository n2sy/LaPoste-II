import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { MY_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    AddAccountComponent,
    ItemAccountComponent,
    HomeAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    UpdateComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, MY_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
