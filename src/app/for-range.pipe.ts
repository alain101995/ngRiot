import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forRange'
})
export class ForRangePipe implements PipeTransform {
  transform(value: any[], forTimes: number): number[] {
    const range = [];
    if (!value && Array.isArray(value)) {
      return range;
    }
    if (forTimes > value.length) {
      forTimes = value.length;
    }
    for (let index = 0; index < forTimes; index++) {
      range.push(value[index]);
    }
    return range;
  }
}

 /* transform(minValue: number, maxValue: number): number[] {
    const range = [];
    for (let index = minValue; index <= maxValue; index++) {
      range.push(index);
    }
    return range;
  } */
