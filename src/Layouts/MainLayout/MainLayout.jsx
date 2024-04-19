import { Outlet } from "react-router-dom";
import Navbar from "../../components/HomeComponents/Navbar/Navbar";
import Footer from "../../components/HomeComponents/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;