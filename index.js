// program to add functionality in calculator
/* 
    author shubham singh
    email  shubhamsingh0819@gmail.com
    dete   02-12-2020
    time   07:16 AM

*/


// initialising the final output variable

let expression=" ";

// selecting output screen



function concatExpression(input){
    expression +=input;
    console.log(expression);
    document.getElementById('output').innerHTML=expression;
}

function showResult(){
    document.getElementById('output').innerHTML=eval(expression);
}

function clearExpression(){
    expression=' ';
    document.getElementById('output').innerHTML=expression;
}