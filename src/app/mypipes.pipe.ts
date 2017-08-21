import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mypipes',  pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value).map(key => Object.assign({ key }, value[key]));
    }
}
