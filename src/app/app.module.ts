import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoComponent } from './photo/photo.component';

const appRoutes: Routes = [
  {path: "", component: RechercheComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    NavbarComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
