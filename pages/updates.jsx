import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

const Updates = () => {
  return (
    <>
      <Wrapper as={motion.div}>
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
          </div>
        </BgContainer>
      </Wrapper>
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

const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  height: min-content;
  background: #000000;
  transition: all 0.35s ease-in-out;
`;

const BgContainer = styled.section`
  width: 100%;
  max-width: 100%;

  background: #000000;
  transition: all 0.35s ease-in-out;

  font-family: "Manrope", sans-serif;

  position: relative;
  overflow: hidden;
  width: 100%;
  height: min-content;
  flex: 0 0 auto;
  display: flex;
  flex-flow: column wrap;
  place-content: center;
  align-items: center;
  gap: 30px;
  padding: 100px 30px;
  background-color: rgb(0, 0, 0);

  background: url(${(props) => props.image});
  top: 0;
  left: 0;
  right: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .main-container {
    position: relative;
    overflow: visible;
    max-width: 400px;
    width: 100%;
    height: min-content;
    flex: 0 0 auto;
    display: flex;
    flex-flow: column nowrap;
    place-content: center flex-start;
    align-items: center;
    gap: 31px;
    padding: 0px;
  }

  .section-name {
    font-size: 60px;
    color: #000000;
    font-weight: bolder;
  }

  .section-content {
    font-size: 14px;
    color: #000000;
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
