let btn = document.getElementsByClassName('btn')[0];
let anketa = document.getElementsByClassName('anketa')[0];

// element.onclick = () => {
//     console.log('action')
// }


function functionWithCallback(callback){
    let arr = [1,2,3];
    for (let i = 0; i <= arr.length; i++){
        callback(i)
    }
}

function fn2(){
    functionWithCallback((event) => {
        console.log(event)
    })
}

anketa.addEventListener("click", () => {
    console.log("click 2")
})


// btn.addEventListener("click", () => {
//     console.log("click 1")
// })


// click 2
// click 1
