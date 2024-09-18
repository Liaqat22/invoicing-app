import React, { useState } from 'react';
import { TextField, Button,  Container,  Grid2 } from '@mui/material';
import { useProduct } from './Context';
import FormTableview from './FormTableview';
import { NavLink } from 'react-router-dom';

const ProductForm = () => {
  const [invoiceTo, setInvoiceTo] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [allproducts, setallProducts] = useProduct();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { product, quantity, price };

    // Append the new product to the existing products array
    const updatedProducts = {
      ...allproducts,
      products: [...(allproducts?.products || []), newProduct],
      customer: invoiceTo || allproducts.customer, // Keep existing customer name if none is entered
    };

    // Update the state with the new product
    setallProducts(updatedProducts);

    // Save to localStorage
    localStorage.setItem('customerDetail', JSON.stringify(updatedProducts));

    // Clear form fields after submission
    setProduct('');
    setQuantity('');
    setPrice('');
  };

  return (
    <>
      <div className='container-fluid'>

        <div className='row d-flex justify-content-center align-items-center'>
          <Container maxWidth="lg">
            <form onSubmit={handleSubmit} className='p-3 ' >
              <Grid2 container spacing={{ xs: 1.5, md: 3, }} columns={{ xs: 3, sm: 8, md: 12 }} display="flex" justifyContent="center" >
                <Grid2 size={5}>
                  <TextField
                    placeholder="Customer name"
                    variant="filled"
                    value={invoiceTo || allproducts?.customer || ' '} // Show current customer name or input value
                    onChange={(e) => setInvoiceTo(e.target.value)}
                    fullWidth
                    margin="normal"
                    required />
                </Grid2>

                <Grid2 size={5}>
                  <TextField
                    label="Enter Product"
                    variant="outlined"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    fullWidth
                    margin="normal"
                    required />
                </Grid2>

                <Grid2 size={5}>
                  <TextField
                    label="Enter Price"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    required />
                </Grid2>

                <Grid2 size={5}>
                  <TextField
                    label="Enter Quantity"
                    variant="outlined"
                    type="number"
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    fullWidth
                    required />
                </Grid2>

                <Grid2 size={6} sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="primary" type="submit" >
                    Submit
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </Container>
        </div>

        <div className='row d-flex  justify-content-evenly'>
          <Button variant="contained" color="primary" sx={{ width: "fit-content" }} onClick={() => {
            localStorage.removeItem("customerDetail");
            window.location.reload()
          }}> remove previous to add new invoice 
          </Button>

          <Button
            sx={{ width: "fit-content" }}
            variant="contained"
            color="secondary"
            type="button"
            className='mt-3'
            disabled={allproducts?.products?.length === 0} >
              <NavLink to="/" style={{textDecoration : "none" , color: "inherit"}}>Next</NavLink> 
          </Button>

        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-8'>
          <p>{allproducts?.customer}</p>
<FormTableview/>
          </div>
        </div>

        
      </div>
     

    </>
  );
};

export default ProductForm;
