import axios from "axios";


const AxiosLoader = axios.create({
    baseURL:'http://localhost:5000'
    
});


const useAxios = () => {
    return AxiosLoader
    
};

export default useAxios;