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
  import front from "../../assets/front.jpg"
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import bodypohoto from "../../assets/bodyback.jpg"
const Home=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <PageContainer>
            <Typography className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="30px" marginLeft="30px" variant="h3">
                Front- End Developer
            </Typography>
<Stack  className="vebphotoshome" margin="10px" alignItems="center" flexDirection="row" gap="30px">
<Box >
<div data-aos="zoom-out-left">
    <Typography fontFamily=" serif" variant="h4"  width="100%">
            Veb saytıma xoş gəldiniz. Burada siz mənim haqqımda məlumat öyrənə bilərsiniz. Cv-im , bacarıqlarım, layihələrim və sonda mənimlə əlaqə saxlaya bilərsiniz.
    </Typography>
</div>
</Box>
<div data-aos="flip-down">


<Box padding='10px' boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" marginTop="10px">
    <img className="personjunior"  src={front} alt="" />
</Box>
</div> 
</Stack>
   
        </PageContainer>
        
        </>
    )
}
export default Home