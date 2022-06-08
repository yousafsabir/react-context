import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
