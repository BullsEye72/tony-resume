import ContactInfo from "../Header/ContactInfo";
import AboutMe from "../Header/AboutMe";
import ProfilePicture from "../Header/ProfilePicture";
import Separator from "./Separator";

export default function Header() {
  return (
    <>
      <div className="flex sm:h-56 w-full px-10 pt-8 mb-2 sm:flex-row flex-col">
        <HeaderElement width="sm:w-2/5" element={<ContactInfo />} />
        <HeaderElement width="sm:w-2/5" element={<AboutMe />} />
        <HeaderElement width="sm:w-1/5" element={<ProfilePicture />} />
      </div>
      <Separator />
    </>
  );
}

function HeaderElement({ width, element }: { width: string; element: React.ReactNode }) {
  return <div className={`${width} p-0 mx-2 flex`}>{element}</div>;
}
