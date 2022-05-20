import s from './styles.module.css'
import header from './img/home-header.jpg'
import AA from './img/120px-Aerolineas_Argentinas.svg.png'
import img1 from './img/113px-Emirates_logo.svg.png'
import img2 from './img/120px-Emirates_SkyCargo_Logo.svg.png'
import img3 from './img/120px-Kiwijet.svg.png'
import img4 from './img/120px-Logotipo_de_Iberia.svg.png'
import img5 from './img/alitalia.png'
import img6 from './img/Avianca_logo_red.svg.png'
import img7 from './img/Latam-logo_-v_(Indigo).svg.png'
import img8 from './img/Lufthansa_Logo_2018.svg.png'
import img9 from './img/Work-as-a-flight-attendant.webp'
import { useTranslation } from 'react-i18next'

export function About (){
    const [t, i18n] = useTranslation('global')
    return(
        <div className={s.mainContainer}>
            <img className={s.imgHeader} src={header} alt="header" />
            
           <div className={s.container}>
           <div className={s.flex}>
                <h2 className={s.title}>{t("about.quien")}</h2>
                <p>{t("about.texto")}</p>
                    <img className={s.image} src={img9} alt="flight attendance" />
            </div>
            <div className={s.flex}>
                <h2 className={s.title}>{t("about.alianzas")}</h2>
                <div className={s.logos}>
                <img src={AA} alt="Logo" className={s.logos} />
                <img src={img1} alt="Logo"  className={s.logos}/>
                <img src={img2} alt="Logo" className={s.logos}/>
                <img src={img3} alt="Logo" className={s.logos}/>
                <img src={img4} alt="Logo" className={s.logos}/>
                <img src={img5} alt="Logo" className={s.logos}/>
                <img src={img6} alt="Logo" className={s.logos}/>
                <img src={img7} alt="Logo" className={s.logos}/>
                <img src={img8} alt="Logo" className={s.logos}/>
                </div>
            </div>
           </div>
        </div>
    )
}