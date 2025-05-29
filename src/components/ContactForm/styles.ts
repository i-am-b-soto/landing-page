import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media only screen and (max-width: 1100px) {
    h6 {
      font-size: 35px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const NotificationContainer = styled("div")`
  display: flex;
  flex-direction:row; 
  justify-content: center;
  width: 100%;
`;

export const NotificationSpan = styled("span")`
  background-color: rgb(255, 130, 92);
  display: inline-block;
  padding: 0.4em 0.75em;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  margin-right: 0.5em;
  white-space: nowrap;
  transition: all 0.3s ease;  
`;