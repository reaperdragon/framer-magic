import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";

const SignUpComponent = () => {
  return (
    <BgContainer as={motion.div} image={`${"/images/wallpaper6.jpg"}`}>
      <div className="signup-component">
        <h1 className="signup-title">Sign up</h1>
        <p className="signup-content">
          Access to 120+ hours of courses, tutorials and livestreams
        </p>
        <div className="fields">
          <div className="input-f">
            <input placeholder="Email" className="input-field" />
            <input placeholder="Password" className="input-field" />
          </div>

          <button className="button-signup">Sign Up</button>
        </div>
        <p className="signup-privacy-policy">
          By clicking on Sign up, you agree to our Terms of service and Privacy
          policy.
        </p>
      </div>
    </BgContainer>
  );
};

export default SignUpComponent;

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
  padding: 200px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-color: rgb(7, 8, 24);
  gap: 10px;

  opacity: 0;
  animation: ${heroAnimation} 1s 0.2s forwards;

  .signup-component {
    position: relative;
    overflow: hidden;
    will-change: transform;
    max-width: 500px;

    height: min-content;
    flex: 0 0 auto;
    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    align-items: center;
    gap: 30px;
    padding: 60px 30px;
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
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);

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
      :nth-child(5) {
        animation-delay: 1.1s;
      }
      :nth-child(6) {
        animation-delay: 1.3s;
      }
      :nth-child(7) {
        animation-delay: 1.6s;
      }
    }
  }

  .signup-title {
    font-size: 40px;
    font-weight: bolder;
    color: white;
  }

  .signup-content {
    font-size: 14px;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.7);
  }

  .fields {
    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: 1fr;
    gap: 15px;
    width: 100%;
    height: 100%;
  }

  .input-f {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    gap: 15px;
  }

  .input-field {
    display: inline-block;

    line-height: 1.4em;
    outline: none;
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-family: "Manrope", "Inter Regular", Inter, Inter, system-ui,
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    font-size: 16px;
    background: rgb(235, 235, 235);
    color: rgb(0, 0, 0);
    box-shadow: transparent 0px 0px 0px 1px inset;
  }

  .button-signup {
    display: inline-block;
    width: 100%;
    line-height: 1.4em;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 15px;
    font-family: "Manrope", "Inter Regular", Inter, Inter, system-ui,
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 600;
    font-size: 16px;
    background: rgb(119, 85, 204);
    cursor: pointer;
    color: rgb(255, 255, 255);
    z-index: 1;
    opacity: 1;
  }

  .signup-privacy-policy {
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    text-align: center;
  }
`;
