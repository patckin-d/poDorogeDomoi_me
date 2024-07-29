
const block = document.getElementsByClassName("imgs")[0];
let isModalShown = false; // Флаг
const img = document.getElementsByTagName("img");
const modalwindows = document.getElementsByClassName("modalwindows")[0];
const imgSrc = [
    "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
    "https://img.razrisyika.ru/kart/90/356661-krome-hellou-kitti-33.jpg",
    "https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg",
    "https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled",
];
const text = [
    "яблоко в снегу",
    "кити, хэлоу",
    "одинокая луна",
    "выпей чаю и остынь"
]

let saveIndex = undefined;
const arrowRight = document.getElementsByClassName("arrowRight")[0];
const arrowLeft = document.getElementsByClassName("arrowLeft")[0];

imgSrc.forEach(element => {
    const imgElement = document.createElement("img")
    imgElement.src = element
    block.appendChild(imgElement);
});

for(let i = 0; i <= imgSrc.length - 1; i++){
    img[i].addEventListener("click", (event) => {
        if (!isModalShown){
            saveIndex = i;
            modalwindows.style.display = "flex";
            modalwindows.getElementsByTagName("img")[0].src = event.srcElement.src 
            modalwindows.getElementsByClassName("text")[0].textContent = text[i];
            document.body.classList.add("overflow-hidden");
            isModalShown = true;
        }
    });
}


modalwindows.getElementsByClassName("close")[0].addEventListener("click", () => {
   closeModalWindow();
});

modalwindows.getElementsByClassName("background")[0].addEventListener("click", () => {
    closeModalWindow();
});

const closeModalWindow = () => {
    modalwindows.style.display = "none";
    document.body.classList.remove("overflow-hidden");
    isModalShown = false; 
}

arrowRight.addEventListener("click",(event) => {
    if(saveIndex + 1 == imgSrc.length){
        return;
    }
    modalwindows.getElementsByClassName("text")[0].textContent = text[saveIndex + 1];
    modalwindows.getElementsByTagName("img")[0].src = imgSrc[saveIndex + 1];
    saveIndex = saveIndex + 1;
});

arrowLeft.addEventListener("click",(event) => {
    if(saveIndex == 0){
        return;
    }
    modalwindows.getElementsByTagName("img")[0].src = imgSrc[saveIndex - 1];
    modalwindows.getElementsByClassName("text")[0].textContent = text[saveIndex - 1];
    saveIndex = saveIndex - 1;
});