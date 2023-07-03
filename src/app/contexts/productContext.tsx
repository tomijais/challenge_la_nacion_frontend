"use client";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { Productos } from "../interfaces/Product.interface";

const defaultValue: { productos: Productos; fetchProductos: () => void} = {
  productos: [],
  fetchProductos: () => {},
};

const ProductContext = createContext(defaultValue);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({
  children,
}: {
  children: any;
}): React.JSX.Element => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await axios.get("/api/products");
      setProductos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider value={{ productos, fetchProductos }}>
      {children}
    </ProductContext.Provider>
  );
};
