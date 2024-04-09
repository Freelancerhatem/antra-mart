
import CountdownTimer from '../../../Utility/CountdownTimer';
import image from '../../../assets/images/products/shampoo.jpg'
import { newProduct } from './NewProduct';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Hotdeal = () => {

    return (
        <div className='px-32 '>
            <div>
                <div>
                    <h1 className='text-2xl font-bold'>Deal Of the day</h1>
                </div>
                <div className="grid grid-cols-2 justify-center items-center shadow-md px-10">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        rating
                        <h1 className='text-xl font-bold'>Lorem ipsum dolor, sit amet consectetur.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aspernatur in ab, alias quisquam, odio, nesciunt neque quam at facere eos deleniti. Culpa dolor sit dolore. Aperiam, mollitia. Voluptatum, numquam!</p>
                        <div className='flex gap-3'>
                            <h1 className='text-pink-500 font-bold'>$120</h1>
                            <h1 className='line-through text-gray-400 font-bold'>$180</h1>
                        </div>
                        <button className="btn">Buy Now!</button>
                        <div>
                            <div className='flex justify-between'>
                                <h1>Sold:20</h1>
                                <h1>Available:140</h1>
                            </div>
                            <div>
                                <progress className="progress progress-primary w-full" value="7" max="100"></progress>
                            </div>

                        </div>
                        <div>
                            <h2>The offer end in:</h2>
                            <CountdownTimer ></CountdownTimer>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1 className='text-2xl font-bold'>New Products</h1>
                    <div className='grid grid-cols-4 gap-5'>
                        {
                            newProduct.map((data, index) =>
                                <div key={index} className='shadow-xl flex flex-col'>
                                    <div>
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className='px-10'>
                                        <div>
                                            <h1 className='text-xl font-bold text-red-300'>{data.category}</h1>
                                        </div>
                                        <div>
                                            <h2>{data.title}</h2>
                                            <h2>{data.description}</h2>
                                        </div>
                                        <div>
                                            <Rating
                                                style={{ maxWidth: 70 }}
                                                value={3}
                                                readOnly
                                            />
                                            <div className='flex gap-3 font-bold'>
                                                <h2 className='text-pink-400'>{data.discountPrice + '$'}</h2>
                                                <h2 className='line-through'>{data.price + '$'}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div >

                </div>
            </div>
        </div>
    );
};

export default Hotdeal;