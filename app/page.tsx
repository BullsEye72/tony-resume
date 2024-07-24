import Content from "./components/structural/Content";
import Header from "./components/structural/Header";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex flex-col p-0 sm:w-[210mm] sm:h-[297mm] bg-white shadow-md mx-auto box-border w-full sm:p-0">
        <Header />
        <Content />
      </div>
    </div>
  );
}
