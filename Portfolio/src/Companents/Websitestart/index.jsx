
import {  Box,  Button,Container,Stack,Typography, Grid, AppBar} from "@mui/material";
const Websitestart=()=>{
    return(
        <>
         <Stack className="websithome" gap="20px" marginTop="10%" marginLeft="30px" flexDirection="column">

<Typography  className="fronthome" color="white" fontFamily="Inter" variant="h5">
I am Eyyub Bayramov
            </Typography>


<div data-aos="zoom-out-left">
           
<Box className="websitetext">

    <Typography  sx={{fontFamily:"Monospace"}}  variant="h7" color="white"  width="70%">
    Welcome to my website! Here you can find the latest updates about me, my skills, achievements and successful projects. I invite you to contact me to learn more about my experience.
    </Typography>
</Box>


</div>

           </Stack>
        
        </>
    )
}
export default Websitestart