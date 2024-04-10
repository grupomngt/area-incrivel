import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 20px 0;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 25px;

  @media (max-width: 1023px) {
    padding: 20px 0;
  }
  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (max-width: 1023px) {
    max-width: 624px;
    flex-flow: column;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;
export const Image = styled.img`
  width: 50%;
  border-radius: 25px;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 25px;

  @media (max-width: 1023px) {
    flex-flow: column-reverse;
    align-items: center;
  }
`;

export const Topicos = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #443d4b;
  }

  @media (max-width: 1023px) {
    span {
      font-size: 18px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-flow: column;
  gap: 25px;

  h1 {
    font-size: 36px;
    line-height: 48px;
  }
  h2 {
    font-size: 24px;

    font-weight: 600;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 32px;
      line-height: 44px;
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  padding: 15px 75px;
  background-color: #29a71a;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
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
  }
`;
