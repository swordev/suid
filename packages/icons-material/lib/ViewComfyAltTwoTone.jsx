import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <g>
      <g>
        <path
          d="M4,18h16V6H4V18z M13,7h4v4h-4V7z M13,13h4v4h-4V13z M7,7h4v4H7V7z M7,13h4v4H7V13z"
          opacity=".3"
        />
        <rect height="4" width="4" x="7" y="7" />
        <rect height="4" width="4" x="13" y="7" />
        <rect height="4" width="4" x="7" y="13" />
        <rect height="4" width="4" x="13" y="13" />
        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
      </g>
    </g>
  ),
  "ViewComfyAltTwoTone"
);
