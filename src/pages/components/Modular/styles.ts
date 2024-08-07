import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 60px 0;
  justify-content: center;
  background-color: #f0f0f0;
  position: relative;
  position: relative;
  z-index: 1;
  @media (max-width: 1023px) {
    padding: 40px 0;
  }
  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 30px;

  video {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;

export const ContentGarantia = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  @media (max-width: 767px) {
    flex-flow: column-reverse;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  background-color: #ffffff60;
  height: fit-content;
  border-radius: 25px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7px);
  padding: 25px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #030303;
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    h1 {
      text-align: center;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    h1 {
      text-align: center;
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  text-decoration: none;
  padding: 15px 35px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (max-width: 1023px) {
    width: 100%;
    font-size: 18px;
    padding: 10px 25px;
  }
`;
