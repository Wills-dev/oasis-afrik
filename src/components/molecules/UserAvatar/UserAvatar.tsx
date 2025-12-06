import Image from "next/image";

interface UserAvatarProps {
  name: string;
  imgUrl?: string;
}

const UserAvatar = ({ name, imgUrl }: UserAvatarProps) => {
  return (
    <div className="min-w-10 min-h-10 w-10 h-10 flex justify-center items-center   rounded-full overflow-hidden bg-green-100">
      {imgUrl ? (
        <Image
          src={imgUrl}
          width={48}
          height={48}
          alt="user profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="">
          <p className="font-bold rounded-full text-center w-full h-full capitalize">
            {name.charAt(0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
