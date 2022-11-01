import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { Header } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <title>Framer Magic</title>
        <link rel="icon" href="/svgs/framer-logo-duotone.svg" />


        <meta name="description" content="" />

        <meta itemprop="name" content="Framer Magic" />
        <meta itemprop="description" content="" />
        <meta itemprop="image" content="" />


        <meta property="og:url" content="https://framer-magic.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Framer Magic" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Framer Magic" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content=""></meta>
        
      </Head>
      <AnimatePresence>
        {" "}
        <Header isOpen={isOpen} toggle={toggle} />
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
