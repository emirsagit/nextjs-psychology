import Head from "next/head";
import Navigation from "./Navigation";
import Break from "./Break";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Break />
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </div>
  );
}
