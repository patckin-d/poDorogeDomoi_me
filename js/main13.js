let buttonThank = document.getElementsByTagName("button")[1];
buttonThank.addEventListener("click", () =>{
    // console.log("и тебе спасибо");
    document.dispatchEvent(newEvent);
    // sayThanks()
});