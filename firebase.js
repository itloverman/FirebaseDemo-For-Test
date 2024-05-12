import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkKgHvT2g33gSvxWzlODf0ovX1KerwIhE",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "fir-demo-1cc10",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:650338910594:ios:7d30d94f73b07551060f9b",
  measurementId: "G-measurement-id",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
