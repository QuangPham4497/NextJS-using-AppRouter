import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Our products</h1>
      {children}
    </div>
  );
};

export default Layout;
