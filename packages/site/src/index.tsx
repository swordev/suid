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
  document.getElementById("root")!
);
