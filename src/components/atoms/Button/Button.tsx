"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = "h-[40px]" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#009933] px-[24px] cursor-pointer text-white rounded-md hover:bg-green-700 transition ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
