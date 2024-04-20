import { useEffect, useState } from "react";
import Banner from "../../components/HomeComponents/Banner/Banner";
import CategoryProducts from "../../components/HomeComponents/CategoryProducts/CategoryProducts";
import Hotdeal from "../../components/HomeComponents/Hotdeal/Hotdeal";
import Services from "../../components/HomeComponents/Services/Services";
import useAxios from "../../Hooks/useAxios/useAxios";


const Home = () => {
    const [typeProduct, setType] = useState('watch');
    const AxiosLoader = useAxios();
    const [allProducts, setAllProducts] = useState([]);
    const [loadingFetchData, setloadingFetchData] = useState(true)
    // my cart number
    
    
    
    useEffect(() => {
        AxiosLoader.get(`/allProducts?category=${typeProduct}`)
            .then(res => {
                if (res.data.length > 0) {
                    setloadingFetchData(false)
                    setAllProducts(res.data)
                }
            })
    }, [AxiosLoader, typeProduct])

    return (
        <div>

            <Banner typeProduct={typeProduct} setType={setType}></Banner>
            <CategoryProducts allProducts={allProducts} loadingFetchData={loadingFetchData} typeProduct={typeProduct} ></CategoryProducts>
            <Hotdeal></Hotdeal>
            <Services></Services>

        </div>
    );
};

export default Home;