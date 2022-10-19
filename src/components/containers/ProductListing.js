import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../containers/redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error message : " + err);
      });
    console.log(response);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    // need to call fetch call inside useEffect
    fetchProducts();
  }, []); //[]

  console.log(products);

  return (
    <div className="ui grid container ">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
