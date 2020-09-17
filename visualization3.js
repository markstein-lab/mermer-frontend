
    var mainContainer = document.getElementById('results');

  var div = document.createElement("div");
  div.style.textIndent = "20px";
  div.innerHTML = 'Intergenic' ;
  mainContainer.appendChild(div);
  var ABCB7 = temp;
  var query1 = ["GAGA","GAGG","GCGA","GCGG"];
  var query2 = "ACA";
  var query3 = ["ACC","ACT","ACU","GCC","GCT","GCU"]
  var sequence = hit.sequence;
  var canva= d3.select('#results').append('svg')
      .attr('width',1000)
      .attr('height', 150)
      .style('border', '3px solid')
      .style('margin-left','20px');

