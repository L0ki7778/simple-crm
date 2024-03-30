import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialogs/dialog-edit-user/dialog-edit-user.component';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  docId: string | null ;
  fireService = inject(FirestoreService)
  user: any;
  loadingUser = true;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.docId = this.route.snapshot.paramMap.get('id');
  }

  
 async ngOnInit(): Promise<void> {
  if(this.docId)
   await this.fireService.getSingleUser(this.docId)
      .then(obj => {
        this.user = obj;
        if(this.userIdisMissing()){
          this.user.id=this.docId
        }
        this.loadingUser = false
      });
  }


  editUserData() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.editUser = new User(this.user);
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.user = result;
      }
    });
  };
  

  userIdisMissing(){
    return this.user.id == "";
  }
}
