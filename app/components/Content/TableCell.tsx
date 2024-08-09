interface TableCellProps {
  content: JSX.Element;
  isLastColumn?: boolean;
  isLastRow?: boolean;
}

/**
 * Renders a table cell component.
 *
 * @param {JSX.Element} props.content - The content to be rendered inside the cell.
 * @returns {JSX.Element} - The rendered table cell component.
 */
const TableCell: React.FC<TableCellProps> = ({ content, isLastColumn, isLastRow }) => {
  return (
    <div
      className={`px-2 border-dashed border-gray-700 border-[1px]
    ${!isLastColumn ? "border-r-0" : ""}
    ${!isLastRow ? "border-b-0" : ""}
    
    `}
    >
      {content}
    </div>
  );
};

export default TableCell;
