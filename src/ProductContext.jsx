import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (title, price) => {
        setProducts((prevState) => [...prevState, { title, price }]);
    };

    const removeProduct = (index) => {
        setProducts((prevState) => {
            prevState.splice(index, 1);
            return [...prevState];
        });
    };
    return (
        <ProductContext.Provider
            value={{ products, addProduct, removeProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
