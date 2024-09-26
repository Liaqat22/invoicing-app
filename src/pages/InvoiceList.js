import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { useProduct } from './Context';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function InvoiceList() {
    const { allproducts } = useProduct();

    const handleRemove = (id) => {
        const updatedData = allproducts?.filter((_ , i)=> i !== id)
        toast.success('Customer recored removed')
        localStorage.setItem('customerDetail', JSON.stringify(updatedData)); // Save to localStorage
        window.location.reload()
    }

    return (
        <>
        <div className='container-fluid'>
            <Typography variant='h4' className='m-3 text-center'color="success"><b>Invoice List</b></Typography>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-10'>
            <div className='mb-3' style={{textAlign:"end"}}>
          <NavLink to = "/form"><Button color='info' variant="contained">Add new invoice</Button></NavLink>
           </div>

           {allproducts?.length < 1 ? (<>
           <div className=' no-data' >
<Typography variant='h5' color="secondary">No Data to Show</Typography>
           </div>
                  
                        </>) : (<>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ background: "rgb(120 181 26)" }}>
                            <TableCell className='tableheadCell'>No.</TableCell>
                            <TableCell className='tableheadCell'>Invoice ID</TableCell>
                            <TableCell className='tableheadCell'>Customer Name</TableCell>
                            <TableCell className='tableheadCell'>Total Items Purchased</TableCell>
                            <TableCell className='tableheadCell'>Date</TableCell>
                            <TableCell className='tableheadCell'>Action</TableCell>
                        </TableRow>
                    </TableHead>

                       
                    <TableBody>
                            {allproducts?.map((p, i) => (
                            <TableRow key={i}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{p?.invoice}</TableCell>
                                <TableCell>{p?.customer}</TableCell>
                                <TableCell>{p?.products?.length}</TableCell>

                                <TableCell>{p?.date}</TableCell>
                                <TableCell>
                                    <NavLink to={`/invoicetable/${i}`}>
                                    <Button variant="contained" color='info'>view Details</Button>
                                    </NavLink>
                                    <Button variant="contained" color='error' className='mx-1' onClick={()=> {handleRemove(i)}}>Remove</Button>
                                    </TableCell>

                            </TableRow>
                        ))}
                       
                    </TableBody>
                </Table>
            </TableContainer>
                        </>)}
                </div>
            </div>
        </div>

           
        </>
    )
}

export default InvoiceList