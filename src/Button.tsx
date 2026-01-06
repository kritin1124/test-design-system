'use client';

import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button style={{ color: 'red', backgroundColor: 'blue' }}>
      {children}
    </button>
  );
};
