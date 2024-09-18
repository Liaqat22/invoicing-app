import { Typography, Button } from '@mui/material';
import React, { useRef } from 'react';
import ProductTable from './ProductTable';
import InvoiceHead from './InvoiceHead';
import { useReactToPrint } from 'react-to-print';

function Home() {
    const componentRef = useRef();

    // Function to handle print
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Invoice',
    });

    return (
        <>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center align-items-center'  ref={componentRef}>
                    <div className='col-md-10'>
                        <InvoiceHead />
                        <ProductTable />
                    </div>

                    <div className='col-md-10'>
                        <div className='row d-flex justify-content-between align-items-center'>
                           
                            <div className='col-md-4' >
                                <Typography variant='body1' sx={{ color: "rgb(120 181 26)", fontWeight: "600" }}>
                                    Terms & Conditions
                                </Typography>
                                <Typography variant='body2' sx={{ textAlign: "justify" }}>
                                    Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices.
                                </Typography>
                            </div>

                            <div className='col-md-4 ' style={{ textAlign: "end" }}>
                                <Typography variant='body2' >Author Signature  _________</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='printBtn text-center m-3'>
                    {/* Button to trigger printing */}
                    <Button variant="contained" color="secondary" onClick={handlePrint}>
                        Print Invoice
                    </Button>
                </div>
            </div>


        </>
    );
}

export default Home;
