import { ContainerProps } from "@/lib/types";

const Container = ({
  children,
  maxWidth = "",
  className = "xl:px-14",
}: ContainerProps) => {
  return (
    <div
      className={`${maxWidth} 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
