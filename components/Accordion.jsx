import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const Accordion = ({ title, content, faqRef }) => {
  const [isActive, setIsActive] = useState(false);

  const faqInView = useInView(faqRef, { once: true });

  return (
    <>
      {faqInView && (
        <Container>
          <motion.div className="accordion-item">
            <motion.div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
            >
              <div className="a-title">
                {" "}
                <h3> {title} </h3>
              </div>
              <div>
                {isActive ? (
                  <Image
                    src="/svgs/plus-duotone.svg"
                    className="accordion-icon-rotate"
                    alt="Play"
                    layout="intrinsic"
                    width="26"
                    height="26"
                  />
                ) : (
                  <Image
                    src="/svgs/plus-duotone.svg"
                    className="accordion-icon"
                    alt="Play"
                    layout="intrinsic"
                    width="26"
                    height="26"
                  />
                )}{" "}
              </div>
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="accordion-content"
              >
                {content}
              </motion.div>
            )}
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Accordion;

const Container = styled.div`
  .accordion-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    width: 100%;
  }

  .accordion-title {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    border-radius: 25px;
    color: white;
    font-size: 22px;
    font-weight: bolder;
    gap: 100px;
    transition: all 0.9s ease-in-out;

    @media (max-width: 809px) {
      font-size: 20px;
    }

    @media (max-width: 540px) {
      font-size: 16px;
      font-weight: normal;
    }
  }

  .accordion-icon-rotate {
    transition: all 0.3s ease-in;

    transform: rotate(45deg);
  }

  .accordion-icon {
    transition: all 0.3s ease-in;

    transform: rotate(0);
  }

  .accordion-content {
    font-size: 18px;
    color: white;
    padding: 20px;
    transition: cubic-bezier(0.56, 0.59, 0.56, 0.58);

    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 809px) {
      font-size: 14px;
    }
  }
`;
