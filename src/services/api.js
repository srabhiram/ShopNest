import axios from "axios";

const url = "https://fakestoreapi.com/";

// For all products
export const AllProductsApi = async ()=>{
    return await axios.get(`${url}products`);
}