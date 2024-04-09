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
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  h1 {
    color: #fff;
    font-size: 32px;
  }

  h2 {
    background-color: yellow;
    color: red;
    padding: 0 10px;
    font-size: 30px;
  }

  h3 {
    font-weight: 300;
    font-size: 30px;
    color: #fff;
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
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
export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  span {
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
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  img {
    width: 40px;
  }
`;
