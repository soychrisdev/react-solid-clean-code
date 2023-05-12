import {useCreateProduct} from "../../hooks/productHooks.ts";

export default function ProductCreateComponent() {
    const {mutate} = useCreateProduct()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const {name, description, price} = Object.fromEntries(formData)
        mutate({name: name.toString(), description: description.toString(), inStock: false, price: price.toString()})
    }

    return (
        <div className="flex bg-white text-black p-4">
            <div className="grid grid-cols-1">

                <h1 className="flex justify-center">create products</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">name: </label>
                        <input type="text" id="name" name="name" placeholder="name of product"
                               className="bor"/>
                    </div>
                    <div>

                        <label htmlFor="price">price: </label>
                        <input type="text" id="price" name="price" placeholder="price of product"/>
                    </div>
                    <div>
                        <label htmlFor="name">description: </label>
                        <input type="text" id="description" name="description" placeholder="description of product"/>
                    </div>

                    <button className="bg-fuchsia-950 rounded p-2 hover:bg-fuchsia-700 text-white ">
                        create!
                    </button>
                </form>
            </div>
        </div>
    )


}