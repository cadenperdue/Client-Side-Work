//var heatTable = document.creatElement("TABLE");
function createHeatIndexTable(){
    var table = document.createElement('table');
    var header = table.createTHead();
    var headRow = header.insertRow(0);
    var currHumidity = 40;


    for (var i = 0; i < 6; i++){
        var nextCell = headRow.insertCell(0);
        nextCell.innerHTML = currHumidity + "%";
        nextCell.classList.add("headingRow");
        currHumidity = currHumidity + 10;
    }
    var headCell = headRow.insertCell(0);
    headCell.innerHTML = "&deg;F";
    headCell.classList.add("headingColumn");
    
    var currTemp = 80;    
    for (var i = 0; i < 7; i++){
        var heatRow = table.insertRow(-1);
        //heatRow.innerHTML = currTemp;
        var headHeatRow =heatRow.insertCell(-1);
        headHeatRow.innerHTML = currTemp;
        headHeatRow.classList.add("headingColumn");
        
        
        
        var currHum = 90; 
        for(var j = 0; j < 6; j++){
            var currIndex = calcHeatIndex(currTemp, currHum);
            currIndex = Math.round(currIndex) - 1;
            
            var heatCol = heatRow.insertCell(-1);
            if(currIndex <= 148) 
                 heatCol.innerHTML = (currIndex);
            else
                heatCol.innerHTML = (" "); 
            
            //ASSIGN EACH ENTRY TO CORRECT CLASS
            if(currIndex > 130)
                heatCol.classList.add("extreme");
            else if(currIndex > 102)
                heatCol.classList.add("danger");
            else if(currIndex > 89)
                heatCol.classList.add("caution");
            else 
                heatCol.classList.add("ok");
            
            
            currHum = currHum - 10;

        }
        currTemp = currTemp + 5;

    }
    document.getElementById('table-container').appendChild(table);
}
createHeatIndexTable();

