// @refresh
import { Router } from "solid-app-router";
import { render } from "solid-js/web";
import MainLayout from "./layouts/MainLayout";

render(
  () => (
    <Router>
      <MainLayout />
    </Router>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById("root")!
);
