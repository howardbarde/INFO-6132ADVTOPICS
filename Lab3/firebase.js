import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQX7K09DGl1jrZXuBP2t2hJjVkILfrA7o",
  authDomain: "info-6132-3d3ff.firebaseapp.com",
  projectId: "info-6132-3d3ff",
  storageBucket: "info-6132-3d3ff.firebasestorage.app",
  messagingSenderId: "880580377582",
  appId: "1:880580377582:web:cc95e0b863a80bdf23ecff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
