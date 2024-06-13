
//načítanie menu
const kluc = '';
const spreadsheetId = '1dgnH_IIQG_qG50bNb7XZ0_2Fzsl5aO8QdZEF7NxkRuY';
const range = 'menuLuna!A1:D42'; // Adjust the range as needed

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
        console.log("Menu:", m)    
    })
.catch(error => console.error('Error fetching data:', error));

//160/200 g. Al: 1,3