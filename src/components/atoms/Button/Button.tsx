"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  onClick,
  className = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
