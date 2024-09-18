import React, { createContext, useContext, useState,useEffect } from 'react'

const productContext = createContext()


function ContextProvider({ children }) {
    const [allproducts, setallProducts] = useState({
        products : [],
        customer : ""
    })
    useEffect(() => {
      const data = localStorage.getItem("customerDetail")
      const parseData = JSON.parse(data)
      setallProducts(parseData)
    
      
    },[])
    
    
    return (
        <productContext.Provider value={ [allproducts, setallProducts]}>
            {children}
        </productContext.Provider>
    )
}
const useProduct = () => useContext(productContext)
export { ContextProvider, useProduct ,productContext}