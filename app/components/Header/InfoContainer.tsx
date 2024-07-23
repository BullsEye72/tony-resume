interface InfoContainerProps {
  header: string;
  styleClasses: string;
  content: React.ReactNode;
}

export default function InfoContainer({ header, content, styleClasses }: InfoContainerProps) {
  return (
    <div className="relative flex w-full h-full ml-6">
      <div className="absolute -left-6 rotate-180 writing-mode-vertical-rl h-full flex justify-center items-center uppercase font-bold ">
        {header}
      </div>
      <div className={`${styleClasses} text-sm w-full p-2`}>{content}</div>
    </div>
  );
}
