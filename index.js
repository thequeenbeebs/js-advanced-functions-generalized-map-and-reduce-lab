// Add your functions here


function map(sourceArray, func) {
    return sourceArray.map(num => func(num))
}

function reduce(sourceArray, func, startingPoint="") {
    if (startingPoint) {
        return sourceArray.reduce(func, startingPoint)
    }
    else {
        return sourceArray.reduce(func)
    }
    
}
