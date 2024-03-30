import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogCalendarComponent } from '../../dialogs/dialog-calendar/dialog-calendar.component';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import für Tagesansicht


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FullCalendarModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
    },
    editable: true, // Enable Drag & Drop
    eventResizableFromStart: true, // Enable resizing from start
    weekends: false,
    eventClick: this.openEventDialog.bind(this)

  };
  events: EventInput[] = [
    { title: 'event 1', date: '2024-02-26', extendedProps: { description: 'Event 1 Description', location: 'Location 1' } },
    { title: 'event 2', date: '2024-02-27', extendedProps: { description: 'Event 2 Description', location: 'Location 2' } }
  
  ]




  constructor(public dialog: MatDialog) { }

  openEventDialog(info:any) {
    const dialogRef = this.dialog.open(DialogCalendarComponent);
    console.log({event:info.event})
    dialogRef.componentInstance.data = info.event._def.extendedProps ;

}
}