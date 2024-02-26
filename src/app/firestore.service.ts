import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, onSnapshot, getDoc, doc, updateDoc, CollectionReference, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  fireStore: Firestore = inject(Firestore)
  items$?: Observable<any>;
  downloadedUserData = new User();
  userList: User[] = [];
  loadedUsers = false;
  unsubUserList: Function | undefined;



  constructor() {
    // this.addJson()
   }


  /**
   * A function to retrieve the user collection.
   *
   * @return {type} description of return value
   */
  userCollectionRef() {
    return collection(this.fireStore, "users");
  }


  singelUserRef(docId: string) {
    return doc(collection(this.fireStore, "users"), (docId));
  }


  async getSingleUser(docRef: string) {
    const docSnap = await getDoc(this.singelUserRef(docRef));
    return docSnap.data()
  }


  async updateUser(docRef: string, user: User) {
    await updateDoc(this.singelUserRef(docRef), user.toJSON()).catch((error) => {
      console.error("Error updating document: ", error);
    }).then(() => {
      console.log("Document successfully updated!");
    });
  }


  /**
   * Asynchronously adds a user to the user list.
   *
   * @param {User} user - the user to be added
   * @return {void} 
   */
  async addUser(user: User) {
    this.userList = [];
    await addDoc(collection(this.fireStore, "users"), user.toJSON());
    await this.getUserList();
  }


  // async addJson() {
  //   debugger
  //   this.json.forEach((item) => {
  //     addDoc(collection(this.fireStore, "properties"), item)
  //   })
  // }



  /**
   * Asynchronously retrieves the list of users.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  async getUserList() {
    this.unsubUserList = onSnapshot(this.userCollectionRef(), (list) => {
      this.userList = [];
      list.forEach((obj: any) => {
        let user = this.downloadedUserData = obj.data() as User;
        user.id = obj.id;
        this.userList.push(user);
        this.sortUserCreationDate();
        this.loadedUsers = true;
      });
    })
  };


  /**
   * Sorts the user list by creation date.
   */
  sortUserCreationDate() {
    this.userList.sort((a, b) => {
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      return 0;
    });
  };



  ngOnDestroy() {
    this.unsubUserList ? this.unsubUserList() : null;
  };
};




