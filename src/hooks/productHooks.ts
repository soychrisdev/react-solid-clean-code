import {useMutation, useQueryClient} from "react-query";
import {createProduct, deleteProduct} from "../utils/api.ts";
import {IPostProducts} from "../types/types.ts";

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation((product: IPostProducts) => {
            return createProduct(product)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["products"])
            },
            onError: ({message}) => {
                console.log(message)
            }
        }
    )
}

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation((id: number) => {
            return deleteProduct(id)
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries((["products"]))
            },
            onError: ({message}) => {
                console.log(message)
            }
        }
    )
}