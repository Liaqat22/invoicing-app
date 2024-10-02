import React from 'react'
import { Button, Card, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'

function FormTableview({ addedProducts }) {

  const handleRemove = (id) => {
    const filteredProducts = addedProducts?.filter((_, index) => id !== index)
    window.location.reload()

    console.log(filteredProducts, 'filter', id)
  }

  return (
    <>

      {addedProducts?.length < 1 ? (<>
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

            <TableBody>
              {addedProducts?.map((prod, i) => (

                <TableRow key={i + 1}>

                  <TableCell > {i + 1})  </TableCell>
                  <TableCell >Product name : <b>{prod.product}</b></TableCell>
                  <TableCell >Price : <b>{prod.price}</b></TableCell>
                  <TableCell >Quantity : <b>{prod.quantity}</b></TableCell>
                  <TableCell >Total :  <b>{prod.price * prod.quantity || 0}</b></TableCell>
                  <TableCell>
                    <Button variant='contained' onClick={() => handleRemove(i)} color='error'>
                      Remove
                    </Button>
                  </TableCell>
                  
                </TableRow>


              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </>)}
    </>
  )
}

export default FormTableview