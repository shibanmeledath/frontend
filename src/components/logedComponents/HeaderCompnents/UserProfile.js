import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from '../../HeaderCompnents/ProfileIcon';
import { usernameContext } from '../../../layouts/LoginLayout';



const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const username=useContext(usernameContext)



  const LogoutConfirmation = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h3 className="text-sm font-bold mb-4 text-center text-black">Are you sure you want to log out?</h3>
          <div className="flex justify-between">
            <button 
              onClick={onCancel} 
              className="w-full mx-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm} 
              className="w-full mx-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    );
  };

  const toggleProfile = () => {
    setProfile(!profile);
   
  };

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    // Clear the session storage
    sessionStorage.removeItem('user');
    setShowConfirmation(false);
    // Redirect to the login page after logout
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
    setProfile(false);
  };

useEffect(() => {
  if (profile==true){
    setTimeout(() => {
      setProfile(false);
    }, 3000);
  }
},[profile])

  return (
    <div className="relative">
      <button onClick={toggleProfile}>
        <ProfileIcon imageUrl={`${process.env.PUBLIC_URL}/logo192.png`} />
      </button>

      {profile && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <p className='ml-3 text-black'>Hello {username}</p>
          <button
            onClick={handleLogoutClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
          >
            Sign out
          </button>
        </div>
      )}

      {showConfirmation && (
        <LogoutConfirmation 
          onConfirm={handleConfirmLogout} 
          onCancel={handleCancelLogout} 
        />
      )}
    </div>
  );
};

export default UserProfile;
