import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./CardDetail.module.css";

function CardDetail(props) {
  const { cityfrom, cityTo, local_departure, price, currency } = props;
  return (
    <>
      <div className={styles.cardDetail}>
        <div className={styles.outwardJourney}>
          <span className={styles.baggageContainer}>{price}</span>
          <span className={styles.timeTable}>{local_departure}</span>
        </div>
        <div className={styles.returnTrip}>
          <span className={styles.baggageContainer}>Equipaje</span>
          <span className={styles.timeTable}>{local_departure}</span>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
