import React from 'react'

const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishek Kumar. All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  