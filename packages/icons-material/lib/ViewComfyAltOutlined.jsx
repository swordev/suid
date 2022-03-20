import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <g>
      <g>
        <rect height="4" width="4" x="7" y="7" />
        <rect height="4" width="4" x="13" y="7" />
        <rect height="4" width="4" x="7" y="13" />
        <rect height="4" width="4" x="13" y="13" />
        <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z" />
      </g>
    </g>
  ),
  "ViewComfyAltOutlined"
);
