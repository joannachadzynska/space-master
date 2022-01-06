import { Component } from '@angular/core';
import { LaunchesService } from 'projects/space-api/services';

@Component({
    selector: 'app-launches',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent {
    launches = this.launchesService.getLaunches();

    constructor(private launchesService: LaunchesService) {}
}
