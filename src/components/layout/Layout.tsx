import Head from "next/head";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Footer from "./Footer";
import Break from "./Break";
import ContactBtns from "./ContactBtns";
import Logo from "./Logo";
import { NavigationContext } from "../../context/navigation";
import { useState } from "react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "tr";
  });

  function handleClick(value) {
    setActive((prevState) => (value ? value : !prevState));
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Break bgColor="#CDCDCD" />
        <NavigationContext.Provider value={{ active, burgerClick: handleClick }}>
          <Logo />
          <Navigation />
        </NavigationContext.Provider>
      </nav>
      <main>{children}</main>
      <Contact />
      <Footer />
      <ContactBtns />
    </>
  );
}
