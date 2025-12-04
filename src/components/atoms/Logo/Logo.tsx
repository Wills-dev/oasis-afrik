import Image from "next/image";
import Link from "next/link";

const Logo = ({ url = "/assets/images/Logo.svg" }: { url?: string }) => {
  return (
    <Link href="/">
      <Image
        src={url}
        alt="logo"
        width={137}
        height={24}
        priority
        className="object-fit w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
