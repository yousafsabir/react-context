import React, { useContext } from "react";
import { FaTshirt } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import ProductContext from "../ProductContext";

const Products = () => {
    const { addProduct } = useContext(ProductContext);
    const items = [
        {
            title: "tshirt",
            price: "$10.0",
        },
        {
            title: "underwear",
            price: "$2.5",
        },
        {
            title: "shoes",
            price: "$30.0",
        },
        {
            title: "sweatshirt",
            price: "$15.0",
        },
        {
            title: "cap",
            price: "$5.0",
        },
        {
            title: "socks",
            price: "$10.0",
        },
        {
            title: "pant",
            price: "$80.0",
        },
        {
            title: "belt",
            price: "$10.0",
        },
    ];

    const handleAdd = (title, price) => {
        addProduct(title, price);
    };

    return (
        <div className="Products-Cont my-0 mx-auto max-w-5xl py-8 px-3">
            <div className="Products-Grid grid grid-cols-4 gap-6">
                {items.map((item, index) => {
                    return (
                        <article
                            key={index}
                            className="flex flex-col items-stretch gap-2"
                        >
                            <div className="flex h-48 w-full items-center justify-center bg-orange-300">
                                <FaTshirt className="text-8xl" />
                            </div>
                            <div className="flex items-start justify-between ">
                                <div>
                                    <h3>{item?.title}</h3>
                                    <p>{item?.price}</p>
                                </div>
                                <AiFillShopping
                                    className="cursor-pointer"
                                    onClick={() =>
                                        handleAdd(item?.title, item?.price)
                                    }
                                />
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
