import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'objectKeys', pure: false })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        if (!value) {
            return value;
        }
        return Object.keys(value).map(key => Object.assign({ propKey: key }, value[key]));
    }
}

// ['Aatrox', 'Ahri', ......] ngFor="let key of (champions.data \ objectKeys)"
