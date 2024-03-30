import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../firestore.service';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  isLoading = false
  editUser!: User
  fireService = inject(FirestoreService);



  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }
  async saveUser() {
    console.log(this.editUser)
    this.isLoading = true
    await this.fireService.updateUser(this.editUser.id, this.editUser).catch((error) => {
      console.error("Error updating document: ", error);
      this.isLoading = false;
      this.dialogRef.close()
    }).then(() => {
      this.isLoading = false;
      this.dialogRef.close(this.editUser)
    });
  }
}