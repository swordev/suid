import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <g>
      <g>
        <path
          d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z"
          fill-rule="evenodd"
        />
        <polygon
          fill-rule="evenodd"
          points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
        />
        <rect fill-rule="evenodd" height="2" width="5" x="5" y="7" />
        <rect fill-rule="evenodd" height="2" width="5" x="5" y="11" />
        <rect fill-rule="evenodd" height="2" width="5" x="5" y="15" />
      </g>
    </g>
  ),
  "FactCheckOutlined"
);
