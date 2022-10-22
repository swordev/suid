import Table from "@suid/material/Table";
import ComponentInfo from "~/components/ComponentInfo";
import BasicTableExample from "./BasicTableExample";

export default function TablePage() {
  return (
    <ComponentInfo
      name={Table.name}
      importInfo={[
        "Table",
        "TableBody",
        "TableCell",
        "TableContainer",
        "TableFooter",
        "TableHead",
        "TableRow",
      ]}
      examples={[BasicTableExample]}
    />
  );
}
