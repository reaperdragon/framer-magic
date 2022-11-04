import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

const ContainerComponent2 = ({ cards2Ref, cards2InView }) => {
  return (
    <ContainerComponents2 ref={cards2Ref}>
      {cards2InView && (
        <>
          <div className="container-component-main">
            <Image
              src="/svgs/trophy-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="60"
              height="60"
            />{" "}
            <h4 className="container-component-title">
              Text styles, variants and overlays
            </h4>
            <p className="container-component-content">
              Build a website without writing a single line of code using Framer
              components and customizing the entire content
            </p>
            <ButtonHero primary>
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
            <div className="container-component-divider"></div>
            <p className="container-component-text">
              Grow your business, reach new audiences, and hit your goals with
              integrations.
            </p>
          </div>

          <div className="forground">
            <div className="container-main">
              <div className="container-2-image-mockup-1-image-1">
                <div className="mockup-content-first">
                  <h3>LIGHT</h3>
                  <h3>TRACKING</h3>
                </div>
              </div>
              <h3 className="image-text">Super Shoes</h3>
            </div>
            <div className="mockup-circle-2">
              <div className="circle-1-2">
                <div className="circle-2-2">
                  <div className="circle-3-2">
                    <div className="circle-4-2">
                      <div className="circle-5-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </ContainerComponents2>
  );
};

export default ContainerComponent2;

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

const ContainerComponents2 = styled.section`
  background: rgb(7, 8, 24);
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 809px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 640px) {
    padding: 120px 40px;
  }

  .container-component2-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .container-component-main {
    display: flex;
    flex-flow: column nowrap;
    place-content: center flex-start;
    text-align: center;
    align-items: center;
    gap: 30px;
    max-width: 400px;
    width: 100%;

    > * {
      opacity: 0;
      animation: ${heroAnimation} 1s 0.2s forwards;
      :nth-child(1) {
        animation-delay: 0.3s;
      }
      :nth-child(2) {
        animation-delay: 0.9s;
      }
      :nth-child(3) {
        animation-delay: 1.1s;
      }
      :nth-child(4) {
        animation-delay: 1.3s;
      }
    }
  }

  .container-component-title {
    color: white;
    font-size: 50px;
    font-weight: bolder;
  }

  .container-component-content {
    color: white;
    font-size: 18px;
  }

  .container-component-button {
    cursor: pointer;
    background: ${(props) =>
      props.primary
        ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
        : "rgba(0, 0, 0, 0.7)"};
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
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 220px;
    transition: all 0.3s ease-in-out;

    border-style: ${(props) => (props.primary ? null : "solid")};
    border-width: ${(props) => (props.primary ? null : `1px`)};
    border-color: ${(props) =>
      props.primary ? null : "rgba(255, 255, 255, 0.2)"};
  }

  .container-component-divider {
    width: 50%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }

  .container-component-text {
    color: rgba(255, 255, 255, 0.8);
  }

  .forground {
    position: relative;
    padding: 10px;
    height: fit-content;
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 10px 10px 20px;
    z-index: 5;
    position: relative;
    margin-bottom: 50px;
  }

  .container-main {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: fit-content;

    border-radius: 40px 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 10px 20px;
    z-index: 5;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 75px;

    @media (max-width: 809px) {
      margin-bottom: 0;
    }
  }

  .container-2-image-mockup-1-image-1 {
    background: url("https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 340px;
    max-width: 100%;
    height: 180px;
    border-radius: 30px;
    position: relative;

    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.2s forwards;

    .mockup-content-first {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      gap: 2px;
    }

    h3 {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(60px);
      padding: 5px 10px;
      margin-left: 20px;
      margin-bottom: 10px;
      border-radius: 100px;
      color: white;
      font-weight: bolder;
    }

    h3:last-child {
      margin-left: 5px;
    }

    z-index: 5;
  }

  .image-text {
    color: rgba(255, 255, 255, 1);
    margin-left: 20px;
    font-weight: bolder;
    font-size: 22px;
    z-index: 5;
  }

  .mockup-circle-2 {
    width: 374px;
    height: 374px;
    position: absolute;
    bottom: -160px;
    left: calc(50% - 187px);
    flex: 0 0 auto;
    border-radius: 500px;
    filter: blur(0px);
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    z-index: -1;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.1s forwards;

    @media (max-width: 809px) {
      bottom: -50px;
    }
  }

  .circle-1-2 {
    width: 374px;
    height: 374px;
    bottom: 0px;
    left: calc(50% - 150px);
    flex: 0 0 auto;
    border-radius: 500px;
    filter: blur(0px);
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.1s forwards;
  }

  .circle-2-2 {
    width: 300px;
    height: 300px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;
    background: linear-gradient(
      135deg,
      rgba(255, 117, 161, 0.19) 0%,
      rgba(26, 64, 255, 0.27) 100%
    );
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-3-2 {
    width: 240px;
    height: 240px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;
    background: linear-gradient(
      135deg,
      rgba(255, 117, 161, 0.19) 0%,
      rgba(26, 64, 255, 0.27) 100%
    );
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-4-2 {
    width: 150px;
    height: 150px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-5-2 {
    width: 130px;
    height: 130px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;

    background: linear-gradient(
      135deg,
      rgba(231, 111, 111, 1) 0%,
      rgba(200, 23, 21, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
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