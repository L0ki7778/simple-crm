import { Component, inject } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DialogAddUserComponent } from '../dialogs/dialog-add-user/dialog-add-user.component';

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
  fireService = inject(FirestoreService);
  test=false;

  constructor(public dialog: MatDialog) {
    
    
   }






   


   testFunction(){
    if(this.test){
      this.test=false
    }else{
      this.test=true;
    }
   }

   console(){
    console.log("Change detected!")
   }











  async ngOnInit(): Promise<void> {
    await this.fireService.getUserList();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
