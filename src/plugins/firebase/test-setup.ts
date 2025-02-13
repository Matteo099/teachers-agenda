import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { beforeEach, vi } from "vitest";
import getFirebase from ".";
import seedData from "./seed.json" assert { type: "json" };

const { firebaseApp, auth, firestore } = getFirebase();

const user = {
  "uid": "ozWh87r5B2MfKMA5aETWfjBbKzmI",
  "email": "panda.orange.553@example.com",
  "emailVerified": true,
  "displayName": "Panda Orange",
  "isAnonymous": false,
  "photoURL": "https://st3.depositphotos.com/1007566/13175/v/450/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg",
  "providerData": [
    {
      "providerId": "google.com",
      "uid": "3962006501350623619274014826777148228026",
      "displayName": "Panda Orange",
      "email": "panda.orange.553@example.com",
      "phoneNumber": null,
      "photoURL": "https://st3.depositphotos.com/1007566/13175/v/450/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg"
    }
  ],
  "stsTokenManager": {
    "refreshToken": "eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJveldoODdyNUIyTWZLTUE1YUVUV2ZqQmJLem1JIiwicHJvdmlkZXIiOiJnb29nbGUuY29tIiwiZXh0cmFDbGFpbXMiOnt9LCJwcm9qZWN0SWQiOiJ0ZWFjaGVycy1hZ2VuZGEifQ==",
    "accessToken": "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiUGFuZGEgT3JhbmdlIiwicGljdHVyZSI6Imh0dHBzOi8vc3QzLmRlcG9zaXRwaG90b3MuY29tLzEwMDc1NjYvMTMxNzUvdi80NTAvZGVwb3NpdHBob3Rvc18xMzE3NTA0MTAtc3RvY2staWxsdXN0cmF0aW9uLXdvbWFuLWZlbWFsZS1hdmF0YXItY2hhcmFjdGVyLmpwZyIsImVtYWlsIjoicGFuZGEub3JhbmdlLjU1M0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE3Mzc3OTU3OTMsInVzZXJfaWQiOiJveldoODdyNUIyTWZLTUE1YUVUV2ZqQmJLem1JIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJwYW5kYS5vcmFuZ2UuNTUzQGV4YW1wbGUuY29tIl0sImdvb2dsZS5jb20iOlsiMzk2MjAwNjUwMTM1MDYyMzYxOTI3NDAxNDgyNjc3NzE0ODIyODAyNiJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifSwiaWF0IjoxNzM5NDU3NDI4LCJleHAiOjE3Mzk0NjEwMjgsImF1ZCI6InRlYWNoZXJzLWFnZW5kYSIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90ZWFjaGVycy1hZ2VuZGEiLCJzdWIiOiJveldoODdyNUIyTWZLTUE1YUVUV2ZqQmJLem1JIn0.",
    "expirationTime": 1739461028303
  },
  "createdAt": "1735288157362",
  "lastLoginAt": "1737795793640",
  "apiKey": "AIzaSyDhEJoQLDHojsr_VEtB1O9IErI__pShKa8",
  "appName": "[DEFAULT]"
};

vi.mock("vuefire", async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    useCurrentUser: vi.fn(() => ({
      ...user,
      value: {
        ...user
      }
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
  // await login();
  await resetFirestore();
  await seedFirestore();
});