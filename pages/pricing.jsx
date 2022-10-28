import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import {
  ContainerComponentPricing,
  FAQComponent,
  Footer,
  ReviewComponent,
} from "../components";
import { review } from "../constants/data3";

const Pricing = () => {
  const cards4Ref = useRef(null);
  const cards4InView = useInView(cards4Ref, { once: true });

  const faqRef = useRef(null);

  return (
    <>
      <ContainerComponentPricing
        cards4Ref={cards4Ref}
        cards4InView={cards4InView}
        newimage={`${"/images/wallpaper4.jpg"}`}
      />

      <ReviewComponent />

      <FAQComponent faqRef={faqRef} />

      <Footer />
    </>
  );
};

export default Pricing;
