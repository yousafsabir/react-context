import React from "react";
import { AiFillShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="Nav-Cont w-full bg-orange-300 text-slate-800">
            <div className="max-w-5xl mx-auto my-0 px-3 py-2 flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Wear</h1>
                <div className="flex items-center gap-1">
                    <AiFillShopping className="text-2xl" />
                    <span>0</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
