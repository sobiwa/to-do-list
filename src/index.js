import './style.css';
import init from './init.js';
import { initializeApp } from 'firebase/app';
import updateHeader from './updateHeader';
import { removeSignIn } from './signIn';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  setDoc,
  getDocs,
  getDoc,
  doc,
  query,
  deleteDoc,
  where,
} from 'firebase/firestore';

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

export async function addProjectToFirebase(project) {
  const userProject = doc(
    db,
    `users/${auth.currentUser.uid}/projects/${project.id}`
  );
  await setDoc(userProject, project);
}

export async function fetchProjectsFromFirebase() {
  const projectsArray = [];
  const projects = collection(db, `users/${auth.currentUser.uid}/projects`);
  const projectsQuery = query(projects);
  const querySnapshot = await getDocs(projectsQuery);
  querySnapshot.forEach((snap) => {
    const data = snap.data();
    projectsArray.push(data);
  });
  return projectsArray;
}

// attempted with 'collectionGroup', but unable to narrow query to specific user
// did not want to open read access to all other users
export async function fetchItemsFromFirebase() {
  const projects = collection(db, `users/${auth.currentUser.uid}/projects`);
  const projectsQuery = query(projects);
  const querySnapshot = await getDocs(projectsQuery);
  const querySnapshotArray = querySnapshot.docs;

  const allItems = await Promise.all(
    querySnapshotArray.map(async (proj) => {
      return await fetchItemsFromProject(proj.id);
    })
  );

  return allItems.flat();

}

export async function fetchItemsFromProject(projectId) {
  const items = collection(
    db,
    `users/${auth.currentUser.uid}/projects/${projectId}/items`
  );
  const itemsQuery = query(items);
  const itemsQuerySnapshot = await getDocs(itemsQuery);
  const array = itemsQuerySnapshot.docs.map((item) => item.data());
  return array;
}

export async function getProjectId(title) {
  const projects = collection(db, `users/${auth.currentUser.uid}/projects`);
  const projectsQuery = query(projects, where('title', '==', title));
  const querySnapshot = await getDocs(projectsQuery);
  const array = querySnapshot.docs;
  return array.length ? array[0].id : false;
}

export async function addListItemToFirebase(item) {
  const projectItem = doc(
    db,
    `users/${auth.currentUser.uid}/projects/${item.projectId}/items/${item.id}`
  );
  await setDoc(projectItem, item);
}

export async function deleteItemFromFirebase(item) {
  await deleteDoc(
    doc(
      db,
      `users/${auth.currentUser.uid}/projects/${item.projectId}/items/${item.id}`
    )
  );
}

// this is apparently not recommended by firebase. I should have kept all the item
// data in each project doc rather than sub-collections, but they also say to keep docs
// small
export async function deleteProjectFromFirebase({ id }) {
  const projectRef = doc(db, `users/${auth.currentUser.uid}/projects/${id}`);
  const items = collection(projectRef, 'items');
  const itemsQuery = query(items);
  const itemsQuerySnapshot = await getDocs(itemsQuery);
  const array = itemsQuerySnapshot.docs;
  await Promise.all(
    array.map(async (item) => {
      await deleteDoc(doc(items, item.id));
    })
  );
  await deleteDoc(projectRef);
}

export async function queryStraysExistence() {
  const straysDoc = doc(db, `users/${auth.currentUser.uid}/projects/strays`);
  const strays = await getDoc(straysDoc);
  return strays.exists();
}

export async function signUpEmailPassword(email, password) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // addUser(credentials.user);
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

function authStateObserver(user) {
  updateHeader(user);
  init(user);
}

onAuthStateChanged(auth, authStateObserver);

updateHeader();
// init(auth.currentUser);
