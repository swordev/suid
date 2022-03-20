import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <>
      <rect fill="none" height="24" width="24" />
      <polyline
        opacity=".3"
        points="8.5,8.62 8.5,15.38 5.12,12 8.5,8.62"
      ></polyline>
      <path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z" />
    </>
  ),
  "SwitchLeftTwoTone"
);
