import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { ProductProvider } from "./ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <ProductProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </Router>
            </ProductProvider>
        </div>
    );
}

export default App;
