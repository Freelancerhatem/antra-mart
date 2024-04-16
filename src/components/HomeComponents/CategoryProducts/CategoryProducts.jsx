/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import useProducts from "../../../Hooks/useProducts/useProducts";
import ProductsCard from "../../../common/ProductsCard/ProductsCard";
import { products } from "./products";

const CategoryProducts = ({AllProducts}) => {
    const[newProducts,setNewProducts] = useState([]);
    const[trendingProducts,setTrendingProducts] = useState([]);
    const[topProducts,setTopProducts] = useState([]);
    const[bestProducts,setBestProducts] = useState([]);
    
    useEffect(()=>{
        const newProductsFilter = AllProducts.filter(data=>data.type =='new');
        const trendingProductsFilter = AllProducts.filter(data=>data.type =='trending');
        const topProductsFilter = AllProducts.filter(data=>data.type =='top');
        const bestProductsFilter = AllProducts.filter(data=>data.type =='best');
        setNewProducts(newProductsFilter);
        setTrendingProducts(trendingProductsFilter)
        setTopProducts(topProductsFilter)
        setBestProducts(bestProductsFilter)
    },[AllProducts])
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
    );
};

export default CategoryProducts;