import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { motion, useInView } from "framer-motion";
import { data1 } from "../constants/data1";
import { Accordion, PricingCard1, PricingCard3, Footer } from "../components";
import PricingCard2 from "../components/PricingCard2";
import { accordian } from "../constants/accordian";

import { useRef } from "react";

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

export default function Home() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true });

  const cards2Ref = useRef(null);
  const cards2InView = useInView(cards2Ref, { once: true });

  return (
    <>
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

      <Container>
        <h1 className="container-title">
          Trusted by 8,000 companies worldwide
        </h1>
        <h5 className="container-content">
          Many teams choose Framer to iterate faster and publish at the blink of
          an eye without complex loops
        </h5>

        <div className="container-comp">
          <img src="/svgs/company-amazon.svg" alt="svg" />
          <img src="/svgs/company-apple.svg" alt="svg" />
          <img src="/svgs/company-facebook.svg" alt="svg" />
          <img src="/svgs/company-airbnb.svg" alt="svg" />
          <img src="/svgs/company-google.svg" alt="svg" />
        </div>

        <div className="container-sep"></div>

        <h2 className="container-p">Publish a site in minutes</h2>

        <div className="container-cards">
          {data1?.map((data) => (
            <div key={data.id} className="container-card">
              <Image
                src={data.icon}
                alt={data.title}
                layout="intrinsic"
                width="32"
                height="32"
              />
              <h3 className="container-card-title">{data.title}</h3>
              <p className="container-card-content">{data.content}</p>
            </div>
          ))}
        </div>
      </Container>

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
                Build a website without writing a single line of code using
                Framer components and customizing the entire content
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
                Build a website without writing a single line of code using
                Framer components and customizing the entire content
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

      <ContainerComponents3 image={`${"/images/wallpaper2.jpg"}`}>
        <div className="container-component-3">
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
        </div>

        <div className="container-component-main">
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
        </div>
      </ContainerComponents3>

      <ContainerComponentPricingCards image={`${"/images/wallpaper3.jpg"}`}>
        <div className="container-component-main">
          <h4 className="container-component-title">Ready to start?</h4>
          <p className="container-component-content">
            Launch a site for free. Choose a site plan to unlock more features.
          </p>

          <div className="container-component-divider"></div>
        </div>
        <div className="pricing-cards">
          <PricingCard1 />

          <PricingCard2 />

          <PricingCard3 />
        </div>
      </ContainerComponentPricingCards>

      <FAQContainer>
        <h1 className="title">FAQ</h1>

        <div className="accordion">
          {accordian.map(({ id, title, content }) => (
            <Accordion key={id} title={title} content={content} />
          ))}
        </div>
      </FAQContainer>

      <Footer />
    </>
  );
}

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

const Container = styled.div`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(7, 8, 24);
  font-family: "Manrope", sans-serif;
  text-align: center;
  gap: 30px;

  .container-title {
    font-size: 22px;
    color: white;
    font-weight: bolder;
  }

  .container-content {
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    color: rgba(255, 255, 255, 0.7);
  }

  .container-comp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;

    @media (max-width: 810px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      img {
        margin: 10px 0;
      }
    }
  }

  .container-sep {
    width: 25%;
    height: 1px;
    flex: 0 0 auto;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .container-p {
    color: white;
    font-weight: bolder;
  }

  .container-cards {
    max-width: 800px;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 810px) {
      flex-direction: column;
      max-width: 400px;
      gap: 10px;
      width: 100%;
    }
  }

  .container-card {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 247px;

    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 810px) {
      width: 100%;
      place-content: center flex-start;
      height: 150px;
    }
  }

  .container-card-title {
    color: white;
    font-weight: bolder;
    font-size: 14px;
  }

  .container-card-content {
    color: rgba(255, 255, 255, 0.7);
    font-weight: normal;
    font-size: 14px;
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

const ContainerComponentPricingCards = styled.section`
  background: rgb(8, 9, 47);
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;

  @media (max-width: 809px) {
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
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

  .container-component-divider {
    width: 50%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }

  .pricing-cards {
    display: flex;
    gap: 30px;
    flex-flow: row nowrap;
    place-content: center;
    align-items: center;

    @media (max-width: 1280px) {
      width: 100%;
      gap: 20px;
    }

    @media (max-width: 809px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const FAQContainer = styled.section`
  padding: 100px 30px;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 540px) {
    padding: 80px 20px;
  }

  .title {
    color: white;
    font-size: 50px;
    font-weight: bolder;
  }

  .accordion {
    width: 100%;
    margin: 2rem auto;
    gap: 30px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    transition: all 0.9s ease-in-out;

    @media (max-width: 809px) {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.primary ? "rgb(0,0,0)" : "rgb(255, 255, 255)"};
  padding: 10px;
  color: ${(props) => (props.primary ? "white" : "black")};
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
`;
