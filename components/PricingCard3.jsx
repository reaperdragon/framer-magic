import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

const PricingCard3 = () => {
  return (
    <Container>
      <div className="pricing-card-3">
        <Image
          src="/svgs/cloud-duotone.svg"
          className="hero-device-icon"
          alt="Play"
          layout="intrinsic"
          width="32"
          height="32"
        />{" "}
        <p className="plan">PRO PLAN</p>
        <h2 className="price">$45/mo</h2>
        <p className="project-details">
          Billed yearly{" "}
          <Image
            src="/svgs/toggle-left-duotone.svg"
            className="hero-device-icon"
            alt="Play"
            layout="intrinsic"
            width="30"
            height="30"
          />{" "}
        </p>
        <div className="content-main">
          <div className="content">
            {" "}
            <Image
              src="/svgs/globe-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            <p className="content-text">Custom domain</p>
          </div>
          <div className="content">
            {" "}
            <Image
              src="/svgs/lock-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            <p className="content-text">Password project</p>
          </div>
          <div className="content">
            {" "}
            <Image
              src="/svgs/books-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            <p className="content-text">10GB bandwidth</p>
          </div>
          <div className="content">
            {" "}
            <Image
              src="/svgs/stack-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            <p className="content-text">1,000 CMS items</p>
          </div>
          <div className="content">
            {" "}
            <Image
              src="/svgs/person-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            <p className="content-text">10,000 visitors</p>
          </div>
        </div>
        <div className="divider"></div>
        <Button>
          <Image
            src="/svgs/credit-card-duotone.svg"
            className="hero-device-icon"
            alt="Play"
            layout="intrinsic"
            width="30"
            height="30"
          />{" "}
          SUBSCRIBE
        </Button>
      </div>
    </Container>
  );
};

export default PricingCard3;

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

const Container = styled.div`
  .pricing-card-3 {
    width: 360px;
    padding: 20px;
    gap: 10px;
    height: fit-content;
    border-radius: 25px;
    background-color: rgb(0, 0, 0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    animation: ${heroAnimation} 1s 0.9s forwards;

    @media (max-width: 1280px) {
      width: max-content;
      padding: 30px;
    }

    @media (max-width: 809px) {
      width: 290px;
    }

    @media (max-width: 395px) {
      width: 290px;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }

    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;

    .divider {
      width: 50%;
      background: rgba(255, 255, 255, 0.3);
      height: 1px;
    }

    .plan {
      font-size: 16px;
      color: black;
      color: white;
      font-weight: bold;
    }

    .price {
      font-size: 50px;
      font-weight: bolder;
      color: white;
    }

    .project-details {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      opacity: 1;
      flex: 0 0 auto;
      display: flex;
      flex-flow: row nowrap;
      place-content: center;
      align-items: center;
      gap: 10px;
      padding: 4px 16px 4px 8px;
      font-size: 13px;
      color: white;
    }

    .content-main {
      flex: 0 0 auto;
      display: flex;
      flex-flow: column nowrap;
      place-content: flex-start center;
      align-items: flex-start;
      gap: 10px;
    }

    .content {
      flex: 0 0 auto;
      display: flex;
      flex-flow: row nowrap;
      place-content: center;
      align-items: center;
      gap: 10px;
      color: white;
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
