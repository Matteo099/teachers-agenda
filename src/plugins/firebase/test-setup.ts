import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { beforeEach, vi } from "vitest";
import getFirebase from ".";
import seedData from "./seed.json" assert { type: "json" };

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
  for (const colName of collections) {
    const colRef = collection(firestore, colName);
    const docs = await getDocs(colRef);
    for (const docSnap of docs.docs) {
      await deleteDoc(doc(firestore, colName, docSnap.id));
    }
  }
}

/** Seeds Firestore with test data */
async function seedFirestore() {
  for (const [collectionName, docs] of Object.entries<any>(seedData)) {
    const colRef = collection(firestore, collectionName);
    await Promise.all(docs.map((docData: any) => setDoc(doc(colRef, docData.id), docData)));
  }
  console.log("Firestore seeded!");
}

/** Hook to reset and seed Firestore before each test */
beforeEach(async () => {
  await resetFirestore();
  await seedFirestore();
});