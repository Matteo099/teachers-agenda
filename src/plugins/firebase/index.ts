import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import config from "./config";
import { GoogleAuthProvider } from 'firebase/auth';
import { initializeAnalytics } from "firebase/analytics";

function initialize(existingApp?: FirebaseApp) {
    const firebaseApp = existingApp || initializeApp(config);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    // const storage = getStorage(firebaseApp);
    if (!existingApp) initializeAnalytics(firebaseApp);

    // If on localhost, use all firebase services locally
    if (import.meta.env.VITE_FIREBASE_SIMULATOR.toLowerCase() === "true" && location.hostname === 'localhost') {
        if (!existingApp) {
            // Use the loopback IP so environments with a localhost proxy do not
            // accidentally send emulator traffic through that proxy.
            const authPort = import.meta.env.VITE_FIREBASE_AUTH_EMULATOR_PORT ?? import.meta.env.VITE_FIREBASE_EMULATOR_PORT ?? 9099;
            const firestorePort = import.meta.env.VITE_FIRESTORE_EMULATOR_PORT ?? 8080;
            connectAuthEmulator(auth, `http://127.0.0.1:${authPort}`);
            connectFirestoreEmulator(firestore, '127.0.0.1', firestorePort);
            // connectStorageEmulator(storage, 'localhost', 9002);
        }
    }

    return { firebaseApp, auth, firestore/*, storage*/ }
}

export default function getFirebase() {
    const existingApp = getApps()[0];
    return initialize(existingApp);
}

export const googleAuthProvider = new GoogleAuthProvider()
