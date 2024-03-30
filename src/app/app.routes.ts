import { Routes } from '@angular/router';
import { DashboardComponent } from './toolbar/dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CalendarComponent } from './toolbar/calendar/calendar.component';
import { PipelineComponent } from './pipeline/pipeline.component';

export const routes: Routes = [
    {path:'' , component:DashboardComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'user', component:UserComponent},
    {path:'user/:id', component:UserDetailComponent},
    {path:'calendar', component:CalendarComponent},
    {path:'pipeline', component:PipelineComponent}
];

// {path:"", component:DashboardComponent,
// children:[
//     {path:"test",componen:testComponent}
// ]}