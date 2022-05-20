function validate(input){
    let errors = {}
    if(!input.fly_from){
        errors.fly_from = "Departure city required"
    }
    if(!input.fly_to){
        errors.fly_to = "Destination required"
    } else if(input.fly_to.toLowerCase() === input.fly_from.toLowerCase()){
        errors.fly_to = "Origin and destination cant be the same"
    }
    if(!input.dateFrom){
        errors.dateFrom = "Date required"
    }
    if(!input.dateTo){
        errors.dateTo = "Return date required"
    } else if(Date.parse(input.dateTo) < Date.parse(input.dateFrom)){
        errors.dateTo = "Return date must be after departure date"
    }
    return errors
}

module.exports = validate;