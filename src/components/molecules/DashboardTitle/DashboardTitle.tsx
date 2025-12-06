interface DashboardTitleProps {
  title: string;
  description: string;
}

const DashboardTitle = ({ title, description }: DashboardTitleProps) => {
  return (
    <div className="">
      <h6 className="sm:text-3xl text-2xl font-medium">{title}</h6>
      <p className="sm:text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default DashboardTitle;
