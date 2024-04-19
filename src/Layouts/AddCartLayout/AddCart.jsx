import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios/useAxios";

const AddCart = () => {
    const { id } = useParams();
    const [productsData, setProductsData] = useState({});
    const AxiosLoader = useAxios();

    useEffect(() => {
        AxiosLoader.get(`/productsbyid?id=${id}`)
            .then(res => setProductsData(res.data))
    }, [AxiosLoader, id]);
    console.log(productsData);
    const { availability, brand, category, color, description, gender, image, material, newProduct, offerPrice, rating, regularPrice, size, subcategory, title, type } = productsData;
    return (
        <div className="grid grid-cols-2 bg-red-300 w-screen h-screen">
            <div className="bg-yellow-200">
                <img className="w-1/2" src={image} alt="" />
                <h2>{description}</h2>
                <h2>{category}</h2>
            </div>
            <div className="bg-green-300 h-full flex flex-col text-xl">
                <div className="">
                    <h1 className="text-3xl font-semibold">{title}</h1>
                    <h3 className="">{offerPrice}$</h3>
                    <h2 className="font-bold">{availability}</h2>
                </div>
                <div>
                    <h1 className="">Brand: {brand}</h1>
                    <h1 className="">Material: {material}</h1>
                    <h1 className="">Size: {size}</h1>
                    
                </div>
                <div className="flex gap-2">
                    <button className="btn">Buy Now</button>
                    <button className="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AddCart;