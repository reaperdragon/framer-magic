import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Header } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <AnimatePresence>
        {" "}
        <Header isOpen={isOpen} toggle={toggle} />
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
