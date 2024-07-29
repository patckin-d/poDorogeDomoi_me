// let name = "Название";
// let numb = 248;
// let author = "Автор";

// let firstName = "Anna"
// let secondName = "Khocho"
// let fullNuma = firstName + " " + secondName;

// console.log(name);
// console.log(numb);
// console.log(author);

// Книга: Название(Автор, 248)

// let bookName = "Книга: " + name + "(" + author + ", " + numb + ")";
// console.log(bookName);

// let name2 = "Имя книги";
// let numb2 = 345;
// let author2 = "Писатель";

// let bookName2= "Книга: "+ name2 + "(" + author2 + ", " + numb2 + ")";
// console.log(bookName2);

// let book1 = {
//     name: "Название",
//     numb: 248,
//     author: "Автор",
//     showAuthor: function showAuthor() {
//         console.log('author')
//     }
// }
// book1.showAuthor()

// let book2 = {
//     name: "Имя книги",
//     numb: 345,
//     author: "Писатель"
// }

let books = [
    {
        name: "Название",
        numb: 248,
        author: "Автор"
    },
    {
        name: "Имя книги",
        numb: 345,
        author: "Писатель"
    }
]


function spisok(){
    console.log(books);
}

spisok(books)

function addBook(){
    let name = "";
    let numbr = 0;
    let author = "";
    
  books.push(name,numbr, author);
  console.log(books)
}







// // Функции (Functions)
// function printWord() {
//     let a = 1;
//     let b = 10 + a;
//     console.log("word")
//     console.log(b)
// }

// // printWord();

// // alert("Hello");
// let counter = 0;
// function conter(increment){
//     counter = counter + increment;
//     console.log(counter)}
// let a = 1;
// let b = 10;
// conter(a)
// conter(b)
