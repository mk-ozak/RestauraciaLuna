import { myKluc } from './constant.js';

//načítanie menu
const kluc = myKluc;
const spreadsheetId = '1dgnH_IIQG_qG50bNb7XZ0_2Fzsl5aO8QdZEF7NxkRuY';
const range = 'menuLuna!A1:D42'; // Adjust the range as needed

//=============== zobrazenie dňa
 const currentDate = new Date();
 const den = currentDate.getDay();
 const hod = currentDate.getHours();
 console.log(hod);
 
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
       
        //pondelok
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

        //utorok
        //polievky
        document.getElementById('ut01').innerHTML = m[9][0];
        document.getElementById('ut02').innerHTML = m[9][2] + ", Al: " + m[2][1];
        document.getElementById('ut03').innerHTML = m[10][0];
        document.getElementById('ut04').innerHTML = m[10][2] + ", Al: " + m[3][1];
        //menu1
        document.getElementById('ut05').innerHTML = m[11][0];
        document.getElementById('ut06').innerHTML = m[11][3];
        document.getElementById('ut07').innerHTML = m[11][2] + ", Al: " + m[4][1];
        //menu2
        document.getElementById('ut08').innerHTML = m[12][0];
        document.getElementById('ut09').innerHTML = m[12][3];
        document.getElementById('ut10').innerHTML = m[12][2] + ", Al: " + m[5][1];

        //streda
        //polievky
        document.getElementById('st01').innerHTML = m[16][0];
        document.getElementById('st02').innerHTML = m[16][2] + ", Al: " + m[2][1];
        document.getElementById('st03').innerHTML = m[17][0];
        document.getElementById('st04').innerHTML = m[17][2] + ", Al: " + m[3][1];
        //menu1
        document.getElementById('st05').innerHTML = m[18][0];
        document.getElementById('st06').innerHTML = m[18][3];
        document.getElementById('st07').innerHTML = m[18][2] + ", Al: " + m[4][1];
        //menu2
        document.getElementById('st08').innerHTML = m[19][0];
        document.getElementById('st09').innerHTML = m[19][3];
        document.getElementById('st10').innerHTML = m[19][2] + ", Al: " + m[5][1];

        //štvrtok
        //polievky
        document.getElementById('sv01').innerHTML = m[23][0];
        document.getElementById('sv02').innerHTML = m[23][2] + ", Al: " + m[2][1];
        document.getElementById('sv03').innerHTML = m[24][0];
        document.getElementById('sv04').innerHTML = m[24][2] + ", Al: " + m[3][1];
        //menu1
        document.getElementById('sv05').innerHTML = m[25][0];
        document.getElementById('sv06').innerHTML = m[25][3];
        document.getElementById('sv07').innerHTML = m[25][2] + ", Al: " + m[4][1];
        //menu2
        document.getElementById('sv08').innerHTML = m[26][0];
        document.getElementById('sv09').innerHTML = m[26][3];
        document.getElementById('sv10').innerHTML = m[26][2] + ", Al: " + m[5][1];

        //piatok
        //polievky
        document.getElementById('pi01').innerHTML = m[30][0];
        document.getElementById('pi02').innerHTML = m[30][2] + ", Al: " + m[2][1];
        document.getElementById('pi03').innerHTML = m[31][0];
        document.getElementById('pi04').innerHTML = m[31][2] + ", Al: " + m[3][1];
        //menu1
        document.getElementById('pi05').innerHTML = m[32][0];
        document.getElementById('pi06').innerHTML = m[32][3];
        document.getElementById('pi07').innerHTML = m[32][2] + ", Al: " + m[4][1];
        //menu2
        document.getElementById('pi08').innerHTML = m[33][0];
        document.getElementById('pi09').innerHTML = m[33][3];
        document.getElementById('pi10').innerHTML = m[33][2] + ", Al: " + m[5][1];
        
        
        //Trvalé menu 1
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

        //Trvalé menu 2
        document.getElementById('po121').innerHTML = m[36][0];
        document.getElementById('po122').innerHTML = m[36][3];
        document.getElementById('po123').innerHTML = m[36][2] + ", Al: " + m[36][1];
        document.getElementById('po124').innerHTML = m[37][0];
        document.getElementById('po125').innerHTML = m[37][3];
        document.getElementById('po126').innerHTML = m[37][2] + ", Al: " + m[37][1];
        document.getElementById('po127').innerHTML = m[38][0];
        document.getElementById('po128').innerHTML = m[38][3];
        document.getElementById('po129').innerHTML = m[38][2] + ", Al: " + m[38][1];
        document.getElementById('po130').innerHTML = m[39][0];
        document.getElementById('po131').innerHTML = m[39][3];
        document.getElementById('po132').innerHTML = m[39][2] + ", Al: " + m[39][1];
        document.getElementById('po133').innerHTML = m[40][0];
        document.getElementById('po134').innerHTML = m[40][3];
        document.getElementById('po135').innerHTML = m[40][2] + ", Al: " + m[40][1];
        document.getElementById('po136').innerHTML = m[41][0];
        document.getElementById('po137').innerHTML = m[41][3];
        document.getElementById('po138').innerHTML = m[41][2] + ", Al: " + m[41][1];

        //Trvalé menu 3
        document.getElementById('po141').innerHTML = m[36][0];
        document.getElementById('po142').innerHTML = m[36][3];
        document.getElementById('po143').innerHTML = m[36][2] + ", Al: " + m[36][1];
        document.getElementById('po144').innerHTML = m[37][0];
        document.getElementById('po145').innerHTML = m[37][3];
        document.getElementById('po146').innerHTML = m[37][2] + ", Al: " + m[37][1];
        document.getElementById('po147').innerHTML = m[38][0];
        document.getElementById('po148').innerHTML = m[38][3];
        document.getElementById('po149').innerHTML = m[38][2] + ", Al: " + m[38][1];
        document.getElementById('po150').innerHTML = m[39][0];
        document.getElementById('po151').innerHTML = m[39][3];
        document.getElementById('po152').innerHTML = m[39][2] + ", Al: " + m[39][1];
        document.getElementById('po153').innerHTML = m[40][0];
        document.getElementById('po154').innerHTML = m[40][3];
        document.getElementById('po155').innerHTML = m[40][2] + ", Al: " + m[40][1];
        document.getElementById('po156').innerHTML = m[41][0];
        document.getElementById('po157').innerHTML = m[41][3];
        document.getElementById('po158').innerHTML = m[41][2] + ", Al: " + m[41][1];

        //Trvalé menu 4
        document.getElementById('po161').innerHTML = m[36][0];
        document.getElementById('po162').innerHTML = m[36][3];
        document.getElementById('po163').innerHTML = m[36][2] + ", Al: " + m[36][1];
        document.getElementById('po164').innerHTML = m[37][0];
        document.getElementById('po165').innerHTML = m[37][3];
        document.getElementById('po166').innerHTML = m[37][2] + ", Al: " + m[37][1];
        document.getElementById('po167').innerHTML = m[38][0];
        document.getElementById('po168').innerHTML = m[38][3];
        document.getElementById('po169').innerHTML = m[38][2] + ", Al: " + m[38][1];
        document.getElementById('po170').innerHTML = m[39][0];
        document.getElementById('po171').innerHTML = m[39][3];
        document.getElementById('po172').innerHTML = m[39][2] + ", Al: " + m[39][1];
        document.getElementById('po173').innerHTML = m[40][0];
        document.getElementById('po174').innerHTML = m[40][3];
        document.getElementById('po175').innerHTML = m[40][2] + ", Al: " + m[40][1];
        document.getElementById('po176').innerHTML = m[41][0];
        document.getElementById('po177').innerHTML = m[41][3];
        document.getElementById('po178').innerHTML = m[41][2] + ", Al: " + m[41][1];

        //Trvalé menu 5
        document.getElementById('po181').innerHTML = m[36][0];
        document.getElementById('po182').innerHTML = m[36][3];
        document.getElementById('po183').innerHTML = m[36][2] + ", Al: " + m[36][1];
        document.getElementById('po184').innerHTML = m[37][0];
        document.getElementById('po185').innerHTML = m[37][3];
        document.getElementById('po186').innerHTML = m[37][2] + ", Al: " + m[37][1];
        document.getElementById('po187').innerHTML = m[38][0];
        document.getElementById('po188').innerHTML = m[38][3];
        document.getElementById('po189').innerHTML = m[38][2] + ", Al: " + m[38][1];
        document.getElementById('po190').innerHTML = m[39][0];
        document.getElementById('po191').innerHTML = m[39][3];
        document.getElementById('po192').innerHTML = m[39][2] + ", Al: " + m[39][1];
        document.getElementById('po193').innerHTML = m[40][0];
        document.getElementById('po194').innerHTML = m[40][3];
        document.getElementById('po195').innerHTML = m[40][2] + ", Al: " + m[40][1];
        document.getElementById('po196').innerHTML = m[41][0];
        document.getElementById('po197').innerHTML = m[41][3];
        document.getElementById('po198').innerHTML = m[41][2] + ", Al: " + m[41][1];

        //console.log("Menu:", m)    
    })
.catch(error => console.error('Error fetching data:', error));
