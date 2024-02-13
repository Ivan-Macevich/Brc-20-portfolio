import { initializeApp } from "firebase/app";
import { User } from "@screens/Auth/types/authTypes";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	updateDoc,
	where
} from "@firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
	apiKey: "AIzaSyDJuLbzJblIrRaTYDDKhtlgbkUqZh3RHm0",
	authDomain: "brc-20-53178.firebaseapp.com",
	projectId: "brc-20-53178",
	storageBucket: "brc-20-53178.appspot.com",
	messagingSenderId: "671385624227",
	appId: "1:671385624227:web:bdc6c93fc9137ce8256916",
	measurementId: "G-T7DLBS5X64"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore();

export const addUser = async (
	id: string,
	email: string,
	name: string
): Promise<User | null> => {
	try {
		await addDoc(collection(db, "user"), { id, email, name });

		const userRef = doc(db, "user", id);
		const userDoc = await getDoc(userRef);

		return {
			id: userDoc.data()?.id,
			email: userDoc.data()?.email,
			name: userDoc.data()?.name
		};
	} catch (err) {
		return null;
	}
};
