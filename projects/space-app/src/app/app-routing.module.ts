import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './views/start/start.component';

const routes: Routes = [
    {
        path: 'start',
        component: StartComponent,
    },
    {
        path: 'launches',
        loadChildren: () =>
            import('./modules/launches/launches.module').then(
                (m) => m.LaunchesModule
            ),
    },
    {
        path: 'labs',
        loadChildren: () =>
            import('./modules/labs/labs.module').then((m) => m.LabsModule),
    },
    {
        path: 'martian-calendar',
        loadChildren: () =>
            import('./modules/martian-calendar/martian-calendar.module').then(
                (m) => m.MartianCalendarModule
            ),
    },
    {
        path: '**',
        redirectTo: 'start',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
