import './App.css'
import ProductPageComponent from "./components/products/ProductPage.tsx";

function App() {
    return (
        <div className="flex justify-center text-white text-2xl m-4">
            <div className={
                'grid grid-cols-1'
            }>
                <div className="bg-fuchsia-950 p-4 rounded-full">
                    <h1 className="text-white">React good practices - clean code architecture</h1>
                </div>
                <div className={'flex justify-center'}>
                    <ProductPageComponent/>
                </div>
            </div>
        </div>
    )
}

export default App
