import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { DatiService } from './dati.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Component({
	selector: 'forma',
	templateUrl: './dati.component.html',
	providers: [ DatiService ]
})

export class DatiComponent {
	items: { code: string, name: string }[] = [];

	filtrs: string = '';

	// constructor (private datiService: DatiService) { }
	constructor (private http: Http) {}

	ngOnInit(): void {
		this.load();
	}

	load(): void {
		this.http.get('names.json')
			.map(res => res.json())
			.subscribe(items => this.items = this.parseItems(items));
		// this.http.get('names.json')
		// 	.toPromise()
		// 	.then(response => console.log(this.items = response.json()));
	}

	parseItems(items:string[]) {
		var r:{ code: string, name: string }[] = [];
		for (var i in items) {
			r.push({
				code: i,
				name: items[i]
			});
		}
		return r;
	}
}
