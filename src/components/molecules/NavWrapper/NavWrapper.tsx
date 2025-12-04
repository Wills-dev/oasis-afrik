import NavLink from "@/components/atoms/NavLink/NavLink";
import { homeLinks } from "@/lib/constants";

const NavWrapper = () => {
  return (
    <nav className="flex lg:items-center max-lg:flex-col gap-6">
      {homeLinks?.map((link, index) => (
        <NavLink
          key={link.label}
          index={index}
          label={link.label}
          link={link?.link}
        />
      ))}
    </nav>
  );
};

export default NavWrapper;
