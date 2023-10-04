import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './components/card/card-details/card-details.component';
import { CardTagComponent } from './components/card/card-tag/card-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuBarComponent,
    HomeComponent,
    CardDetailsComponent,
    CardTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
