import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/cloudplus_logo.png"
      {...props}
      height="40px"
    />
  );
};

export default Logo;
