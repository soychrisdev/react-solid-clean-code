import {useMutation, useQuery, useQueryClient} from "react-query";
import {getProducts, updateProduct} from "../../utils/api.ts";
import {IProducts} from "../../types/types.ts";
import {useDeletePost} from "../../hooks/productHooks.ts";
import {ChangeEvent} from "react";

export default function ProductListComponent() {

    const queryClient = useQueryClient();

    const {data, isLoading, error, isError} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })

    const {mutate} = useDeletePost()

    const handleClick = (id: number) => {
        mutate(id);
    }

    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries("products");
        },
    });

    if (isLoading) return <>Loading</>

    if (isError) return {error}

    if (!data) return <h1>NO PRODUCTOS</h1>
    if (data.length <= 0) return <h1>Debes crear un producto primero!</h1>

    return data.map((data: IProducts) => (
        <div key={data.id} className={'p-10 w-full bg-stone-700 rounded-2xl'}>
            <div className="flex justify-between">
                <h1 className="text-amber-400">{data.name} - {data.id}</h1>
                <input type="checkbox" checked={data.inStock} id={data.id.toString()}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => updateProductMutation.mutate({
                           ...data,
                           inStock: event.target.checked
                       })}/>
            </div>
            <h1>{data.description}</h1>
            <h1>{data.inStock ? 'En stock' : 'Sin stock'}</h1>
            <h1>{data.price}</h1>
            <div className="flex justify-between">
                <button className="bg-fuchsia-950 rounded p-2" onClick={() => handleClick(data.id)}>delete</button>
            </div>


        </div>
    ))


}