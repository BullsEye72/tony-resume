/**
 * Represents a container for displaying information in the header.
 *
 * @param {string} header - The header text.
 * @param {string} styleClasses - The CSS classes to apply to the container.
 * @param {React.ReactNode} content - The content to display in the container.
 * @returns {JSX.Element} The rendered InfoContainer component.
 */
interface InfoContainerProps {
  header: string;
  styleClasses: string;
  content: React.ReactNode;
}

/**
 * Renders a container for displaying information in the header.
 *
 * @param {InfoContainerProps} props - The component props.
 * @returns {JSX.Element} The rendered InfoContainer component.
 */
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
