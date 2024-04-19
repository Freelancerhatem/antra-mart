import { useEffect, useState } from "react";
import Banner from "../../components/HomeComponents/Banner/Banner";
import CategoryProducts from "../../components/HomeComponents/CategoryProducts/CategoryProducts";
import Hotdeal from "../../components/HomeComponents/Hotdeal/Hotdeal";
import Services from "../../components/HomeComponents/Services/Services";
import useAxios from "../../Hooks/useAxios/useAxios";


const Home = () => {
    const [typeProduct, setType] = useState('watch');
    const AxiosLoader = useAxios();
    const [allProducts, setAllProducts] = useState([])
    // const[allProducts,isLoading,refetchAllProducts] = useProducts(typeProduct);
    console.log(typeProduct)
    useEffect(() => {
        AxiosLoader.get(`/allProducts?category=${typeProduct}`)
            .then(res => setAllProducts(res.data))
    }, [AxiosLoader, typeProduct])

    return (
        <div>
            
            <Banner typeProduct={typeProduct} setType={setType}></Banner>
            <CategoryProducts allProducts={allProducts} ></CategoryProducts>
            <Hotdeal></Hotdeal>
            <Services></Services>
            
        </div>
    );
};

export default Home;