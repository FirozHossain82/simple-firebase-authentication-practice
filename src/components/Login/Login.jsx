import React, { useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init.js";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        /* const errorMessage = error.message;
            console.log(errorMessage); */
        console.log(error);
      });
  };

  const handleGithubLogIn = () =>{
            signInWithPopup(auth,githubProvider)
            .then((result) =>{
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) =>{
                console.log(error)
            })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result)
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-20 text-center">
      {/* user ? logout : sign in */}
      {user ? (
        <button
          className="border-2 border-purple-800 py-2 px-4 font-medium rounded shadow-md mr-8"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : (
        <div>
            <button
          className="border-2 border-pink-400 py-2 px-4 font-medium rounded shadow-md mr-6 "
          onClick={handleGoogleSignIn}
        >
          Google Login
        </button>
        <button
          className="border-2 border-cyan-900 py-2 px-4 font-medium rounded shadow-md "
          onClick={handleGithubLogIn}
        >
          Github Login
        </button>
        </div>
      )}

      {user && (
        <div className="my-6">
          <h3 className="mb-4 text-lg font-medium">User:{user.displayName}</h3>
          <p className="mb-4 text-lg font-medium ">Email:{user.email}</p>
          <div className="flex items-center justify-center my-8">
            <img className="rounded h-30 w-40" src={user.photoURL} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
