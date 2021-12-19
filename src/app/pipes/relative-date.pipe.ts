import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatRelative } from 'date-fns';
import * as Locales from 'date-fns/locale';
@Pipe({
    name: 'dateRelative'
})

export class RelativeDatePipe implements PipeTransform {
    constructor(@Inject(LOCALE_ID) private locale: string) {}
    transform(d1: Date | number): string {
        const locale = Locales[this.locale.split('-')[0] as 'sv'] || Locales['enUS']
        return formatRelative(d1, new Date(),{locale})
    }
}