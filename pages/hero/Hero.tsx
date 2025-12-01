import React, {} from "react";
import styles from "./Hero.module.css";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ServiceCardWrapper from "../../components/ServiceCardWrapper/ServiceCardWrapper";

const Hero = () => {
    return(
        <PageTemplate>
            <div className={styles.main}>
                <h3>Santechnika, šildymas, kondicionavimas ir Aquaphor vandens filtrai – viskas vienoje vietoje. Profesionalios konsultacijos, patikima įranga tiek specialistams, tiek namams. Apsilankykit arba susisiekit – padėsime išsirinkti.</h3>
                <ServiceCardWrapper/>
            </div>
        </PageTemplate>
    )
}


export default Hero;