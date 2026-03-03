gpconst backendURL = "https://hospital-backend-t8lx.onrender.com";

async function addPatient() {
    const name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter Name");
        return;
    }

    const response = await fetch(`${backendURL}/token`);
    const data = await response.json();

    alert("Your Token: " + data.token);

    document.getElementById("name").value = "";
    loadCurrent();
}

async function nextPatient() {
    alert("Next button pressed (backend demo)");
}

async function loadCurrent() {
    const response = await fetch(`${backendURL}/current`);
    const data = await response.json();

    document.getElementById("current").innerText = data.currentToken;
}

window.onload = loadCurrent;
