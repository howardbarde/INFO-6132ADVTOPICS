import { initializeApp } from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCXTVoKoF1JjKriLdSb62XqlONjRA7eqI0",
    authDomain: "info-6132lab4.firebaseapp.com",
    projectId: "info-6132lab4",
    storageBucket: "info-6132lab4.firebasestorage.app",
    messagingSenderId: "409858875464",
    appId: "1:409858875464:web:df26d67606a5f967dfb87d"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getDatabase(app);

export { auth, db };
