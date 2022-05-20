const { Router } = require('express')
const router = Router()
const { getCityInfo } = require('../controllers/getCityInfo')

//Se puede usar para buscar localizaciones pasando el nombre de una ciudad como "term", alternativamente un type que se
//usaria para filtrar resultados
module.exports = (req, res)=>{
    const {search, type} = req.query
    axios.get(`${BASE}/locations/query?term=${search}`, {headers: {
        apikey: 'n_-RwJB-98J-s0_OyVx1n9tFSd5SPtoI'
    }})
    .then(resp => {
        if(resp.data.locations.length === 0){
            return res.status(450)
        }
        return resp.data.locations
    })
    .then(resp => res.status(200).send(resp.find(e=>(e.type === 'city' && e.name.toLowerCase().includes(search.toLowerCase())))))
    .catch(error => res.status(404).send(error))
}
