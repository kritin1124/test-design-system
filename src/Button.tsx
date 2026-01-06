// src/Button.tsx
import type { ReactNode } from "react";

type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
