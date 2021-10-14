import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import Home from "../components/index/Home";
import Features from "../components/index/Features";
import Services from "../components/index/Services";
import CompanyInfo from "../components/UI/CompanyInfo";
import Footer from "../components/UI/Footer";

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
