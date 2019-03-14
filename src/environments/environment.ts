// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  playsnow: 'http://localhost:4201',
  firebase: {
    apiKey: 'AIzaSyAjQgHrR44Ueg_8hLlD4wh8dMfKhefB_-w',
    authDomain: 'radio-8ac46.firebaseapp.com',
    databaseURL: 'https://radio-8ac46.firebaseio.com',
    projectId: 'radio-8ac46',
    storageBucket: 'radio-8ac46.appspot.com',
    messagingSenderId: '175871772077'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
