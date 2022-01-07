import { Component } from '@angular/core';
import { LaunchDetailsUpdate } from 'space-api/types';
import { LaunchesQueryParams } from './../../../../../../../space-api/types/launches-query-params';
import { LaunchesStateService } from './../launches-state.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [LaunchesStateService],
})
export class LaunchesComponent {
  launches = this.launchesState.launches;
  queryParams = this.launchesState.queryParams;

  constructor(private launchesState: LaunchesStateService) {}

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesState.updateLaunchDetails(detailsUpdate);
  }

  searchLaunches(params: LaunchesQueryParams) {
    this.launchesState.searchLaunches(params);
  }
}
