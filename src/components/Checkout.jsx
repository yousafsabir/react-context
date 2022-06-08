import React, { useContext } from "react";
import ProductContext from "../ProductContext";

const Checkout = () => {
    const { products, removeProduct } = useContext(ProductContext);
    return (
        <div className="Checkout-Cont my-0 mx-auto max-w-5xl py-8 px-3">
            <h2 className="mb-4 text-3xl font-semibold">Checkout</h2>
            {products.map((product, index) => {
                return (
                    <div key={index} className="mb-10">
                        <h3 className="text-2xl">{product?.title}</h3>
                        <span>{product?.price}</span>
                        <button
                            className="ml-4 rounded-md bg-slate-200 px-2 py-1"
                            onClick={() => removeProduct(index)}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Checkout;
