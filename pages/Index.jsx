import AddedServices from "../components/AddedServices";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import HowItWorks from "../components/HowItWorks";
import Deals from "../components/Deals";
import Top from "../components/Top";
// import Test from "../components/test";


const Index = ({ addToCart, productItems, CartItem }) => {
  return (
    <div>
      {/* <Test/> */}
        <Hero />
    
      {/* <Section1 /> */}
      {/* <Top/> */}
      <Deals />
      <HowItWorks />
      <FeaturedProduct addToCart={addToCart} productItems={productItems} />
      <Feature />
      <AddedServices />
      <Footer />
    </div>
  );
};

export default Index;
