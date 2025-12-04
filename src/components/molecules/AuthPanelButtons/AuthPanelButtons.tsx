import Button from "@/components/atoms/Button/Button";
import Link from "next/link";

const AuthPanelButtons = () => {
  return (
    <div className="flex lg:items-center max-lg:flex-col lg:gap-2 gap-6">
      <Link className="font-medium text-sm" href="/login">
        Login
      </Link>
      <Link className="" href="/login">
        <Button className="text-sm h-[45px]">Join now</Button>
      </Link>
    </div>
  );
};

export default AuthPanelButtons;
