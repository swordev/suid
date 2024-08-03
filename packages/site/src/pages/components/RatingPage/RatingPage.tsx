import { Rating } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import CustomizedRatingExample from "./CustomizedRatingExample";
import HalfRatingExample from "./HalfRatingExample";
import HoverFeedbackExample from "./HoverFeedbackExample";
import RadioGroupRatingExample from "./RadioGroupExample";
import SimpleBadgeExample from "./SimpleRatingExample";
import RatingSizeExample from "./SizesExample";

export default function RatingPage() {
  return (
    <ComponentInfo
      name={Rating.name}
      docsName="ratings"
      examples={[
        {
          title: "Basic rating",
          component: SimpleBadgeExample,
        },
        {
          title: "Rating precision",
          component: HalfRatingExample,
        },
        {
          title: "Hover feedback",
          component: HoverFeedbackExample,
        },
        {
          title: "Sizes",
          component: RatingSizeExample,
        },
        {
          title: "Customization",
          component: CustomizedRatingExample,
        },
        {
          title: "Radio Group",
          component: RadioGroupRatingExample,
        },
      ]}
    />
  );
}
