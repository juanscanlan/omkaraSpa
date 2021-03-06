import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import Description from "../components/Services/Massages/Description";
import Banner from "../components/Services/Massages/Banner";
import MassageList from "../components/Services/Massages/MassageList";
import ServiceWrapper from "../components/UI/ServicesWrapper";
import CompanyInfo from "../components/UI/CompanyInfo";
import Footer from "../components/UI/Footer";

function Masajes() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      {/* <Description /> */}
      <ServiceWrapper serviceData={MassageList} />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default Masajes;
