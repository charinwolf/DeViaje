import React from 'react'
import { useTranslation } from 'react-i18next'
import loading from '../../components/assets/spinner/Spinner.gif'
import styles from './loading.module.css'

export const Loading = () => {

    const [t, i18n] = useTranslation('global')

    return (
      
        <div className= { styles.container }>
        <img src={loading} alt='loading' /> 
        <h3 className= { styles.subTitle}>{t("loading.loading")}</h3>
       </div>
    )
}