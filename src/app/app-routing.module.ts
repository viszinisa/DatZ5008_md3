import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormaComponent }  from './forma.component';
import { DatiComponent }  from './dati.component';

const routes: Routes = [
	{ path: '', redirectTo: '/forma', pathMatch: 'full' },
	{ path: 'forma',  component: FormaComponent },
	{ path: 'dati',     component: DatiComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
