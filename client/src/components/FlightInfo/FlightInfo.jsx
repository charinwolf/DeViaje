import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import s from './FlightInfo.module.css';

function FlightInfo({ departure, arrival, date, cityD, cityA, timeD, timeA, duration }) {

    const depTime = timeD.slice(11, 16)
    const arrTime = timeA.slice(11, 16)
    const fecha = date.slice(0, 10)

    function secondsToString(duration) {
        var hour = Math.floor(duration / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        var minute = Math.floor((duration / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        return hour + ':' + minute;
    }

    const durationTime = secondsToString(duration)
    
    const idaYvuelta = useSelector(state => state.dataInputs)
    const data = useSelector(state => state.return)

    const [t, i18n] = useTranslation('global')
   
    return (
        <div className={s.grid}>
            {
                idaYvuelta.toFrom === true ? 
                    <>
                        <div className={s.payment}>{t("flightInfo.det")}</div>
                        <div className={s.ciudades}>{departure} - {arrival}</div>
                        <div className={s.salida}>{t("flightInfo.s")}</div>
                        <div className={s.fecha}>{fecha}</div>
                        {/* <div className={s.aerolinea}>aerolinea</div> */}
                        <div className={s.viaje}>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityD}</div>
                                <div className={s.time}>{depTime}</div>
                            </div>
                            <div className={s.ciudad}>--------</div>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityA}</div>
                                <div className={s.time}>{arrTime}</div>
                            </div>
                            {/* <div className={s.ciudad}>
                                <div className={s.city}>Duration</div>
                                <div className={s.time}>{durationTime}</div>
                            </div> */}
                        </div>
                        {/* -------- SI TENGO VUELTA --------- */}
                        <div className={s.salida}>{t("flightInfo.v")}</div>
                        <div className={s.fecha}>{data[0].local_departure.slice(0, 10)}</div>
                        {/* <div className={s.aerolinea}>aerolinea</div> */}
                        <div className={s.viaje}>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityA}</div>
                                <div className={s.time}>{data[0].local_departure.slice(11, 16)}</div>
                            </div>
                            <div className={s.ciudad}>--------</div>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityD}</div>
                                <div className={s.time}>{data[0].local_arrival.slice(11, 16)}</div>
                            </div>
                            {/* <div className={s.ciudad}>
                                <div className={s.city}>Duration</div>
                                <div className={s.time}>{durationTimeReturn}</div>
                            </div> */}
                        </div>
                    </>
                    :
                    <>
                        <div className={s.payment}>{t("flightInfo.det")}</div>
                        <div className={s.ciudades}>{departure} - {arrival}</div>
                        <div className={s.salida}>{t("flightInfo.s")}</div>
                        <div className={s.fecha}>{fecha}</div>
                        {/* <div className={s.aerolinea}>aerolinea</div> */}
                        <div className={s.viaje}>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityD}</div>
                                <div className={s.time}>{depTime}</div>
                            </div>
                            <div className={s.ciudad}>--------</div>
                            <div className={s.ciudad}>
                                <div className={s.city}>{cityA}</div>
                                <div className={s.time}>{arrTime}</div>
                            </div>
                            <div className={s.ciudad}>
                                <div className={s.city}>{t("flightInfo.d")}</div>
                                <div className={s.time}>{durationTime}</div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );

}

export default FlightInfo;