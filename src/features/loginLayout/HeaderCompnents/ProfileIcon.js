import React from 'react';

const ProfileIcon = ({ imageUrl, altText = 'Profile' ,isClicked}) => {
  return (
    <>
       <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
            <img 
              src={imageUrl} 
              alt={altText} 
              className="w-full h-full object-cover"
            />
           
          </div>
    {
        isClicked&&<h2>Logout</h2>
    }

</>
  );
};

export default ProfileIcon;
