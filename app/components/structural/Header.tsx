import ContactInfo from "../Header/ContactInfo";
import Objective from "../Header/Objective";
import ProfilePicture from "../Header/ProfilePicture";
import Separator from "./Separator";

export default function Header() {
  return (
    <>
      <div className="flex w-full px-10 pt-8 mb-2 sm:flex-row flex-col">
        <HeaderElement width="w-2/5" element={<ContactInfo />} />
        <HeaderElement width="w-2/5" element={<Objective />} />
        <HeaderElement width="w-1/4" element={<ProfilePicture />} />
      </div>
      <Separator />
    </>
  );
}

function HeaderElement({ width, element }: { width: string; element: React.ReactNode }) {
  return <div className={`${width} min-w-52 p-0 mx-2 flex items-center justify-center w-full`}>{element}</div>;
}
