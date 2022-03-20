import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <g>
      <g opacity=".3">
        <rect height="14" width="14" x="5" y="5" />
      </g>
      <g>
        <path d="M3,3v18h18V3H3z M19,19H5V5h14V19z" />
      </g>
    </g>
  ),
  "SquareTwoTone"
);
