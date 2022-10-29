import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Footer, UpdateComponent } from "../components";

const Updates = () => {
  return (
    <>
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
          mainImage="https://images.unsplash.com/photo-1627637819848-7074cb1565e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          title="Create 3D Site with Spline and React"
          content="Framer offers built-in analytics to help you gain insight on the performance of your website. These analytics are privacy compatible, live, and accurate. However, in order to gain a more detailed overview of activity within your sites, you may want to consider integrating another tool such as Google Analytics and combine the insights together."
        />
      </BgContainer>
      <UpdateWrapper>
        <UpdateComponent
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

  animation: ${heroAnimation} 1s 0.1s forwards;

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

const ButtonHero = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
      : "rgba(0, 0, 0, 0.4)"};
  padding: 10px;
  color: white;
  border-radius: 24px 24px 0;
  font-family: "Manrope", sans-serif;
  font-weight: semibold;
  font-size: 14px;
  font-weight: bold;
  backdrop-filter: blur(30px);
  border: none;
  outline: none;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 220px;
  transition: all 0.3s ease-in-out;

  border-style: ${(props) => (props.primary ? null : "solid")};
  border-width: ${(props) => (props.primary ? null : `1px`)};
  border-color: ${(props) =>
    props.primary ? null : "rgba(255, 255, 255, 0.2)"};

  .hero-device-icon {
    transform: rotate(0deg);
    transition: all 0.6s ease-in-out;
  }

  :hover {
    background: ${(props) =>
      props.primary
        ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
        : "rgba(0, 0, 0, 0.1)"};
    gap: 20px;

    .hero-device-icon {
      -webkit-transform: rotateZ(90deg);
      -moz-transform: rotateZ(90deg);
      -ms-transform: rotateZ(90deg);
      -o-transform: rotateZ(90deg);
      transform: rotateZ(90deg);
    }
  }
`;
