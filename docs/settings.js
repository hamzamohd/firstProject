var firstName;
var lastName;

firstName = null;
lastName = null;

var nameWarning = "Go and select a language first, you dumbass";
var langGreet =
  "Go and select a language first, you dumbass who goes by the name of";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function onEnterName(event) {
  console.log("event is  ", event);
  event.preventDefault();
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;
  if (
    firstName === "" ||
    lastName === "" ||
    (firstName === "" && lastName === "")
  ) {
    document.getElementById("greeting").textContent = nameWarning;
  } else {
    document.getElementById("greeting").textContent =
      langGreet + " " + firstName + " " + lastName;
    console.log("Hello!!" + " ", firstName + " " + lastName);
  }
}

function changeColor() {
  var j = document.getElementById("mySelect").value;
  if (j === "0") {
    document.body.style.backgroundColor = "rgb(146, 155, 155)";
  } else if (j === "1") {
    document.body.style.backgroundColor = "white";
  } else if (j === "2") {
    document.body.style.backgroundColor = "rgb(50,205,50)";
  } else if (j === "3") {
    document.body.style.backgroundColor = "pink";
  } else if (j === "4") {
    document.body.style.backgroundColor = "chocolate";
  } else if (j === "5") {
    document.body.style.backgroundColor = "rgb(207,181,59)";
  } else if (j === "6") {
    document.body.style.backgroundColor = "rgb(173,216,230)";
  } else if (j === "7") {
    document.body.style.backgroundColor = "rgb(255,165,0)";
  } else if (j === "8") {
    document.body.style.backgroundColor = "rgb(255,253,208)";
  }
}

function changeLang() {
  var z = document.getElementById("lang").value;
  if (z === "0") {
    langGreet = "Hello!!";
    nameWarning = "Please enter your full name.";
  } else if (z === "1") {
    langGreet = "Hello!!";
    nameWarning = "Please enter your full name.";
  } else if (z === "2") {
    langGreet = "नमस्ते";

    nameWarning = "कृपया अपना पूरा नाम प्रविष्ट कीजिए।";
  } else if (z === "3") {
    langGreet = "مرحبا";

    nameWarning = "من فضلك ادخل اسمك الكامل.";
  } else if (z === "4") {
    langGreet = "ہیلو";

    nameWarning = "برائے مہربانی اپنا مکمل نام درج کریں.";
  } else if (z === "5") {
    langGreet = "Bonjour!!";
    nameWarning = "S'il vous plait entrez votre nom entier.";
  } else if (z === "6") {
    langGreet = "Hallo!!";
    nameWarning = "bitte tragen Sie Ihren vollen Namen ein.";
  } else if (z === "7") {
    langGreet = "Hola!!";

    nameWarning = "Por favor ingresa tu nombre completo.";
  } else if (z === "8") {
    langGreet = "Ciao!!";

    nameWarning = "Inserisci il tuo nome e cognome.";
  } else if (z === "9") {
    langGreet = "你好";

    nameWarning = "请输入您的全名。";
  }
}

function changeTimeZone() {
  var time = document.getElementById("clockWidget").value;
  if (time === "0") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/1273294";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Delhi, India";

    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKolkata";
  } else if (time === "1") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/1273294";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Delhi, India";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKolkata";
  } else if (time === "2") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/1176615";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Islamabad, Pakistan";

    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FKarachi";
  } else if (time === "3") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/country/hk";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Hong Kong";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FHong_Kong";
  } else if (time === "4") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/country/sg";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Singapore";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FSingapore";
  } else if (time === "5") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/5128581";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in New York, USA";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=America%2FNew_York";
  } else if (time === "6") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/2643743";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in London, GB";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Europe%2FLondon";
  } else if (time === "7") {
    document.getElementById("clockLink1").href =
      "https://www.zeitverschiebung.net/en/city/105343";
    document.getElementById("clockLink1").innerHTML =
      "Current local time in Jeddah, Saudi Arabia";
    document.getElementById("clockLink2").src =
      "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Asia%2FRiyadh";
  }
}
