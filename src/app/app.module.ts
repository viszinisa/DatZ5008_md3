import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FormaComponent }  from './forma.component';
import { DatiComponent }  from './dati.component';
import { AppRoutingModule }   from './app-routing.module';

import { FilterPipe } from './filter.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		FormaComponent,
		DatiComponent,
		FilterPipe
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }
