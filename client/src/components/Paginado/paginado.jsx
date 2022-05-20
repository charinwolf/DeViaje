import s from './pagination.module.css'
import Pagination from '@mui/material/Pagination';

export function Paginado({flightsPerPage,flights, pagination, currentPage}){



     const pageNumbers = []
   

     for (let i = 1; i < Math.ceil(flights/flightsPerPage); i++) {
          pageNumbers.push(i)
          
     }

     return(
  
           <nav className={s.container}>
             <Pagination defaultValue={currentPage}  count={pageNumbers.length} onChange={(e, v) => pagination(v)} color="secondary"  shape="rounded" />  
          </nav>
     
     )
}


