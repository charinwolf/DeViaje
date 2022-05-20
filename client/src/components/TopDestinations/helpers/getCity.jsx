const getCity = async (location) => {
    const res = await fetch(`https://tequila-api.kiwi.com/locations/radius?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&radius=200&locale=en-US&location_types=airport&limit=1&active_only=true`,{
        headers:{apikey: '-bo7TXYPf_ZTWM3PbGt2Su4ZNpgWu6-K'}
    } )
    const city = await res.json()
    return city

}

export default getCity