import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { data1 } from "../constants/data1";

const Container1 = () => {
  return (
    <Container>
      <h1 className="container-title">Trusted by 8,000 companies worldwide</h1>
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
  );
};

export default Container1;

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
