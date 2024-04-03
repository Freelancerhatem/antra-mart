import banner from '../../../assets/images/banner-temp.jpg'
const Banner = () => {
    const categories = [
        {
            id: '1',
            title: 'title1',
            quantity: 20,
            image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-blue-dress-vector-png-image_6889320.png'
        },
        {
            id: '2',
            title: 'title2',
            quantity: 20,
            image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-blue-dress-vector-png-image_6889320.png'
        },
        {
            id: '3',
            title: 'title3',
            quantity: 20,
            image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-blue-dress-vector-png-image_6889320.png'
        },
        {
            id: '4',
            title: 'title4',
            quantity: 20,
            image: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-blue-dress-vector-png-image_6889320.png'
        },
    ]
    return (
        <div className={`h-[calc(100vh-160px)] space-y-2  px-32`}>
            <div className='w-full h-[80%]'>
                <img className="w-full h-full rounded-md" src={banner} alt="" />
            </div>

            <div className='grid grid-cols-4 h-[20%] gap-5 '>
                {
                    categories.map(data => <div key={data.id} className='px-2 relative rounded-md bg-gray-600 grid grid-cols-3 gap-3 items-center w-full h-full'>
                        <div className=' bg-gray-200  rounded-md col-span-1'>
                            <img className='' src={data.image} alt="" />
                        </div>
                        <div className='col-span-2 '>
                            <h1 className='text-2xl font-bold'>{data.title}</h1>
                            <button className=" text-red-400">see all</button>
                        </div>
                        <div className=' col-span-1 absolute top-2 right-2'>
                            <h3>{data.quantity} pcs</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Banner;