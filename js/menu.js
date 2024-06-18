import { myKluc } from './constant.js';

//načítanie menu
const kluc = myKluc;
const spreadsheetId = '1dgnH_IIQG_qG50bNb7XZ0_2Fzsl5aO8QdZEF7NxkRuY';
const range = 'menuLuna!A1:D42'; // Adjust the range as needed

//=============== zobrazenie dňa
 const currentDate = new Date();
 const den = 1;
 //currentDate.getDay();
 
 if (den === 2) {
     // odznačenie aktívnosti
     document.getElementById('tab_1').classList.remove('active');
     document.getElementById('tab_first1').classList.remove('active', 'show');
    // aktívnosť pre 2. deň
     document.getElementById('tab_2').classList.add('active');
     document.getElementById('tab_first2').classList.add('active', 'show');
 }
 if (den === 3) {
    // odznačenie aktívnosti
    document.getElementById('tab_1').classList.remove('active');
    document.getElementById('tab_first1').classList.remove('active', 'show');
   // aktívnosť pre 2. deň
    document.getElementById('tab_3').classList.add('active');
    document.getElementById('tab_first3').classList.add('active', 'show');
}
if (den === 4) {
    // odznačenie aktívnosti
    document.getElementById('tab_1').classList.remove('active');
    document.getElementById('tab_first1').classList.remove('active', 'show');
   // aktívnosť pre 2. deň
    document.getElementById('tab_4').classList.add('active');
    document.getElementById('tab_first4').classList.add('active', 'show');
}
if (den === 5) {
    // odznačenie aktívnosti
    document.getElementById('tab_1').classList.remove('active');
    document.getElementById('tab_first1').classList.remove('active', 'show');
   // aktívnosť pre 2. deň
    document.getElementById('tab_5').classList.add('active');
    document.getElementById('tab_first5').classList.add('active', 'show');
}
//=============== zobrazenie dňa END



fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${kluc}`)
    .then(response => response.json())
    .then(data => {
        const m = data.values;
        document.getElementById('den1').innerHTML = m[1][0];
        document.getElementById('den2').innerHTML = m[8][0];
        document.getElementById('den3').innerHTML = m[15][0];
        document.getElementById('den4').innerHTML = m[22][0];
        document.getElementById('den5').innerHTML = m[29][0];
        //polievky
        document.getElementById('po01').innerHTML = m[2][0];
        document.getElementById('po02').innerHTML = m[2][2] + ", Al: " + m[2][1];
        document.getElementById('po03').innerHTML = m[3][0];
        document.getElementById('po04').innerHTML = m[3][2] + ", Al: " + m[3][1];
        //menu1
        document.getElementById('po05').innerHTML = m[4][0];
        document.getElementById('po06').innerHTML = m[4][3];
        document.getElementById('po07').innerHTML = m[4][2] + ", Al: " + m[4][1];
        //menu2
        document.getElementById('po08').innerHTML = m[5][0];
        document.getElementById('po09').innerHTML = m[5][3];
        document.getElementById('po10').innerHTML = m[5][2] + ", Al: " + m[5][1];
        
        
        //Trvalé menu
        document.getElementById('po101').innerHTML = m[36][0];
        document.getElementById('po102').innerHTML = m[36][3];
        document.getElementById('po103').innerHTML = m[36][2] + ", Al: " + m[36][1];
        document.getElementById('po104').innerHTML = m[37][0];
        document.getElementById('po105').innerHTML = m[37][3];
        document.getElementById('po106').innerHTML = m[37][2] + ", Al: " + m[37][1];
        document.getElementById('po107').innerHTML = m[38][0];
        document.getElementById('po108').innerHTML = m[38][3];
        document.getElementById('po109').innerHTML = m[38][2] + ", Al: " + m[38][1];
        document.getElementById('po110').innerHTML = m[39][0];
        document.getElementById('po111').innerHTML = m[39][3];
        document.getElementById('po112').innerHTML = m[39][2] + ", Al: " + m[39][1];
        document.getElementById('po113').innerHTML = m[40][0];
        document.getElementById('po114').innerHTML = m[40][3];
        document.getElementById('po115').innerHTML = m[40][2] + ", Al: " + m[40][1];
        document.getElementById('po116').innerHTML = m[41][0];
        document.getElementById('po117').innerHTML = m[41][3];
        document.getElementById('po118').innerHTML = m[41][2] + ", Al: " + m[41][1];

        console.log("Menu:", m)    
    })
.catch(error => console.error('Error fetching data:', error));

//160/200 g. Al: 1,3