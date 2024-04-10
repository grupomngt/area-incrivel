import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 20px 0;
  background-color: red;
  font-family: "Montserrat", sans-serif;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 10px;

  @media (max-width: 1023px) {
    padding: 20px 0;
    gap: 20px;
    flex-flow: column;
  }
  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;

  h1 {
    color: #fff;
    font-size: 54px;
    font-weight: 700;
  }

  h2 {
    background-color: yellow;
    color: red;
    width: 100%;
    padding: 0 10px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }

  span {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
  }

  @media (max-width: 767px) {
    flex-flow: column;
    gap: 15px;

    h1 {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
    }

    h2 {
      background-color: yellow;
      color: red;
      width: 100%;
      padding: 0 10px;
      font-size: 32px;
      font-weight: 700;
      text-align: center;
    }

    span {
      text-align: center;
    }
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;

  h3 {
    font-weight: 300;
    font-size: 28px;
    color: #fff;
  }

  @media (max-width: 767px) {
    flex-flow: column;
    gap: 15px;
  }
`;

export const Whatsapp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  img {
    width: 40px;
  }
`;
