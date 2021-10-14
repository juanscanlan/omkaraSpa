import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import Description from "../components/Services/Facials/Description";
import FacialsList from "../components/Services/Facials/FacialsList";
import ServiceWrapper from "../components/UI/ServicesWrapper";
import Banner from "../components/Services/Facials/Banner";
import CompanyInfo from "../components/UI/CompanyInfo";
import Footer from "../components/UI/Footer";

function Faciales() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Description />
      <ServiceWrapper serviceData={FacialsList} />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default Faciales;
