import Button from '@mui/material/Button';
import s from './styles.module.css'
import img from './Img/woman.jpg'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { topdestination } from '../../Redux/actions/actions';
import Slider from 'infinite-react-carousel';
import top from './assets/Istanbul-skyline.jpg'
import top1 from './assets/medellin.jpg'
import top2 from './assets/miami2.jpg'
import top3 from './assets/new york.jpg'
import top4 from './assets/frankfurt-2.jpg'
import top5 from './assets/las vegas.webp'
import top6 from './assets/barcelona.jpg'
import { NavLink } from 'react-router-dom'
import { Loading } from '../loading/Loading';

export function TopDestination() {


    //     const apiKey = 'AIzaSyDpDeQ4dvtyfQoxkE6xz1tc5Ll05eXfX3w'
    //    const reverse = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY`
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" }
    })
    const [showLoading, setShowLoading] = useState(false)
    //console.log(location)


    const dispatch = useDispatch()
    const handleSearch = (e) => {

        dispatch(topdestination(e.target.value))
        setShowLoading(true)
    }


    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
    }


    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return (
        <div className={s.mainContainer}>
            {
                showLoading && <div style={{ marginBottom: '100%' }} ><Loading /></div>
            }
            <div className={s.container}>
                <h2 className={s.title}>Top Destinations</h2>
                <Slider autoplay={true} dots className={s.slider}>

                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='istanbul' className={s.slide} src={top} alt="istanbul" onClick={handleSearch} />
                            <p className={s.slideText}>Istabul</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='medellin' className={s.slide} src={top1} alt="medellin" onClick={handleSearch} />
                            <p className={s.slideText}>Medellin</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='miami' className={s.slide} src={top2} alt="miami" onClick={handleSearch} />
                            <p className={s.slideText}>Miami</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='new york' className={s.slide} src={top3} alt="new york" onClick={handleSearch} />
                            <p className={s.slideText}>New York</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='frankfurt' className={s.slide} src={top4} alt="frankfurt" onClick={handleSearch} />
                            <p className={s.slideText}>FrankFurt</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='las vegas' className={s.slide} src={top5} alt="las vegas" onClick={handleSearch} />
                            <p className={s.slideText}>Las Vegas</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <input type='image' value='barcelona' className={s.slide} src={top6} alt="barcelona" onClick={handleSearch} />
                            <p className={s.slideText}>Barcelona</p>
                        </NavLink>
                    </div>

                </Slider>
            </div>
            <div className={s.container}>
                <h2 className={s.title}>Offers you cannot wait</h2>
                <img className={s.img} src={img} alt="Woman on computer" />
                <div className={s.offers}>
                    <p className={s.text}>If you have not yet defined your destination, you may be interested in seeing our offers section.</p>
                    <Button size="small" variant="contained" >View Offers</Button>
                </div>
            </div>
        </div>
    )
}