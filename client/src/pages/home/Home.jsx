import { useState } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
// import { Link as ScrollLink } from 'react-scroll';


const Home = () => {

  const [showMessage, setShowMessage] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowMessage(true);
  };

  const handleNavbarClick = () => {
    setShowMessage(false);
    // Additional logic for handling navbar click
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleLogoClick = () => {
    window.location.reload(); // Refreshes the page
  };

      // const moveEnd = true;
  //  const showMsg = true;

  return (
    <div>
      <Navbar onClick={handleLogoClick}  scrollToBottom={scrollToBottom}/>
      <div className="wrapper">
        <div className="headElement">
          <Header 
          handleNavbarClick={handleNavbarClick}
          />
        </div>
        <div className="msg">
          {showMessage && (
            <div className="message">
              <p>* Please fill in the details as per the location available.</p>
            </div>
          )}
        </div>
      </div>
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList onClick={scrollToTop} />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties onClick={scrollToTop} />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
