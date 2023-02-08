import { useState, useEffect } from "react";
import { getAllProducts, findAProduct, addAProduct, updateAProduct, deleteAProduct, buyAProduct } from "../services/product-service";
import log from "../services/logging-service";


const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // addAProduct(["PRD-0003", "Potato", "https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg", 10, 309616]);
        log.info(getAllProducts());
    }, []);

    return (
        <div class="px-6 py-6">
            <div class="mt-6 px-6 py-12 bg-gray-100 rounded-xl">
                <h2 class="mb-12 text-2xl text-center">Newest items</h2>

                <div class="grid grid-cols-3 gap-3">
                    {/* {
                        products.map(item => (
                            <div>
                                <a href="{% url 'item:detail' item.id %}">
                                    <div>
                                        <img src="{{ item.image.url }}" class="rounded-t-xl" />
                                    </div>

                                    <div class="p-6 bg-white rounded-b-xl">
                                        <h2 class="text-2xl">{item.name}</h2>
                                        <p class="text-gray-500">Price: {item.price}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
