import React, { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductContext from "../ProductContext";

const Navbar = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="Nav-Cont w-full bg-orange-300 text-slate-800">
            <div className="mx-auto my-0 flex max-w-5xl items-center justify-between px-3 py-2">
                <Link to="/" className="text-3xl font-semibold">
                    Wear
                </Link>
                <Link to="/checkout" className="flex items-center gap-1">
                    <AiFillShopping className="text-2xl" />
                    <span>{products?.length}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
