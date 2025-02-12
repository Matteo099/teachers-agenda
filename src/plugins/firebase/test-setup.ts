import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { beforeEach } from "vitest";
import seedData from "./seed.json" assert { type: "json" };
import getFirebase from ".";
import { getCurrentUser, useFirebaseAuth, useFirestore } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

const { firebaseApp } = getFirebase();
const db = useFirestore();
const auth = useFirebaseAuth();

async function login() {
  if (auth && !getCurrentUser()) {
    await signInWithEmailAndPassword(auth, "admin@teachers.agenda", "teachers-agenda");
  }
}

/** Resets all documents in Firestore (Client-Side) */
async function resetFirestore() {
  const collections = Object.keys(seedData); // Get collection names from seed.json
  for (const colName of collections) {
    const colRef = collection(db, colName);
    const docs = await getDocs(colRef);
    for (const docSnap of docs.docs) {
      await deleteDoc(doc(db, colName, docSnap.id));
    }
  }
}

/** Seeds Firestore with test data */
async function seedFirestore() {
  for (const [collectionName, docs] of Object.entries<any>(seedData)) {
    const colRef = collection(db, collectionName);
    await Promise.all(docs.map((docData: any) => setDoc(doc(colRef, docData.id), docData)));
  }
  console.log("Firestore seeded!");
}

/** Hook to reset and seed Firestore before each test */
beforeEach(async () => {
  await login();
  await resetFirestore();
  await seedFirestore();
});