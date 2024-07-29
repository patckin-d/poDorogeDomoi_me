// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(response => response.json())
// .then((data) => {
//   console.log(data)
// })

const modalWindows = document.getElementsByClassName("modalWindow")[0];
const arrowRight = document.getElementsByClassName("arrow right")[0];
const arrowLeft = document.getElementsByClassName("arrow left")[0];
const imgInModalWindow = modalWindows.getElementsByTagName("img")[0];
const elem = document.getElementsByClassName("textForImg")[0];
const button = document
  .getElementsByClassName("buttonForFilter")[0]
  .getElementsByTagName("button");
let saveIndex = NaN;

// const galleryArray = [
//     "https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkySQXwdNMnI8/PNba8pyNInitV1En1Qdhu0twGmHiymjH/nCd33IfZp41EeJXY33GHrVSLt57xo6pa/VozN-wd4N4lIYXU0b2GSd8QksDYufIEC.jpg",
//     "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/jeRvjIvWhQOabJ-YanOeOziw6ztX2jbp/2Dad_SpgUZ6RkwdIMPVwD9PZO8lfEOX-.jpg",
//     "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/JFFwDfQvZPk_d5TV3RYSv5nqzFSJL6eC/inGe8ipwKhXMse15OlkhpGhbxJdV5fga.jpg",
//     "https://i.wfolio.com/x/vxoyXabZOPN15yoQh522RFzm2B4dU6bB/stnT5YBEZx69uZwdRHdEWy-YZYetx2JK/31epFo8kqnN0LetGDqA6tSYzmSDnD6s-/CZ0BkwVmyWNKcxj_LAB2giAqA8BUrjrm.jpeg"
// ];

// const textImg = [
//     "посмотрите",
//     "как красиво",
//     "жизнь -",
//     "кино"
// ];

// for(let i = 0; i <= gallery.length - 1; i++){

//     const img = document.createElement("img");
//     img.src = gallery[i].link;

//     document.getElementsByClassName("gallery")[0].appendChild(img);
//     imgInModalWindow.src = galleryArray[i];

//     const textImg = document.createElement("div");
//     textImg.classList.add("textForImg");

//     img.addEventListener("click", (event) => {
//         modalWindows.style.display = "flex";
//         imgInModalWindow.src = img.src;
//         saveIndex = i;
//     })
// }

// const PORTRET = "portret";
// const BADGES = {
//   PORTRET: "портрет",
//   OBJECT: "объект",
//   SHADOW: "тень",
// };

// badge: "портрет",BADGES.PORTRET

const gallery = [
  {
    link: "https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkySQXwdNMnI8/PNba8pyNInitV1En1Qdhu0twGmHiymjH/nCd33IfZp41EeJXY33GHrVSLt57xo6pa/VozN-wd4N4lIYXU0b2GSd8QksDYufIEC.jpg",
    text: "посмотрите",
    badge: "портрет",
  },

  {
    link: "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/jeRvjIvWhQOabJ-YanOeOziw6ztX2jbp/2Dad_SpgUZ6RkwdIMPVwD9PZO8lfEOX-.jpg",
    text: "как красиво",
    badge: "объект",
  },

  {
    link: "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/JFFwDfQvZPk_d5TV3RYSv5nqzFSJL6eC/inGe8ipwKhXMse15OlkhpGhbxJdV5fga.jpg",
    text: "жизнь -",
    badge: "портрет",
  },

  {
    link: "https://i.wfolio.com/x/vxoyXabZOPN15yoQh522RFzm2B4dU6bB/stnT5YBEZx69uZwdRHdEWy-YZYetx2JK/31epFo8kqnN0LetGDqA6tSYzmSDnD6s-/CZ0BkwVmyWNKcxj_LAB2giAqA8BUrjrm.jpeg",
    text: "кино",
    badge: "тень",
  },
];

for (let ibutton = 0; ibutton <= button.length - 1; ibutton++) {
  button[ibutton].addEventListener("click", () => {
    document.getElementsByClassName("gallery")[0].innerHTML = "";
    const arrayFiltered = [];

    for (let i = 0; i < gallery.length; i++) {
      if (button[ibutton].textContent === gallery[i].badge) {
        arrayFiltered.push(gallery[i]);
      }
    }
    renderGallery(arrayFiltered);
  });
}

function renderGallery(imgArray) {
  for (let i = 0; i <= imgArray.length - 1; i++) {
    const img = document.createElement("img");
    img.src = imgArray[i].link;
    document.getElementsByClassName("gallery")[0].appendChild(img);
    imgInModalWindow.src = imgArray[i].link;

    img.addEventListener("click", (event) => {
      modalWindows.style.display = "flex";
      imgInModalWindow.src = img.src;
      saveIndex = i; // порядковый номер картинки, которую сейчас видит пользователь на экране(отображается прямо сейчас)
      elem.textContent = imgArray[i].text;
    });

    
  }

}
renderGallery(gallery);

modalWindows.addEventListener("click", (event) => {
  if (event.target.className == "modalWindow") {
    modalWindows.style.display = "none";
  }
});

arrowRight.addEventListener("click", () => {
  if (saveIndex != gallery.length - 1) {
    saveIndex++;
    imgInModalWindow.src = gallery[saveIndex].link;
    elem.textContent = gallery[saveIndex].text;
  }
});

arrowLeft.addEventListener("click", () => {
  if (saveIndex != 0) {
    saveIndex--;
    imgInModalWindow.src = gallery[saveIndex].link;
    elem.textContent = gallery[saveIndex].text;
  }
});

// с каким типом данных нужно работать?
// перевести на человеческий язык и понять, с чем работаю прямо сейчас и какие можно применять свойства

// создать функц которая получает масив с объектами изображ и выводит на страницу див гэлери этот массив и отображает на страинце данные из этого массива

// const textImg = document.createElement("div");
// textImg.textContent = gallery[i].text;

// const elem = document.getElementsByClassName("textForImg")[0];

// const promise = new Promise((resolve, reject) => {
//   if (false){
//     setTimeout(()=>{
//       resolve("text")
//     }, 3000)
//   } else {
    
//     setTimeout(()=>{
//       reject({err: "name"})
//     }, 3000)
//   }
// })

// promise
// .then((data) => {
//   console.log(data)
// })
// .catch((data) => {
//   console.log(data)
// })

const promiseThreeSec = new Promise ((resolve,reject)=> {
  if(1==1){
    setTimeout(()=>{
      resolve("help me")
    }, 3000)
  }else{
    setTimeout(()=>{
      reject({err:"no"})
    },3000)
  }
});
// promiseThreeSec.then((data)=>{
//   console.log("data");
// });

fetch("https://jsonplaceholder.typicode.com/photos")
.then((response)=>{
  return response.json()
})
.then((response)=>{
  console.log(response);
})
