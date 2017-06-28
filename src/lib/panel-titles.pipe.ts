import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'panelTitlesFilter', pure: false})
export class PanelTitleFilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        return items.filter(item =>
            term === undefined ||
            term.length === 0 ||
            item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
        );
    }
}
