import { Component, inject } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatTooltipModule,
    MatCardModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user: User = new User();
  fireService = inject(FirestoreService)

  constructor(public dialog: MatDialog) {
    
    
   }

  async ngOnInit(): Promise<void> {
    await this.fireService.getUserList();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
