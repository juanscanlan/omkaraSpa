import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Description from "../components/Services/Waxing/Description";
import Banner from "../components/Services/Waxing/Banner";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";

function Waxing() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Description />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default Waxing;
