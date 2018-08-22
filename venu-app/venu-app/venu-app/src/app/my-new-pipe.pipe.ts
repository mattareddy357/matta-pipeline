import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNewPipe'
})
export class MyNewPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if (!value) return value;
    // return value.replace(/\W*(\w)\w*/g, '$1').toUpperCase();
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
