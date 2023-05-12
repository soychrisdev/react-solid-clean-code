import axios from "axios";
import {IPostProducts, IProducts} from "../types/types.ts";

const productsApi = axios.create({
    baseURL: "http://localhost:3000/products",
});

export const updateProduct = (product: IProducts) =>
    productsApi.put(`/${product.id}`, product);
export const getProducts = async () => {
    const res = await productsApi.get('/')
    return res.data;
}
export const createProduct = (product: IPostProducts) => productsApi.post("/", product);

export const deleteProduct = async (id: number) => {
    await productsApi.delete(`/${id}`)
}
