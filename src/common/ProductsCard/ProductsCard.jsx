
import PropTypes from 'prop-types';
const ProductsCard = ({ data }) => {
    return (
        <div className="flex bg-white h-44 shadow-md border  rounded-md items-center justify-center">
            <div className="">
                <img className="w-24" src={data.image} alt="" />
            </div>
            <div className="">
                <h1 className="font-bold">{data.name.slice(0, 20) + '...'}</h1>
                <div className="flex gap-5">
                    <h3 className="">{data.discount_price + '$'}</h3>
                    <h3 className="line-through">{data.regular_price + '$'}</h3>
                </div>
            </div>
        </div>
    );
};
ProductsCard.propTypes = {
    data: PropTypes.object.isRequired
};
export default ProductsCard;

