import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forRange'
})
export class ForRangePipe implements PipeTransform {
  transform(minValue: number, maxValue: number): number[] {
    const range = [];
    for (let index = minValue; index <= maxValue; index++) {
      range.push(index);
    }
    return range;
  }
}
