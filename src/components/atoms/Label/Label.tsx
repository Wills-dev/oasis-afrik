interface LabelProps {
  title: string;
  className?: string;
  required?: boolean;
}

const Label = ({
  title,
  className = "text-sm font-medium text-gray-800",
  required = false,
}: LabelProps) => {
  return (
    <label className={`block ${className}`}>
      {title}
      {required && <span className="pl-1 text-red-600">*</span>}
    </label>
  );
};

export default Label;
