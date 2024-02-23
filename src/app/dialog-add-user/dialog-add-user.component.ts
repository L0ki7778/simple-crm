import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { addDoc } from '@angular/fire/firestore';
import { Firestore, collectionData,onSnapshot, collection } from '@angular/fire/firestore';

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
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})

export class DialogAddUserComponent {
  user: User = new User();
  birthDate?: Date;

  constructor(private fireStore: Firestore) { }

  saveUser() {
    if(this.birthDate){
    this.user.birthDate = this.birthDate.getTime();
    addDoc(collection(this.fireStore, "users"), this.user.toJSON())
    .then((result:any)=>{
      console.log(result)
    })}
  }
  
}
