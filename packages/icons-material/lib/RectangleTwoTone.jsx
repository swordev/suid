import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <g>
      <g opacity=".3">
        <rect height="12" width="16" x="4" y="6" />
      </g>
      <g>
        <path d="M2,4v16h20V4H2z M20,18H4V6h16V18z" />
      </g>
    </g>
  ),
  "RectangleTwoTone"
);
