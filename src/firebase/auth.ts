/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth, googleProvider } from "./config";
import {
  signInWithPopup,
  updateProfile,
  validatePassword,
} from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface AuthResponse {
  success: boolean;
  message?: string;
}

// Password Validation
const passwordValidation = async (password: string) => {
  let passwordErrorMessage = "";
  const status = await validatePassword(auth, password); //check valid password
  if (!status.isValid) {
    if (!status.containsLowercaseLetter)
      passwordErrorMessage = "Needs at least one lowerCase character";
    else if (!status.containsNumericCharacter)
      passwordErrorMessage =
        "Password is too short , it should be 8 character or more";
    else if (!status.containsUppercaseLetter)
      passwordErrorMessage = "Needs at least one upperCase character";
    else if (!status.meetsMinPasswordLength)
      passwordErrorMessage = "Needs at least one number character";
    return passwordErrorMessage;
  }
};

// Sign Up with Email & Password
export const signUp = async (
  email: string,
  password: string,
  userName: string
): Promise<AuthResponse> => {
  try {
    const passUnValid = await passwordValidation(password);
    if (passUnValid) return { success: false, message: passUnValid };
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: userName,
    });
    return { success: true };
  } catch {
    return { success: false, message: "There is an Error in Sign Up" };
  }
};

// Sign In with Email & Password
export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch {
    return { success: false, message: "There is an Error in Sign In" };
  }
};

export const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    if (typeof window === "undefined") {
      throw new Error("signInWithPopup can only be used in the browser.");
    }
    await signInWithPopup(auth, googleProvider);
    return { success: true };
  } catch {
    return {
      success: false,
      message: "There is an Error in Sign In using google",
    };
  }
};

// Logout
export const logout = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
