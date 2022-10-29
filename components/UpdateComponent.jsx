import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { updateFix } from "../constants/data4";

const UpdateComponent = ({ mainImage, title ,content}) => {
  return (
    <ContentWrapper>
      <div className="update-wrapper">
        <h5 className="update-date">July {new Date().getFullYear()}</h5>
        <img
          src={mainImage}
          className="component-image"
          alt="main-image"
        />
        <h1 className="update-heading">{title }</h1>
        <p className="update-content">
         {content}
        </p>
        <div className="divider"></div>
        <h4 className="update-te">WHAT&apos;S FIXED</h4>
        <div className="component">
          {updateFix?.map((data) => (
            <div className="item" key={data.id}>
              <Image
                src={data.icon}
                alt="update-icon"
                layout="intrinsic"
                width="32"
                height="32"
              />
              <h2 className="update-component-title">{data.title}</h2>
              <p className="update-component-content">{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default UpdateComponent;

const ContentWrapper = styled.div`
  .update-wrapper {
    max-width: 800px;
    height: min-content;
    flex: 0 0 auto;
    display: flex;
    flex-flow: column nowrap;
    place-content: flex-start center;
    align-items: flex-start;
    gap: 20px;
    padding: 30px;
    border-radius: 30px;
    backdrop-filter: blur(40px);
    box-shadow: rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px,
      rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px,
      rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px,
      rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px,
      rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px,
      rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px,
      rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px,
      rgb(0 0 0 / 25%) 0px 100px 100px 0px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .update-date {
    font-size: 14x;
    color: white;
    font-weight: bold;
  }

  .component-image {
    position: relative;
    width: 100%;
    height: 300px;
    flex: 0 0 auto;
    border-radius: 20px;
  }

  .update-heading {
    color: white;
    font-weight: bolder;
    font-size: 22px;
  }

  .update-content {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  .divider {
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }

  .update-te {
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  .component {
    position: relative;
    overflow: visible;
    max-width: 800px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-auto-rows: minmax(0px, 1fr);
    grid-template-rows: repeat(1, minmax(0px, 1fr));
    width: 100%;
    height: min-content;
    flex: 0 0 auto;
    gap: 30px;
    padding: 0px;

    @media (max-width: 809px) {
      grid-template-columns: 1fr;
    }
  }

  .item {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    opacity: 1;
    border-radius: 25px;

    position: relative;
    overflow: visible;

    height: min-content;
    display: flex;
    flex-flow: column nowrap;
    place-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 30px 20px;
  }

  .update-component-title {
    font-size: 16px;
    color: white;
    font-weight: bold;
  }

  .update-component-content {
    font-size: 14px;
    color: white;
  }
`;
