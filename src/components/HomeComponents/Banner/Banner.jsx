import banner from '../../../assets/images/banner-temp.jpg';
import cat1 from '../../../assets/images/products/watch-1.jpg';
import cat2 from '../../../assets/images/products/belt.jpg';
import cat3 from '../../../assets/images/products/clothes-1.jpg';
import cat4 from '../../../assets/images/products/shoe-2.jpg';
const Banner = () => {
    const categories = [
        {
            id: '1',
            title: 'Watch',
            quantity: 300,
            image: cat1
        },
        {
            id: '2',
            title: 'Belt',
            quantity: 1200,
            image: cat2
        },
        {
            id: '3',
            title: 'Cloth',
            quantity: 220,
            image: cat3
        },
        {
            id: '4',
            title: 'Shoes',
            quantity: 100,
            image: cat4
        },
        {
            id: '4',
            title: 'Shoes',
            quantity: 100,
            image: cat4
        },
        {
            id: '4',
            title: 'Shoes',
            quantity: 100,
            image: cat4
        },
        {
            id: '4',
            title: 'Shoes',
            quantity: 100,
            image: cat4
        },
        {
            id: '4',
            title: 'Shoes',
            quantity: 100,
            image: cat4
        },


    ]
    return (
        <div className={`h-[calc(100vh-160px)] space-y-2  px-32`}>
            <div className='w-full h-[80%]'>
                <img className="w-full h-full rounded-md" src={banner} alt="" />
            </div>


            <div className='grid grid-cols-8 items-center w-full h-[20%] gap-5'>
                {
                    categories.map((category, index) =>
                        <div className='flex items-center h-1/2 justify-center shadow-xl gap-3 cursor-pointer hover:border-b-4 hover:border-red-500' key={index}>
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

export default Banner;