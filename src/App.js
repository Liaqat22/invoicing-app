import './App.css';
import {  Typography } from "@mui/material"
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductForm from './pages/ProductForm';
import InvoiceList from './pages/InvoiceList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    < >
      <Typography variant="h5" sx={{textAlign:"center" , fontWeight:"bold"}} className='mt-3'>React Inviocing App</Typography>
     
        <ToastContainer autoClose = {2000}/>
      <Routes>
        <Route path='/' element={<InvoiceList />} />
        <Route path='/invoicetable/:id' element={<Home />} />
        <Route path='/form' element={<ProductForm />} />
        <Route path='*' element={"Page not found"} />
      </Routes>
    </>
  );
}

export default App;