import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MartianCalendarComponent } from './martian-calendar.component';

const routes: Routes = [{ path: '', component: MartianCalendarComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MartianCalendarRoutingModule {}
