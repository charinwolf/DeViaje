import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FlightInfo from '../FlightInfo/FlightInfo';
import PaymentDetail from '../PaymentDetail/PaymentDetail';
import s from './PassengersInfo.module.css';
import Button from '@mui/material/Button';
import StepperHorizontal from '../Stepper/StepperHorizontal';
import { getData, resetReturn } from '../../Redux/actions/actions';
import { useTranslation } from 'react-i18next';

function PassengersInfo({ setShowPayment }) {

    const flights = useSelector(state => state.allFlights)
    const { id } = useParams()
    const flight = flights?.filter(f => f.id === id)

    const pass = useSelector(state => state.passengers)

    const dispatch = useDispatch()

    const array = []
    for (var i = 0; i < pass; i++) {
        array.push(flight)
    }

    const [passengers, setPassengers] = useState([])
    const [input, setInput] = useState({
        name: '',
        lastname: '',
        country: '',
        document: '',
        birth: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleNextPassenger() {
        if (input.name && input.lastname && input.country && input.document && input.birth) {
            setPassengers([
                ...passengers,
                input])
            dispatch(getData(input))
            setInput({
                name: '',
                lastname: '',
                country: '',
                document: '',
                birth: ''
            })
        }
    }

    useEffect(() => {
        return () => dispatch(resetReturn())
    }, [])

    const [t, i18n] = useTranslation('global')

    return (
        <div>
            <StepperHorizontal step={1} />
            <p className={s.parrafo}>{t("passengersInfo.tit")}</p>

            <div className={s.grilla}>

                <div className={s.travellers}>
                    <p className={s.subtitulo}>{t("passengersInfo.sub")}</p>

                    <div className={s.container}>
                        {
                            passengers.length < pass ?
                                <>
                                    <label className={s.pasajero}>{t("passengersInfo.pasajero")} {passengers.length + 1}</label>
                                    <div className={s.nombre}>{t("passengersInfo.n")}</div>
                                    <input type='text' className={s.input} placeholder={t("passengersInfo.ph")} value={input.name} name='name' onChange={e => handleChange(e)} />
                                    <div className={s.nombre}>{t("passengersInfo.a")}</div>
                                    <input type='text' className={s.input} placeholder={t("passengersInfo.ph")} value={input.lastname} name='lastname' onChange={e => handleChange(e)} />
                                    <div className={s.nombre}>{t("passengersInfo.p")}</div>
                                    <input type='text' className={s.input} placeholder={t("passengersInfo.ph")} value={input.country} name='country' onChange={e => handleChange(e)} />
                                    <div className={s.nombre}>{t("passengersInfo.d")}</div>
                                    <input type='number' className={s.input} value={input.document} name='document' onChange={e => handleChange(e)} />
                                    <div className={s.nombre}>{t("passengersInfo.fecha")}</div>
                                    <input type='date' className={s.input} value={input.birth} name='birth' onChange={e => handleChange(e)} />
                                    <Button variant="text" onClick={handleNextPassenger} sx={{ marginTop: 2 }}>{t("passengersInfo.sig")}</Button>

                                </> : <div>
                                    {
                                        passengers.map((e, i) => {
                                            return (
                                                <div key={i}>
                                                    <label className={s.pasajero}>{t("passengersInfo.pasajero")} {i + 1}</label>
                                                    <div className={s.inp}>{t("passengersInfo.n")}</div>
                                                    <div className={s.nombre}>{e.name}</div>
                                                    <div className={s.inp}>{t("passengersInfo.a")}</div>
                                                    <div className={s.nombre}>{e.lastname}</div>
                                                    <div className={s.inp}>{t("passengersInfo.p")}</div>
                                                    <div className={s.nombre}>{e.country}</div>
                                                    <div className={s.inp}>{t("passengersInfo.d")}</div>
                                                    <div className={s.nombre}>{e.document}</div>
                                                    <div className={s.inp}>{t("passengersInfo.fecha")}</div>
                                                    <div className={s.fecha}>{e.birth}</div>
                                                </div>)
                                        })
                                    }
                                </div>
                        }

                    </div>

                </div>

                <div className={s.display}>
                    <PaymentDetail price={flight[0].price} />
                    <FlightInfo departure={flight[0].flyFrom}
                        arrival={flight[0].flyTo}
                        date={flight[0].local_departure}
                        cityD={flight[0].cityFrom}
                        cityA={flight[0].cityTo}
                        timeD={flight[0].local_departure}
                        timeA={flight[0].local_arrival}
                        duration={flight[0].duration.total} />
                </div>

            </div>

            {
                passengers.length === pass ? <Button variant="outlined" onClick={() => setShowPayment(true)} sx={{ marginLeft: 5.5, marginTop: 3.5 }}>{t("passengersInfo.cont")}</Button> : <Button variant="outlined" disabled onClick={() => setShowPayment(true)} sx={{ marginLeft: 5.5, marginTop: 3.5 }}>{t("passengersInfo.cont")}</Button>
            }

        </div>
    );
}

export default PassengersInfo;