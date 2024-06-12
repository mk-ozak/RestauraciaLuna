
//načítanie menu
const apiKey = 'AIzaSyCF8zAqLBxI7dN01jkwA5jSTSFsBLsqjsw';
const spreadsheetId = '1dgnH_IIQG_qG50bNb7XZ0_2Fzsl5aO8QdZEF7NxkRuY';
const range = 'menuLuna!A1:D42'; // Adjust the range as needed

fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const rows = data.values;
        if (rows.length) {
            let html = '<table border="0">';
            rows.forEach(row => {
                        html += '<tr>';
                        row.forEach(cell => {
                            html += `<td>${cell}</td>`;
                        });
                        html += '</tr>';
            });
                        html += '</table>';
            document.getElementById('dataMenu').innerHTML = html;
        
            let mojeMenu = data.values;
            console.log("Menu2")
            console.log(mojeMenu)
            console.log(rows)
        } else {
            document.getElementById('dataMenu').innerHTML = 'No data found.';
        }
            })
.catch(error => console.error('Error fetching data:', error));



