import { useInView } from "framer-motion";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { review } from "../constants/data3";

const ReviewComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <ReviewContainer>
      <h1 className="review-title">How students learned from our courses</h1>
      <p className="review-text">
        See what people have learned and built by taking courses from
        Design+Code.
      </p>
      <div className="review" ref={ref}>
        {review?.map((data) => (
          <div key={data.id} className="item">
            {inView && (
              <>
                <img
                  src={data.image}
                  className="review-people-image"
                  alt="People"
                />{" "}
                <h1 className="review-name">{data.name}</h1>
                <p className="review-role">{data.role}</p>
                <span className="review-people-text">{data.reviewText}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </ReviewContainer>
  );
};

export default ReviewComponent;

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

const ReviewContainer = styled.div`
  padding: 100px 30px;
  background: rgb(68, 2, 25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 540px) {
    padding: 80px 20px;
  }

  .review-title {
    color: white;
    font-weight: bolder;
    font-size: 40px;
    text-align: center;
  }

  .review-text {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }

  .review {
    max-width: 800px;
    width: 1fr;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media (max-width: 809px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .item {
    place-self: start;

    flex: 0 0 auto;
    display: flex;
    flex-flow: column nowrap;
    place-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0;
    animation: ${heroAnimation} 1s 0.1s forwards;
  }

  .review-people-image {
    width: 44px;
    height: 44px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
  }

  .review-name {
    font-size: 20px;
    color: white;
    font-weight: bold;
  }

  .review-role {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }

  .review-people-text {
    font-size: 14px;
    color: white;
  }
`;
