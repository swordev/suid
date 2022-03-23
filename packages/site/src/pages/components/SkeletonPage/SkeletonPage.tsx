import Skeleton from "@suid/material/Skeleton";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "./Example";

export default function SkeletonPage() {
  return <ComponentInfo name={Skeleton.name} examples={[Example]} />;
}
