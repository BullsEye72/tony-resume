import Image from "next/image";

export default function ProfilePicture() {
  return (
    <div className=" relative w-full h-full">
      <div className="absolute top-0 left-0 w-full ">
        <Image src="/images/pp.jpg" alt="Profile Picture" width={312} height={421} />
      </div>
    </div>
  );
}
