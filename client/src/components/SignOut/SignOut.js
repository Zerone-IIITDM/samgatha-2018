import React from 'react';
import { auth } from '../FirebaseUi/firebaseConfig';

const SignOutButton = () =>
  <button
    type="button"
    onClick={() => {auth.signOut().then(() => console.log(`success`)).catch(() => console.log(`failed`))}}
  >
    Sign Out
  </button>

export default SignOutButton;