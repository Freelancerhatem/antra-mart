import useAxios from "../useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const useProducts = (query) => {
    const axiosLoader = useAxios();
    const{data:AllProducts=[],refetch:refetchAllProducts} = useQuery({
        queryKey:['allProducts'],
        queryFn:async()=>{
            const res = await axiosLoader.get(`/allProducts?type=${query}`)
            return res.data
        }
    });

    return[AllProducts,refetchAllProducts]
     
};

export default useProducts;