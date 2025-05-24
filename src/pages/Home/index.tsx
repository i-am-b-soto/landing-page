import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContnet from "../../content/About.json";
import ServicesContent from "../../content/ServicesContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const PricingBlock = lazy(() => import("../../components/PricingBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="workspace.svg"
        id="intro"
      />
      <MiddleBlock
        title={AboutContnet.title}
        content={AboutContnet.text}
        button={AboutContnet.button}
        id="about"
      />
      <ContentBlock
        direction="left"
        title={ServicesContent.title}
        content={ServicesContent.text}
        section={ServicesContent.section}
        button={ServicesContent.button}
        icon="support-solid-I.svg"
        id="services"
      />      

      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="why"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
