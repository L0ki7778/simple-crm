import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FirestoreService } from '../../firestore.service';
import { DialogAddPipeComponent } from '../dialog-add-pipe/dialog-add-pipe.component';
import { CustomPipe } from '../../../models/pipe.class';

@Component({
  selector: 'app-dialog-add-deal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './dialog-add-deal.component.html',
  styleUrl: './dialog-add-deal.component.scss'
})
export class DialogAddDealComponent {
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
