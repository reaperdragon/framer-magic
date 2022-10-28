import React from 'react'
import styled, { keyframes } from 'styled-components';
import { accordian } from '../constants/accordian';
import Accordion from './Accordion';

const FAQComponent = ({faqRef}) => {
  return (
    <FAQContainer>
      <h1 className="title">FAQ</h1>

      <div className="accordion" ref={faqRef}>
        {accordian.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} faqRef={faqRef} />
        ))}
      </div>
    </FAQContainer>
  );
}

export default FAQComponent;




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

    opacity: 0;
    animation: ${heroAnimation} 1s 0.1s forwards;

    @media (max-width: 809px) {
      width: 100%;
    }
  }
`;