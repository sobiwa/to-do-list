import './style.css';
import init from './init.js';
import { initializeApp } from 'firebase/app';
import updateHeader from './updateHeader';
import { removeSignIn } from './signIn';
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAPrUjJWfpfhS8N_nmnjGSXeP73LPz_FF8',
  authDomain: 'to-do-list-b3108.firebaseapp.com',
  projectId: 'to-do-list-b3108',
  storageBucket: 'to-do-list-b3108.appspot.com',
  messagingSenderId: '1038855611837',
  appId: '1:1038855611837:web:a1c62ffd43850acde91ed4',
});

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, 'http://localhost:9099');
const db = getFirestore(firebaseApp);

export async function signUpEmailPassword(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    removeSignIn();
  } catch (error) {
    alert(error.message);
  }
}

export async function signInEmailPassword(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    removeSignIn();
  } catch (error) {
    alert(error.message);
  }
}

export async function signInGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    removeSignIn();
  } catch (error) {
    alert(error.message);
  }
}

export function signOutUser() {
  signOut(auth);
}

onAuthStateChanged(auth, (user) => {
  updateHeader(user);
});

export { auth };

init(auth.currentUser);
