import useAxios from "../useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
    const axiosLoader = useAxios();
    
    const{data:NewProducts=[],isLoading,refetch:refetchAllProducts} = useQuery({
        queryKey:['allProducts'],
        queryFn:async()=>{
            
            const res = await axiosLoader.get(`/v1/allProducts`)
            return res.data
        }
    });
    
    return[NewProducts,isLoading,refetchAllProducts]
     
};

export default useProducts;