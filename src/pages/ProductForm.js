import React, { useState } from 'react';
import { TextField, Button,  Container,  Grid2 } from '@mui/material';
import { useProduct } from './Context';
import FormTableview from './FormTableview';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [invoiceTo, setInvoiceTo] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);   // List of products for the customer
const navigate = useNavigate()

  const { addCustomerData} = useProduct();


  const addProduct = () =>{
    const newProduct = { product, quantity, price };  
    setProducts([ newProduct,...products]);

    setProduct('');
    setQuantity('');
    setPrice('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Append the new product to the existing products array
    const updatedProducts = {
      customer: invoiceTo,
      products: products,
      invoice : Math.floor(Math.random() * 473973),
      date : new Date().toLocaleDateString({
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) // Keep existing customer name if none is entered
    };

    // Update the state with the new product
    addCustomerData(updatedProducts);

toast.success('Customer recored added')
navigate('/')
    // Clear form fields after submission
    setProduct('');
    setQuantity('');
    setPrice('');
    setInvoiceTo('');
    setProducts([]);
  };
  

  return (
    <>
      <div className='container-fluid'>

        <div className='row d-flex justify-content-center align-items-center'>
          <Container maxWidth="lg">
            <form onSubmit={handleSubmit} className='p-3 ' >
              <Grid2 container spacing={{ xs: 1.5, md: 3, }} columns={{ xs: 3, sm: 8, md: 12 }} display="flex" justifyContent="center" alignItems="center">
                <Grid2 size={12}>
                  <TextField
                    placeholder="Customer name"
                    variant="filled"
                    value={invoiceTo } 
                    onChange={(e) => setInvoiceTo(e.target.value)}
                    fullWidth
                    margin="normal"
                    required />
                </Grid2>

                <Grid2 size={3}>
                  <TextField
                    label="Enter Product"
                    variant="outlined"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    fullWidth
                    margin="normal"
                     />
                </Grid2>

                <Grid2 size={3}>
                  <TextField
                    label="Enter Price"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                     />
                </Grid2>

                <Grid2 size={3}>
                  <TextField
                    label="Enter Quantity"
                    variant="outlined"
                    type="number"
                    margin="normal"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    fullWidth
                     />
                </Grid2>

                <Grid2 size={3} sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="success" onClick={addProduct} >
                    Add Product
                  </Button>
                </Grid2>
                <Grid2 size={3} sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="primary" type="submit" >
                    Submit record
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </Container>
        </div>

       
        <div className='row d-flex justify-content-center'>
          <div className='col-md-8'>
<FormTableview addedProducts = {products}/>
          </div>
        </div>

        
      </div>
     

    </>
  );
};

export default ProductForm;
