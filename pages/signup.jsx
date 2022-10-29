import Head from "next/head";
import React from "react";
import { Footer, SignUpComponent } from "../components";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Framer Magic</title>
        <link rel="icon" href="/svgs/framer-logo-duotone.svg" />
      </Head>

      <SignUpComponent />
      <Footer />
    </>
  );
};

export default Signup;
