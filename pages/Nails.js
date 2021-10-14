import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import Description from "../components/Services/Nails/Description";
import Banner from "../components/Services/Nails/Banner";
import CompanyInfo from "../components/UI/CompanyInfo";
import Footer from "../components/UI/Footer";

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
