let d = new Date();

let newUpdate = document.getElementById('footer-sect');
newUpdate.querySelector('#currentYear').innerHTML = d.getFullYear();
newUpdate.querySelector('#currentDateAndTime').innerHTML = document.lastModified;


const year = document.querySelector("#year");
let lastModified = document.querySelector("#lastModified");

//Display on the screen the date of the last time there was a modification.
lastModified.textContent = document.lastModified;

//Display on the screen the current year.
year.textContent = `${new Date().getFullYear()}`;

const datefield = document.querySelector(".Currentdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-ZA", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', function() {
    toggleMenu();
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
