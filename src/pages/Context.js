import React, { createContext, useContext, useState, useEffect } from 'react';

const productContext = createContext();

function ContextProvider({ children }) {
  const [allproducts, setallProducts] = useState([]);

  // Load the initial data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("customerDetail");
    const parseData = JSON.parse(data);
    if (parseData) {
      setallProducts(parseData); // Initialize with data from localStorage
    }
  }, []);

  // Function to add a new customer and their products
  const addCustomerData = (newCustomerData) => {
    setallProducts((prevData) => {
      const updatedData = [newCustomerData , ...(prevData || [])];
      localStorage.setItem('customerDetail', JSON.stringify(updatedData)); // Save to localStorage
      return updatedData;
    });
  };

  return (
    <productContext.Provider value={{ allproducts, setallProducts, addCustomerData }}>
      {children}
    </productContext.Provider>
  );
}

const useProduct = () => useContext(productContext);

export { ContextProvider, useProduct, productContext };
