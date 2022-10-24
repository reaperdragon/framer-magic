import { useState } from "react";
import { Header } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {" "}
      <Header isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
