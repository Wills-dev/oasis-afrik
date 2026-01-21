import Image from "next/image";
import Link from "next/link";

const Logo = ({ url = "/assets/images/logo2.png" }: { url?: string }) => {
  return (
    <Link href="/">
      <Image
        src={url}
        alt="logo"
        width={50}
        height={50}
        priority
        className="object-fit w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
