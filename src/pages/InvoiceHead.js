import { Typography } from '@mui/material'
import React from 'react'
import { useProduct } from './Context'

function InvoiceHead() {
  const [ allproducts ] = useProduct()

  return (
    <>
    <div className='container'>
        <div className='row d-flex justify-content-between align-items-center '>
        <div className='col-md-5' style={{textAlign:"start"}}>
                        <Typography variant='h5'>Invioce to :</Typography>
                        <Typography variant='h5' sx={{ color: "rgb(120 181 26)", fontWeight: "700" }}>{allproducts?.customer}</Typography>
                        <Typography variant='body2'>Company name : Eman bakers</Typography>
                        <Typography variant='body2'>Email : abc@gmail.com</Typography>
                        <Typography variant='body2'>Phone : 12345678911</Typography>

                    </div>

                    {/* col2 */}
                    <div className='col-md-5 ' style={{textAlign:'end'}}>
                        <Typography variant="h3"><b>Invioce</b></Typography>
                        <Typography variant='body1'>Invioce # : 522</Typography>
                        <Typography variant='body1'>Date : {new Date().toLocaleDateString({
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</Typography>
                    </div>
        </div>
    </div>
    </>
  )
}

export default InvoiceHead