import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppLayoutStyles } from "./styles";

type LayoutProps = { 
  children: React.ReactNode
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <AppLayoutStyles>
      <Header />
        { children }
      <Footer />
    </AppLayoutStyles>
  );
}
