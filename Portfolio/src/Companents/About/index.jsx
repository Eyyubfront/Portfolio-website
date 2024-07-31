import React from 'react';
import {Container} from "@mui/material";
import aboutphoto from "../../assets/frontend.jpg"
const About = () => {
    return (
        <>
<div id="about">
    <Container>
<div className="about__container">
    <div className="about__left">

<div className="about__namestops">
    <div data-aos="zoom-out-right">
<h2>Hi, I am
Eyyub Bayramov</h2>
    </div>
</div>
<div className="about__namesbutom">
 I am <span className='aboutspancolor'>Frontend Developer</span>
</div>
<div className="about__infor">
I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
</div>
<a href="https://drive.google.com/file/d/1aLNFfK2TbRPA8zQjU4IDj5MpPdfO5a74/view?usp=sharing">
<div className="about__cv">
    Check Resume
</div>
</a>
    </div>
    <div className="about__right">
<img className='aboutsphoto' src={aboutphoto} alt="" />
    </div>
</div>
    </Container>


</div>
        
         

        </>
    )
}
export default About