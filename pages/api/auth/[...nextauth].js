import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

// import { FirestoreAdapter } from "@next-auth/firebase-adapter";
// import { getApp, getApps, initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   query,
//   getDocs,
//   where,
//   limit,
//   doc,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   runTransaction,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCnB490eOaC9zoTLmLXiJEiwq1Dxu1AOKk",
//   authDomain: "next-auth-5f2e5.firebaseapp.com",
//   projectId: "next-auth-5f2e5",
//   storageBucket: "next-auth-5f2e5.appspot.com",
//   messagingSenderId: "1015527755040",
//   appId: "1:1015527755040:web:06bd5b4834ee433d91db45",
// };
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();

export default NextAuth({
  // Configure one or more authentication providers
  // adapter: FirestoreAdapter({
  //   db,
  //   collection,
  //   query,
  //   getDocs,
  //   where,
  //   limit,
  //   doc,
  //   getDoc,
  //   addDoc,
  //   updateDoc,
  //   deleteDoc,
  //   runTransaction,
  // }),
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
  },
});
