import { motion, useInView } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Footer, UpdateComponent } from "../components";

const Updates = () => {

    const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true });
  
  return (
    <>
      {" "}
      <Head>
        <title>Updates | Framer Magic</title>
        <link rel="icon" href="/svgs/framer-logo-duotone.svg" />
      </Head>

      <BgContainer as={motion.div} image={`${"/images/wallpaper5.jpg"}`}>
        <div className="main-container">
          <Image
            src="/svgs/record-duotone-black.svg"
            alt="Play"
            layout="intrinsic"
            width="45"
            height="45"
          />{" "}
          <h1 className="section-name">Updates</h1>
          <p className="section-content">
            Stay up-to-date with new courses, tutorials and livestreams.
          </p>
          <div className="divider"></div>
        </div>

        <UpdateComponent
          cardsRef={cardsRef}
          cardsInView={cardsInView}
          mainImage="https://images.unsplash.com/photo-1627637819848-7074cb1565e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          title="Create 3D Site with Spline and React"
          content="Framer offers built-in analytics to help you gain insight on the performance of your website. These analytics are privacy compatible, live, and accurate. However, in order to gain a more detailed overview of activity within your sites, you may want to consider integrating another tool such as Google Analytics and combine the insights together."
        />
      </BgContainer>
      <UpdateWrapper>
        <UpdateComponent
          cardsRef={cardsRef}
          cardsInView={cardsInView}
          mainImage="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80"
          title="Build an Animated App with Rive and SwiftUI"
          content="Design and code an iOS app with Rive animated assets, icon animations, custom layouts and interactions"
        />
      </UpdateWrapper>
      <Footer />
    </>
  );
};

export default Updates;

const heroAnimation = keyframes`
0%{
  opacity:0; transfrom: translateY(-10px); ; 
}
60%{
  opacity:0.5; transfrom: translateY(-10px); ;
}
100% {
  opacity:1; transform: translateY(0px);
   }
`;

const BgContainer = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: min-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;
  background: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.image});

  gap: 31px;

  .main-container {
    position: relative;
    overflow: visible;
    max-width: 400px;
    width: 100%;
    height: min-content;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    place-content: center flex-start;
    align-items: center;
    gap: 31px;
    padding: 0px;

    > * {
      opacity: 0;
      animation: ${heroAnimation} 1s 0.2s forwards;
      :nth-child(1) {
        animation-delay: 0s;
      }
      :nth-child(2) {
        animation-delay: 0.3s;
      }
      :nth-child(3) {
        animation-delay: 0.6s;
      }
      :nth-child(4) {
        animation-delay: 0.9s;
      }
    }

    @media (max-width: 809px) {
      margin-top: 120px;
    }
  }

  .section-name {
    font-size: 60px;
    color: #000000;
    font-weight: bolder;
  }

  .section-content {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }

  .divider {
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }
`;

const UpdateWrapper = styled.section`
  background: #000;
  padding: 100px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
`;

