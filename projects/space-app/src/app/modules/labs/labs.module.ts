import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { components } from './components';
import { LabsRoutingModule } from './labs-routing.module';
import { pipes } from './pipes';
import { views } from './views';

const modules = [
    CommonModule,
    SharedModule,
    LabsRoutingModule,
    ReactiveFormsModule,
];

@NgModule({
    declarations: [ ...components,...views,...pipes],
    imports: [...modules],
})
export class LabsModule {}
