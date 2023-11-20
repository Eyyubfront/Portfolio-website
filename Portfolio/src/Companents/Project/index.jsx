import arch from "../../assets/arch.jpg"
import coper from "../../assets/coper.jpg"
import travels from "../../assets/travels.jpg"
import texnikamega from "../../assets/texnikamega.jpeg"
import { Box, Button, Container, Stack, Typography, Grid, AppBar } from "@mui/material";
const Project = () => {
    return (
        <>
            <div id="projects">

                <Stack className="projectsboxed" gap="10px" marginTop="12%" marginLeft="30px">

                    <Typography className="projectstext" color="white" fontFamily="Inter" variant="h5">
                        Projects
                    </Typography>

                    <Stack className="projectsbox" marginLeft="5px" padding="10px" marginTop="40px" flexDirection="row" gap="20px">
                        <a href="https://global-travel-project.vercel.app/">

                            <Box height="265px" borderRadius="8px 0px" className="travelbox" width="305px" marginTop="10px" boxShadow="0px 0px 12px 0px #FFF;" >
                                <div data-aos="zoom-in">
                                    <img className="travelspht" style={{ width: "100%", padding: "13px", margin: "auto" }} src={travels} alt="" />
                                    <Typography marginTop="11px" color="white" textAlign="center" variant="h5" fontFamily="Monospace">
                                        Global-travel
                                    </Typography>
                                    <Box margin="0 auto" marginTop="8px" border="1px solid" width='200px'>

                                    </Box>
                                </div>
                            </Box>
                        </a>

                        <a href="https://mega-texnika.netlify.app/">

                            <Box marginTop="8px" height="269px" borderRadius="8px 0px" className="megabox" width="300px" boxShadow=" 0px 0px 12px 0px #FFF" >
                                <div data-aos="zoom-in">
                                    <img style={{ width: "100%", padding: "10px", marginTop: "12px" }} src={texnikamega} alt="" />
                                    <Typography marginTop="18px" color="white" textAlign="center" variant="h5" fontFamily="Monospace">
                                        Mega-Texnika
                                    </Typography>
                                    <Box margin="0 auto" marginTop="12px" border="1px solid" width='200px'>

                                    </Box>
                                </div>
                            </Box>
                        </a>

                        <a href="https://global-travel-project.vercel.app/">

                            <Box height="266px" borderRadius="8px 0px" className="coperbox" width="305px" marginTop="10px" boxShadow="0px 0px 12px 0px #FFF;" >
                                <div data-aos="zoom-in">
                                    <img style={{ width: "100%", height: "183px", padding: "13px", marginTop: "10px" }} src={coper} alt="" />
                                    <Typography marginTop="17px" color="white" textAlign="center" variant="h5" fontFamily="Monospace">
                                        Copper Pro
                                    </Typography>
                                    <Box margin="0 auto" marginTop="10px" border="1px solid" width='200px'>

                                    </Box>
                                </div>
                            </Box>
                        </a>

                        <a href="https://mega-texnika.netlify.app/">

                            <Box marginTop="8px" height="269px" borderRadius="8px 0px" className="megabox" width="300px" boxShadow=" 0px 0px 12px 0px #FFF" >
                                <div data-aos="zoom-in">
                                    <img style={{ width: "100%", height: "183px", padding: "10px", marginTop: "16px" }} src={arch} alt="" />
                                    <Typography marginTop="16px" color="white" textAlign="center" variant="h5" fontFamily="Monospace">
                                        Arch-Baku
                                    </Typography>
                                    <Box margin="0 auto" marginTop="10px" border="1px solid" width='200px'>

                                    </Box>
                                </div>
                            </Box>
                        </a>
                    </Stack>





                </Stack>
            </div>


        </>
    )
}
export default Project