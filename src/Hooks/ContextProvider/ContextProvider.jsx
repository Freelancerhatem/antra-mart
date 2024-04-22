import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const AntraMartContext = createContext({});
const ContextProvider = ({ children }) => {
    
    const [cartNumber, SetCartNumber] = useState(0);
    const[myCartProducts,SetMyCartProducts] = useState([])
    
    useEffect(() => {
        const myCartProductsArray = JSON.parse(localStorage.getItem('myCart')) || [];
        SetCartNumber(myCartProductsArray.length)
        SetMyCartProducts(myCartProductsArray);
    }, []);

    

    const handleRemoveCart = (id) => {
        const updatedCartProducts = myCartProducts.filter(products => products._id !== id);
        if (updatedCartProducts) {
            
            localStorage.setItem('myCart', JSON.stringify(updatedCartProducts));
            SetCartNumber(updatedCartProducts.length);
            SetMyCartProducts(updatedCartProducts)
            
        }

    }


    const provider = {
        cartNumber,
        SetCartNumber,
        handleRemoveCart,
        myCartProducts,
        SetMyCartProducts
    }
    return (
        <AntraMartContext.Provider value={provider}>
            {children}
        </AntraMartContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.any
};
export default ContextProvider;


