import ProductListComponent from "./ProductList.tsx";
import ProductCreateComponent from "./ProductCreate.tsx";


export default function ProductPageComponent() {

    return (
        <div>
            <h1>ProductPage</h1>
            <ProductCreateComponent/>
            <ProductListComponent/>
        </div>
    )
}