const header = document.querySelector("header > h1");

header.textContent = "Fruits	&	Vegetables	Corp";
header.setAttribute("style", "color: red;");

const myMenuList = document.querySelectorAll("ul > li");
var lastWorldofMenu = myMenuList[2];

lastWorldofMenu = lastWorldofMenu.getElementsByTagName("a");

lastWorldofMenu[0].setAttribute("href", "#vegetables");
lastWorldofMenu[0].textContent = "Vegetables";


const mainSection = document.querySelectorAll("main > *");
const mainHolder = mainSection[0].parentElement;
const firstChildMain = mainSection[0];
const secondChildMain = mainSection[1];

mainHolder.removeChild(firstChildMain);
mainHolder.removeChild(secondChildMain);

mainHolder.appendChild(secondChildMain);
mainHolder.appendChild(firstChildMain);

let Contact = document.createElement("h2");
Contact.textContent = "Contact";
mainHolder.insertBefore(Contact, mainSection[0]);
let About = document.createElement("h2");
About.textContent = "About";
mainHolder.insertBefore(About, document.getElementById("about"));

const id = document.getElementById("about");
id.textContent = "";

const createP = document.createElement("p");
createP.textContent = "We're the best in fruits & vegetables";
id.appendChild(createP);


const tr = document.querySelectorAll("thead > tr");
const th = document.querySelectorAll("thead > tr > td");
const tag = document.createElement("th");
let newTag = document.createElement("th");
for (let i = 0; i < th.length; i++) {
  tr[0].removeChild(th[i]);
}

tr[0].appendChild(tag).textContent = "Name";
tr[0].appendChild(newTag).textContent = "Email";

//lägg till main.css

let s = document.getElementsByTagName("head")[0];

let style = document.createElement("link");
style.href = "main.css";
style.type = "text/css";
style.rel = "stylesheet";

s.append(style);
