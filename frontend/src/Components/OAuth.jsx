import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { firebaseapp } from '../firebase.js';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate to redirect

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebaseapp);

      const result = await signInWithPopup(auth, provider);
      console.log(result);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(signinSuccess(data)); // Dispatch the successful login action
        navigate('/'); // Redirect to the home page
      } else {
        console.error('Google login failed:', data.message || 'Unknown error');
        alert('Google login failed.');
      }
    } catch (error) {
      console.log('Could not login with Google', error);
      alert('An error occurred during Google login.');
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <FaGoogle className="mr-2" />
        Google
      </button>
    </div>
  );
}

export default OAuth;
