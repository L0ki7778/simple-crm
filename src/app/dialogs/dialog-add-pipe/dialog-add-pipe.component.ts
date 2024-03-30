import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CustomPipe } from '../../../models/pipe.class';
import { MatButtonModule } from '@angular/material/button';
import { FirestoreService } from '../../firestore.service';

@Component({
  selector: 'app-dialog-add-pipe',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './dialog-add-pipe.component.html',
  styleUrl: './dialog-add-pipe.component.scss'
})
export class DialogAddPipeComponent {
  pipe = new CustomPipe();
  firestore = inject(FirestoreService)
  isLoading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddPipeComponent>) { }




  async creatPipe() {
    this.isLoading = true;
    await this.firestore.addPipe(this.pipe)
    this.isLoading = false;
    this.dialogRef.close()
  }
}
