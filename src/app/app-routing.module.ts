import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent},
  { path: '404', component: CalendarComponent},
  { path: '',   redirectTo: '/calendar', pathMatch: 'full' },
  { path: '*', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
