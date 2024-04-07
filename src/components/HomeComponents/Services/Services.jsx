import image from '../../../assets/images/banner-3.jpg';
import image2 from '../../../assets/images/products/1.jpg'
const Services = () => {
    return (
        <div className="grid grid-cols-10 h-screen px-32 py-20 gap-3">
            <div className='col-span-3 p-10 bg-white rounded-md h-full w-full shadow-xl border mx-auto'>

                <h1 className='text-xl font-bold text-center'>Testimonials</h1>
                <div className=' flex flex-col items-center text-center'>
                    <div>
                        <img className='w-20 h-20 rounded-full p-2' src={image2} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Name of user</h1>
                        <h3>Chief Executive</h3>
                    </div>

                    <div className='mt-10'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, numquam quam. Perspiciatis omnis non ducimus molestias sequi mollitia tempore dolores.</p>
                    </div>
                </div>

            </div>

            <div style={{ backgroundImage: `url(${image})` }} className="col-span-4  bg-center bg-cover flex justify-center items-center">
                <div className='bg-[#0000006f] h-full w-full flex justify-center items-center rounded-md'>
                    <div>
                        <h1 className='text-xl font-bold text-center'>We are apart compare to</h1>
                        <p className='text-center text-xl font-bold'>Other</p>
                    </div>
                </div>
            </div>

            <div className="col-span-3 bg-white w-full shadow-xl mx-auto border rounded-md p-10 ">
                <div>
                    <h1 className='text-xl font-bold text-center'>Our Services</h1>
                </div>
                <div className='space-y-3 mt-10 flex flex-col'>
                    <div className='flex flex-col justify-center items-center gap-3 text-center'>
                        <h2 className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>icon</h2>
                        <div>
                            <h3 className='text-lg font-bold'>Fast Delivery</h3>
                            <p className=' text-gray-600 text-xs'>Within 3 Days</p>
                        </div>
                    </div>
                    <div className='flex  flex-col justify-center items-center gap-3 text-center'>
                        <h2 className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>icon</h2>
                        <div>
                            <h3 className='text-lg font-bold'>Fast Delivery</h3>
                            <p className=' text-gray-600 text-xs'>Within 3 Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;