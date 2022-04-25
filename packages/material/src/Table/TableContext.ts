import TableProps from "./TableProps";
import { createContext } from "solid-js";

interface TableContextProps {
  padding: TableProps["padding"];
  size: TableProps["size"];
  stickyHeader: TableProps["stickyHeader"];
}

const TableContext = createContext<TableContextProps | undefined>();

export default TableContext;
