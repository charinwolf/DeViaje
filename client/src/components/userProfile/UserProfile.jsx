
import {React, useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { axiosWithOutToken } from '../../services/axios'



const UserProfile = () => {
    const { isAuthenticated, user } = useAuth0();
    const [t, i18n] = useTranslation('global')
    const data = axiosWithOutToken('/getpersonalinfo', 'GET')
   
            
    console.log(data)

    return (
        isAuthenticated  && (
            <div>
                <Container maxWidth="xl" align='center'>
                    <CssBaseline />
                    <Typography variant="h4" align='center' gutterBottom component="div" sx={{ m: 2 }}>
                        {t("userProfile.per")}
                    </Typography>
                    <Box component="form" 
                    sx={{ '& > :not(style)': { m: 1 }, display: 'grid', gap: 1, gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows:' repeat(3, 1fr)', gridColumnGap: '8px', gridRowGap: '36px', height: '70vh', width: '100vh' }} 
                    noValidate autoComplete="off"
                    >
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.n")}
                                value={user.given_name}
                                variant="outlined"
                                color='success'
                            />
                        </div>
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.a")}
                                value={user.family_name}    
                                variant="outlined"
                                color='success' 
                            />
                        </div>
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.m")}
                                value={user.email}    
                                variant="outlined"
                                color='success' 
                            />
                        </div>
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.u")}
                                value={user.nickname}    
                                variant="outlined"
                                color='success' 
                            />
                        </div>
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.dni")}
                                value={data?.dni ? data.dni : 'Sin completar'}    
                                variant="outlined"
                                color='success' 
                            />
                        </div>
                        <div>
                            <TextField
                                disabled                                
                                id="standard-required"
                                label={t("userProfile.t")}
                                value={data?.phonenumber ? data.phonenumber : 'Sin completar'}    
                                variant="outlined"
                                color='success' 
                            />
                        </div>

                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='Date of Birth'
                                value= {data?.birthday ? data.birthday : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />
                        </div>

                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='Country'
                                value= {data?.country ? data.country : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />
                        </div>

                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='State'
                                value= {data?.state ? data.state : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />
                        </div>

                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='City'
                                value= {data?.city ? data.city : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />               
                        </div>

                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='Gender'
                                value= {data?.gender ? data.gender : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />
                        </div>
                        <div>
                            <TextField 
                                disabled
                                id='standard-required'
                                label='Vaccinated'
                                value= {data?.vacinated ? data.vaccinated : 'Sin completar'}
                                variant='outlined'
                                color='success'
                            />
                        </div>
                    </Box>
                </Container>
            </div>
        )
    )
}

export default UserProfile;
