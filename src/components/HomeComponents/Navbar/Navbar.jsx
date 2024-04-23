import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo_black.png'
import { useContext } from 'react';
import { AntraMartContext } from '../../../Hooks/ContextProvider/ContextProvider';
const Navbar = () => {
    const { cartNumber } = useContext(AntraMartContext)
    return (
        <div className="grid grid-rows-4 h-36 px-32 ">
            <div className="row-span-1 ">

            </div>


            {/* middle nav start*/}
            <div className="row-span-2  grid grid-cols-5 gap-5 items-center justify-between">
                <div className='col-span-1 '>
                    <img src={logo} className='w-20' alt="" />
                </div>

                <div className='flex items-center gap-3 col-span-3 w-full'>
                    <label className="input input-bordered flex   items-center gap-2 w-full">
                        <input type="text" className="grow w-full" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>

                </div>

                <div className='col-span-1'>
                    <div className='w-8 h-8 relative flex justify-center items-center'>

                        <label htmlFor="">
                            <Link to={'/product_cart'}>
                                <svg className="w-6 h-6 relative text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />

                                </svg>
                            </Link>

                        </label>
                        <h2 className='absolute -top-1/2 -right-1 w-6 h-6 flex justify-center items-center bg-red-400 rounded-full text-xl text-black'>{cartNumber}</h2>

                    </div>
                </div>
            </div>
            {/* middle nav end*/}


            <div className='flex justify-center items-center gap-5 row-span-1 '>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600" : ""
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600" : ""
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/registration"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-600" : ""
                    }
                >
                    Login
                </NavLink>

            </div>
        </div>
    );
};

export default Navbar;