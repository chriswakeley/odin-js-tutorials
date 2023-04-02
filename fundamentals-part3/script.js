function add7(number){
    return number + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(phrase){
    phrase = phrase.toLowerCase();
    return phrase.substring(0, 1).toUpperCase() + phrase.slice(1);
}

function lastLetter(phrase){
    return phrase.slice(phrase.length - 1);
}

console.log(add7(3));
console.log(multiply(2, 5));
console.log(capitalize("capitalize mE"));
console.log(lastLetter("capitalize mE"));