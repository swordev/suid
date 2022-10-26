import { Skeleton } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import VariantsExample from "./VariantsExample";

export default function SkeletonPage() {
  return <ComponentInfo name={Skeleton.name} examples={[VariantsExample]} />;
}
