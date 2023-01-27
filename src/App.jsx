import Company from "./components/companies/Company";
import Header from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Sectionheading from "./components/sectionheading/Sectionheading";
import Banner from "./components/banner/Banner";
import Valueprops from "./components/valueprops/Valueprops";
import Sectioncontent1 from "./components/sectioncontent1/Sectioncontent1";
import Sectioncontent2 from "./components/sectioncontent2/Sectioncontent2";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import FAQS from "./components/FAQS/Faqs";
import Cta from "./components/cta/Cta";
import Recentblog from "./components/recentblogs/Recentblog";
import Footer from "./components/footer/Footer";
import IconOne from "./components/banner/icons/icon-right";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__headerBannerWrapper">
        {" "}
        <Banner />
      </div>
      <Company />
      {/* <Sectionheading /> */}
      <Valueprops />
      {/* <Sectioncontent1 />
      <Sectioncontent2 /> */}
      {/*<Recentblog />*/}
      {/* <FAQS /> */}
      <Cta />
      {/* <Features /> */}
      <Testimonials />
      <Footer />/
    </div>
  );
}

export default App;
