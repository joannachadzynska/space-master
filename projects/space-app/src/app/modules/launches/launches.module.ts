import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './views/launches/launches.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [LaunchesComponent],
    imports: [CommonModule, SharedModule, LaunchesRoutingModule],
})
export class LaunchesModule {}
