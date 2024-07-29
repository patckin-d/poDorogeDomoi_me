let arrayCards = [];

fetch("https://khocho-73180f13cb53.herokuapp.com/api/cards")
.then ((response)=>{
    return response.json();
})
.then ((response)=>{
    console.log(response);
    arrayCards = response;
    for(let i = 0; i < arrayCards.length; i++){
    
        const card = document.createElement("a");
        document.getElementsByClassName("MenayPugautEtiShtuki")[0].appendChild(card);
        card.classList.add("button-style");
            
        const text1 = document.createElement("div");
        text1.textContent = arrayCards[i].text1;
        card.appendChild(text1);
        text1.classList.add("programa");

        const classPictureTitle = document.createElement("div");
        card.appendChild(classPictureTitle);
        classPictureTitle.classList.add("pictureTitle");

        const pictureImg = document.createElement("img");
        classPictureTitle.appendChild(pictureImg);
        pictureImg.src ="./img/Group 815.svg";
        
        const text2 = document.createElement("div");
        text2.textContent = arrayCards[i].text2;
        classPictureTitle.appendChild(text2);
        text2.classList.add("kartochkText");
    
        const text3 = document.createElement("div");
        text3.textContent = arrayCards[i].text3;
        card.appendChild(text3);
        text3.classList.add("programa");
    
        const text4 = document.createElement("div");
        text4.textContent = arrayCards[i].text4 + " месяца";
        card.appendChild(text4);
        text4.classList.add("chasy");

        if (arrayCards[i].text4 <= 3 ){
            card.style.backgroundColor = "#FFE38E"
        } else if(arrayCards[i].text4 <=10){
              card.style.backgroundColor = "#C7EEFF"
        } else if(arrayCards[i].text4 > 10){
            card.style.backgroundColor = "#B8EFCF"
        }
    }
})


       
        
    


    const direction = [
        {
            button: "Роботехника"
        },

        {
            button: "Создание игр"
        },

        {
            button: "Web-разработка"
        },

        {
            button: "Мультимедиа"
        },

        {
            button: "Шахматы"
        },

        {
            button: "3D-моделирование"
        },

        {
            button: "Английский язык"
        },

        {
            button: "Блогинг"
        },

        {
            button: "Soft-skills"
        }
    ]

    for(let i = 0; i < direction.length; i++){
        const buttonForTegi = document.createElement("div");
        document.getElementsByClassName("tegiknopki")[0].appendChild(buttonForTegi);
        buttonForTegi.classList.add("umenyazakonchilisnasvania1");

        const background = document.createElement("div");
        buttonForTegi.appendChild(background);
        background.classList.add("fonKnopka"); 

        const buttonClass = document.createElement("div");
        buttonForTegi.appendChild(buttonClass);
        buttonClass.classList.add("Knopka1");

        const button = document.createElement("button");
        button.textContent = direction[i].button;
        buttonClass.appendChild(button);
        button.classList.add("btn");
    }

        


        /*
            <a>
            </a>
            <div></div.
        */

    

    // document.getElementsByClassName("button-style")[0].appendChild(card);

    // arrayCards[i].text1 = textCard;

    /*
        <a>
            <div>text1<div>
            <div>text2<div>
            <div>text3<div>
            <div>text4<div>
        <a>
    */