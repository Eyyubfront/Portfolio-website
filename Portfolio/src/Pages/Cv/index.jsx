import { Box, Typography } from "@mui/material"
import PageContainer from "../../Companents/PageContainer"
import cv from "../../assets/eb.jpeg"
const Cv=()=>{
    return(
        <>
        <PageContainer>
            <Typography className="cvs" marginLeft="30px" padding="15px" variant="h4">
                Cv
            </Typography>
            <Box>
                <img className="cvphoto" style={{width:"45%",marginLeft:"30%",padding:"5px"}} src={cv} alt="" />
            </Box>

        </PageContainer>
        
        </>
    )
}
export default Cv