import './App.css';
import {  Typography } from "@mui/material"
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductForm from './pages/ProductForm';

function App() {
  return (
    < >
      <Typography variant="h5" sx={{textAlign:"center" , fontWeight:"bold"}} className='mt-3'>React Inviocing App</Typography>
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
