/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductsCard from "../../../common/ProductsCard/ProductsCard";

const CategoryProducts = ({ allProducts, loadingFetchData, typeProduct }) => {
    const [newProducts, setNewProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [topProducts, setTopProducts] = useState([]);
    const [bestProducts, setBestProducts] = useState([]);

    useEffect(() => {
        const newProductsFilter = allProducts.filter(data => data.type == 'new');
        const trendingProductsFilter = allProducts.filter(data => data.type == 'trending');
        const topProductsFilter = allProducts.filter(data => data.type == 'top');
        const bestProductsFilter = allProducts.filter(data => data.type == 'best');
        setNewProducts(newProductsFilter);
        setTrendingProducts(trendingProductsFilter)
        setTopProducts(topProductsFilter)
        setBestProducts(bestProductsFilter)
    }, [allProducts]);
    // console.log('category', allProducts)

    if (loadingFetchData) {
        return (
            <div className="w-screen h-[50vh] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <p>Loading</p>
                    <div>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-md"></span>
                    </div>
                </div>
            </div>
        )
    }
    else if (allProducts[0].category === typeProduct) {
        return (

            <div className="grid grid-cols-4  gap-5 px-32 py-5">
                <div className=" flex flex-col gap-3  p-2 rounded">
                    <h1 className="text-xl font-bold">New Arrivals</h1>
                    {
                        newProducts?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                    }
                </div>
                <div className=" flex flex-col gap-3  p-2 rounded">
                    <h1 className="text-xl font-bold">Trending Now</h1>
                    {
                        trendingProducts?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                    }
                </div>
                <div className=" flex flex-col gap-3  p-2 rounded">
                    <h1 className="text-xl font-bold">Top Rated</h1>
                    {
                        topProducts?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                    }
                </div>
                <div className=" flex flex-col gap-3  p-2 rounded">
                    <h1 className="text-xl font-bold">Best Sellers</h1>
                    {
                        bestProducts?.map((data, index) => <ProductsCard key={index} data={data}></ProductsCard>)
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="w-screen h-[50vh] flex justify-center items-center">
                <p className="text-3xl font-bold">No Products</p>
            </div>
        )
    }


};

export default CategoryProducts;