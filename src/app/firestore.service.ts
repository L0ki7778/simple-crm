import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  fireStore: Firestore = inject(Firestore)
  items$;
  items;
  
  constructor() {
    const itemCollection = collection(this.fireStore, 'users');
    this.items$ = collectionData(itemCollection);
    this.items = this.items$.subscribe(data => {
      console.log(data);
    })
  }

  
}
