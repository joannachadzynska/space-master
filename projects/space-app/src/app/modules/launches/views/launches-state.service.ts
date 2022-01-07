import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, startWith, Subject, switchMap } from 'rxjs';
import { LaunchesService } from 'space-api/services';
import { Launch, LaunchDetailsUpdate, LaunchesQueryParams } from 'space-api/types';

@Injectable()
export class LaunchesStateService {
  queryParams = this.route.queryParams as Observable<LaunchesQueryParams>;
  private refresh = new Subject<void>();
  launches: Observable<Launch[]> = combineLatest([this.queryParams, this.refresh.pipe(startWith(undefined))]).pipe(
    switchMap(([queryParams]) => this.launchesService.getLaunches(queryParams))
  )

  constructor(
    private launchesService: LaunchesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  searchLaunches(params: Partial<LaunchesQueryParams>): void {
    this.router.navigate(['.'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  refreshLaunches(): void {
    this.refresh.next();
  }

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate) {
    this.launchesService
      .updateDetails(detailsUpdate)
      .subscribe(() => this.refreshLaunches());
  }
}
