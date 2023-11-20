import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Grid,
    AppBar,

} from "@mui/material";

const Skils = () => {
    return (
        <>
            <div id="skils">
                <Stack className="skilsboxed" gap="20px" marginTop="10%" marginLeft="20px">
                    <Typography className="skilstext" color="white" fontFamily="Inter" variant="h5">
                        Skills
                    </Typography>
                    <div data-aos="zoom-in-right">
                        <Stack className="allskils" flexDirection="column" gap="20px">

                            <Stack className="skilscolmn" gap="10px" flexDirection="row" padding="15px">
                                <Box className="skilsbox" width="50%" border="1px solid DimGray">
                                    <Stack sx={{ background: "DimGray" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Gray", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Gray">
                                            HTML5
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Box className="skilsbox" width="50%" border="1px solid DimGray">
                                    <Stack sx={{ background: "DimGray" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Gray", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Gray">
                                            SCSS
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>

                            <Stack className="skilscolmn" gap="10px" flexDirection="row" padding="15px">

                                <Box className="skilsbox" width="50%" border="1px solid Blue">
                                    <Stack sx={{ background: "Blue" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "RoyalBlue", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid RoyalBlue">
                                            CSS3
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Javascript
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            4/5
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>


                            <Stack className="skilscolmn" gap="10px" flexDirection="row" padding="15px">

                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            React
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            4/5
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Responsive
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>


                            <Stack className="skilscolmn" gap="10px" flexDirection="row" padding="15px">

                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Github
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">
                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Mui
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>




                            <Stack className="skilscolmn" gap="10px" flexDirection="row" padding="15px">


                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">

                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Vite
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box className="skilsbox" width="50%" border="1px solid RebeccaPurple">
                                    <Stack sx={{ background: "RebeccaPurple" }} alignItems="center" flexDirection="row" justifyContent="space-between">

                                        <Box sx={{ background: "Indigo", color: "white", fontFamily: "Monospace" }} width="100px" padding="5px" border="1px solid Indigo">
                                            Axios
                                        </Box>
                                        <Typography color="white" padding="2px">
                                            5/5
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                    </div>

                </Stack>
            </div>

        </>
    )
}
export default Skils