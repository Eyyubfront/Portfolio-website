import { Box, Button, Container, Stack, Typography, Grid, AppBar } from "@mui/material";
const About = () => {
    return (
        <>

            <div id="about">

                <Stack gap="10px" marginTop="10%" marginLeft="30px">

                    <Typography className="abouttext" color="white" fontFamily="Inter" variant="h5">
                        About
                    </Typography>
                    <Typography fontSize="15px" color="white" className="myabout" fontFamily=" Monospace" width="70%">
                        I am Eyyub Bayramov, 19 years old, currently studying at the Faculty of Information Technologies of Azerbaijan State Oil and Industry University. I started my studies in 2021 and I am going to graduate in 2025. This educational journey has equipped me with a solid foundation in IT, preparing me for a dynamic and growing industry. I am passionate about learning about innovative technologies and applying them to real-world challenges. Through coursework and personal projects, I have acquired skills in various programming languages and development tools. I am eager to use this knowledge and contribute to advanced solutions in the field of Information Technology.
                    </Typography>
                </Stack>
            </div>
        </>
    )
}
export default About