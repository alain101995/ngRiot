import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forRange'
})
export class ForRangePipe implements PipeTransform {
  transform(forTimes: number, args: any[]) {
    for(let index = forTimes; index <= )
    throw new Error("Method not implemented.");
  }
 /* transform(minValue: number, maxValue: number): number[] {
    const range = [];
    for (let index = minValue; index <= maxValue; index++) {
      range.push(index);
    }
    return range;
  }*/
  // https://auth0.com/blog/angular2-series-working-with-pipes/
  // https://angular.io/guide/pipes
}
