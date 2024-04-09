
import useProducts from "../../../Hooks/useProducts/useProducts";
import ProductsCard from "../../../common/ProductsCard/ProductsCard";
import { products } from "./products";

const CategoryProducts = () => {
    const [AllProducts] = useProducts();
    console.log(AllProducts)
    return (
        <div className="grid grid-cols-4  gap-5 px-32 py-5">
            <div className=" flex flex-col gap-3  p-2 rounded">
                <h1 className="text-xl font-bold">New Arrivals</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3  p-2 rounded">
                <h1 className="text-xl font-bold">Trending Now</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3  p-2 rounded">
                <h1 className="text-xl font-bold">Top Rated</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3  p-2 rounded">
                <h1 className="text-xl font-bold">Best Sellers</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;