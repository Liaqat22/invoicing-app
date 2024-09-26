import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ProductTable({dataGet}) {

  // Flatten all products and calculate their total
  const mapPricing = dataGet?.products?.map(p => p?.price*p?.quantity)

  const total = mapPricing?.reduce((a,b)=> a+b)
  // Discount and tax logic
  // const discountPercentage = 23; // 23% discount
  const discountPercentage = 0; 
  // const taxPercentage = 10; // 10% tax
  // const discountAmount = (subtotal * discountPercentage) / 100;
  const discountAmount = 0;
  // const taxAmount = (subtotal * taxPercentage) / 100;
  // const total = subtotal - discountAmount + taxAmount;
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
            {dataGet?.products?.map((prod, index) => (
             
<TableRow key={index+1}>

  <TableCell>{index + 1}</TableCell>
  <TableCell>{prod.product}</TableCell>
  <TableCell>{prod.price}</TableCell>
  <TableCell>{prod.quantity}</TableCell>
  <TableCell>{prod.price * prod.quantity}</TableCell>

</TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className='container'>
        <div className='row d-flex justify-content-between paymentTotal-table'>
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
        {/* <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell align="right">{subtotal?.toFixed(2)}</TableCell>
        </TableRow> */}
        <TableRow>
          <TableCell>Discount ({discountPercentage}%)</TableCell>
          <TableCell >- {discountAmount?.toFixed(2)}</TableCell>
        </TableRow>
        {/* <TableRow>
          <TableCell>Tax ({taxPercentage}%)</TableCell>
          <TableCell align="right">+ {taxAmount.toFixed(2)}</TableCell>
        </TableRow> */}
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'greenyellow' }}>Total</TableCell>
          <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: 'greenyellow' }}>{total}</TableCell>
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
