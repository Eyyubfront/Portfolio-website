import PageContainer from "../../Companents/PageContainer"
import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import { Typography,Box, Stack } from "@mui/material"
const Skils=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <PageContainer>
        <Typography className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="20px" marginLeft="40px" variant="h4">
            Bacarıqlar
            </Typography>
        <div data-aos="zoom-in-right">

<Stack padding="20px" alignItems="center" justifyContent="center" gap="15px">

            <Box className="skilsbox" width="50%"  border="1px solid DimGray">
                <Stack sx={{background:"DimGray"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Gray",color:"white"}} width="100px" padding="5px" border="1px solid Gray">
    HTML5
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>
            
            <Box className="skilsbox" width="50%"  border="1px solid DimGray">
                <Stack sx={{background:"DimGray"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Gray",color:"white"}} width="100px" padding="5px" border="1px solid Gray">
   SCSS
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>



            <Box className="skilsbox" width="50%"  border="1px solid Blue">
                <Stack sx={{background:"Blue"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"RoyalBlue",color:"white"}} width="100px" padding="5px" border="1px solid RoyalBlue">
   CSS3
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>

            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Javascript
</Box>
<Typography color="white" padding="2px">
    4/5 
</Typography>
                </Stack>
            </Box>

            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
React
</Box>
<Typography color="white" padding="2px">
    4/5 
</Typography>
                </Stack>
            </Box>
            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Responsive 
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>
            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Github
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>

            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Mui
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>
            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Vite
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>
            <Box className="skilsbox" width="50%"  border="1px solid RebeccaPurple">
                <Stack sx={{background:"RebeccaPurple"}} alignItems="center" flexDirection="row" justifyContent="space-between">

<Box sx={{background:"Indigo",color:"white"}} width="100px" padding="5px" border="1px solid Indigo">
Axios
</Box>
<Typography color="white" padding="2px">
    5/5 
</Typography>
                </Stack>
            </Box>
</Stack>
        </div>


          
        </PageContainer>
        </>
    )
}
export default Skils