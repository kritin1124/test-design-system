'use client';

import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
};

export const ButtonSplit = ({ children }: ButtonProps) => {
  return (
    <button style={{ color: 'black', backgroundColor: 'pink' }}>
      {children}
    </button>
  );
};
