import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJujaVhMXb4JZWFKhZlMMwdSXRaeoPlAY",
    authDomain: "myexpenses-56da0.firebaseapp.com",
    databaseURL: "https://myexpenses-56da0.firebaseio.com",
    projectId: "myexpenses-56da0",
    storageBucket: "myexpenses-56da0.appspot.com",
    messagingSenderId: "358366189067"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').push({
  description: 'Rent',
  note: '1st of mont',
  amount: 500,
  createdAt: 1200
});

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('notes/-L_cL9P-aXWkEH7dTKQq').update({
//   body: 'Buy food'
// });

// database.ref('notes/-L_cL9P-aXWkEH7dTKQq').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Angular Python'
// });

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Angular Python'
// });

// const firebaseNotes = {
//   notes: {
//     kkeyoahhgafsJJa: {
//       title: 'first note',
//       body: 'This is my note'
//     },
//     asbc2371uaauSs: {
//       id: '127abc',
//       title: 'second note',
//       body: 'This is my note'
//     }
//   }
// };

// OBS !!!!
const onValueChange =  database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

}, (e) => {
  console.log('Error in data fetching', e);
});

const onValueChange =  database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error in data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(29);
}, 5500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(30);
}, 10500);

database.ref('location/city')
.once('value')
.then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
})
 .catch((e) => {
  console.log('Error fetching data', e);
});

database.ref().set({
  name: 'Lasse Ojala',
  age: 45,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Vantaa',
    country: 'Finland'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

database.ref().update({
  job: 'Manager',
  'location/city': 'Helsinki'
});

database.ref()
  .remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });