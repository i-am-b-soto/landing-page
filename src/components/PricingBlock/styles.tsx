import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const TextBox = styled("div")`
    display: relative;
`;

export const Content = styled("p")`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)<{ $direction?: "left" | "right" }>`
  flex-direction: ${({ $direction }) =>
    $direction === "left" ? "row" : "row-reverse"};

`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;


export const PriceWrapper= styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;

}
`;

export const PriceWrapperContainer  = styled("div")`

  height: 400px;

  padding: 4rem 4rem 4rem 4rem;
  border: 1px solid #7D3C98; 
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1100px) {
    padding: 4rem 2rem 6rem 2rem;
  }

  @media only screen and (max-width: 1100px) {
    height: 320px;
    margin-bottom: 50px;
  }


  &:hover,
  &:active,
  &:focus {
    transform: scale(1.05);
    transition-duration: 0.5s;


`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h3")`
  font-size: 15px;
  padding: 0.5rem 0;
  margin-bottom: 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;


export const MaxTitle = styled("h6")`
  font-size: 8px;
  padding: 0.5rem 0;
  color: #000;
  width: 100%
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    max-width: 80%;
    margin-top: auto;
    justify-content: center;
  }
`;


export const Title = styled("div")`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    h6 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 45px;
    }
    
    p {
        color: rgb(24, 33, 109);
        font-size: 21px;
        line-height: 1.41;
        font-weight: 500 !important;

         @media screen and (max-width: 1024px) {
            width: 100%;
         }

    }

`