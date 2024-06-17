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

        document.getElementById('po-p1').innerHTML = m[2][0];
        document.getElementById('po-p1x').innerHTML = m[2][2] + " Al: " + m[2][1];
        document.getElementById('po-p2').innerHTML = m[3][0];
        document.getElementById('po-p2x').innerHTML = m[3][2] + " Al: " + m[3][1];
        document.getElementById('po-m1').innerHTML = m[4][0];
        document.getElementById('po-m2').innerHTML = m[5][0];
        //console.log("Menu:", m)    
    })
.catch(error => console.error('Error fetching data:', error));

//160/200 g. Al: 1,3