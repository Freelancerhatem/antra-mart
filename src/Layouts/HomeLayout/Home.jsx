import Banner from "../../components/HomeComponents/Banner/Banner";
import CategoryProducts from "../../components/HomeComponents/CategoryProducts/CategoryProducts";
import Footer from "../../components/HomeComponents/Footer/Footer";
import Hotdeal from "../../components/HomeComponents/Hotdeal/Hotdeal";
import Navbar from "../../components/HomeComponents/Navbar/Navbar";
import Services from "../../components/HomeComponents/Services/Services";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CategoryProducts></CategoryProducts>
            <Hotdeal></Hotdeal>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;