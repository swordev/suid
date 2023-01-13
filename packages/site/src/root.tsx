// @refresh reload
import { Body, Head, Html, Meta, Link, Title, Scripts } from "solid-start";
import MainLayout from "./layouts/MainLayout";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#000000" />
        <Title>SUID</Title>
        <Meta name="title" content="SUID" />
        <Meta
          name="description"
          content="A port of Material-UI (MUI) built with SolidJS."
        />

        {/* Open Graph / Facebook */}
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://suid.io" />
        <Meta property="og:title" content="SUID" />
        <Meta
          property="og:description"
          content="A port of Material-UI (MUI) built with SolidJS."
        />
        <Meta
          property="og:image"
          content="https://suid.io/assets/preview.png"
        />

        {/* Twitter */}
        <Meta property="twitter:card" content="summary_large_image" />
        <Meta property="twitter:url" content="https://suid.io" />
        <Meta property="twitter:title" content="SUID" />
        <Meta
          property="twitter:description"
          content="A port of Material-UI (MUI) built with SolidJS."
        />
        <Meta
          property="twitter:image"
          content="https://suid.io/assets/preview.png"
        />

        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          rel="stylesheet"
        />
      </Head>

      <Body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <MainLayout />
        <Scripts />
      </Body>
    </Html>
  );
}
