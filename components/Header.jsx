import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Header = ({ isOpen, toggle }) => {
  return (
    <>
      <Container>
        <div className="header-logo">
          <Link href="/">
            <a>
              {" "}
              <Image
                src="/svgs/logo-dc.svg"
                layout="intrinsic"
                width="24"
                height="24"
              />
            </a>
          </Link>
        </div>

        {isOpen ? (
          <div className="close-menu" onClick={toggle}>
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="line6"></div>
          </div>
        ) : (
          <div className="hamburger-menu" onClick={toggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        )}

        <ul className="nav">
          <li className="link">
            <Link href="/components">
              <a>Components</a>
            </Link>
          </li>
          <li className="link">
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li className="link">
            <Link href="/updates">
              <a>Updates</a>
            </Link>
          </li>
        </ul>

        {isOpen && (
          <div className="open">
            <ul className="open-menu">
              <li className="open-link" onClick={toggle}>
                <Link href="/components">
                  <a>Components</a>
                </Link>
              </li>
              <li className="open-link" onClick={toggle}>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
              <li className="open-link" onClick={toggle}>
                <Link href="/updates">
                  <a>Updates</a>
                </Link>
              </li>
              <li className="open-link" onClick={toggle}>
                <Link href="/supports">
                  <a>Supports</a>
                </Link>
              </li>
              <li className="open-link" onClick={toggle}>
                <Link href="/community">
                  <a>Community</a>
                </Link>
              </li>
              <li className="open-link" onClick={toggle}>
                <Link href="/signup">
                  <a>Sing In</a>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <Button>
          <Link href="/signup">
            <a>Sing Up</a>
          </Link>
        </Button>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  z-index: 30;
  backdrop-filter: blur(40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-family: "Manrope", sans-serif;
  padding: 0 30px;

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    transition: all 0.3s ease-in-out;

    :hover {
      opacity: 0.5;
    }

    @media (max-width: 810px) {
      display: none;
    }
  }

  .nav {
    list-style: none;
    display: flex;
    gap: 50px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 810px) {
      display: none;
    }
  }

  .link {
    padding: 8px 16px;
    transition: all 0.3s ease-in-out;

    :hover {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
  }

  a {
    color: white;
    text-decoration: none;
  }

  .hamburger-menu {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    display: none;

    @media (max-width: 810px) {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: column;
      cursor: pointer;
    }
  }

  .line1 {
    width: 22px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
  }

  .line2 {
    width: 12px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
  }

  .line3 {
    width: 22px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
  }

  .close-menu {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    display: none;

    @media (max-width: 810px) {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
    }
  }

  .line4 {
    width: 22px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
    transform: rotate(45deg);
    margin-left: 2px;
  }

  .line5 {
    transition: all 0.3s ease-in-out;
    transform: rotate(45deg);
    opacity: 0;
  }

  .line6 {
    width: 22px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
    transform: rotate(-45deg);
    margin-top: -2px;
    margin-right: -1px;
  }

  .open {
    background-color: rgba(0, 0, 0, 0.5) !important;
    border-radius: 0;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    height: fit-content;
    z-index: 40;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    backdrop-filter: blur(15px);

    padding: 20px 0;
    display: none;

    @media (max-width: 809px) {
      display: block;
    }

    @media (max-width: 640px) {
      width: 100%;
      display: flex;
      overflow: hidden;
    }
  }

  .open-menu {
    background: rgba(7, 8, 24, 0.8);
    border-radius: 20px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(10px);
    width: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 20px;
    padding: 30px;
    overflow: hidden;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .open-link {
    height: 44px;
    width: 300px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.3);

    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    box-sizing: border-box;

    :hover {
      background-color: rgba(255, 255, 255, 0.3);
      padding: 0 20px;
    }

    :last-child {
      border: none;
    }
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  width: fit-content;
  font-family: "Manrope", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  border: none;
  border: 1px solid #6193ff;
  border-radius: 24px 24px 0 24px;
  padding: 8px 16px;
  gap: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(400px);

  :hover {
    border-color: white;
  }

  @media (max-width: 810px) {
    font-size: 12px;
  }
`;
