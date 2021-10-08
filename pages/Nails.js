import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Description from "../components/Services/Nails/Description";
import Banner from "../components/Services/Nails/Banner";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";

function Nails() {
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

export default Nails;
