const employee = {
    name: "Jason Bracco",
    address: "1268 Columbia Road",
}


function updateEmployeeWithKeyAndValue(obj, key, value){
    return {...obj, [key]:value,}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete employee[key]
    return employee
}


