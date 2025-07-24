import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./pages/Home/Dashboard";
import AllProduct from "./pages/Products/AllProduct";
import Category from "./pages/Products/Category";
import NotFound from "./components/NotFound";
import AddProducts from "./pages/Products/AddProducts";
import SubCategory from "./pages/Products/SubCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <LeftSidebar />
          <div className="content-page">
            <div className="content">
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/all-products" element={<AllProduct />}></Route>
                <Route path="/create-product" element={<AddProducts />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/sub-category" element={<SubCategory />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
        <RightSidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
