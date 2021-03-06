import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isInverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
