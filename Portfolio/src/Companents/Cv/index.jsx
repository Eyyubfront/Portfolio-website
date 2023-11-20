import { Box, Typography } from "@mui/material"

const Cv = () => {
    return (
        <>
            <div id="Cv">

                <Typography marginTop="30px" marginLeft="30px" className="abouttext" color="white" fontFamily="Inter" variant="h5">
                    Cv
                </Typography>
                <a href="https://drive.google.com/file/d/1VOFjmscqUb9wAXZFCts_Ci8Rl9YbmK5n/view?usp=sharing">

                    <Box className="cvbox" color="black" fontFamily="Monospace" sx={{ background: "LightGray" }} boxShadow=" 0px 0px 12px 0px #FFF" textAlign="center" marginTop="30px" border="1px solid" borderRadius="10%" width="50%" padding="15px" marginLeft="30px">
                        Cv Dowland
                    </Box>
                </a>
            </div>

        </>
    )
}
export default Cv