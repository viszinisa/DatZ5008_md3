import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(all: { code: string, name: string }[], word:string) {
		console.log('piped');
		return all.filter(item => item.name.toLowerCase().indexOf(word.toLowerCase())!==-1);
	}
}