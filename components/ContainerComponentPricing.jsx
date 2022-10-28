import React from "react";
import styled, { keyframes } from "styled-components";
import { PricingCard1, PricingCard3 } from ".";
import PricingCard2 from "./PricingCard2";

const ContainerComponentPricing = ({ cards4Ref, cards4InView,newimage }) => {
  return (
    <ContainerComponentPricingCards image={`${"/images/wallpaper3.jpg"}`} newimage={newimage}>
      <div className="container-component-main">
        <h4 className="container-component-title">Ready to start?</h4>
        <p className="container-component-content">
          Launch a site for free. Choose a site plan to unlock more features.
        </p>

        <div className="container-component-divider"></div>
      </div>
      <div className="pricing-cards" ref={cards4Ref}>
        {cards4InView && (
          <>
            <PricingCard1 />

            <PricingCard2 />

            <PricingCard3 />
          </>
        )}
      </div>
    </ContainerComponentPricingCards>
  );
};

export default ContainerComponentPricing;

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

const ContainerComponentPricingCards = styled.section`
  background: rgb(8, 9, 47);
  background-image: url(${(props) => props.newimage ? props.newimage : props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;

  animation: ${heroAnimation} 1s 0.1s forwards;

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
