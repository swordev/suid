// @refresh
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { Routing } from "./Routing";
import MainLayout from "./layouts/MainLayout";

render(
  () => (
    <Router root={MainLayout}>
      <Routing />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
