import { Typography,Box, Stack } from "@mui/material"
import PageContainer from "../../Companents/PageContainer"
import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useEffect } from "react"
  import photocode from "../../assets/frt.jpg"
const About=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <PageContainer>
        <Typography className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="20px" marginLeft="40px" variant="h4">
             Haqqımda
            </Typography>
<Stack className="hobbi" padding="30px" flexDirection="row" alignItems="center">

        <div data-aos="zoom-out-right">


            <Typography className="myabout" fontFamily=" serif" width="70%">
            Mən Eyyub Bayramov, 19 yaşında, hazırda Azərbaycan Dövlət Neft və Sənaye Universitetinin İnformasiya Texnologiyaları fakültəsində təhsil alıram. Mən təhsilimə 2021-ci ildə başladım və 2025-ci ildə məzun olmağa hazırlaşıram. Bu təhsil səyahəti məni İT sahəsində möhkəm təməllə təchiz etdi, məni dinamik və inkişaf edən sənayeyə hazırladı. İnnovativ texnologiyaların öyrənilməsi və real dünya çağırışlarına tətbiqi ilə bağlı həvəsliyəm. Kurs işləri və şəxsi layihələr vasitəsilə müxtəlif proqramlaşdırma dilləri və inkişaf alətləri üzrə bacarıqlar əldə etmişəm. Mən bu biliklərdən istifadə etməyə və İnformasiya Texnologiyaları sahəsində qabaqcıl həllərə töhfə verməyə can atıram.
            </Typography>
        </div>

        <Box padding="10px" boxShadow=" 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);">
        <div data-aos="flip-right">
        <img className="photocodes"  style={{width:"100%"}}src={photocode} alt="" />
        </div>
           
        </Box>
</Stack>


<Stack className="hobbi" gap="10%" alignItems="center" flexDirection="row">
<div data-aos="flip-left">

  <Stack className="hobibox" marginBottom="20px" alignItems="center" textAlign="center" marginLeft="50px" padding="20px" boxShadow="3px 3px red, -1em 0 .4em olive;"  width="250px" gap='10px'>
    <Typography variant="h4">
        Hobbim
    </Typography>
    <Box width="200px" border="1px solid black">

    </Box>
    <Typography fontFamily="Georgia, serif">
        Futbol oynamaq
    </Typography>
    <Typography fontFamily="Georgia, serif">
        Film izləmək
    </Typography>
    <Typography fontFamily="Georgia, serif">
        Maşın sürmək
    </Typography>
    <Typography fontFamily="Georgia, serif">
        Kod yazmaq
    </Typography>
    <Typography fontFamily="Georgia, serif">
       Kitab oxumaq
    </Typography>
    </Stack>  
</div>

    <Typography fontFamily="fangsong" variant="h4">
        Sizin üçün qısa motivasi: Dayanma, yatma , çalış , araşdır.
    </Typography>

</Stack>

        </PageContainer>
        
        </>
    )
}

export default About