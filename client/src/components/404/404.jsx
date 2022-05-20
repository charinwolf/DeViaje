import { useHistory } from 'react-router-dom'
import s from './styles.module.css'
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default  function NoMatch(){

     const history = useHistory() 

     const handle = () => {
        history.push('/')
     }

     const [t, i18n] = useTranslation('global')

     return(
      <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <h3 className={s.title2}>{t("404.texto")}</h3>
      <Button size="small" variant="contained" style={{margin: '1rem'}} onClick={handle}>{t("404.bnt")}</Button>
      </div>
     )
}