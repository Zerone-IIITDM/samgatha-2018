import React from 'react';
import { auth } from '../FirebaseUi/firebaseConfig';

const SignOutButton = () =>
  <button
    type="button"
    onClick={() => {auth.signOut().then(() => console.log(`success`)).catch(() => console.log(`failed`))}}
    style={{border:'2px solid #b1ff64',fontSize:'15px',background:'transparent',color:'#b1ff64',cursor:'pointer'}}
  >
    Sign Out
  </button>

export default SignOutButton;