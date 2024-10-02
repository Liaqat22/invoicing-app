import React, { createContext, useContext, useState, useEffect } from 'react';

const productContext = createContext();
const profileContext = createContext()

function ContextProvider({ children }) {
  const [allproducts, setallProducts] = useState([]);

  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem('profileData');
    return storedProfile ? JSON.parse(storedProfile) : null; // Parse profile data if it exists
  });

  // Load the initial data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("customerDetail");
    const parseData = JSON.parse(data);
    if (parseData) {
      setallProducts(parseData); // form customer details
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profile));
  }, [profile]);

  // Function to add a new customer and their products
  const addCustomerData = (newCustomerData) => {
    setallProducts((prevData) => {
      const updatedData = [newCustomerData, ...(prevData || [])];
      localStorage.setItem('customerDetail', JSON.stringify(updatedData)); // Save to localStorage
      return updatedData;
    });
  };

  return (
    <>
      <profileContext.Provider value={{ profile, setProfile }}>
        <productContext.Provider value={{ allproducts, setallProducts, addCustomerData }}>
          {children}
        </productContext.Provider>
      </profileContext.Provider>


    </>
  );
}

const useProduct = () => useContext(productContext);
const useProfile = () => useContext(profileContext)

export { ContextProvider, useProduct, productContext, useProfile, profileContext };
