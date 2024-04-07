import ProductsCard from "../../../common/ProductsCard/ProductsCard";
import { products } from "./products";

const CategoryProducts = () => {
    return (
        <div className="grid grid-cols-4  gap-5 px-32 py-5">
            <div className=" flex flex-col gap-3 border p-2 rounded">
                <h1 className="text-xl font-bold">Best products</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3 border p-2 rounded">
                <h1 className="text-xl font-bold">Best products</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3 border p-2 rounded">
                <h1 className="text-xl font-bold">Best products</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
            <div className=" flex flex-col gap-3 border p-2 rounded">
                <h1 className="text-xl font-bold">Best products</h1>
                {
                    products?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;