import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGE2FE-9jcb1ymt_C5OZd4rFyqYZKAd0w",
  authDomain: "cv-design-4f0f8.firebaseapp.com",
  projectId: "cv-design-4f0f8",
  storageBucket: "cv-design-4f0f8.appspot.com",
  messagingSenderId: "798381755581",
  appId: "1:798381755581:web:771b2ef18ac4cf232a3bd4",
  measurementId: "G-V3P492YQNR"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
