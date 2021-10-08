import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Description from "../components/Services/Massages/Description";
import Banner from "../components/Services/Massages/Banner";
import Types from "../components/Services/Massages/Types";
import CompanyInfo from "../components/CompanyInfo";
import Footer from "../components/Footer";

function Masajes() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      {/* <Description /> */}
      <Types />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default Masajes;
