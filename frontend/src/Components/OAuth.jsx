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
      if (!firebaseapp) {
        throw new Error('Firebase app is not initialized');
      }

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

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res // Check if data is not null or undefined

      if (!data) {
        throw new Error('No data returned from the API');
      }

      dispatch(signinSuccess(data)); // Dispatch the successful login action
      navigate('/'); // Redirect to the home page
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('Failed to parse JSON response:', error);
        alert('Failed to parse JSON response from the API');
      } else {
        console.error('Could not login with Google', error);
        alert('An error occurred during Google login.');
      }
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