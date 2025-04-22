import { useState } from "react";
import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { PricingBlockProps } from "./types";
import { Button } from "../../common/Button";

import {
  ContentSection,
  Content,
  StyledRow,
  ButtonWrapper,
  PriceWrapper,
  PriceWrapperContainer,
  Title,
  TextBox,
} from "./styles";


const PricingBlock = ({
    title,
  }: PricingBlockProps) => {

    const [visible, setVisibility] = useState(false);    
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
        setVisibility(false);
      };
    return (
      <ContentSection>
        <Fade direction={"right"} triggerOnce>
          <StyledRow
            justify="space-between"
            align="middle"
            id={"pricing"}
            direction={"left"}
          >
            <Col xl={7}  xs={24}>
                <PriceWrapperContainer>
                    <PriceWrapper
                    onClick={() => scrollTo("contact")}
                    >
                        <TextBox>
                            <Title><h6>{"$Free"} </h6></Title> <Title> <p><b>{"Project Estimate"}</b> </p></Title>
                            <Content>{"For projects we're familiar with, we can give you a FREE estimate!     "}</Content>
                        </TextBox>
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                    </PriceWrapper>
                </PriceWrapperContainer>              
            </Col>
            <Col xl={7} xs={24}>
                <PriceWrapperContainer>
                    <PriceWrapper
                    onClick={() => scrollTo("contact")}
                    >
                        <TextBox>
                            <Title><h6>{"$85/Hr"}</h6> </Title>  <Title>  <p><b>{"Ad Hoc Hours"}</b></p> </Title>
                            <Content>{"Not sure how many hours you need on your project? You can start here!"}</Content>
                        </TextBox>
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                    </PriceWrapper>
                </PriceWrapperContainer>
            </Col>
            <Col xl={7}  xs={24}>
                <PriceWrapperContainer>
                    <PriceWrapper>
                        <TextBox onClick={() => scrollTo("contact")}>
                            <Title><h6>{"$68/Hr"}</h6></Title>  <Title> <p><b>{"For Large Projects"}</b> </p></Title>
                            <Content>{"For projects known to take at least 100 hours, we offer a discounteed price!"}</Content>
                        </TextBox>
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                    </PriceWrapper> 
                </PriceWrapperContainer>             
            </Col>
          </StyledRow>
          
        </Fade>
      </ContentSection>
    );
  };
  
  export default withTranslation()(PricingBlock);
  