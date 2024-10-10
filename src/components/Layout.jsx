import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      {children}
    </div>
  );
};

export default Layout;
