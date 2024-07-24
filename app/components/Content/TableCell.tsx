/**
 * Renders a table cell component.
 *
 * @param {JSX.Element} props.content - The content to be rendered inside the cell.
 * @returns {JSX.Element} - The rendered table cell component.
 */
export default function TableCell({ content }: { content: JSX.Element }) {
  return <div className="px-2 border-dashed sm:border-r-[1px] border-gray-700">{content}</div>;
}
