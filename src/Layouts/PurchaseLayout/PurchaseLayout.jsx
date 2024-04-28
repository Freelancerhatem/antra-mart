import { useContext, useState } from "react";
import { AntraMartContext } from "../../Hooks/ContextProvider/ContextProvider";

const PurchaseLayout = () => {
  const [quantities, setQuantities] = useState({});
  const { handleRemoveCart, myCartProducts } = useContext(AntraMartContext);
  console.log(myCartProducts);

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  // Calculate total price for each product
  const calculateTotalPrice = (product) => {
    return (product.offerPrice * (quantities[product._id] || 1)).toFixed(2);
  };

  // Calculate total price of all products in the cart
  const totalPrice = myCartProducts.reduce(
    (acc, product) =>
      acc + (product.offerPrice * (quantities[product._id] || 1)),
    0
  ).toFixed(2);

  return (
    <div className="min-h-[50vh] w-screen  flex justify-center px-32 py-14 ">
      {myCartProducts?.length == 0 ? (
        <div className=" text-center">
          <h1 className="text-3xl font-bold">Empty Cart</h1>
        </div>
      ) : (
        <div>
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

              {myCartProducts?.map((product, index) => (
                <tr className=" border" key={index}>
                  <td>{index + 1}</td>
                  <td className="">
                    <img className="w-12 h-12" src={product.image} alt="" />
                  </td>
                  <td>{product.title.slice(0, 10)}...</td>
                  <td>{product.offerPrice}</td>
                  <td className="flex gap-1 justify-center items-center">
                    <button
                      disabled={
                        quantities[product._id] === 1 ||
                        quantities[product._id] === undefined
                      }
                      onClick={() => handleDecrease(product._id)}
                      className="text-xl"
                    >
                      -
                    </button>
                    <input
                      value={quantities[product._id] || 1}
                      className="w-[30%] bg-gray-200 text-center"
                      type="text"
                      readOnly
                    />
                    <button
                      onClick={() => handleIncrease(product._id)}
                      className="text-xl"
                    >
                      +
                    </button>
                  </td>
                  <td>{calculateTotalPrice(product)}</td>

                  <td>
                    <button
                      onClick={() => handleRemoveCart(product._id)}
                      className="btn btn-xs"
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="border-dashed border-2 bg-black" />
          <div className="flex justify-between py-5">
           
            <h2 className="text-xl font-bold">Price: ${totalPrice}</h2>
            <button className="btn btn-xs">Make Payment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseLayout;
