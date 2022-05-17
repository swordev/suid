import Avatar from "@suid/material/Avatar";
import ComponentInfo from "~/components/ComponentInfo";
import ImageAvatarsExample from "./ImageAvatarsExample";
import LetterAvatarsExample from "./LetterAvatarsExample";
import SizeImageAvatarsExample from "./SizeImageAvatarsExample";
import VariantAvatarsExample from "./VariantAvatarsExample";

export default function AvatarPage() {
  return (
    <ComponentInfo
      name={Avatar.name}
      examples={[
        ImageAvatarsExample,
        LetterAvatarsExample,
        { title: "Sizes", component: SizeImageAvatarsExample },
        { title: "Variants", component: VariantAvatarsExample },
      ]}
    />
  );
}
