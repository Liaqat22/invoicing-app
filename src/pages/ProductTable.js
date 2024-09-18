import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useProduct } from './Context';

function ProductTable() {
  const [allproducts] = useProduct();

  // Calculate the total for each product (price * quantity)
  const result = allproducts?.products?.map(p => p.price * p.quantity) || [];
  const subtotal = result?.reduce((a, b) => a + b, 0); // Sum of all products

  // Discount and tax logic
  const discountPercentage = 23; // 23% discount
  const taxPercentage = 10; // 10% tax
  const discountAmount = (subtotal * discountPercentage) / 100;
  const taxAmount = (subtotal * taxPercentage) / 100;

  const total = subtotal - discountAmount + taxAmount; // Final total after discount and tax

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "rgb(120 181 26)" }}>
              <TableCell className='tableheadCell'>No.</TableCell>
              <TableCell className='tableheadCell'>Product Description</TableCell>
              <TableCell className='tableheadCell'>Price</TableCell>
              <TableCell className='tableheadCell'>QTY.</TableCell>
              <TableCell className='tableheadCell'>Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allproducts?.products?.map((p, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{p.product}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.quantity}</TableCell>
                <TableCell>{p.price * p.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>
        <div className='col-md-5'>
  <TableContainer component={Paper}>
    <Table aria-label="payment info table">
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} sx={{ fontWeight: 'bold', bgcolor: "rgb(120 181 26)" }}>
            Payment Info
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Account No.</TableCell>
          <TableCell align="right">123456</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Account Name</TableCell>
          <TableCell align="right">abcd</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Branch Code</TableCell>
          <TableCell align="right">12346</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</div>


          <div className='col-md-5' style={{ textAlign: 'end' }}>
  <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableBody>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell align="right">{subtotal.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Discount ({discountPercentage}%)</TableCell>
          <TableCell >- {discountAmount.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tax ({taxPercentage}%)</TableCell>
          <TableCell align="right">+ {taxAmount.toFixed(2)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'greenyellow' }}>Total</TableCell>
          <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: 'greenyellow' }}>{total.toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</div>

        </div>
      </div>
    </>
  );
}

export default ProductTable;
