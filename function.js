//--------Chapter 17 to 20-------------//
//---------question1-----------------//

var arr1 = [[] , [] , []]

//---------question2-------------//

var arr2 = [[1,2,3] , [3,2,1] , [2,1,0]]
console.log(arr2);

//---------question3------------//

var num = 1
for(var i = 1 ; i <=10 ; i++){
    console.log(i);
}

//---------question4------------//

var table = +prompt("enter a number for table")
var tableLenght = + prompt("enter a lenght of table")

for(var i = 1 ; i <=tableLenght ; i++){
    
        document.write(" <table><tr><td> " + table +  " X " + i + " = " + table * i + "</td><t/td></table>")
   
}

//----------question5------------//

var fruite =  ["apple " , "banana" , "mango" , "orange" , "strwaberry"]
for(var i = 0 ; i < fruite.length ; i++){
    console.log(fruite[i]);
}

//---------question6----------------//
//----------counting------------//
 document.write("<h1>Counting</h1>")
var counting = 1 
for(var i = 1 ; i <= 15 ; i++){
   
    document.write(i + ", ")
}

//---------reverse counting-------//
 document.write("<h1>Reverse counting</h1>")
var counting = 15 
for(var i = 15 ; i >= 1 ; i--){

    document.write(i + ", ")
}

//------------even number-----------//

document.write("<h1>Even number</h1>")
var counting = 0
for(var i = 0 ; i <= 20 ; i+=2){
   
    document.write(i + ", ")
}

//--------odd number----------//

document.write("<h1>odd number</h1>")
var counting = 1
for(var i = 1 ; i <= 19 ; i+=2){
   
    document.write(i + ", ")
}

//-------series-----------//

document.write("<h1>Series</h1>")
var counting = 2
for(var i = 2 ; i <= 20 ; i+=2){
   
    document.write(i + "k, ")
}


//------------question7-------------//

var verities = ["cake" , "apple pie" , "cookie" , "chips " , "patties"];
var userOutput = prompt("enter an item to search");

var found = false
for(var i = 0 ; i<verities.length ; i++){
    if(verities[i] === userOutput){
        found = true
        break;
    }
    
}
if(found){
    alert(userOutput + " is available at the index " + verities.indexOf(userOutput) + " in our bakery")
}else{
    alert("we are sorry " + userOutput + " is not available")
}

//-----------question8---------------//

var number = ["56" , "78" , "10" , "95 " , "20"];

var largest = number[0]

for(var i = 1 ; i<number.length ; i++){
    if(number[i] > largest){
        largest = number[i]
    }
    
    
}
alert("the largest number in the array is " + largest)

// //--------------question9-----------------------//

var number = ["56" , "78" , "10" , "95 " , "20"];

var samllest = number[0]

for(var i = 1 ; i<number.length ; i++){
    if(number[i] < samllest){
        samllest = number[i]
    }
    
    
}
alert("the samllest number in the array is " + samllest)

 //-------------question10----------------//
 document.write("<h1>Print multilples of 5 ranging 1 to 100</h1>")
for(var i = 1 ; i<=100 ; i++){
 if(i%5 === 0){
    document.write(i + ", ")
 }
}

