import Image from 'next/image';
import React from 'react'
import styled, { keyframes } from 'styled-components';

const ContainerComponent = ({ cardsRef, cardsInView }) => {
    return (
    <ContainerComponents image={`${"/images/wallpaper1.jpg"}`} ref={cardsRef}>
      {cardsInView && (
        <>
          <div className="mockups-1">
            <div className="mockups-1-image-1">
              <div className="mockup-content-1">
                <div className="mockup-content-first">
                  <h3>LAC SUPERIEUR</h3>
                  <p>30 mins ago</p>
                  <span>3,054 STEPS</span>
                </div>

                <div className="mockup-content-second">
                  <button>VISIT</button>
                  <span>3% HIGHER</span>
                </div>
              </div>
            </div>

            <div className="mockups-1-image-2">
              <div className="mockup-content-2">
                <div className="mockup-content-first">
                  <h3>COIT TOWER</h3>
                  <p>21 mins ago</p>
                  <span>3,054 STEPS</span>
                </div>

                <div className="mockup-content-second">
                  <button>VISIT</button>
                  <span>3% HIGHER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mockups-2">
            <div className="mockup-relative">
              <div className="mockups-2-1">
                <div className="mockups-2-content">
                  {" "}
                  <Image
                    src="/svgs/person-simple-run-duotone.svg"
                    alt="icon"
                    layout="intrinsic"
                    width="32"
                    height="32"
                  />{" "}
                  <h1>Close Your Rings</h1>
                </div>
                <p className="mockups-2-text">
                  Close your Move ring by hitting your personal goal of active
                  calories burned.
                </p>
                <div className="mockup-content-2-1">
                  <div className="mockup-content-first">
                    <h3>NATHERLANDS</h3>
                    <p>21 mins ago</p>
                    <span>3,054 STEPS</span>
                  </div>

                  <div className="mockup-content-second">
                    <button>VISIT</button>
                    <span>3% HIGHER</span>
                  </div>
                </div>
              </div>
              <div className="mockup-circle">
                <div className="circle-1">
                  <div className="circle-2">
                    <div className="circle-3">
                      <div className="circle-4">
                        <div className="circle-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mockup-content-2-1">
              <div className="mockup-content-first">
                <h3>MONTREAL</h3>
                <p>21 mins ago</p>
                <span>3,054 STEPS</span>
              </div>

              <div className="mockup-content-second">
                <button>VISIT</button>
                <span>3% HIGHER</span>
              </div>
            </div>

            <div className="mockup-1-image-1">
              <div className="mockup-content-1">
                <div className="mockup-content-first">
                  <h3>SAN FRANSISCO</h3>
                  <p>30 mins ago</p>
                  <span>3,054 STEPS</span>
                </div>

                <div className="mockup-content-second">
                  <button>VISIT</button>
                  <span>3% HIGHER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-component-main">
            <Image
              src="/svgs/rocket-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="60"
              height="60"
            />{" "}
            <h4 className="container-component-title">
              Many types of components to customize
            </h4>
            <p className="container-component-content">
              Build a website without writing a single line of code using Framer
              components and customizing the entire content
            </p>
            <button className="container-component-button">
              <Image
                src="/svgs/cards-duotone.svg"
                className="hero-device-icon"
                alt="Play"
                layout="intrinsic"
                width="30"
                height="30"
              />{" "}
              Learn More
            </button>
            <div className="container-component-divider"></div>
            <p className="container-component-text">
              Grow your business, reach new audiences, and hit your goals with
              integrations.
            </p>
          </div>
        </>
      )}
    </ContainerComponents>
  );
};

export default ContainerComponent

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

  @media (max-width: 810px) {
    font-size: 12px;
  }
`;

const ContainerComponents = styled.section`
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;
  background-color: rgb(21, 0, 103);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 809px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    padding: 80px 20px;
  }

  .mockups-1 {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 50px;

    > * {
      opacity: 0;
      animation: ${heroAnimation} 1s 0.2s forwards;
      :nth-child(1) {
        animation-delay: 0s;
      }
      :nth-child(2) {
        animation-delay: 0.3s;
      }
    }

    @media (max-width: 809px) {
      gap: 20px;
    }
  }

  .mockups-1-image-1 {
    background: url("https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 0px 40px 40px 40px;
    position: relative;
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
  }

  .mockups-1-image-2 {
    background: url("https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    width: 300px;
    height: 400px;
    border-radius: 40px 0 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
  }

  .mockup-content-1 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 120px;
  }

  .mockup-content-2 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 120px;
  }

  .mockup-content-first {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      color: white;
      font-weight: bolder;
    }
    p {
      color: rgba(255, 255, 255, 0.4);
    }

    span {
      font-weight: bold;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .mockup-content-second {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    gap: 10px;

    button {
      font-size: 16px;
      color: white;
      gap: 16px;
      padding: 8px 16px;
      border-radius: 24px 24px 0px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid white;
      backdrop-filter: blur(16px);
    }

    span {
      font-weight: bold;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .mockups-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 809px) {
      gap: 20px;
    }
  }

  .mockups-2-1 {
    margin-top: 50px;
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0px 0px;
    border-radius: 0px 40px 40px;
    backdrop-filter: blur(50px);
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
    text-align: center;
    z-index: 5;
    opacity: 1;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.6s forwards;
  }

  .mockup-content-2-1 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;

    justify-content: space-evenly;
    height: 120px;
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.9s forwards;
  }

  .mockup-content-2-1 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: space-evenly;
    height: 120px;
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
    z-index: 1;
    opacity: 0;
    animation: ${heroAnimation} 1s 0.9s forwards;
  }

  .mockups-2-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    color: white;
    font-weight: bolder;
    font-size: 22px;
  }

  .mockups-2-text {
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;
    font-size: 14px;
  }

  .mockup-relative {
    position: relative;
  }

  .mockup-circle {
    width: 374px;
    height: 374px;
    right: -31px;
    bottom: -365px;
    left: -43px;
    top: -8px;
    -webkit-filter: blur(0);
    filter: blur(0);
    position: absolute;
    overflow: visible;
    inset: -8px -31px -365px -43px;
    flex: 0 0 auto;
    border-radius: 500px;
    filter: blur(0px);
    border-bottom-width: 1px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }

  .circle-1 {
    width: 374px;
    height: 374px;
    bottom: 0px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-2 {
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

  .circle-3 {
    width: 200px;
    height: 200px;
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

  .circle-4 {
    width: 150px;
    height: 150px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;
    border: 10px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-5 {
    width: 130px;
    height: 130px;
    inset: -36px;
    flex: 0 0 auto;
    border-radius: 500px;
    background: rgb(255, 33, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 33, 0, 1) 0%,
      rgba(255, 21, 21, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mockup-1-image-1 {
    background: url("https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 40px 0 40px 40px;
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
    animation: ${heroAnimation} 1s 1.3s forwards;
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
        animation-delay: 0.6s;
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

      :nth-child(5) {
        animation-delay: 1.6s;
      }

      :nth-child(6) {
        animation-delay: 1.9s;
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
`;
