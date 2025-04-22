import { useState, cache } from "react";
import { Col } from "antd";
import { Fade } from "react-awesome-reveal";

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
      <ContentSection   id={"prices"}>
        <Fade direction={"right"} triggerOnce>
          <StyledRow
            justify="space-between"
            align="middle"
            $direction={"left"}
          >
            <Col lg={7}  md={7} xs={8}>
                <PriceWrapperContainer onClick={() => scrollTo("contact")}>
                    <PriceWrapper
                    onClick={() => scrollTo("contact")}
                    >
                        <TextBox>
                            <Title><h6>{"$Free"} </h6> <p><b>{"Project Estimate"}</b> </p></Title>
                            <Content>{"For projects we're familiar with, we can give you a FREE estimate!"}</Content>
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                        </TextBox>
                    </PriceWrapper>
                </PriceWrapperContainer>              
            </Col>
            <Col lg={7} md={7} xs={8}>
                <PriceWrapperContainer onClick={() => scrollTo("contact")}>
                    <PriceWrapper
                    onClick={() => scrollTo("contact")}
                    >
                        <TextBox>
                            <Title><h6>{"$85/Hr"}</h6>  <p><b>{"Ad Hoc Hours"}</b></p> </Title>
                            <Content>{"Not sure how many hours you need on your project? You can start here!"}</Content>
                       
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                        </TextBox>
                    </PriceWrapper>

                </PriceWrapperContainer>
            </Col>
            <Col lg={7} md={7} xs={8}>
                <PriceWrapperContainer onClick={() => scrollTo("contact")}>
                    <PriceWrapper >
                        <TextBox >
                            <Title><h6>{"$68/Hr"}</h6> <p><b>{"For Large Projects"}</b> </p></Title>
                            <Content>{"For projects known to take at least 100 hours, we offer a discounteed price!"}</Content>
                        
                        <ButtonWrapper>
                            <Button onClick={() => scrollTo("contact")}>{"Book Now!"} </Button>
                        </ButtonWrapper>
                        </TextBox>
                    </PriceWrapper> 
                </PriceWrapperContainer>             
            </Col>
          </StyledRow>
          
        </Fade>
      </ContentSection>
    );
  };
  
  export default cache(PricingBlock);
  