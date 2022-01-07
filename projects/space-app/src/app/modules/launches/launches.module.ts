import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { components } from './components';
import { LaunchesRoutingModule } from './launches-routing.module';
import { views } from './views';

const modules = [CommonModule, SharedModule, LaunchesRoutingModule];

@NgModule({
  declarations: [...components, ...views],
  imports: [...modules],
})
export class LaunchesModule {}
