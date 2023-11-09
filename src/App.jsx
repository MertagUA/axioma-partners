import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import {
  Background,
  Container,
  FadeBackground,
  FooterBackground,
  FooterContainer,
} from "./App.styled";
import { Hero } from "./components/Hero/Hero";
import { Traffic } from "./components/Traffic/Traffic";
import { WeCan } from "./components/WeCan/WeCan";
import { Clients } from "./components/Clients/Clients";
import { Partners } from "./components/Partners/Partners";
import { ForClients } from "./components/ForClients/ForClients";

export function App() {
  return (
    <Background>
      <Container>
        <Header />
        <Hero />
      </Container>
      <Traffic />
      <Container>
        <WeCan />
        <Clients />
      </Container>
      <FadeBackground>
        <Container>
          <Partners />
          <ForClients />
        </Container>
      </FadeBackground>
      <FooterBackground>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </FooterBackground>
    </Background>
  );
}
