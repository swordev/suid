import { Pagination } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicPaginationExample from "./BasicPaginationExample";
import CustomIconsExample from "./CustomIconsExample";
import PaginationButtonsExample from "./PaginationButtonsExample";
import PaginationControlledExample from "./PaginationControlledExample";
import PaginationOutlinedExample from "./PaginationOutlinedExample";
import PaginationRangesExample from "./PaginationRangesExample";
import PaginationRoundedExample from "./PaginationRoundedExample";
import PaginationSizeExample from "./PaginationSizeExample";

export default function PaginationPage() {
  return (
    <ComponentInfo
      name={Pagination.name}
      importInfo={["Pagination", "PaginationItem"]}
      examples={[
        BasicPaginationExample,
        PaginationOutlinedExample,
        PaginationRoundedExample,
        PaginationSizeExample,
        PaginationButtonsExample,
        CustomIconsExample,
        PaginationRangesExample,
        PaginationControlledExample,
      ]}
    />
  );
}
