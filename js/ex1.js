// document.getElementById("student_message").innerHTML="Hi,my name is Tisha Islam,I am 20 years old and learning JavaScript";

// var num_1=101;
// var num_2=7;
// var division = num_1/num_2
// console.log(division.toFixed(2));

// document.getElementById("result").innerHTML=division.toFixed(2)

console.log("This is ex1.js")


var myName ="Tisha Islam";
var age ="20";

var firstName ="Hi, my name is";
var secoendName ="I'm";
var thirdName ="years old and I'm learning Javascript";

  

document.getElementById('student_message').innerHTML = firstName + " " + myName+ "," + secoendName +" " +  age + " " +  thirdName;


// 3



var number1 =101;
var number2 =7;



document.getElementById('result').innerHTML =number1 /  number2;

   

//  4


var phone1 = "988866552";





if(phone1.length ==9  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}





var phone2 = "99087612366";
if(phone2.length ==9  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}

var phone3 = 876543123;
if(phone3.length == 9  ) {
    console.log("valid.");
} else {
    console.log("invalid");
}




// 5

var power = Math.pow (32,6);

console.log((power)) ;




// 7

var quantity = "25";
console.log(quantity += quantity);

var number = 6;
console.log( (7+5) / number + 2 );


var pressure;
console.log(pressure);



var temperature = null;
console.log(temperature);

var pressure;
console.log(typeof pressure);


var temperature = null;
console.log(typeof temperature);



// 8

// 1

var getAddressFromWebsite = document.getElementById("url_1").innerText;
console.log(getAddressFromWebsite);

var modifyAddress = "https://" + getAddressFromWebsite;
console.log(modifyAddress);


document.getElementById("url_2").innerText = modifyAddress;


// 2

var getAddress = document.getElementById("url_3").innerText;
console.log(getAddress);

var modifyAddress = ( getAddress.replace("https://" , "") ) ;
console.log(modifyAddress);

document.getElementById("url_4").innerText = modifyAddress;
