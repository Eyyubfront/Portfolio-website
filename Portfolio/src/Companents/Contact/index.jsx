import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {  Box,  Button,Container,Stack,Typography, Grid, AppBar} from "@mui/material";
const Contact =()=>{
    return(
        <>
        <div id="contact">
<Stack className="contactboxed" gap="27px" marginTop="7%" marginLeft="30px">
<Typography className="contacttext" color="white" fontFamily="Inter" variant="h5">
    Contact
          </Typography>
          <Stack className="contactboxs" padding="15px" flexDirection="row"  marginLeft="20px" color="white" gap="15%">
          <Stack className="contac"  flexDirection="row" alignItems="center" gap="10px">
<a  href="https://wa.me/0706504565">
<Stack flexDirection="row" alignItems="center" gap="10px">
<Box color="white" padding="7px" width="40px" border="1px solid" >
<LocalPhoneIcon sx={{color:"white"}}/>
</Box> 
    <Typography fontFamily="Monospace " color="white" variant="h5">
       070-650-45-65
    </Typography>
</Stack>
</a>
</Stack>
<Stack className="contac"  flexDirection="row" alignItems="center" gap="10px">
<a  href="https://github.com/Eyyubfront?tab=repositories">
<Stack flexDirection="row" alignItems="center" gap="10px">
<Box color="white" padding="7px" width="40px" border="1px solid" >
<GitHubIcon sx={{color:"white"}}/>
</Box>
    <Typography fontFamily="Monospace " color="white" variant="h5">
        Eyyubfront
    </Typography>
</Stack>
</a>
</Stack>
<Stack className="contac"  flexDirection="row" alignItems="center" gap="10px">
<a  href="mailto:eyyubbayramov811@gmail.com">
<Stack flexDirection="row" alignItems="center" gap="10px">
<Box color="white" padding="7px" width="40px" border="1px solid" >
<EmailIcon sx={{color:"white"}}/>
</Box>
    <Typography className="gmailtext" fontFamily="Monospace " color="white" variant="h5">
       eyyubbayramov811@gmail.com
    </Typography>
</Stack>
</a>
</Stack>
</Stack>         
</Stack>
</div>
        </>
    )
}
export default Contact