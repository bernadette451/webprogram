function setTableWidth(width) {
    document.getElementById("myTable").style.width = width + "px";
  }
  
  function setTableBorder(borderWidth) {
    document.getElementById("myTable").style.border = borderWidth + "px";
    document.getElementById("myTable").cellSpacing = borderWidth;
  }

  function setTableBackgroundColor(color) {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        // Skip the first row (header row)
        var row = rows[i];
        row.style.backgroundColor = color;
    }
  }
  
  function resetTableStyle() {
    var table = document.getElementById("myTable");
    table.style.width = "100%";
    table.style.border = "3px";
    table.cellSpacing = 2;
    var rows = table.getElementsByTagName("td");

    for (var i = 0; i < rows.length; i++) {
        // Skip the first row (header row)
        var row = rows[i];
        row.style.backgroundColor = "lightcyan";
    }
  }
  