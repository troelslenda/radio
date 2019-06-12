// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/* export const replaceEmoji = functions.database.ref('expressions/{expressionId}').onCreate((snapshot, context) => {
  if(snapshot.child('expression').val() === "💩") {
    console.log('fart found')
    return snapshot.ref.update({
      expression: "🤘",
      moderatedAt: Date.now()
    })
  }
  return false;
}); */
