import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Home from "../components/index/Home";
import Features from "../components/index/Features";
import Services from "../components/index/Services";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Features />
      <Services />
      <CompanyInfo />
      <Footer />
    </div>
  );
}
