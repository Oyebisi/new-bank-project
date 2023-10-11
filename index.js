//let name = 'olawale';
//console.log(name);
//======================data types===========================================
// let name = 'olawale';   //string
// let age = 30;           //number
// let iscorret = true;    //booelean
// let firstname = undefined; //undefined
// let lastname = null;       //null

// console.log(name+age+iscorret+firstname+lastname);
//========================functions======================================
// let lady = {
//     mane: "olamide",
//     age: 25,
//     isshetall: true
// }

// console.log(lady);
//============================array=======================================

// let selectedSubject = ["biology", "mathematics", "chemistry","physics"];
// console.log(selectedSubject);

//============================function=================================================
// function exchange(){
//     console.log("Exchange don cash out")

// }
// exchange()

// function sumOfTwoNumber(x, y){
//     console.log("The sum of x and y is",x + y);
// }
// sumOfTwoNumber(2, 2)

//=========================exponential function=================================================

// function powOfTwoNumber(x, y){
//     console.log("The power of x and y is",x ** y);
// }
// powOfTwoNumber(2, 5)

//=============================================================================================== 
const myButton = document.querySelector('.btn-el')
const btnEl = document.getElementById('btn1')

myButton.addEventListener('click', showWelcome)
btnEl.addEventListener('mouseover', showHello)


function showWelcome(){
    myButton.innerHTML="You're Welcome"
    alert('Welcome to our page')
}
function showHello(){
    alert('Thank you for call our customer care')
}

function Number(){
    Number("45 mins")
    console.log(Number)
}
