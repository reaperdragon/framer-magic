import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const main = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <Wrapper as={motion.div}>
      <BgContainer
        as={motion.div}
        image={`${"/images/hero-bg.jpg"}`}
        mobimage={`${"/images/hero-bg-mobile.jpg"}`}
      >
        <motion.div
          className="content"
          initial="initial"
          animate="animate"
          variants={main}
        >
          <ButtonIOS>
            Updated for iOS 16{" "}
            <Image
              src="/svgs/arrow-right-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="15"
              height="15"
            />{" "}
          </ButtonIOS>
          <h1 className="main">
            Mix 3D <br /> and 2D design <br /> with Framer
          </h1>
          <p className="contentp">
            This is a demo showing a fully responsive page with a Spline 3D
            asset with mouse over interaction. It falls back to an image on
            smaller devices.
          </p>
          <div className="hero-btns">
            <ButtonHero primary>
              {" "}
              <Image
                src="/svgs/device-mobile-duotone.svg"
                className="hero-device-icon"
                alt="Play"
                layout="intrinsic"
                width="30"
                height="30"
              />{" "}
              GET THE APP
            </ButtonHero>
            <ButtonHero>
              {" "}
              <Image
                src="/svgs/play-duotone.svg"
                alt="Play"
                layout="intrinsic"
                width="30"
                height="30"
              />{" "}
              WATCH VIDEO
            </ButtonHero>
          </div>
        </motion.div>
      </BgContainer>
    </Wrapper>
  );
};

export default HeroSection;

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

const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  height: 860px;
  background: #000000;
  transition: all 0.35s ease-in-out;
`;

const BgContainer = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: #000000;
  transition: all 0.35s ease-in-out;

  background: url(${(props) => props.image});
  top: 0;
  left: 0;
  right: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 810px) {
    background: url(${(props) => props.mobimage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    font-family: "Manrope", sans-serif;
    display: flex;
    height: 100%;
    width: 460px;
    max-width: 460px;
    margin-left: 50px;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    z-index: 1;

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
      display: flex;
      flex-flow: column nowrap;
      place-content: center flex-start;
      align-items: center;
      gap: 20px;
      max-width: 800px;
      width: 100%;
      height: min-content;
      inset: 100px auto auto 0px;
      flex: 0 0 auto;
      transform: none;
      aspect-ratio: unset;
      margin-left: 0;
      padding-top: 120px;
      text-align: center;
      text-shadow: none;
    }
  }

  .main {
    font-size: 40px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 10px #000;
    transition: all 0.6s linear 0.9;

    @media (max-width: 809px) {
      text-shadow: none;
    }
  }

  .contentp {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: light;
    text-shadow: 2px 2px 10px #000;
    transition: all 0.6s linear 1.1;

    @media (max-width: 809px) {
      text-shadow: none;
    }
  }

  .hero-btns {
    display: flex;
    gap: 20px;
    transition: all 0.6s linear 1.1;

    @media (max-width: 809px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 20px;
    }
  }
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

const ButtonIOS = styled.button`
  width: fit-content;
  font-family: "Manrope", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 4px 16px;
  gap: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out 0.6;

  @media (max-width: 810px) {
    font-size: 12px;
  }
`;
