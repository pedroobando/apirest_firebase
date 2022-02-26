import dotenv from 'dotenv';
// import { credential } from 'firebase-admin';
dotenv.config();

import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
// const GOOGLE_APP = require(process.env.GOOGLE_APPLICATION_CREDENTIALS!);
// const GOOGLE_APP = require(process.env.GOOGLE_APPLICATION_CREDENTIALS!);

// console.log(GOOGLE_APP);

const app = initializeApp({
  // credential: credential.cert(GOOGLE_APP),
  credential: applicationDefault(),
});

export const db = getFirestore(app);
