
import {  Box,  Button,Container,Stack,Typography, Grid, AppBar} from "@mui/material";
import front from "../../assets/front-end-developer-resume-example-and-guide-header.png"
const Websitestart=()=>{
    return(
        <>
        <Stack className="websitestartphoto" alignItems="center" padding="10px" flexDirection="row">

         <Stack className="websithome" gap="20px" marginTop="30px" marginLeft="30px" flexDirection="column">

<Typography  className="fronthome" color="white" fontFamily="Inter" variant="h5">
I am Eyyub Bayramov
            </Typography>


<div data-aos="zoom-out-left">
           
<Box className="websitetext">

    <Typography  sx={{fontFamily:"Monospace"}}  variant="h7" color="white" >
    Welcome to my website! Here you can find the latest updates about me, my skills, achievements and successful projects. I invite you to contact me to learn more about my experience.
    </Typography>
</Box>



</div>



           </Stack>
<Box marginTop="10%" padding="10px" >
    <img className="frontwebsitepht" style={{width:"450px"}} src={front} alt="" />
</Box>
        </Stack>
        
        </>
    )
}
export default Websitestart