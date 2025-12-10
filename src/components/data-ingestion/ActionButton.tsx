import React from "react";
import { ButtonVariant } from "./types";

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = "primary",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium px-4 py-2 transition-all ";

  
  const styles =
    variant === "primary"
      ? "bg-white/90 text-grey hover:bg-grey-700 active:bg-red-800 shadow-md"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100";

  return <button className={`${base} ${styles}`}>{children}</button>;
};

export default ActionButton;
