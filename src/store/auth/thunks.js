import {
  logUserWidthEmailPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log(result);
    if (!result.ok) return dispatch(logout({ err_msg: result.err_msg }));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, err_msg } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!ok) return dispatch(logout({ err_msg }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { uid, displayName, photoURL, err_msg, ok } =
      await logUserWidthEmailPassword(email, password);
    if (!ok) return dispatch(logout({ err_msg }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};
