import { Pipe, PipeTransform } from '@angular/core';
import { MoonsService } from 'projects/space-api/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
    name: 'moonName',
})
export class MoonNamePipe implements PipeTransform {
    constructor(private moonService: MoonsService) {}

    transform(moonId: number): Observable<string> {
        return this.moonService
            .getMoon(moonId)
            .pipe(
                map((moon) => (moon ? `${moon.name} (${moon.planet})` : 'n/a'))
            );
    }
}
