import PageContainer from "../../Companents/PageContainer"
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,
  } from "@mui/material";
  import front from "../../assets/ui.png"
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import bodypohoto from "../../assets/bodyback.jpg"
  import GitHubIcon from '@mui/icons-material/GitHub';
  import html from "../../assets/html.png"
  import css from "../../assets/csstwo.png"
  import js from "../../assets/js.png"
  import react from "../../assets/react.png"
const Home=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <PageContainer>
           
           <Stack>

<Typography color="black" className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="30px" marginLeft="30px" variant="h3">
               Salam , Mən Bayramov Eyyub
            </Typography>
<div data-aos="zoom-out-left">
            <Stack className="frontgit" flexDirection="row" alignItems="center" gap="10px">

<Typography color="black" className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="20px" marginLeft="30px" variant="h5">
                Front- End Developer
            </Typography>

            <a  href="https://github.com/Eyyubfront?tab=repositories">

<Box marginTop='20px' >
<GitHubIcon sx={{color:"black"}}/>
</Box>
</a>
            </Stack>

</div>
           </Stack>



<div className="le" data-aos="flip-down">


<Box  width="50%" boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" className="frontback" marginLeft="30%" padding='10px'  marginTop="6px">
    <img className="poht" style={{width:"100%"}}  src={front} alt="" />
</Box>
</div> 

   
        </PageContainer>
        
        </>
    )
}
export default Home