import $ from "./utils/createSvgIcon";

export default $(
  () => (
    <>
      <rect fill="none" height="24" width="24" />
      <g>
        <path d="M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z" />
        <polyline opacity=".3" points="7,5 7,9 4,9 4,5 7,5"></polyline>
        <polyline opacity=".3" points="20,5 20,9 17,9 17,5 20,5"></polyline>
        <polyline
          opacity=".3"
          points="20,15 20,19 17,19 17,15 20,15"
        ></polyline>
      </g>
    </>
  ),
  "AccountTreeTwoTone"
);
