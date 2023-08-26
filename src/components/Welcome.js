import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import logo from '../img/logo.png';

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src={logo} alt="logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your ....</p>
      <button className="sign-in"
            onClick={googleSignIn}
            alt="sign in with google"
            type="button">
              Sign in
        </button>
    </main>
  );
};

export default Welcome;