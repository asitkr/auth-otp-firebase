import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYoAByqQWjqUYvJm86zyLtuy0Jq1V0lVQ",
    authDomain: "phone-auth-c30dd.firebaseapp.com",
    projectId: "phone-auth-c30dd",
    storageBucket: "phone-auth-c30dd.appspot.com",
    messagingSenderId: "1059938110780",
    appId: "1:1059938110780:web:d73466bb6d5799f52ae239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
