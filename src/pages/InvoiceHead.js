import { Typography } from '@mui/material'
import React from 'react'

function InvoiceHead({dataGet}) {

  return (
    <>
    <div className='container'>
        <div className='row d-flex justify-content-between align-items-center invoiceheadRow'>
        <div className='col-md-5' style={{textAlign:"start"}}>
                        <Typography variant='h5'>Invioce to :</Typography>
                        <Typography variant='h5' sx={{ color: "rgb(120 181 26)", fontWeight: "700" }}>{dataGet?.customer}</Typography>
                        <Typography variant='body2'>From : Eman bakers</Typography>
                        <Typography variant='body2'>Email : abc@gmail.com</Typography>
                        <Typography variant='body2'>Phone : 12345678911</Typography>

                    </div>

                    {/* col2 */}
                    <div className='col-md-5 ' style={{textAlign:'end'}}>
                        <Typography variant="h3"><b>Invioce</b></Typography>
                        <Typography variant='body1'>Invioce Id # : {dataGet?.invoice}</Typography>
                        <Typography variant='body1'>Date : {dataGet?.date}</Typography>
                    </div>
        </div>
    </div>
    </>
  )
}

export default InvoiceHead