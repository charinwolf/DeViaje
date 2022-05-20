import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import s from './footer.module.css'
import { useTranslation } from 'react-i18next'


export function Footer(){
  const [t, i18n] = useTranslation('global')
    return(
      <div className={s.container}>
        <div>
          <h2 style={{color:'#1F618D'}}>DeViaje.com</h2>
        </div>
         <div className={s.containerIcons}>
         <IoLogoWhatsapp className={s.iconsWhatapp}/>
          <BsFacebook className={s.iconsFace}/>
          <FaInstagramSquare className={s.icons}/>
         </div>
        <div className={s.containerText}>
        <div className={s.text}>
            <h4>{t("footer.abuso")}</h4>
             <p>{t("footer.textoA")}</p>
        </div>
         <div className={s.text}>
        <h4>{t("footer.contacto")}</h4>
         <p>{t("footer.textoC")}</p>
        </div>
        <div className={s.text}>
            <h4>{t("footer.docs")}</h4>
            <p>{t("footer.textoD")}</p>
        </div>
        </div>
        <div className={s.flex}>
          <p className={s.footerItem}>{t("footer.terminos")}</p>
          <p className={s.footerItem}>{t("footer.privacidad")}</p>
          <p className={s.footerItem}>{t("footer.cookie")}</p>
          <p>{t("footer.derechos")}</p>
          
        </div>
      </div>
    )
}