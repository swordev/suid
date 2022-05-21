// @refresh
import { setNonce } from "@suid/css/style-element";
import { render } from "solid-js/web";

setNonce(/* Nonce value */);

function App() {
  // ...
}

render(() => <App />, document.getElementById("root")!);
