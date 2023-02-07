import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADOut596QvjNUNSAQaGdfvD2rUjuaVCHU',
  appId: '1:10055225840:web:b0c1b2aa5cba3f4f384d35',
  authDomain: 'district3developers-website.firebaseapp.com',
  databaseURL:
    'https://district3developers-website-default-rtdb.firebaseio.com',
  messagingSenderId: '10055225840',
  projectId: 'district3developers-website',
  storageBucket: 'district3developers-website.appspot.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
