import { useState } from "react";
import Banner from "../../components/HomeComponents/Banner/Banner";
import CategoryProducts from "../../components/HomeComponents/CategoryProducts/CategoryProducts";
import Footer from "../../components/HomeComponents/Footer/Footer";
import Hotdeal from "../../components/HomeComponents/Hotdeal/Hotdeal";
import Navbar from "../../components/HomeComponents/Navbar/Navbar";
import Services from "../../components/HomeComponents/Services/Services";
import useProducts from "../../Hooks/useProducts/useProducts";


const Home = () => {
    const[typeProduct,setType] = useState('watch');
    const[AllProducts] = useProducts(typeProduct);
    // console.log(AllProducts)
    return (
        <div>
            <Navbar></Navbar>
            <Banner  typeProduct={typeProduct} setType={setType}></Banner>
            <CategoryProducts AllProducts={AllProducts}></CategoryProducts>
            <Hotdeal></Hotdeal>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;