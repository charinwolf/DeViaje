import React from 'react';
import styles from './cardScaleDetails.module.css';
import { useTranslation } from 'react-i18next'
export const CardScaleDetails = ({ data }) => {

  const [t, i18n] = useTranslation('global')
  
  return (
    <div className={styles.container} >
      {
        data?.map(( d, i ) =>(
            <div key={i}
                className={styles.containerCard} 
            >
              <h5 className={styles.details} >{t("cardScaleDetails.llegada")} <span style={{fontSize:'1rem', color:'#000'}} > { d.cityTo } </span> </h5>
              <h6 className={styles.details} >{t("cardScaleDetails.hora")} <span style={{fontSize:'.9rem', color:'#000'}}>{d.local_arrival.slice(11, 16)} </span> </h6>
           </div>
        )) 
      }

    </div>
  )
}