import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { beforeEach, vi } from "vitest";
import getFirebase from ".";
import seedData from "./seed.json" assert { type: "json" };
import { DatabaseRef } from "@/models/firestore-utils";
import { SchoolRepository } from "@/models/repositories/school-repository";

const { firestore } = getFirebase();

const user = {
  "uid": "ozWh87r5B2MfKMA5aETWfjBbKzmI",
  "email": "panda.orange.553@example.com"
};

vi.mock("vuefire", async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    useFirebaseAuth: vi.fn(() => ({
      currentUser: {
        ...user
      }
    })),
    useCurrentUser: vi.fn(() => ({
      value: {
        ...user
      }
    })),
    getCurrentUser: vi.fn(() => ({
      ...user,
    })),
  }
})

/** Resets all documents in Firestore */
async function resetFirestore() {
  const collections = Object.keys(seedData); // Get collection names from seed.json
  // const collections = Object.values(DatabaseRef);
  for (const colName of collections) {
    const subcollectionPath = `${colName}/${user.uid}/user${colName.charAt(0).toUpperCase() + colName.slice(1)}`;
    const colRef = collection(firestore, subcollectionPath);
    const docs = await getDocs(colRef);
    for (const docSnap of docs.docs) {
      // console.log(JSON.stringify(docSnap.data()));
      await deleteDoc(doc(firestore, subcollectionPath, docSnap.id));
    }
  }
  console.log("Firestore restored!");
}

/** Seeds Firestore with test data */
async function seedFirestore() {
  for (const [colName, docs] of Object.entries<any>(seedData)) {
    const subcollectionPath = `${colName}/${user.uid}/user${colName.charAt(0).toUpperCase() + colName.slice(1)}`;
    const colRef = collection(firestore, subcollectionPath);
    await Promise.all(docs.map((docData: any) => {
      // console.log(docData);
      setDoc(doc(colRef, docData.id), docData)
    }));
  }
  console.log("Firestore seeded!");
}

/** Hook to reset and seed Firestore before each test */
beforeEach(async () => {
  await resetFirestore();
  await seedFirestore();
});