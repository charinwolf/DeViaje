import React, { useEffect, useState } from 'react';
import s from './Filter.module.css';
import { dateFilter, stopsFilter, priceFilter, availabilityFilter } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTranslation } from 'react-i18next';


function Filter() {

    // const flights = useSelector(state => state.allFlights)
    const [price, setPrice] = useState('')
    const [availability, setAvailability] = useState('')

    const dispatch = useDispatch()
    const toFrom = useSelector(state => state.dataInputs.toFrom)

    const handlecheck = (e) => {
        if (e.target.checked) {
            const check = { toFrom, value: e.target.value }
            //dispatch(stopsFilter(e.target.value))
            dispatch(stopsFilter(check))
        }
    }

    const handleDate = (e) => {
        e.preventDefault();
        dispatch(dateFilter(e.target.value))
    }

    useEffect(() => {
        if (price) {
            dispatch(priceFilter(price))
        }
    }, [dispatch, price])



    let handleInputPrice = (e) => {
        setPrice(e.target.value);
    };

    useEffect(() => {
        if (availability) {
            dispatch(availabilityFilter(availability))
        }
    }, [dispatch, availability])

    let handleInputavailability = (e) => {
        setAvailability(e.target.value);
    };

    const [t, i18n] = useTranslation('global')

    return (
        <div className={s.filters}>
            <div className={s.container}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{t("filter.escalas")}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="direct"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{padding:'.5rem'}} value="direct" control={<Radio />} label={t("filter.cero")} onClick={handlecheck} />
                        <FormControlLabel sx={{padding:'.5rem'}} value="1" control={<Radio />} label={t("filter.una")} onClick={handlecheck} />
                        <FormControlLabel sx={{padding:'.5rem'}} value="2" control={<Radio />} label={t("filter.dos")} onClick={handlecheck} />
                    </RadioGroup>
                </FormControl>
            </div>


            <div className={s.container2}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{t("filter.orden")}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{padding:'.5rem'}} value="date" control={<Radio />} label={t("filter.proximos")} onChange={handleDate} />

                    </RadioGroup>
                </FormControl>
            </div>


            <div className={s.container2}>
                <FormLabel className={s.title} id="demo-radio-buttons-group-label">{t("filter.precio")}</FormLabel>
                <div className={s.flex}>
                    <div>
                        <span className={s.padding} >USD 50</span>
                    </div>
                    <div>
                        <span className={s.price}>{price}</span>
                        <input className={s.range} type="range" min='50' max='5000' name='price' value={price} onChange={handleInputPrice} />
                        <span className={s.padding}>USD 5.000</span>
                    </div>
                </div>
            </div>
            <div className={s.container2}>
                <FormLabel className={s.title} id="demo-radio-buttons-group-label">{t("filter.dispo")}</FormLabel>
                <div className={s.flex}>
                    <div>
                        <span className={s.padding} >1</span>
                    </div>
                    <div>
                        <span className={s.price}>{availability}</span>
                        <input className={s.range} type="range" min='1' max='10' name='availability' value={availability} onChange={handleInputavailability} />
                        <span className={s.padding}>10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;