import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import styled, { keyframes } from "styled-components";

const ErrorPage = () => {
    return (
      <>
        <Head>
          <title>404 Error</title>
          <link rel="icon" href="/svgs/framer-logo-duotone.svg" />
        </Head>

        <BgContainer
          as={motion.div}
          image="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        >
          <h1 className="title">404</h1>
          <p className="content">
            The Page You&apos;re Looking For Is not Exist or Removed From The
            Site.
          </p>
        </BgContainer>
      </>
    );
};

export default ErrorPage;

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

const BgContainer = styled.div`
  height: 600px;

  font-family: "Manrope", sans-serif;
  padding: 100px 30px;
  background: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  gap: 10px;

  > * {
    opacity: 0;
    animation: ${heroAnimation} 1s 0.2s forwards;
    :nth-child(1) {
      animation-delay: 0.3s;
    }
    :nth-child(2) {
      animation-delay: 0.6s;
    }
   
  }

  .title {
    font-size: 60px;
    font-weight: bolder;
    color: white;
  }

  .content {
    font-size: 20px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.7);
  }
`;
