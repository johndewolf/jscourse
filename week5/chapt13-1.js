var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable(data) {
  var headers = Object.keys(data[0]);
  var table = document.createElement("table");
  var headerRow = document.createElement('tr');
  headers.forEach(function(element){
    var node = document.createElement("th");
    headerText = document.createTextNode(element);
    node.appendChild(headerText);
    headerRow.appendChild(node);
  });
  table.appendChild(headerRow);
  
  for (var x = 0; x < data.length; x++) {
    var obj = data[x];
    var row = document.createElement('tr');
    for (var prop in obj) {
      var tableData = document.createElement('td');
      var cellText = document.createTextNode(obj[prop]);
      tableData.appendChild(cellText);
      row.appendChild(tableData);
    }
    table.appendChild(row);
  
  }

  return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
