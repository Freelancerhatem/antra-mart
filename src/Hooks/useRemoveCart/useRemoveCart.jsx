import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";

const useRemoveCart = (productID) => {
    const AxiosLoader = useAxios();
    const {data:RemoveCart={},isLoading,refetch:RemoveCartRefetch}  =useQuery({
        queryKey:['RemoveCart'],
        queryFn:async()=>{
            const res = AxiosLoader.delete(`/removeCart?productID=${productID}`)
            return res.data
        }
    })
    return [RemoveCart,isLoading,RemoveCartRefetch]
};

export default useRemoveCart;