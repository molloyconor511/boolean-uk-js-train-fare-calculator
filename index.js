let user_age = prompt("Enter your age");
let user_destination = prompt("Enter your destination in kilometres");

let price = user_destination*0.21;

if (user_age < 18) { 
    alert("Train ticket will cost £ " + (price - (price*0.2))) }
else if (user_age > 65) {
    alert("Train ticket will cost £ " + (price - (price*0.4))) }
else {
    alert("Train ticket will cost " + price)
};


