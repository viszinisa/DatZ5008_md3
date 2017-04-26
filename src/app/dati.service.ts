import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatiService {
	private url = '/names.json';
	
	constructor (private http: Http) {}

	load(): Promise<string[]> {
		return this.http.get(this.url)
			.toPromise()
			.then(response => response.json());
	}
	
}
