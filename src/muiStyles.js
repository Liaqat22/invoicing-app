import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main : "#336389",
            light:"skyblue" 
        },
      
        
    },
    typography:{
        fontFamily : "Poppins,sans-serif",
        // fontFamily : "Montserrat,sans-serif",
    },
    components:{
        MuiTableCell:{
            styleOverrides:{
                root:{
                    textAlign : "center",
                }
            }
        },
       
    }
    
    
    
    
    
})