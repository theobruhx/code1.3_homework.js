document.addEventListener("DOMContentLoaded", function() {

    /* задача 1 */
    let str = 'abcde';
    alert(str[0]);
    alert(str[1]);
    alert(str[4]);
    
    /* задача 2 */
    let a = parseInt(prompt("бупкни первое число:"));
    let b = parseInt(prompt("бупкни второе число:"));
    console.log(a > 0 || b > 0);
    
    /* задача 3 */
    let age = parseInt(prompt("сколько тебе годиков:"));
    if (age >= 18) {
        console.log("вырос");
    } else {
        console.log("еще не вырос");
    }
    
    /* дополнительно */
    let number = parseInt(prompt("бупкни число:"));
    let isEven = number % 2 === 0;
    });