import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getFlightsInfo, setValuesInputs, getFlightsInfoToFrom, 
  getFlightsInfoExact, getFlightsInfoToFromExact, getPassengers } from "../../Redux/actions/actions";
import s from "./Landing.module.css";
//import validate from './utils/validate';
import { Modal } from '../../components/modal/index'
import { Loading } from "../loading/Loading";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from "@material-ui/core";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel';

import FormControl from '@mui/material/FormControl';
import { TopDestination } from "../TopDestinations/carousel";
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

function Landing() {

  function validate(input){
    let errors = {}
    if(!input.fly_from){
        // errors.fly_from = "Departure city required"
        errors.fly_from = t("searchBar.salida")
    }
    if(!input.fly_to){
        // errors.fly_to = "Destination required"
        errors.fly_to = t("searchBar.des")
    } else if(input.fly_to.toLowerCase() === input.fly_from.toLowerCase()){
        // errors.fly_to = "Origin and destination cant be the same"
        errors.fly_to = t("searchBar.e")
    }
    if(!input.dateFrom){
        // errors.dateFrom = "Date required"
        errors.dateFrom = t("searchBar.f")
    }
    if(!input.dateTo && (toFrom.name || check)){
        // errors.dateTo = "Return date required"
        errors.dateTo = t("searchBar.f2")
    } else if(Date.parse(input.dateTo) < Date.parse(input.dateFrom)){
        // errors.dateTo = "Return date must be after departure date"
        errors.dateTo = t("searchBar.f3")
    }
    return errors
}

  const [t, i18n] = useTranslation('global')
  const dispatch = useDispatch()
  
  const history = useHistory()
  const modalErr = useSelector((state) => state.modalErr)

  const [input, setInput] = useState({
    fly_from: "",
    fly_to: "",
    dateFrom: "",
    dateTo: "",
  })
  const [toFrom, setToFrom] = useState({ name: true })
  const [showLoading, setShowLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [ check, setCheck ] = useState( false )

  let handleInputChange = e => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    setErrors(validate({
       ...input,
       [e.target.name]: e.target.value
     }))
  }
  const handleInputChangeRadio = (e) => {
    if (e.target.value === 'true') {
      setToFrom(prevData => ({
        ...prevData,
        [e.target.name]: true
      }))
    } else {
      setToFrom(prevData => ({
        ...prevData,
        [e.target.name]: false
      }))
    }
  }

  const handleChangeCheck = (e) => {
    setCheck( e.target.checked )
  }
  
  const [pass, setPass] = useState(1)

  const handleClick = async (e) => {
    e.preventDefault()

    setShowLoading(true)
    const newInput = {
        fly_from: input.fly_from,
        fly_to: input.fly_to,
        dateFrom: input.dateFrom,
        dateTo: input.dateTo,
        toFrom: toFrom.name,
        pass,
        check
    }
    dispatch(setValuesInputs(newInput))
    dispatch(getPassengers(pass))

    if (newInput.toFrom === true) {
        if( check === false ){
          const res = await dispatch(getFlightsInfoToFromExact(input))
          if (res.payload === true) { return setShowLoading(false) }
          setShowLoading(false)
          history.push('/home')
        }else {
          const res = await dispatch(getFlightsInfoToFrom(input))
          if (res.payload === true) { return setShowLoading(false) }
          setShowLoading(false)
          history.push('/home')
        }
    } else {
        if( check === false ){
          const res = await dispatch(getFlightsInfoExact(input))
          if (res.payload === true) { return setShowLoading(false) }
          setShowLoading(false)
          history.push('/home')
        }else {
          const res = await dispatch(getFlightsInfo(input))
          if (res.payload === true) { return setShowLoading(false) }
          setShowLoading(false)
          history.push('/home')
        }
    }
  }
  
  return (
    <>
      <div className={s.fondo}>
        <h1 className={s.titulo}>
          {t("header.titulo")}<span className={s.url}>{t("header.url")}</span>
        </h1>
        {
          showLoading && <div style={{ marginTop: '-8.2rem' }} > <Loading /> </div>
        }
        {
          modalErr && <Modal title='No flights found' />
        }

        <div className={s.containerPrincipal}>
          <div className={s.flex}>
            <FormControl>
              <RadioGroup
                className={s.radio}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="name"
                defaultValue={ true }
                onChange={handleInputChangeRadio}
              >
                <FormControlLabel value={true} control={<Radio />} label ={<span style={{display:'flex', width:'75px', fontSize:'15.5px'}} >{t("searchBar.vuelta")}</span>} sx={{marginLeft: '.15rem', marginTop: '.8rem'}} />
                <FormControlLabel value={false} control={<Radio />} label={<span style={{display:'flex', width:'75px', fontSize:'15.5px'}} >{t("searchBar.ida")}</span>} sx={{marginLeft: '6.5rem', marginTop: '-48px' }} />
              </RadioGroup>
            </FormControl>
            <div className={s.boxErrors}>
              <input
                type="text"
                placeholder={t("searchBar.phSalida")}
                value={input.fly_from}
                onChange={e => handleInputChange(e)}
                name="fly_from"
                className={s.input}
                style={{ position: 'relative', left: '-2rem' }}
              />
              {
                errors.fly_from && <div style={{ position: 'absolute', bottom: '3rem', left: '2.5rem' }} className={s.errors}>{errors.fly_from}</div>
              }
            </div>
            <div className={s.boxErrors}>
              <input
                type="text"
                placeholder={t("searchBar.phDestino")}
                value={input.fly_to}
                onChange={e => handleInputChange(e)}
                name="fly_to"
                className={s.input}
                style={{ position: 'relative', left: '-2rem' }}
              />
              {
                errors.fly_to && <div style={{ position: 'absolute', bottom: '3rem', left: '15rem' }} className={s.errors}>{errors.fly_to}</div>
              }
            </div>

            <div className={s.boxErrors}>
              <input type="date"
                placeholder="Date"
                value={input.dateFrom}
                onChange={e => handleInputChange(e)}
                name="dateFrom"
                className={s.date}
                style={{ position: 'relative', left: '-2rem' }}
              />
              {
                errors.dateFrom && <div style={{ position: 'absolute', bottom: '3rem', left: '27.7rem' }} className={s.errors}>{errors.dateFrom}</div>
              }
            </div>

            <div className={s.boxErrors}>
              <input type="date"
                value={input.dateTo}
                onChange={e => handleInputChange(e)}
                name="dateTo"
                className={s.date}
                style={{ position: 'relative', left: '-2rem' }}
                disabled={ toFrom.name && check === false ? false : check === true ? false : true }
              />
              {
                errors.dateTo && <div style={{ position: 'absolute', bottom: '3rem', left: '37.5rem' }} className={s.errors}>{errors.dateTo}</div>
              }
            </div>

            <div className={s.pass}>
              <span className={s.placeh}>{t("searchBar.pasajeros")}</span>
              <IconButton
                onClick={() => setPass(pass - 1)}
                disabled={ pass <= 1 ? true : false }
              >
                <RemoveIcon  sx={{ cursor: 'pointer' }} />
              </IconButton>
                {pass}
              <IconButton
                onClick={() => setPass(pass + 1)}
                disabled={ pass >= 6 ? true : false }
              >
                <AddIcon  sx={{ cursor:'pointer' }} />
              </IconButton>
            </div>

            {
              Object.keys(errors).length === 0  ?
                (<button className={s.btn} type="submit" onClick={e => handleClick(e)}>
                  <SearchIcon />
                  {t("searchBar.btn")}
                </button>)
                : <button className={s.btn} type="submit" onClick={e => handleClick(e)} disabled>
                  <SearchIcon />
                  {t("searchBar.btn")}
                </button>
            }
          </div>

          <FormControlLabel className={s.checkbox} control={<Checkbox onChange={ handleChangeCheck } />} label={t("searchBar.range")} />

        </div> 
      </div>
      <TopDestination />
    </>
  );
}

export default Landing;
