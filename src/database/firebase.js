import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyCWDWd-adHoleh_MpP0CV1oLUJKEcLSOoI",
  authDomain: "portfolio-9e3d2.firebaseapp.com",
  databaseURL: "https://portfolio-9e3d2.firebaseio.com",
  storageBucket: "portfolio-9e3d2.appspot.com",
  messagingSenderId: "518042399685"
};
firebase.initializeApp(config);

export default firebase