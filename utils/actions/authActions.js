import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ref, child, getDatabase, set } from 'firebase/database';
import { getFirebaseApp } from '../firebaseHelper';
import { async } from 'validate.js';
// export const signUp = (email, password, firstName, lastName) => {
export const signUp = async (email, password, firstName, lastName) => {
  const app = getFirebaseApp();
  const auth = getAuth(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { uid } = userCredential.user;
    const userData = await createUser(uid, firstName, lastName, email);
  } catch (error) {
    // console.log(error);
    const errorCode = error.code;
    let message = 'Чёт пошло не так...';
    if (errorCode === 'auth/email-already-in-use') {
      message = 'Этот адрес эл. почты уже используется';
    }
    throw new Error(message);
  }
};
const createUser = async (userId, firstName, lastName, email) => {
  const firstLast = `${firstName} ${lastName}`.toLowerCase();
  const userData = {
    userId,
    firstName, // equal to firstName: firstName
    lastName,
    firstLast,
    email,
    signUpDate: new Date().toISOString(),
  };
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, userData);
  return userData;
};

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     console.log(userCredential);
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     console.log(error);
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
