import Button from '@mui/material/Button';
import s from './styles.module.css'
import img from './assets/woman.jpg'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { topdestination, setValuesInputs } from '../../Redux/actions/actions';
import top from './assets/istanbul.jpg'
import top1 from './assets/medellin.jpg'   
import top2 from './assets/miami2.jpg'
import top3 from './assets/nueva-york_0.webp'
import top4 from './assets/frankfurt-2.jpg'
import top5 from './assets/las vegas.webp'
import top6 from './assets/barcelona.jpg'
//import { Loading } from '../loading/Loading';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
//import getCity from './helpers/getCity'
import {useHistory} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
   

export  function TopDestination(){

    const toFrom = {}
    toFrom.toFrom =  false
    const history = useHistory()
    const [location, setLocation] = useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    })
    //const [ showLoading, setShowLoading ] = useState(false)
    //let [ data, setData] = useState('') // origin
  
   useEffect(() => {
    if(!("geolocation" in navigator)){
      onError({
         code:0,
         message:"Geolocation not supported"
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}, [])


//    useEffect(() => {
//     const updateCity = () => {
//         getCity(location)
//            .then((city) => {
//                setData(prev => ({...prev, city}))
//            })
//            .catch(err => console.log('errorCity',err))
//     }
//     updateCity()
//    } ,[location])

    
    const dispatch = useDispatch()
    const check = false

    const handleSearch = (e) =>{  
        //setShowLoading(true)
        
        const d = new Date().toISOString()
        const date = d.slice(0,10)

        const inputValues = {
            fly_from: 'buenos aires',
            fly_to: e.target.value,
            dateFrom: date,
            dateTo: '2022-04-29',
        }
        const newInputValues = {
            fly_from: 'buenos aires',
            fly_to: e.target.value,
            dateFrom: date,
            dateTo: '2022-04-29',
            toFrom: toFrom.toFrom,
            check
        }

        dispatch(setValuesInputs( newInputValues ))
        dispatch(topdestination( inputValues ))
        //dispatch(setValuesInputs( toFrom ))
        //dispatch(topdestination(e.target.value))
        //setShowLoading(false)
        history.push('/home')
        window.scroll(0, 0)
   }

   const onSuccess = location => {
       setLocation({
          loaded:true,
          coordinates:{
              lat:location.coords.latitude,
              lng:location.coords.longitude,
          }
       })
   }

   const onError = error => {
       setLocation({
           loaded: true,
           error,
       })
   }

   const buttonToOffersPage = () => {
       history.push('/top')
   }

   const [t, i18n] = useTranslation('global')

    return(
        <div className={s.mainContainer}>
              {/* {
          showLoading &&  <div style={{position: 'abolsute'}} > <Loading /> </div> 
              } */}
             
            <div className={s.container}>
                <h2 className={s.title}>{t("carousel.top")}</h2>
         <Carousel>
            <Carousel.Item>
                    <input type='image' value='istabul' name='istabul' className={s.slide} src={top} alt="Istabul" onClick={(e) => handleSearch(e)}/>
                <Carousel.Caption>
                <p>Istanbul</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='medellin' name='medellin'  className={s.slide} src={top1} alt="Medellin" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Medellin</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='miami'  name='miami'  className={s.slide} src={top2} alt="Miami" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Miami</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                
                    <input type='image' value='new york' name='new york' className={s.slide} src={top3} alt="New York" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>New York</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             
                    <input type='image' value='frankFurt' name='frankFurt'  className={s.slide} src={top4} alt="FrankFurt" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>FrankFurt</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='las vegas' name='las vegas'  className={s.slide} src={top5} alt="Las Vegas" onClick={handleSearch}/>
                
                <Carousel.Caption>
                <p>Las Vegas</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                
                    <input type='image' value='barcelona'  name='barcelona'  className={s.slide} src={top6} alt="Barcelona" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Barcelona</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </div>
            <div className={s.container}>
                <h2 className={s.title}>{t("ofertas.ofertas")}</h2>
                <img className={s.img} src={img} alt="Woman on computer" />
                <div className={s.offers}>
                    <p className={s.text}>{t("ofertas.texto")}</p>
                    <button onClick={buttonToOffersPage} className={s.btnOffers} >{t("ofertas.btn")}</button>
                </div>
            </div>
        </div>
    )
}