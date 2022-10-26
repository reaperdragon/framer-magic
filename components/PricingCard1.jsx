import Image from "next/image";
import React from "react";
import styled from "styled-components";

const PricingCard = () => {
  return (
    <Container>
      <div className="pricing-card-1">
        <Image
          src="/svgs/pen-duotone-black.svg"
          className="hero-device-icon"
          alt="Play"
          layout="intrinsic"
          width="32"
          height="32"
        />{" "}
        <p className="plan">FREE PLAN</p>
        <h2 className="price">$15/mo</h2>
        <p className="project-details">
          Up to 3 projects{" "}
          <Image
            src="/svgs/info-duotone.svg"
            className="hero-device-icon"
            alt="Play"
            layout="intrinsic"
            width="16"
            height="16"
          />{" "}
        </p>
        <div className="content-main">
          <div className="content">
            {" "}
            <Image
              src="/svgs/globe-duotone-black.svg"
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
              src="/svgs/lock-duotone-black.svg"
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
              src="/svgs/books-duotone-black.svg"
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
              src="/svgs/stack-duotone-black.svg"
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
              src="/svgs/person-duotone-black.svg"
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
        <Button primary>
          <Image
            src="/svgs/pen-duotone-white.svg"
            className="hero-device-icon"
            alt="Play"
            layout="intrinsic"
            width="30"
            height="30"
          />{" "}
          TRY FOR FREE
        </Button>
      </div>
    </Container>
  );
};

export default PricingCard;

const Container = styled.div`
  .pricing-card-1 {
    width: 360px;
    padding: 20px;
    gap: 10px;
    height: fit-content;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 395px) {
      width:290px ;
      align-items: center;
      justify-content: center;
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
      font-weight: bold;
    }

    .price {
      font-size: 50px;
      font-weight: bolder;
    }

    .project-details {
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.1);
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
