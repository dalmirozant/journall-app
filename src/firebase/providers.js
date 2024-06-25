import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      err_code: error.code,
      err_msg: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL } = result.user;

    await updateProfile(FireBaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      err_code: error.code,
      err_msg: error.message,
    };
  }
};

export const logUserWidthEmailPassword = async (email, password) => {
  console.log({ email, password });
  try {
    const result = await signInWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = result.user;
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      err_code: error.code,
      err_msg: error.message,
    };
  }
};
