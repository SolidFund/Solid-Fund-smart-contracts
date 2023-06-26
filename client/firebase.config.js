import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5TC8iIQtR7EK0r4b-NharlFswBmkf_jc",
  authDomain: "moonbeastapp.firebaseapp.com",
  databaseURL: "https://moonbeastapp-default-rtdb.firebaseio.com",
  projectId: "moonbeastapp",
  storageBucket: "moonbeastapp.appspot.com",
  messagingSenderId: "1024395538969",
  appId: "1:1024395538969:web:2d391a50546587e152b088"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {firestore, storage, app}