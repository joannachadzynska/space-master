import { Component } from '@angular/core';
import { LaunchesService } from 'space-api/services';
import { LaunchDetailsUpdate } from 'space-api/types';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent {
  launches = this.launchesService.getLaunches();

  constructor(private launchesService: LaunchesService) {}

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesService.updateDetails(detailsUpdate).subscribe(() => {
      this.launches = this.launchesService.getLaunches();
    });
  }
}
