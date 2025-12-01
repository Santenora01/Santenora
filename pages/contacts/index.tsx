import React from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import styles from '../contacts/contacts.module.css'

const contacts = () => {
    return(
        <PageTemplate>
            <div className={styles.main}> 
              <div className={styles.box}>
                <h2>Parduotuvės adresas:</h2>
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kretinga,+Salantų+g.+6,+Padvariai,+97157" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                     Kretinga, Salantų g. 6, Padvariai, 97157 Kretingos r. sav.
                </a>

                <h2>Telefonas: </h2>

                <h2>
                     <a href="tel:+37060655648">+370 60 655 648</a>
                </h2>

                <h2>Darbo valandos:</h2>

                <div className={styles.hours}>
                    <div>Pirmadienis</div><div>08–17:30</div>
                    <div>Antradienis</div><div>08–17:30</div>
                    <div>Trečiadienis</div><div>08–17:30</div>
                    <div>Ketvirtadienis</div><div>08–17:30</div>
                    <div>Penktadienis</div><div>08–17:30</div>
                    <div>Šeštadienis</div><div>08–12:30</div>
                    <div>Sekmadienis</div><div>Uždaryta</div>
                </div>
              </div>
            </div>
        </PageTemplate>
    )
}

export default contacts

