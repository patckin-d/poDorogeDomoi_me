let arrayNumber = [0,3,1,5,4,2];

function arrayFilter(value, index, array){
    if (value > 3) {
        return true
    } else {
        return false
    }
}

arrayNumber.filter(arrayFilter)

/*
sort
filter
join

push
splice

forEach
map
*/

function arraySort(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    }

    return 0
}

function arrayForEach(value, index, array) {
    // console.log(value)
}

arrayNumber.forEach(arrayForEach);

let firstArray = ["d","a","n","y","a"];

firstArray.sort(arrayFirstSort);

function arrayFirstSort(a,b){
    if(a == "a"){
        return 1
    }else if(b == "a"){
        return -1
    }
    return 0
} 

let resultFilterArray = firstArray.filter(arrayFirstFilter);
console.log(resultFilterArray);

function arrayFirstFilter(value,index,array){
    if (value == "a"){
        return true
    } else {
        return false
    }
}

console.log(firstArray[1]);


