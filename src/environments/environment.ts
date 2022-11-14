// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = { 
  apiKey: "AIzaSyC31wAhLiAYdjZwOT8p45AfHJwXbCxqrcM",
  authDomain: "fhe-fraclock.firebaseapp.com",
  databaseURL: "https://fhe-fraclock-default-rtdb.firebaseio.com",
  projectId: "fhe-fraclock",
  storageBucket: "fhe-fraclock.appspot.com",
  messagingSenderId: "46910877118",
  //appId: "1:46910877118:web:2e4ac14657960a79a01def",
  measurementId: "G-N1G300VXB5"
}


export const environment = {
  production: true,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

