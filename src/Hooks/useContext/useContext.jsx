import { createContext } from "react";


const useContext = ({ children }) => {
    const AntraMartContext = createContext(null);
    const provider = {

    }
    return (
        <AntraMartContext.Provider value={provider}>
            {children}
        </AntraMartContext.Provider>
    );
};

export default useContext;