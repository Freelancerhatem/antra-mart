import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios/useAxios";
import { AntraMartContext } from "../../Hooks/ContextProvider/ContextProvider";

const AddCart = () => {
    const { id } = useParams();
    const [productsData, setProductsData] = useState({});
    const AxiosLoader = useAxios();
    const { availability, brand, category, color, description, gender, image, material, newProduct, offerPrice, rating, regularPrice, size, subcategory, title, type, _id } = productsData;



    useEffect(() => {
        AxiosLoader.get(`/productsbyid?id=${id}`)
            .then(res => setProductsData(res.data))
    }, [AxiosLoader, id]);
    // console.log(productsData);
    const [productColor, SetproductColor] = useState('default');
    const{SetCartNumber} = useContext(AntraMartContext)

    // add to cart functionality
    const handleAddtoCart = () => {
        // console.log(productsData)
        let myCartArray = JSON.parse(localStorage.getItem('myCart')) || [];
        const myCartDuplicateChecker = myCartArray.some(data => data._id == productsData._id)
        if (!myCartDuplicateChecker) {

            myCartArray.push(productsData)

            localStorage.setItem('myCart', JSON.stringify(myCartArray));
            SetCartNumber(pre=>pre+1)
            
        }
        else {

            alert('already added to cart')
        }
        

    }


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
                    <div>
                        <h1>Color:{productColor}</h1>
                        <div className="flex gap-1 m-2 w-20 h-10">
                            <div onClick={() => SetproductColor('Amber')} className={`bg-amber-400 w-6 h-6  rounded-full ${productColor == 'Amber' ? 'border-4 border-white' : ''}`}></div>
                            <div onClick={() => SetproductColor('Red')} className={`bg-red-500 w-6 h-6 rounded-full ${productColor == 'Red' ? 'border-4 border-white' : ''}`}></div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-2">
                    <button className="btn">Buy Now</button>
                    <button onClick={() => handleAddtoCart(_id)} className="btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AddCart;