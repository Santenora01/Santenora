import React from "react";
import styles from "./services.module.css";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const services = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <div className={styles.box}>
          <p>
            UAB „Santenora“ – esame profesionalų komanda, turinti ilgametę patirtį, teikianti išsamius
            santechnikos sprendimus tiek privatiems, tiek verslo klientams. Mūsų
            veikla apima įvairius santechnikos darbus – nuo sistemų įrengimo ir
            priežiūros iki katilinių montavimo, vandens filtrų bei
            kondicionierių įrengimo. Taip pat užsiimame mažmenine prekyba
            kokybiška santechnikos įranga ir medžiagomis, todėl galime pasiūlyti
            viską, ko reikia patikimai ir efektyviai vandentiekio bei šildymo
            sistemai. Didžiuojamės galėdami suteikti ne tik paslaugas, bet ir
            profesionalias konsultacijas – padedame išsirinkti tinkamiausius
            sprendimus pagal individualius poreikius. Mūsų tikslas – užtikrinti
            ilgalaikį rezultatą, kokybę ir klientų pasitenkinimą, todėl visus
            darbus atliekame atsakingai, laiku ir su dėmesiu kiekvienai detalei.
          </p>

          <ul>
            <li>Visos santechnikos paslaugos vienoje vietoje</li>
            <li>Profesionalūs santechnikai Kretingoje ir ne tik</li>
            <li>Greiti ir patikimi santechnikos darbai</li>
            <li>Kokybiški sprendimai jūsų namams</li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
};

export default services;
