import { Stack,Box, Typography } from "@mui/material";
import PageContainer from "../../Companents/PageContainer"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Contact=()=>{
    return(
        <>
        <PageContainer>
            <Typography variant="h4" marginTop='40px' textAlign="center">
                Əlaqə üçün
            </Typography>
            <Box padding="15px">

            <Stack className="contactbox" marginLeft="30%" marginTop="5%" border="1px solid" width="40%" padding="40px" boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);" gap="20px">

            <Stack className="contac"  flexDirection="row" alignItems="center" gap="10px">
                <Box padding="7px" width="40px" border="1px solid">
                    <LocalPhoneIcon/>
                </Box>
                <Typography fontFamily="Times " variant="h5">
                    070-650-45-65
                </Typography>
            </Stack>
            <Box border="1px solid">

            </Box>
            <Stack className="contac"  flexDirection="row" alignItems="center" gap="10px">
                <Box padding="7px" width="40px" border="1px solid">
                    <GitHubIcon/>
                </Box>
                <Typography fontFamily="Times " variant="h5">
                    Eyyubfront
                </Typography>
            </Stack>
            <Box border="1px solid">

</Box>
            <Stack className="contactsd" flexDirection="row" alignItems="center" gap="10px">
                <Box padding="7px" width="40px" border="1px solid">
                    <EmailIcon/>
                </Box>
                <Typography fontFamily="Times " variant="h6">
                    eyyubbayramov811@gmail.com
                </Typography>
            </Stack>
            
            </Stack>
            </Box>

        </PageContainer>
        
        </>
    )
}
export default Contact