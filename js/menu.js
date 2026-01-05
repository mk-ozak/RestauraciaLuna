import { myKluc } from "./constant.js";

//načítanie menu
const kluc = myKluc;
const spreadsheetId = "1dgnH_IIQG_qG50bNb7XZ0_2Fzsl5aO8QdZEF7NxkRuY";
const range = "menuLuna!A1:D42"; // Adjust the range as needed

//=============== zobrazenie dňa
const currentDate = new Date();
const den = currentDate.getDay();
//const hod = currentDate.getHours();
//console.log(hod);

if (den === 2) {
	// odznačenie aktívnosti
	document.getElementById("tab_1").classList.remove("active");
	document.getElementById("tab_first1").classList.remove("active", "show");
	// aktívnosť pre 2. deň
	document.getElementById("tab_2").classList.add("active");
	document.getElementById("tab_first2").classList.add("active", "show");
}
if (den === 3) {
	// odznačenie aktívnosti
	document.getElementById("tab_1").classList.remove("active");
	document.getElementById("tab_first1").classList.remove("active", "show");
	// aktívnosť pre 2. deň
	document.getElementById("tab_3").classList.add("active");
	document.getElementById("tab_first3").classList.add("active", "show");
}
if (den === 4) {
	// odznačenie aktívnosti
	document.getElementById("tab_1").classList.remove("active");
	document.getElementById("tab_first1").classList.remove("active", "show");
	// aktívnosť pre 2. deň
	document.getElementById("tab_4").classList.add("active");
	document.getElementById("tab_first4").classList.add("active", "show");
}
if (den === 5) {
	// odznačenie aktívnosti
	document.getElementById("tab_1").classList.remove("active");
	document.getElementById("tab_first1").classList.remove("active", "show");
	// aktívnosť pre 2. deň
	document.getElementById("tab_5").classList.add("active");
	document.getElementById("tab_first5").classList.add("active", "show");
}
//=============== zobrazenie dňa END

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${kluc}`)
	.then((response) => response.json())
	.then((data) => {
		const m = data.values;
		document.getElementById("den1").innerHTML = m[1][0];
		document.getElementById("den2").innerHTML = m[8][0];
		document.getElementById("den3").innerHTML = m[15][0];
		document.getElementById("den4").innerHTML = m[22][0];
		document.getElementById("den5").innerHTML = m[29][0];

		//pondelok
		//polievky
		document.getElementById("po01").innerHTML = m[2][0];
		document.getElementById("po02").innerHTML = m[2][2] + ", Al: " + m[2][1];
		document.getElementById("po03").innerHTML = m[3][0];
		document.getElementById("po04").innerHTML = m[3][2] + ", Al: " + m[3][1];
		//menu1
		document.getElementById("po05").innerHTML = m[4][0];
		document.getElementById("po06").innerHTML = m[4][3];
		document.getElementById("po07").innerHTML = m[4][2] + ", Al: " + m[4][1];
		//menu2
		document.getElementById("po08").innerHTML = m[5][0];
		document.getElementById("po09").innerHTML = m[5][3];
		document.getElementById("po10").innerHTML = m[5][2] + ", Al: " + m[5][1];

		//utorok
		//polievky
		document.getElementById("ut01").innerHTML = m[9][0];
		document.getElementById("ut02").innerHTML = m[9][2] + ", Al: " + m[9][1];
		document.getElementById("ut03").innerHTML = m[10][0];
		document.getElementById("ut04").innerHTML = m[10][2] + ", Al: " + m[10][1];
		//menu1
		document.getElementById("ut05").innerHTML = m[11][0];
		document.getElementById("ut06").innerHTML = m[11][3];
		document.getElementById("ut07").innerHTML = m[11][2] + ", Al: " + m[11][1];
		//menu2
		document.getElementById("ut08").innerHTML = m[12][0];
		document.getElementById("ut09").innerHTML = m[12][3];
		document.getElementById("ut10").innerHTML = m[12][2] + ", Al: " + m[12][1];

		//streda
		//polievky
		document.getElementById("st01").innerHTML = m[16][0];
		document.getElementById("st02").innerHTML = m[16][2] + ", Al: " + m[16][1];
		document.getElementById("st03").innerHTML = m[17][0];
		document.getElementById("st04").innerHTML = m[17][2] + ", Al: " + m[17][1];
		//menu1
		document.getElementById("st05").innerHTML = m[18][0];
		document.getElementById("st06").innerHTML = m[18][3];
		document.getElementById("st07").innerHTML = m[18][2] + ", Al: " + m[18][1];
		//menu2
		document.getElementById("st08").innerHTML = m[19][0];
		document.getElementById("st09").innerHTML = m[19][3];
		document.getElementById("st10").innerHTML = m[19][2] + ", Al: " + m[19][1];

		//štvrtok
		//polievky
		document.getElementById("sv01").innerHTML = m[23][0];
		document.getElementById("sv02").innerHTML = m[23][2] + ", Al: " + m[23][1];
		document.getElementById("sv03").innerHTML = m[24][0];
		document.getElementById("sv04").innerHTML = m[24][2] + ", Al: " + m[24][1];
		//menu1
		document.getElementById("sv05").innerHTML = m[25][0];
		document.getElementById("sv06").innerHTML = m[25][3];
		document.getElementById("sv07").innerHTML = m[25][2] + ", Al: " + m[25][1];
		//menu2
		document.getElementById("sv08").innerHTML = m[26][0];
		document.getElementById("sv09").innerHTML = m[26][3];
		document.getElementById("sv10").innerHTML = m[26][2] + ", Al: " + m[26][1];

		//piatok
		//polievky
		document.getElementById("pi01").innerHTML = m[30][0];
		document.getElementById("pi02").innerHTML = m[30][2] + ", Al: " + m[30][1];
		document.getElementById("pi03").innerHTML = m[31][0];
		document.getElementById("pi04").innerHTML = m[31][2] + ", Al: " + m[31][1];
		//menu1
		document.getElementById("pi05").innerHTML = m[32][0];
		document.getElementById("pi06").innerHTML = m[32][3];
		document.getElementById("pi07").innerHTML = m[32][2] + ", Al: " + m[32][1];
		//menu2
		document.getElementById("pi08").innerHTML = m[33][0];
		document.getElementById("pi09").innerHTML = m[33][3];
		document.getElementById("pi10").innerHTML = m[33][2] + ", Al: " + m[33][1];

		//Trvalá ponuka - naplnenie všetkých dní naraz pomocou tried
		for (let i = 1; i <= 6; i++) {
			const rowIndex = 35 + i; // riadky 36-41 v spreadsheetu
			const nazovElements = document.querySelectorAll(".trvala-nazov-" + i);
			const cenaElements = document.querySelectorAll(".trvala-cena-" + i);
			const popisElements = document.querySelectorAll(".trvala-popis-" + i);

			nazovElements.forEach((element) => {
				element.innerHTML = m[rowIndex][0];
			});
			cenaElements.forEach((element) => {
				element.innerHTML = m[rowIndex][3];
			});
			popisElements.forEach((element) => {
				element.innerHTML = m[rowIndex][2] + ", Al: " + m[rowIndex][1];
			});
		}

		//console.log("Menu:", m)
	})
	.catch((error) => console.error("Error fetching data:", error));
