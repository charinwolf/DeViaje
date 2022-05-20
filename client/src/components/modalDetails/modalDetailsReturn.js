import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import styles from './modalDetails.module.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from 'react-i18next';

export const ModalDetailsReturn = ( { setShowDetails, idDetails, detailsReturn } ) => {

  const handleHideDetails = () => {
      setShowDetails( false )
  }
  console.log(detailsReturn[0])
  const getHoursStop = (departure, arrival) => {
    let num1 = Date.parse(departure)
    let num2 = Date.parse(arrival)
    let res = num2 - num1
    return res/1000
  }

  const getHours = (num) => {
    const time = num/60;
    const [hours, minutes] = [Math.floor(time/60), time%60];
    return [hours, minutes]
  }

  const [t, i18n] = useTranslation('global')

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
            <ClearIcon  className={styles.iconHide}
                        onClick={ handleHideDetails } />
          {
            detailsReturn.map( el => (
              <div key={el.id} className={styles.containerPrincipal} >
                <h3 style={{color:'#17202A', marginTop:'-10px', marginLeft:'10px'}} >{ el.airline }</h3>
                <div className={styles.containerFromTo}>
                  <div className={styles.containerDeparture}>
                    <h6 style={{fontSize:'.8rem'}} >{ el.local_departure.slice(0, 10)}</h6>
                    <h4 style={{fontSize:'1.5rem'}} >{ el.local_departure.slice(11, 16)}</h4>
                    <h6 style={{fontSize:'1rem', marginTop:'.5rem', color:'#293441'}} >{ el.cityCodeFrom }</h6>
                    <h6 style={{fontSize:'1rem', color:'#293441'}}>{ el.cityFrom }</h6>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', 
                              alignItems:'center', fontSize:'1.3rem', color:'#293441'}} >
                    <h6>-- {t("modalDetails.duracion")} --</h6>
                    <h6 style={{color: '#131516'}}>{ getHours(getHoursStop(el.local_departure, el.local_arrival))[0] !== 0 && 
                        getHours(getHoursStop(el.local_departure, el.local_arrival))[0] + 'h '} 
                      { getHours(getHoursStop(el.local_departure, el.local_arrival))[1]}m </h6>
                  </div>
                  <div className={styles.containerArrival}>
                    <h6 style={{fontSize:'.8rem'}} >{ el.local_departure.slice(0, 10) } </h6>
                    <h4 style={{fontSize:'1.5rem'}}>{ el.local_arrival.slice(11, 16) }</h4>
                    <h6 style={{fontSize:'1rem', marginTop:'.5rem', color:'#293441'}}>{ el.cityCodeTo }</h6>
                    <h6 style={{fontSize:'1rem', color:'#293441'}}>{ el.cityTo }</h6>
                  </div>
                </div>
                <div className={styles.containerCategory}> 
                  <h4 style={{marginBottom:'-1rem', color:'#0f161d',fontSize:'1.1rem'}} ><span style={{fontSize:'1rem', color:'#293441'}}>{t("modalDetails.clase")}: </span>
                      {el.fare_category === 'M' ? 'Economy' : el.fare_category === 'W' ? 'Economy Premiun' :
                      el.fare_category === 'C' ? 'Business' : el.fare_category === 'F' ? 'First Class' : 'Economy'}  </h4>
                </div>
              </div>
            ))
          }

          { 
            detailsReturn[0].return === 0 ?
            <div className={styles.containerDurationFinal}> 
                <h4><span style={{color:'#293441'}}>{t("modalDetails.final")}: </span>
                    { getHours(idDetails.duration.departure)[0] !== 0 && getHours(idDetails.duration.departure)[0]+'h ' } 
                    { getHours(idDetails.duration.departure)[1]}m </h4>  
            </div>
            :
            <div className={styles.containerDurationFinal}> 
            <h4><span style={{color:'#293441'}}>{t("modalDetails.final")}: </span>
                { getHours(idDetails.duration.return)[0] !== 0 && getHours(idDetails.duration.return)[0]+'h ' } 
                { getHours(idDetails.duration.return)[1]}m </h4>  
          </div> 
          }

          <div className={styles.containerEquipaje}>
            <div className={styles.containerEquipajeFirst}>
              <h4>{t("modalDetails.equi")}</h4>
            </div>
            <div className={styles.containerEquipajeSecond}>
              <div style={{display: 'flex', marginBottom:'1.2rem'}} >
                <ShoppingBagIcon style={{color:'#243c57', marginTop:'8px', marginRight:'10px' }} />
                <div>
                  <h4 className={styles.containerEquipajeSubTitle}>{t("modalDetails.inc")}</h4>
                  <h5 className={styles.containerEquipajeSubTitleSecond}>{t("modalDetails.otra")}</h5>
                </div>
              </div>
              <div style={{display: 'flex', marginBottom:'1.2rem'}}>
                <WorkIcon style={{color:'#243c57', marginTop:'10px', marginRight:'10px' }} />
                <div>
                  <h4 className={styles.containerEquipajeSubTitle}>{t("modalDetails.mano")}</h4>
                  <h5 className={styles.containerEquipajeSubTitleSecond}>{t("modalDetails.text")}</h5>
                </div>
              </div>
              <div style={{display: 'flex', marginBottom:'1.2rem'}}>
                <LuggageIcon style={{color:'#243c57', marginTop:'20px', marginRight:'10px' }} />
                <div>
                  <h4 className={styles.containerEquipajeSubTitle}>{t("modalDetails.grande")}</h4>
                  <h5 className={styles.containerEquipajeSubTitleSecond}>{t("modalDetails.t")}</h5>
                  <h5 className={styles.containerEquipajeSubTitleSecond}>{t("modalDetails.t2")}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
