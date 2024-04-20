import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const AntraMartContext = createContext({});
const ContextProvider = ({ children }) => {

    const [cartNumber, SetCartNumber] = useState(0);
    useEffect(() => {
        const myCartProductsNumber = JSON.parse(localStorage.getItem('myCart')) || [];
        SetCartNumber(myCartProductsNumber.length)
    }, [])


    const provider = {
        cartNumber,
        SetCartNumber
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


