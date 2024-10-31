import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import config from "./config";

function initialize(existingApp?: FirebaseApp) {
    const firebaseApp = existingApp || initializeApp(config);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    // const storage = getStorage(firebaseApp);

    // If on localhost, use all firebase services locally
    if (import.meta.env.VITE_FIREBASE_SIMULATOR.toLowerCase() === "true" && location.hostname === 'localhost') {
        connectAuthEmulator(auth, "http://localhost:9099");
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        // connectStorageEmulator(storage, 'localhost', 9002);
    }

    return { firebaseApp, auth, firestore/*, storage*/ }
}

export default function getFirebase() {
    const existingApp = getApps()[0];
    return initialize(existingApp);
}