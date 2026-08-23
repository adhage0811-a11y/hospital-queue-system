let queue = [];
let current = 0;

let lang = "en";

const translations = {
    en: {
        title: "Smart Hospital Queue",
        name: "Patient Name",
        phone: "Mobile Number",
        tokenBtn: "Get Token",
        nextBtn: "Next Patient",
        waiting: "Waiting List",
        enter: "Enter name and mobile number",
        generated: "Token Generated: ",
        noPatients: "No patients waiting",
        sms: "Hello {name}, Your token {token} is ready at hospital."
    },

    hi: {
        title: "स्मार्ट हॉस्पिटल कतार प्रणाली",
        name: "मरीज का नाम",
        phone: "मोबाइल नंबर",
        tokenBtn: "टोकन लें",
        nextBtn: "अगला मरीज",
        waiting: "प्रतीक्षा सूची",
        enter: "नाम और मोबाइल नंबर दर्ज करें",
        generated: "टोकन प्राप्त हुआ: ",
        noPatients: "कोई मरीज प्रतीक्षा में नहीं है",
        sms: "नमस्ते {name}, आपका टोकन {token} अस्पताल में तैयार है।"
    },

    mr: {
        title: "स्मार्ट हॉस्पिटल रांग प्रणाली",
        name: "रुग्णाचे नाव",
        phone: "मोबाईल नंबर",
        tokenBtn: "टोकन घ्या",
        nextBtn: "पुढील रुग्ण",
        waiting: "प्रतीक्षा यादी",
        enter: "नाव आणि मोबाईल नंबर टाका",
        generated: "टोकन मिळाले: ",
        noPatients: "कोणतेही रुग्ण प्रतीक्षेत नाहीत",
        sms: "नमस्कार {name}, तुमचा टोकन {token} हॉस्पिटलमध्ये तयार आहे."
    }
};


function addPatient() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert(translations[lang].enter);
        return;
    }

    let token = queue.length + current + 1;

    queue.push({
        name: name,
        phone: phone,
        token: token
    });

    alert(translations[lang].generated + token);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    showQueue();
}


function nextPatient() {

    if (queue.length === 0) {
        alert(translations[lang].noPatients);
        return;
    }

    let patient = queue.shift();

    current = patient.token;

    document.getElementById("current").innerText = current;

    openSMS(patient.phone, patient.name, patient.token);

    showQueue();
}


function showQueue() {

    let text = "<h3>" + translations[lang].waiting + "</h3>";

    queue.forEach(p => {
        text += "Token " + p.token + " - " + p.name + "<br>";
    });

    document.getElementById("list").innerHTML = text;
}


function openSMS(number, name, token) {

    let message = translations[lang].sms
        .replace("{name}", name)
        .replace("{token}", token);

    let link = "sms:" + number + "?body=" + encodeURIComponent(message);

    window.location.href = link;
}


function changeLanguage() {

    lang = document.getElementById("language").value;

    document.getElementById("title").innerText =
        translations[lang].title;

    document.getElementById("nameLabel").innerText =
        translations[lang].name;

    document.getElementById("phoneLabel").innerText =
        translations[lang].phone;

    document.getElementById("tokenBtn").innerText =
        translations[lang].tokenBtn;

    document.getElementById("nextBtn").innerText =
        translations[lang].nextBtn;

    showQueue();
}
