
let isModalShown = false; // Флаг
let saveIndex = undefined; 
const block = document.getElementsByClassName("imgs")[0];
const img = document.getElementsByTagName("img");
const modalwindows = document.getElementsByClassName("modalwindows")[0];
const popUpImage = modalwindows.getElementsByTagName("img")[0];
const popUpText = modalwindows.getElementsByClassName("text")[0];
const arrowRight = document.getElementsByClassName("arrowRight")[0];
const arrowLeft = document.getElementsByClassName("arrowLeft")[0];
const filter = document.getElementsByClassName("filter")[0];
const button = document.getElementsByClassName("filterButton");

const arrayTextImg = [
    {
        link: "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
        text: "яблоко в снегу",
        badge: "яблочко"
    },
    {
        link: "https://img.razrisyika.ru/kart/90/356661-krome-hellou-kitti-33.jpg",
        text:  "кити, хэлоу",
        badge: "киса"
    },
    {
        link: "https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg",
        text:   "одинокая луна",
        badge: "артрит"
    },
    {
        link: "https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled",
        text: "выпей чаю и остынь",
        badge: "киса"
    
    }
]

arrayTextImg.forEach(element => {
    const imgElement = document.createElement("img");
    imgElement.src = element.link;
    
    const imgBadge = document.createElement("div");
    imgBadge.classList.add("imgApple");

    const badge = document.createElement("div");
    badge.textContent = element.badge;
    badge.classList.add("apple");

    imgBadge.appendChild(imgElement);
    imgBadge.appendChild(badge);
    block.appendChild(imgBadge);
});

const imgTextApple = document.getElementsByClassName("imgApple");

for( let i = 0; i <= button.length -1; i++){
    filter.getElementsByTagName("button")[i].addEventListener("click", () => {
        arrayTextImg.forEach((element,index) => {
            if(element.badge == filter.getElementsByTagName("button")[i].textContent ){
                imgTextApple[index].style.display = "inline-block";
            } else {
                imgTextApple[index].style.display = "none";
            }

            if(i == 3){
                imgTextApple[index].style.display = "inline-block";
            }
        })
    });
}

for(let i = 0; i <= arrayTextImg.length - 1; i++){
    img[i].addEventListener("click", (event) => {
        if (!isModalShown){
            saveIndex = i;
            modalwindows.style.display = "flex";
            popUpImage.src = event.srcElement.src 
            popUpText.textContent = arrayTextImg[i].text;
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

arrowRight.addEventListener("click", () => {
    if(saveIndex + 1 == arrayTextImg.length){
        return;
    }
    popUpText.textContent = arrayTextImg[saveIndex + 1].text;
    popUpImage.src = arrayTextImg[saveIndex + 1].link;
    saveIndex = saveIndex + 1;
});

arrowLeft.addEventListener("click", () => {
    if(saveIndex == 0){
        return;
    }
    popUpImage.src = arrayTextImg[saveIndex - 1].link;
    popUpText.textContent = arrayTextImg[saveIndex - 1].text;
    saveIndex = saveIndex - 1;
});