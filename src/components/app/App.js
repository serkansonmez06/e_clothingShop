import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../containers/ProductListing";
import ProductDetails from "../containers/ProductDetails";
import PageNotFound from "../containers/PageNotFound";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
