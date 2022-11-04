import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useInView } from "framer-motion";

import {
  Footer,
  ContainerComponent,
  ContainerComponent2,
  ContainerComponent3,
  Container1,
  HeroSection,
  ContainerComponentPricing,
  FAQComponent,
} from "../components";

import { useRef } from "react";

export default function Home() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true });

  const cards2Ref = useRef(null);
  const cards2InView = useInView(cards2Ref, { once: true });

  const cards3Ref = useRef(null);
  const cards3InView = useInView(cards3Ref, { once: true });

  const cards4Ref = useRef(null);
  const cards4InView = useInView(cards4Ref, { once: true });

  const faqRef = useRef(null);

  return (
    <>
      <Head>
        <title>Framer Magic</title>
        <link rel="icon" href="/svgs/framer-logo-duotone.svg" />
      </Head>

      <HeroSection />

      <Container1 />

      <ContainerComponent cardsRef={cardsRef} cardsInView={cardsInView} />

      <ContainerComponent2 cards2Ref={cards2Ref} cards2InView={cards2InView} />

      <ContainerComponent3 cards3Ref={cards3Ref} cards3InView={cards3InView} />

      <ContainerComponentPricing
        cards4Ref={cards4Ref}
        cards4InView={cards4InView}
      />

      <FAQComponent faqRef={faqRef} />

      <Footer />
    </>
  );
}
