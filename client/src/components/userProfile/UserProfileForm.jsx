import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import  Box  from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { isNumberValid } from './Validations'
import { axiosWithOutToken } from '../../services/axios'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';



const UserProfileForm = () => {
  const { isAuthenticated, user } = useAuth0();
  const [form, setForm] = useState({
    dni: '',
    age: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    genre: '',
    vaccinated: ''
  })
  //const dispatch = useDispatch();

  const [dniError, setDniError] = useState(false);
  const [dniErrorMsg, setDniErrorMsg] = useState('');
  const [value, setValue] = useState(new Date());
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMsg, setPhoneErrorMsg] = useState('');

  const alertSucess = () => {
    swal({
      title: 'Updated',
      text: 'Profile Updated sucessfully',
      icon: "success",
      timer: 3000,
    })
  }

  function handleChange(e) {
    if (e.target.value.length >= 0) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  }

  function handleChangeDni(e) {
    e.preventDefault()
    if (e.target.value.length >= 0) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
      // VALIDACION DNI
      if (!isNumberValid(e.target.value)) {
        setDniError(true)
        setDniErrorMsg('Debe ser solo número')
      } else {
        setDniError(false)
        setDniErrorMsg('')
      }
    }
    else {
      setDniError(false)
      setDniErrorMsg('')
    }
  }

  function handleChangePhone(e) {
    e.preventDefault()
    if (e.target.value.length >= 0) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
      //VALIDACION PHONE
      if (!isNumberValid(e.target.value)) {
        setPhoneError(true)
        setPhoneErrorMsg('Debe ser solo número')
      } else {
        setPhoneError(false)
        setPhoneErrorMsg('')
      }
    } else {
      setPhoneError(false)
      setPhoneErrorMsg('')
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(form)
    let {email} = user
    axiosWithOutToken('/updatepersonalinfo', {...form, email}, 'POST')
      .then(res => {
        console.log(res.data)
        setForm({
          dni: '',
          age: '',
          phone: '',
          country: '',
          state: '',
          city: '',
          zip: '',
          genre: '',
          vaccinated: ''

        });
         alertSucess()  
      })
      .catch(err => {
        console.log(err.response)

      })

  }

  const [t, i18n] = useTranslation('global')

  return (
    isAuthenticated && (
      <div>
        <CssBaseline />

        <Typography variant="h4" align='center' gutterBottom component="div" sx={{ m: 2 }}>
          {t("userProfileForm.per")}
        </Typography>
        

        <Container maxWidth="xl" align='center' >
          <FormControl>
            <Box 
            component="form" 
            sx={{ '& > :not(style)': { m: 1 }, display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)', height: '70vh', width: '100vh' }} 
            noValidate 
            autoComplete="off">
              <div>
                <TextField
                  required
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  error={dniError}
                  helperText={dniErrorMsg}
                  InputLabelProps={{ shrink: true }}
                  id="standard-required"
                  label={t("userProfileForm.doc")}
                  name='dni'
                  value={form.dni}
                  defaultValue=""
                  variant="standard"
                  color='success'
                  onChange={(e) => handleChangeDni(e)} /> 
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}> 
                  <DesktopDatePicker
                    label={t("userProfileForm.fecha")}
                    value={value}
                    minDate={new Date('1930-01-01')}
                    onChange={(newValue) => {
                      setValue(newValue);
                      setForm({
                        ...form,
                        age: value
                      })
                    }}
                    renderInput={(params) => 
                    <TextField {...params}
                      InputLabelProps={{ shrink: true }} 
                      variant="standard"
                      sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                       />}
                  />
                </LocalizationProvider>

              </div>

              <div>
                <TextField
                  required
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  error={phoneError}
                  helperText={phoneErrorMsg}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  id="standard-required"
                  label={t("userProfileForm.tel")}
                  name='phone'
                  value={form.phone}
                  defaultValue=""
                  variant="standard"
                  color='success'
                  onChange={(e) => handleChangePhone(e)} />
              </div>

              <div>
                <TextField
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  InputLabelProps={{ shrink: true }}
                  name='country'
                  label={t("userProfileForm.pais")}
                  id="standard"
                  value={form.country}
                  defaultValue=""                    
                  variant="standard" 
                  color='success'
                  onChange={(e) => handleChange(e)} />
              </div>

              <div>
                <TextField
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  InputLabelProps={{ shrink: true }}
                  id="standard-required"
                  label={t("userProfileForm.estado")}
                  name='state'
                  value={form.state}
                  defaultValue=""
                  variant="standard"
                  color='success'
                  onChange={(e) => handleChange(e)} />

              </div>

              <div>
                <TextField
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  InputLabelProps={{ shrink: true }}
                  id="standard-required"
                  label={t("userProfileForm.ciu")}
                  name='city'
                  value={form.city}
                  defaultValue=""
                  variant="standard"
                  color='success'
                  onChange={(e) => handleChange(e)} />
              </div>

              <div>
                <TextField
                  sx={{ '& > :not(style)': { m: 1, mr: 2 }, height: '25px', width: '350px' }}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  id="standard"
                  label={t("userProfileForm.cp")}
                  name='zip'
                  alue={form.zip}
                  defaultValue=""
                  variant="standard"
                  color='success'
                  onChange={(e) => handleChange(e)} />

              </div>
              <div style={{ "display": "flex", "marginLeft": "25px", "justifyContent": "space-between" }}>
                <div>
                  <FormControl onChange={(e) => handleChange(e)}>
                    <FormLabel id="demo-radio-buttons-group-label">{t("userProfileForm.g")}</FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue=""
                      color='success' row>
                      <FormControlLabel value="female" name='genre' control={<Radio />} label={t("userProfileForm.f")} />
                      <FormControlLabel value="male" name='genre' control={<Radio />} label={t("userProfileForm.m")} />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div>
                  <FormControl onChange={(e) => handleChange(e)}>
                    <FormLabel id="demo-radio-buttons-group-label">{t("userProfileForm.v")}</FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue=""
                      color='success' row>
                      <FormControlLabel value="Yes" name='vaccinated' control={<Radio />} label={t("userProfileForm.s")} />
                      <FormControlLabel value="No" name='vaccinated' control={<Radio />} label={t("userProfileForm.n")} />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <Box sx={{ '& button': { m: 3 } }}>
                <div style={{ "width": "450px", "position": "relative", "display": "flex", "justifyContent": "flex-end" }}>
                  <Button type='submit' size="medium" color="success" variant="contained"
                    endIcon={<SendIcon />} onClick={(e) => handleSubmit(e)}>{t("userProfileForm.btn")}</Button>
                </div>
              </Box>
            </Box>
          </FormControl>
        </Container>
      </div>
    )
  )
}



export default UserProfileForm;
