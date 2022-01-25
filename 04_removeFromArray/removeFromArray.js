const removeFromArray = function(arr, ...toBeRemoved) {
    let newArray = arr;
    for (const toRemove of toBeRemoved) {
        while (newArray.includes(toRemove)) {
            const index = newArray.indexOf(toRemove);
            if(index > -1) {
                newArray.splice(index, 1);
            }
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
