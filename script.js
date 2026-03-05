let queue = [];
let current = 0;

function addPatient() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name === "" || phone === "") {
alert("Enter name and mobile number");
return;
}

let token = queue.length + current + 1;

queue.push({
name:name,
phone:phone,
token:token
});

alert("Token Generated: " + token);

document.getElementById("name").value = "";
document.getElementById("phone").value = "";

showQueue();
}

function nextPatient(){

if(queue.length === 0){
alert("No patients waiting");
return;
}

let patient = queue.shift();

current = patient.token;

document.getElementById("current").innerText = current;

alert("SMS sent to " + patient.phone +
"\nHello " + patient.name +
"\nYour Token " + patient.token + " is now active.");

showQueue();

}

function showQueue(){

let text = "<h3>Waiting List</h3>";

queue.forEach(p => {
text += "Token " + p.token + " - " + p.name + "<br>";
});

document.getElementById("list").innerHTML = text;

}
function sendSMS(number, name, token){

let message = "Hello " + name + ", Your token " + token + " is ready at hospital.";

let link = "sms:" + number + "?body=" + encodeURIComponent(message);

window.location.href = link;

}
function openSMS(number, name, token) {

let message = "Hello " + name + ", Your token " + token + " is ready at hospital.";

let link = "sms:" + number + "?body=" + encodeURIComponent(message);

window.location.href = link;

}