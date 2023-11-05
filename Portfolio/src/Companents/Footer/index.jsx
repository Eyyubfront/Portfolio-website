import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";
  import GitHubIcon from '@mui/icons-material/GitHub';
  import EmailIcon from '@mui/icons-material/Email';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import FacebookIcon from '@mui/icons-material/Facebook';
const Footer=()=>{
    return(
        <>
       
 <Box className="footercolorhight" height="171px" padding="20px" sx={{background:"linear-gradient(278deg, rgb(11, 63, 55) -7.03%, rgb(203, 141, 98) 136.33%);"}}>
<Stack alignItems="center" flexDirection="column" gap="15px">

          <Box border="1px solid black" width="250px">

          </Box>
          <Typography fontFamily='monospace' variant="h4" color="white">
            Bayramov Eyyub
          </Typography>
          <Box border="1px solid black" width="250px">

</Box>
</Stack>



<Stack className="fotersicon" flexDirection="row" gap="10px">
    <a  href="https://github.com/Eyyubfront?tab=repositories">

    <Box >
    <GitHubIcon sx={{color:"black"}}/>
    </Box>
    </a>
    <a href="https://mail.google.com/mail/u/0/#sent">

    <Box  >
        <EmailIcon sx={{color:"black"}}  />
    </Box>
    </a>
    <a href="https://www.facebook.com/lebili/">

    <Box  >
        <FacebookIcon sx={{color:"black"}} />
    </Box>
    </a>
</Stack>

<Typography fontFamily="cursive" className="junior" position="absolute" padding="0 10px" right="0" variant="h6" marginTop="15px" color="white">
    Junior Frontend Developer
</Typography>

        </Box>
        </>
    )
}

export default Footer