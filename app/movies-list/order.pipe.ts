import { PipeTransform, Pipe } from '@angular/core';
import { Movies } from './movies';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(value: Movies[], args: string): Movies[] {
        if (args === 'popularity') {
            return value.sort((a: any, b: any) => {
                if (a.rating > b.rating) {
                    return -1;
                } else if (a.rating < b.rating) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (args === 'reverse') {
            return value.sort((a: any, b: any) => {
                if (a.name > b.name) {
                    return -1;
                } else if (a.name < b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });

        } else if (args === 'pricehl') {
            return value.sort((a: any, b: any) => {
                if (a.price > b.price) {
                    return -1;
                } else if (a.price < b.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return value;
    }
}
