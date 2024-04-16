import { createContext } from "react";
import PropTypes from 'prop-types';
import useProducts from "../useProducts/useProducts";

export const AntraMartContext = createContext({});
const ContextProvider = ({ children }) => {
    
    
    
    const provider = {
        name:'hatem'
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


