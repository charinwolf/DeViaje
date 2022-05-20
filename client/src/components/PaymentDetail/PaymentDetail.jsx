import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import s from './PaymentDetail.module.css';

function PaymentDetail({ price }) {
    const [t, i18n] = useTranslation('global')
    const passengers = useSelector(state => state.passengers)
    console.log(passengers)
    return (
        <div className={s.paymentGrid}>
            <div className={s.payment}>{t("paymentDetail.det")}</div>
            <div>
                <div className={s.flight}>
                    <div className={s.name}>{t("paymentDetail.vuelo")}</div>
                    <div className={s.name}>USD {price}</div>
                </div>
                <div className={s.flight}>
                    <div className={s.name}>{t("paymentDetail.imp")}</div>
                    <div className={s.name}>USD {(price * .8).toFixed()}</div>
                </div>
                <div className={s.flight}>
                    <div className={s.total}>Total <span className={s.pasa}>({t("paymentDetail.pasa")} x {passengers})</span></div>
                    <div className={s.total}>USD { (passengers * price * 1.8).toFixed()}</div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetail;