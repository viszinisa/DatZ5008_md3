import { Component, Input } from '@angular/core';

@Component({
	selector: 'forma',
	templateUrl: './forma.component.html'
})

export class FormaComponent {
	vards: string = "";
	horoskops: number = 0;
	ticu: boolean = false;
	showErrors: boolean = false;
	submitted = false;
	
	onSubmit() {
		this.submitted = true;
	}
}
