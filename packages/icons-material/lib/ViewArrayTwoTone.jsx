import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <>
      <rect fill="none" height="24" width="24" />
      <rect height="10" opacity=".3" width="6" x="9" y="7" />
      <path d="M15,7v10H9V7H15z M21,5h-3v14h3V5z M17,5H7v14h10V5z M6,5H3v14h3V5z" />
    </>
  ),
  "ViewArrayTwoTone"
);
