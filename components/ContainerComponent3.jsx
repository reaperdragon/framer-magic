import Image from 'next/image';
import React from 'react'
import styled, { keyframes } from 'styled-components';

const ContainerComponent3 = ({ cards3Ref,
    cards3InView }) => {
      
  return (
    <ContainerComponents3 image={`${"/images/wallpaper2.jpg"}`}>
      <div className="container-component-3" ref={cards3Ref}>
        {cards3InView && (
          <>
            <div className="container-component-3-card-1">
              <h1>Sit less. You&apos;ll go far</h1>
              <Image
                src="/svgs/relax.svg"
                className="hero-device-icon"
                alt="Play"
                layout="intrinsic"
                width="220"
                height="220"
              />{" "}
              <p>
                Replace your regular desk at work with a standing desk to reduce
                the amount of sedentary time in your day.
              </p>
            </div>

            <div className="container-component-3-card-2">
              <h3>Get maximum workout</h3>
              <p>SWIMMING</p>
              <div className="component-circle"></div>
              <p>Burn calories the easy way and get tracking</p>
            </div>
          </>
        )}
      </div>

      <div className="container-component-main" ref={cards3Ref}>
        {cards3InView && (
          <>
            <Image
              src="/svgs/record.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="60"
              height="60"
            />{" "}
            <h4 className="container-component-title">
              Multiple pages with unique content
            </h4>
            <p className="container-component-content">
              Build a website without writing a single line of code using Framer
              components and customizing the entire content
            </p>
            <ButtonHero>
              <Image
                src="/svgs/download-duotone.svg"
                className="hero-device-icon"
                alt="Play"
                layout="intrinsic"
                width="30"
                height="30"
              />{" "}
              DOWNLOAD
            </ButtonHero>
            <div className="container-component-divider"></div>
            <p className="container-component-text">
              Grow your business, reach new audiences, and hit your goals with
              integrations.
            </p>
          </>
        )}
      </div>
    </ContainerComponents3>
  );
};

export default ContainerComponent3

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

const ContainerComponents3 = styled.section`
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 809px) {
    flex-direction: column;
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

  .container-component-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .container-component-3-card-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    width: 300px;
    gap: 10px;
    padding: 30px;
    border-radius: 30px;
    backdrop-filter: blur(30px);
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
    background-color: rgba(0, 0, 0, 0.2);

    opacity: 0;
    animation: ${heroAnimation} 1s 0.3s forwards;

    h1 {
      color: white;
      font-weight: bolder;
      font-size: 22px;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-weight: bold;
      font-size: 16px;
    }
  }

  .container-component-3-card-2 {
    height: min-content;
    flex: 0 0 auto;
    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    align-items: center;

    gap: 20px;
    padding: 30px;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 13%) 0px 0.836658px 0.836658px -0.3125px,
      rgb(0 0 0 / 13%) 0px 1.9921px 1.9921px -0.625px,
      rgb(0 0 0 / 13%) 0px 3.62966px 3.62966px -0.9375px,
      rgb(0 0 0 / 13%) 0px 6.03419px 6.03419px -1.25px,
      rgb(0 0 0 / 13%) 0px 9.75025px 9.75025px -1.5625px,
      rgb(0 0 0 / 13%) 0px 15.9507px 15.9507px -1.875px,
      rgb(0 0 0 / 13%) 0px 27.4802px 27.4802px -2.1875px,
      rgb(0 0 0 / 13%) 0px 50px 50px -2.5px;
    background: linear-gradient(
      141deg,
      rgb(254, 150, 83) 0%,
      rgb(251, 41, 44) 100%
    );

    opacity: 0;
    animation: ${heroAnimation} 1s 0.6s forwards;

    .component-circle {
      width: 173px;
      height: 173px;
      border: 25px solid white;
      border-radius: 50%;
    }

    h3 {
      color: white;
      font-weight: bolder;
      font-size: 22px;
    }

    p {
      color: rgba(0, 0, 0, 0.9);
      font-weight: bold;
      font-size: 14px;
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