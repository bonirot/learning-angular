import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule], // si contiene la palabra "module", va en imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
