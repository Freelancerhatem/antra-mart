import banner from '../../../assets/images/banner-temp.jpg';
import cat1 from '../../../assets/images/products/watch-1.jpg';
import cat2 from '../../../assets/images/products/belt.jpg';
import cat3 from '../../../assets/images/products/clothes-1.jpg';
import cat4 from '../../../assets/images/products/shoe-2.jpg';
import PropTypes from 'prop-types';

const Banner = ({AllProducts,typeProduct,setType}) => {
    const categories = [
        {
            id: '1',
            title: 'watch',
            quantity: 300,
            image: cat1
        },
        {
            id: '2',
            title: 'belt',
            quantity: 1200,
            image: cat2
        },
        {
            id: '3',
            title: 'tshirts',
            quantity: 220,
            image: cat3
        },
        {
            id: '4',
            title: 'shoes',
            quantity: 100,
            image: cat4
        },
        {
            id: '5',
            title: 'jewelry',
            quantity: 100,
            image: cat4
        },
        {
            id: '6',
            title: 'toiletries',
            quantity: 100,
            image: cat4
        },



    ];
    
    return (
        <div className={`h-[calc(100vh-160px)] space-y-2  px-32`}>
            <div className='w-full h-[80%]'>
                <img className="w-full h-full rounded-md" src={banner} alt="" />
            </div>


            <div className='grid grid-cols-6 items-center w-full h-[20%] gap-5'>
                {
                    categories.map((category, index) =>
                        <div onClick={()=>setType(category.title)} className={`flex items-center h-1/2 justify-center shadow-xl border rounded-md gap-3 cursor-pointer hover:border-b-4 hover:border-b-red-500 ${typeProduct==category.title?'border-b-4 border-b-red-500':''}`} key={index}>
                            <div>
                                <img className='w-14' src={category.image} alt="" />
                            </div>
                            <div>
                                <h1>{category.title}</h1>
                            </div>
                        </div>)
                }
            </div>


        </div>
    );
};

Banner.propTypes = {
    AllProducts:PropTypes.array,
    typeProduct:PropTypes.string,
    setType:PropTypes.func
};
export default Banner;




