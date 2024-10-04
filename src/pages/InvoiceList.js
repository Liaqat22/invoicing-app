import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Card, CardMedia } from '@mui/material';
import { useProduct, useProfile } from './Context';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function InvoiceList() {
    const { allproducts } = useProduct();
    const { profile } = useProfile()

    const handleRemove = (id) => {
        const updatedData = allproducts?.filter((_, i) => i !== id)
        toast.success('Customer recored removed')
        localStorage.setItem('customerDetail', JSON.stringify(updatedData)); // Save to localStorage
        window.location.reload()
    }

    return (
        <>
            <div className='container-fluid'>
                <Typography variant='h4' className='m-3 text-center' color="success"><b>Invoice List</b></Typography>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-10'>
                        <div className='mb-3' style={{ textAlign: "end" }}>
                            <NavLink to="/form" ><Button color='info' variant="contained" className="m-1">Add new invoice</Button></NavLink>
                            {profile !== null ?
                                <NavLink to="/profile"  ><Button color='success' variant="contained" className="m-1">Profile</Button></NavLink> :
                                <NavLink to="/profileform"  ><Button color='secondary' variant="contained" className="m-1">Profile required</Button></NavLink>
                            }
                        </div>

                        {allproducts?.length < 1 ? (<>
                            <Card sx={{ maxWidth: 345, margin: '20px auto' }} >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://handsontek.net/images/SharePoint/Shortcuts/hero.png" // Placeholder image URL
                                    alt="No Data"
                                />
                                <Typography variant='h5' color="error" m={2}>No data is added yet</Typography>
                            </Card>

                        </>) : (<>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead >
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
                                            <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{p?.invoice}</TableCell>
                                                <TableCell>{p?.customer}</TableCell>
                                                <TableCell>{p?.products?.length}</TableCell>
                                                <TableCell>{p?.date}</TableCell>
                                                <TableCell className='tableheadCell'>
                                                    {profile !== null ? <> <NavLink to={`/invoicetable/${i}`}>
                                                        <Button variant="contained" color='info' className='m-1'>View</Button>
                                                    </NavLink>
                                                        <Button
                                                            variant="contained"
                                                            color='error'
                                                            className='m-1'
                                                            onClick={() => { handleRemove(i) }}
                                                            aria-label={`Remove invoice ${p?.invoice}`} // Added accessibility label
                                                        >
                                                            Remove
                                                        </Button></> :
                                                        <NavLink to="/profileform"><Button color='secondary' variant="contained">Profile required</Button></NavLink>
                                                    }

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
