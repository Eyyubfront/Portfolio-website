import Footer from "../Footer"
import Header from "../Header"
import {
    Box  } from "@mui/material";
    import bodytwo from "../../assets/bodytwo.jpg"
const PageContainer=({children})=>{
    return(
        <>
        <Box sx={{backgroundImage:`url(${bodytwo})`,width:"100%"}} >

        <Header/>
        {children}

        <Footer/>
        </Box>
        
        </>
    )
}
export default PageContainer