function createCalendar(id, year, month) {
      var elem = document.getElementById(id);
      var table = document.createElement('table');      
      var firstDay = new Date(year, month - 1).getDay();
       if(!firstDay) firstDay = 7;       
      var lastDay = new Date(year, month, 0).getDate();
      var rowLength = 6;
      if (firstDay > 5 && lastDay > 30) rowLength = 7;
      for(var i = 0; i < rowLength; i++){
        var tr = document.createElement('tr');
        if(i){         
         tr.innerHTML ='<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';     
        }else{
         tr.innerHTML ='<th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th>';
        }
        table.appendChild(tr);   
      }      
      var td = table.getElementsByTagName('td');
      for(var i = 1; i <= lastDay; i++ ){
         td[firstDay-1].innerHTML = i;
         firstDay++;
      }
      elem.appendChild(table);      
    }