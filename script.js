let queue = [];
let current = 0;

function addPatient() {
  let name = document.getElementById("name").value;

  if(name === "") {
    alert("Enter name");
    return;
  }

  let token = queue.length + current + 1;

  queue.push({name, token});

  alert("Your Token: " + token);

  document.getElementById("name").value = "";
  showQueue();
}

function nextPatient() {
  if(queue.length === 0) {
    alert("No patients");
    return;
  }

  let patient = queue.shift();
  current = patient.token;

  document.getElementById("current").innerText = current;
  alert(patient.name + ", your turn!");
  showQueue();
}

function showQueue() {
  let text = "";
  queue.forEach(p => {
    text += "Token " + p.token + " - " + p.name + "<br>";
  });

  document.getElementById("list").innerHTML = text;
}
