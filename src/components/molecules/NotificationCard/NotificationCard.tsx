interface NotificationCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const NotificationCard = ({
  icon,
  title,
  description,
}: NotificationCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm w-full shadow rounded-2xl sm:p-8 px-4 flex flex-col justify-center items-center gap-4">
        <div className="">{icon}</div>
        <h6 className="sm:text-xl text-lg font-semibold">{title}</h6>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
