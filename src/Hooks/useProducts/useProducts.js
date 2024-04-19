import useAxios from "../useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const useProducts = (query) => {
    const axiosLoader = useAxios();
    console.log('use',query)
    const{data:allProducts=[],isLoading,refetch:refetchAllProducts} = useQuery({
        queryKey:['allProducts'],
        queryFn:async()=>{
            
            const res = await axiosLoader.get(`/allProducts?category=${query}`)
            return res.data
        }
    });
    
    return[allProducts,isLoading,refetchAllProducts]
     
};

export default useProducts;