import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { linkdata1, linkdata2 } from "../constants/data2.js";

const Footer = () => {
  return (
    <NewsLetterContainer>
      <div className="main-container">
        <div className="links">
          <div className="link-container-1">
            {linkdata1.map((data) => (
              <div key={data.id} className="item">
                <Image
                  src={data.icon}
                  className="icon"
                  alt="Play"
                  layout="intrinsic"
                  width="30"
                  height="30"
                />{" "}
                <p className="title">{data.title}</p>
              </div>
            ))}
          </div>

          <div className="link-container-2">
            {linkdata2.map((data) => (
              <div key={data.id} className="item">
                <Image
                  src={data.icon}
                  className="icon"
                  alt="Play"
                  layout="intrinsic"
                  width="30"
                  height="30"
                />{" "}
                <p className="title">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="news-letter">
          <h3 className="news-letter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="form">
            <input placeholder="email@framer.com" /> <button>Sign Up</button>
          </div>
          <p className="news-letter-footnote">
            Product updates, news and promotions. No spam ever.{" "}
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="foot">
        <p className="foot-main">Copyright &copy; 2022 DesignCode</p>
        <p className="foot-terms">Terms</p>
        <p className="foot-privacy">Privacy Policy</p>
      </div>
    </NewsLetterContainer>
  );
};

export default Footer;

const NewsLetterContainer = styled.div`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background: #070818;
  font-family: "Manrope", sans-serif;

  .links {
    display: flex;
    gap: 10px;
    max-width: 400px;
    width: 100%;
  }

  .link-container-1,
  .link-container-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }

  .item {
    display: flex;
    padding: 8px 16px;
    gap: 10px;
    border-radius: 10px;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    height: 100%;

    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .form {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr;
  }

  .title {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
  }

  .main-container {
    display: flex;
    gap: 30px;

    @media (max-width: 809px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .news-letter {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    max-width: 400px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
  }

  input {
    padding: 12px;
    font-size: 14px;
    background: rgb(235, 235, 235);
    color: rgb(0, 0, 0);
    box-shadow: transparent 0px 0px 0px 1px inset;
    outline: none;
    border: none;
    border-radius: 8px;
    font-family: "Manrope", sans-serif;
  }

  button {
    padding: 12px;
    outline: none;
    border: none;
    border-radius: 8px;
    background: rgb(255, 82, 79);
    color: rgb(255, 255, 255);
    font-family: "Manrope", sans-serif;
    cursor: pointer;
  }

  .news-letter-title {
    color: white;
    font-size: 14px;
    font-weight: bolder;
  }

  .news-letter-footnote {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }

  .divider {
    width: 50%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }

  .foot {
    display: flex;
    flex-flow: row nowrap;
    place-content: center flex-start;
    align-items: center;
    gap: 20px;

    @media (max-width: 809px) {
      flex-direction: column;
    }
  }

  .foot-main {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }

  .foot-terms {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }

  .foot-privacy {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }
`;
