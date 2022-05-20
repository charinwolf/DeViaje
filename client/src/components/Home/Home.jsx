import React, { useState } from "react";
import styles from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import { ModalDetails } from '../modalDetails/ModalDetails';
import { Modal } from "../modal";
import { Loading } from "../loading/Loading";
import { Paginado } from "../Paginado/paginado";
import CardFrom from "./CardFrom";
import CardFromTo from "./CardFromTo";
import { ModalDetailsReturn } from "../modalDetails/modalDetailsReturn";
import { useTranslation } from "react-i18next";


export default function Home() {

  const flights = useSelector((state) => state.allFlights);
  const loading = useSelector((state) => state.loading);
  const modalErr = useSelector((state) => state.modalErr);
  const dataInputs = useSelector((state) => state.dataInputs);

  const [showDetails, setShowDetails] = useState(false)
  const [showDetailsReturn, setShowDetailsReturn] = useState(false)
  const [detailsReturn, setDetailsReturn] = useState([])

  const [idDetails, setIdDetails] = useState()

  let [currentPage, setcurrentPage] = useState(1);
  const [flightsPerPage,] = useState(6)
  const indexOfLastFlight = currentPage * flightsPerPage; // 10
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage // 10 - 10 = 0 
  const currentFlights = flights && flights?.slice(indexOfFirstFlight, indexOfLastFlight)
  
  const pagination = (pageNumber) => {
    setcurrentPage(pageNumber)
    window.scroll(0, 0)
  }

  const handleDetails = (id) => {
    setIdDetails(flights.find(el => el.id === id))
    setShowDetails(true)
  }
  const handleDetailsReturn = (id, filterDeparture) => {
    setDetailsReturn(filterDeparture)
    setIdDetails(flights.find(el => el.id === id))
    setShowDetailsReturn(true)
  }

  const [t, i18n] = useTranslation('global')

  return (

    <div className={styles.containerGeneral}>

      {
        showDetails && <ModalDetails idDetails={idDetails} setShowDetails={setShowDetails} />
      }
      {
        showDetailsReturn && <ModalDetailsReturn idDetails={idDetails}
          setShowDetails={setShowDetailsReturn} detailsReturn={detailsReturn} />
      }
      {
        modalErr && <Modal title={t("home.modal")} />
      }
      <div className={styles.containerSearch}>
        <SearchBar/>
        <Filter />
      </div>
      <div className={styles.containerFlights}>
       
        { 
          loading && <div style={{marginBottom:'1500px'}}><Loading /></div>
        }
        
        {
          dataInputs.toFrom ? currentFlights?.map((f)=>(
            <CardFromTo key={f.id} f={f} handleDetails = { handleDetailsReturn } />)) 
          : 
          currentFlights?.map((f) => 
            (
              <CardFrom key={f.id} f={f} handleDetails = { handleDetails } />
            )
          ) 
        }
        {
          currentFlights && currentFlights.length !== 0 && <Paginado
                                              flightsPerPage={flightsPerPage}
                                              flights={flights && flights.length}
                                              pagination={pagination}
                                              currentPage={currentPage}
                                          />
        }
     
      </div>
    </div>
  );
}
