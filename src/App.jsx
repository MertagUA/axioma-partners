import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import bg from "./assets/images/bg.webp";
import { Container } from "./App.styled";
import { Hero } from "./components/Hero/Hero";

export function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Container>
        <Header />
        <Hero />
        <Footer />
      </Container>
    </div>
  );
}
