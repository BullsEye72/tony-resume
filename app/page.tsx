import Content from "./components/structural/Content";
import Header from "./components/structural/Header";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex flex-col p-0 w-[210mm] h-[297mm] bg-white shadow-md mx-auto box-border ">
        <Header />
        <Content />
      </div>
    </div>
  );
}
