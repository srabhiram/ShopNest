import axios from "axios";

const url = "https://fakestoreapi.com/";

// For all products
export const AllProducts = async ()=>{
    return await axios.get(`${url}products`);

}