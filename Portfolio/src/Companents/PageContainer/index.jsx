import Footer from "../Footer"
import Header from "../Header"
import {
    Box  } from "@mui/material";
    import mg from "../../assets/bag.png"
const PageContainer=({children})=>{
    return(
        <>
        <Box sx={{backgroundImage:`url(${mg})`,backgroundSize:"cover",width:"100%"}} >

        <Header/>
        {children}

        <Footer/>
        </Box>
        
        </>
    )
}
export default PageContainer