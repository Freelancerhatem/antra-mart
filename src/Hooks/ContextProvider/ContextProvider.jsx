import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const AntraMartContext = createContext({});
const ContextProvider = ({ children }) => {

    const [cartNumber, SetCartNumber] = useState(0);
    const[myCartProdcuts,SetmyCartProdcuts] = useState([])
    useEffect(() => {
        const myCartProductsNumber = JSON.parse(localStorage.getItem('myCart')) || [];
        SetCartNumber(myCartProductsNumber.length)
    }, []);

    useEffect(() => {
        const myCartProdcuts = JSON.parse(localStorage.getItem('myCart'));
        SetmyCartProdcuts(myCartProdcuts);
    }, [])

    const handleRemoveCart = (id) => {
        const targetCartIndex = myCartProdcuts.filter(products => products._id !== id);
        if (targetCartIndex) {
            
            localStorage.setItem('myCart', JSON.stringify(targetCartIndex));
            SetCartNumber(targetCartIndex.length)
        }

    }


    const provider = {
        cartNumber,
        SetCartNumber,
        handleRemoveCart
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


