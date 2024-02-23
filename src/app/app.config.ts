import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-bbb82","appId":"1:123260505825:web:c809d2c214843f4ff7b1a0","storageBucket":"simple-crm-bbb82.appspot.com","apiKey":"AIzaSyCoXE2_IR3NdsVghvHyZ-BJaOpDGuGYYCY","authDomain":"simple-crm-bbb82.firebaseapp.com","messagingSenderId":"123260505825"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
