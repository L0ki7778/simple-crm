import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-calendar',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule
  ],
  templateUrl: './dialog-calendar.component.html',
  styleUrl: './dialog-calendar.component.scss'
})
export class DialogCalendarComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef:MatDialogRef<DialogCalendarComponent>) { }


  closeDialog() {
    this.dialogRef.close();
  }
}
