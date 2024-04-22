import { useContext, useState } from "react";
import { AntraMartContext } from "../../Hooks/ContextProvider/ContextProvider";

const PurchaseLayout = () => {
    
    const [quantities, setQuantities] = useState({});
    const{handleRemoveCart,myCartProducts} = useContext(AntraMartContext);
    console.log(myCartProducts)

    const handleDecrease = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 0) - 1, 0)
        }));
    };

    const handleIncrease = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1
        }));
    };

    

    return (
        <div className="min-h-[50vh] w-screen px-32 py-14 bg-green-400">
            <table className="">
                <tbody>
                    <tr className="">
                        <th>Sr.</th>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>

                    {
                        myCartProducts?.map((product, index) =>
                            <tr className="" key={index}>
                                <td>{index + 1}</td>
                                <td className=""><img className="w-12 h-12" src={product.image} alt="" /></td>
                                <td>{product.title.slice(0, 10)}...</td>
                                <td>{product.offerPrice}</td>
                                <td className="flex gap-1 justify-center items-center">
                                    <button disabled={quantities[product._id] === 1 || quantities[product._id] === undefined} onClick={() => handleDecrease(product._id)} className="text-xl">-</button>
                                    <input value={quantities[product._id] || 1} className="w-[30%] text-center" type="text" readOnly />
                                    <button onClick={() => handleIncrease(product._id)} className="text-xl">+</button>
                                </td>
                                <td>
                                    {product.offerPrice * (quantities[product._id] || 1)}
                                </td>
                                <td>
                                    <button className="btn">Buy Now</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleRemoveCart(product._id)} className="btn">Remove Item</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseLayout;
