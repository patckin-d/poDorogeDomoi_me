// Переменные
// let returnText = "Hello, world!" + 10; //"Hello, world!10"
// let incorrect = 10 + "Hello, world!"; // Error
// let booleanIncorrect = false + 1;

console.log();

let text = "Hello, world!"; // ковычки - строка

let num1 = 1; // число
let num2 = 2; // число
let num3 = num1 + num2;

num1 = "str";

let a = "asd";

let booleanTrue = true; // true/false булеан
let booleanFalse = false;
let und = undefined; // undefined
let nullType = null; // null
let arrayType = [1,2,3,4,"text", num1]; // [] - массив
let objectType = { // фигурные скобки
    "asd as d": 10,
    key1: num2,
    key2: null,
    key3: [1,2,3],
    key4: {
        "key3": {}
    }
}

let array1 = [1, 2, 3, 4, { key1: "qwe" }];
let array2 = [a, 'b', "c", 'd'];
/*
    1. Строка (string, стринга) - "text" - 'text' - "It's" - 'It's' 
    2. Числа (numbers) - 1 10.0 - 10.999999999999999999999999. 
    3. Булевые (boolean) - true false (истина ложь)
    4. undefined 
    5. null 
    6. Массивы (Array) - [1, 2, 3, 4, { key1: "qwe" }] [true, 10, "text", undefined, null]
    7. Объект (Object) - ключ:значение
    {
        "asd as d": 10,
        key1: "text",
        key2: null,
        key3: [1,2,3],
        key4: {
            "key3": {
                "key3": {

                }
            }
        }
    }

    [[[[[]]]],]
*/