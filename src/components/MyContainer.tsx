import React from "react";

const MyContainer: React.FC = ({ children }) => {
  return <div className="container is-max-widescreen">{children}</div>;
};

export default MyContainer;
