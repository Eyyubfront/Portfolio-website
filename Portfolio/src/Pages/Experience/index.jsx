import { Typography } from "@mui/material"
import PageContainer from "../../Companents/PageContainer"

const Experience=()=>{
    return(
        <>
        <PageContainer>
        <Typography className="fronthome" sx={{fontFamily:" TradeGothic LT Extended"}} marginTop="20px" marginLeft="40px" variant="h4">
           Təcrübə
            </Typography>
            <Typography className="jedpractice" padding="20px" marginTop="40px" variant="h5" marginLeft="20px" fontFamily="Times ">
                Jed akademiya- Junior Front-End Developer təcrübə proqramı:
                07.17.2023-10.25.2023
            </Typography>
            <Typography className="practicetext" marginLeft="24px"  width="70%" fontFamily="Times " marginTop="10px" padding="10px" variant="h6">
            İstərdim ki, bu təcrübəmi sizinlə bölüşüm. 5 aylıq kurs müddətini başa vurduqdan sonra, kursun təklif etdiyi fron-end developer təcrübə proqramına qoşulmağa qərar verdim. Burada html5 və css3 ilə real layihələri hazırlayaraq özümü inkişaf etdirərək, bu sahəyə olan həvəsimi və marağımı göstərmək istədim. Ən vacib olanı, təcrübəmi artırmağa kömək oldu ki, bu da mənim üçün çox əhəmiyyətli idi. Həm də hackathon yarışmasında iştirak edərək təcrübəmi daha da artırdım. Öyrəndiklərimi tətbiq etmək üçün komandada fəal şəkildə işləməyə başladım. Əlimdən gələni edərək davam etdiyim bu səylərdə nəticələr görmək məni çox şad edir və bu sahədəki həvəsimi daha da gücləndirir.
            </Typography>
        </PageContainer>
        
        </>
    )
}
export default Experience