const Circle = ({ className }: { className: string }) => {
  return (
    <div
      className={`absolute w-[164px] min-w-[164px] h-[164px] min-h-[164px] rounded-full bg-[#0099332B] ${className}`}
    >
      Circle
    </div>
  );
};

export default Circle;
