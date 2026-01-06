// src/Button.tsx
import type { ReactNode } from "react";

type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <button style={{ color: "red" ,backgroundColor:"blue"}}>{children}</button>;
};
