import React from 'react'
import { useProduct } from './Context'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

function FormTableview() {
    const [ allproducts,setallProducts ] = useProduct()

    const handleRemove = (id) =>{
        console.log('dsd')
const filteredProducts = allproducts?.products?.filter((_ , index) => id !== index)
setallProducts({
    ...allproducts,
    products: filteredProducts,
  });

  localStorage.setItem('customerDetail', JSON.stringify({
    ...allproducts,
    products: filteredProducts,
  }));
console.log(filteredProducts,'filter', id)
    }

  return (
    <>
     <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}  aria-label="simple table">
      
        <TableBody>
          {allproducts?.products?.map((p , i)=>(

            <TableRow key={i}>
            
              <TableCell > {i+1})  </TableCell>
              <TableCell >Product name : <b>{p.product}</b></TableCell>
              <TableCell >Price : <b>{p.price}</b></TableCell>
              <TableCell >Quantity : <b>{p.quantity}</b></TableCell>
              <TableCell >Total :  <b>{p.price*p.quantity}</b></TableCell>
              <TableCell>
                <Button variant='contained' onClick={()=>handleRemove(i)} color='error'>
                    Remove
                </Button>
              </TableCell>
              

            </TableRow>
          ))}
      
        </TableBody>
      </Table>
      </TableContainer>

    </>
  )
}

export default FormTableview