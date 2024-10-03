import SentimentDissatisfiedIcon from "@suid/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@suid/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@suid/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@suid/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@suid/icons-material/SentimentVerySatisfied";
import Rating, { IconContainerProps } from "@suid/material/Rating";
import { styled } from "@suid/material/styles";
import { type JSX, splitProps } from "solid-js";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: JSX.Element;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const [local, other] = splitProps(props, ["value"]);
  return <span {...other}>{customIcons[local.value].icon}</span>;
}

export default function RadioGroupRatingExample() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
