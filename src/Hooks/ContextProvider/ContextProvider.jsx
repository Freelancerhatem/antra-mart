import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

export const AntraMartContext = createContext({});
const googleProvider = new GoogleAuthProvider();
const ContextProvider = ({ children }) => {
  const [cartNumber, SetCartNumber] = useState(0);
  const [myCartProducts, SetMyCartProducts] = useState([]);
  // login part
  const [loginUser, setLoginUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myCartProductsArray =
      JSON.parse(localStorage.getItem("myCart")) || [];
    SetCartNumber(myCartProductsArray.length);
    SetMyCartProducts(myCartProductsArray);
  }, []);

  const handleRemoveCart = (id) => {
    const updatedCartProducts = myCartProducts.filter(
      (products) => products._id !== id
    );
    if (updatedCartProducts) {
      localStorage.setItem("myCart", JSON.stringify(updatedCartProducts));
      SetCartNumber(updatedCartProducts.length);
      SetMyCartProducts(updatedCartProducts);
    }
  };

  // create user
  const handleCreateUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleLoginUser = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithRedirect(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
      setLoginUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  

  const provider = {
    cartNumber,
    SetCartNumber,
    handleRemoveCart,
    myCartProducts,
    SetMyCartProducts,
    loading,
    loginUser,
    handleCreateUser,
    handleLoginUser,
    handleGoogleLogin,
  };
  return (
    <AntraMartContext.Provider value={provider}>
      {children}
    </AntraMartContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
export default ContextProvider;
