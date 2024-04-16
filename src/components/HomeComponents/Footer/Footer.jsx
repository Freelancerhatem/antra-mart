
const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <div className="bg-[#282727] h-[50vh]  text-white">
            <div className=" grid grid-cols-4 px-32 h-[80%]">
                <div className=" space-y-5 py-10">
                    <div className="relative w-48">
                        <h1 className="text-xl font-bold">Popular Categories</h1>
                        <span className="absolute bg-red-400 w-1/2 h-[1px]"></span>
                    </div>
                    <div className="list-none">
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </div>
                </div>
                <div className=" space-y-5 py-10">
                    <div className="relative w-48">
                        <h1 className="text-xl font-bold">Popular Categories</h1>
                        <span className="absolute bg-red-400 w-1/2 h-[1px]"></span>
                    </div>
                    <div className="list-none">
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </div>
                </div>
                <div className=" space-y-5 py-10">
                    <div className="relative w-48">
                        <h1 className="text-xl font-bold">Popular Categories</h1>
                        <span className="absolute bg-red-400 w-1/2 h-[1px]"></span>
                    </div>
                    <div className="list-none">
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </div>
                </div>
                <div className=" space-y-5 py-10">
                    <div className="relative w-48">
                        <h1 className="text-xl font-bold">Popular Categories</h1>
                        <span className="absolute bg-red-400 w-1/2 h-[1px]"></span>
                    </div>
                    <div className="list-none">
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                        <li>Links</li>
                    </div>
                </div>
            </div>
            <hr className="border-dashed" />
            <div className="h-[20%] flex items-end py-2 justify-center">
                <h1 className="">All Rights Reserved By &copy; Antra Mart {year}</h1>
            </div>
        </div>
    );
};

export default Footer;