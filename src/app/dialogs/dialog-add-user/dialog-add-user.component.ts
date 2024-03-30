import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirestoreService } from '../../firestore.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: provideNativeDateAdapter(),
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButton,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})

export class DialogAddUserComponent {
  user: User = new User();
  birthDate?: Date;
  fireService = inject(FirestoreService)
  isLoading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  async saveUser() {
    this.isLoading = true;
      if (this.birthDate) {
        this.user.timestamp = new Date().getTime();
        this.user.birthDate = this.birthDate.getTime();
        await this.fireService.addUser(this.user)
        this.isLoading = false;
        this.dialogRef.close()
      }
  }
}
