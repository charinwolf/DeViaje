import React from 'react';
import { useDispatch } from "react-redux";
import { hideModalErr } from '../../Redux/actions/actions'
import styles from './index.module.css'

export const Modal = ( { title } ) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch( hideModalErr() )
   }
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
            <h1 className={styles.title}> { title } </h1>
            <button className={styles.btnAceptar}
                    onClick={handleClick}> Aceptar </button>
        </div>
      </div>
    </>
  )
}