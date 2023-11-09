import PageContainer from "../../Companents/PageContainer"
import { Typography,Box, Stack } from "@mui/material"
import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import arch from "../../assets/arch.jpg"
  import coper from "../../assets/coper.jpg"
  import travels from "../../assets/travels.jpg"
  import texnikamega from "../../assets/texnikamega.jpeg"
  import musicgaleyr from "../../assets/musicgaleyr.jpg"
const Projects=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <PageContainer>
       
<Typography  className="fronthome" marginLeft="30px" marginTop="20px" variant="h4" >
   Proyektlərim
</Typography>
<Stack className="projectlineone" padding="30px" flexDirection="row" gap="10%" alignItems="center">

<a href="https://global-travel-project.vercel.app/">

<Box padding="10px"  className="travelbox" width="320px" marginTop="10px"  boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" >
<div data-aos="zoom-in">
<img style={{width:"100%"}} src={travels} alt="" />
<Typography color="black" textAlign="center" variant="h5" fontFamily="serif">
    Global-travel
</Typography>
</div>
</Box>
</a>

<a href="https://mega-texnika.netlify.app/">

<Box height="280px" padding="10px"  className="megabox" width="400px" marginTop="10px"  boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" >
<div data-aos="zoom-in">
<img style={{width:"100%"}} src={texnikamega} alt="" />
<Typography color="black" textAlign="center" variant="h5" fontFamily="serif">
Mega-Texnika
</Typography>
</div>
</Box>
</a>

<a href="https://music-galerya-game.vercel.app/">

<Box   padding="10px" className="musicbox" width="100%" marginTop="10px"  boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" >
<div data-aos="zoom-in">
<img style={{width:"100%"}} src={musicgaleyr} alt="" />
<Typography color="black" textAlign="center" variant="h5" fontFamily="serif">
Music Galery
</Typography>
</div>
</Box>
</a>
</Stack>

<Stack className="projectlinetwo" padding="10px" marginLeft="10%" flexDirection="row" >
<a href="https://arch-baku-eyyub.vercel.app/">

<Box height="240px" padding="5px" className="archbox" width="80%" marginTop="10px"   boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" >
<div data-aos="zoom-in">
<img style={{width:"100%"}} src={arch} alt="" />
<Typography color="black" textAlign="center" variant="h5" fontFamily="serif">
Arch-Baku
</Typography>
</div>
</Box>
</a>

<a href="https://copper-projects-nv9q.vercel.app/">

<Box padding="10px" marginLeft="15%" className="travelbox" width="60%" marginTop="10px"  boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" >
<div data-aos="zoom-in">
<img style={{width:"96%"}} src={coper} alt="" />
<Typography color="black" textAlign="center" variant="h5" fontFamily="serif">
   Copper Pro
</Typography>
</div>
</Box>
</a>


</Stack>
       


        </PageContainer>
        
        </>
    )
}
export default Projects