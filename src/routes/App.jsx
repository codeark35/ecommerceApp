import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import Listing from "../pages/Listing";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isHeaderFooterShow === true && <Header />}

          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route
              path="/product/:id"
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/cart" exact={true} element={<Cart />} />
            <Route path="/signIn" exact={true} element={<SignIn />} />
            <Route path="/signUp" exact={true} element={<SignUp />} />
          </Routes>
          {isHeaderFooterShow === true && <Footer />}

          {isOpenProductModal === true && <ProductModal />}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext };
