function name (geneN) {
  console.log("the name is" +geneN);
}
function hi(temp,hit) {
      var mainContainer = document.getElementById('results');
    var div2 = document.createElement("div")
    var canva= d3.select('#intergenic').append('svg')
        .attr('width',1000)
        .attr('height', 150)
        .style('border', '3px solid')
        .style('margin-left','20px');
    var div = document.createElement("div");
    div.style.textIndent = "20px";
    div.innerHTML = 'Gene Name: ' + (temp.geneName) ;
    mainContainer.appendChild(div);
    var ABCB7 = temp;
    var query1 = ["GAGA","GAGG","GCGA","GCGG"];
    var query2 = "ACA";
    var query3 = ["ACC","ACT","ACU","GCC","GCT","GCU"]
    console.log(hit.sequence+ "hit seq");
    var sequence = hit.sequence;
    var canva= d3.select('#results').append('svg')
        .attr('width',1000)
        .attr('height', 150)
        .style('border', '3px solid')
        .style('margin-left','20px');
  
    var transcriptline = canva.selectAll('g')
      .data(ABCB7.transcripts)
      .enter()
      .append('g');
    var transcripts = transcriptline.attr('transform', (d,i) => 'translate(0, '+40*i+')')
      .append('rect')
      .attr("x", 10)
      .attr("y", 30)
      .attr("rx",10)
      .attr("ry",10)
      .attr("width",function(d) { return d.end-d.start + 10})
      .attr("height", 5)
      .on("click", function(){
        canva.append('text')
        .attr("x",130)
        .attr("y", 400)
        .text("h")
        console.log("hi")
      })
      .attr("fill","black");
    var nuclbu = canva.append('rect')
    .attr("x", 975)
    .attr("y",75)
    .attr("width", 15)
    .attr("height", 15)
    .attr("rx",3)
      .attr("ry",3)
    .attr("fill", "red")
    .on('click', function(d) {
      appendStats3();
      var r = d3.select(this);
      var p = d3.select('canva').append('div')
                              .append('p')
                              .attr('position', 'relative');
      var m = d3.mouse(this);
       results.append('text')
       .text("sequence")
       .attr("font-size", "15px")
       .attr("fill", "black");
     console.log("G")
    })
    var transcriptName = transcriptline.append('text')
      .attr("x",10)
      .attr("y", 15)
      .text(function(d) {return d.transcriptName})
      .attr("font-size", "15px")
      .attr("fill", "black");
    

    var transcriptText = transcriptline.selectAll('g')
      .data(ABCB7.transcripts)
      .enter()
      .append('g');  
     var exons =  transcriptline.selectAll('g')
      .data(function(d,i) { return ABCB7.transcripts[i].exons})
      .enter()
      .append('g');
    var sequenceA = "GAGAGAGATGTGTGGT"
    var exons2 = exons.append('rect')
      .attr("x", function(d,i) { return d.end-d.start;
      })
      .attr("y",15)
      .attr("rx",5)
      .attr("ry",5)
      .attr("width", function(d,i) {
        return 10 + d.end-d.start;
      })
      .attr("height", 30)
      .attr("fill", "black")
                              .on('mouseover', function(d) {
                          var r = d3.select(this);
                          var p = d3.select('canva').append('div')
                                                  .append('p')
                                                  .attr('position', 'relative');
                          var m = d3.mouse(this);

                          r.attr('stroke-width', 5)
                           .attr('stroke', 'black')
                           .attr('stroke-opacity', 0.3)
                           canva.append('text')
                           .text(sequence.substring(d.end-d.start,d.end-d.start+80))
                           .attr('x',70)
                           .attr('y',100)
                           .attr("font-size", "15px")
                           .attr("fill", "black");
                         console.log("Gaga")
                        })
                        .on('mouseout', function(d) {
                          var r = d3.select(this)
                          r.attr('stroke', 'none')
                           .attr('cursor','arrow')
                           var d = d3.selectAll('text').remove();                        })

      var start = exons.append('rect')
  .attr("x", (ABCB7.transcripts[0].exons[0].ranges[0].start-ABCB7.transcripts[0].exons[0].start + 50))
  .attr("y",15)
  .attr("width", 3
  )
  .attr("rx",5)
      .attr("ry",5)
  .attr("height",30)
  .attr("fill", "green");

      var indi = count2(query2);
      console.log("indi" + indi + hit.chromosome);
    for(var j=0;j<indi.length;j++) {
    var clustexon = exons.append('rect')
    .attr("x", (indi[j]+400))
    .attr("y",15)
    .attr("rx",5)
      .attr("ry",5)
    .attr("width", 3
    )
    .attr("height",30)
    .attr("fill", "#E4E4E4");
    }
    var clus2 =[];
    for (var i=0;i<query1.length;i++){
      var clus2 = clus2.concat(count2(query1[i]));
    }

    for(var j=0;j<clus2.length;j++) {
      var clustexon = exons.append('rect')
      .attr("x", (clus2[j]+200))
      .attr("y",15)
      .attr("width", 3
      )
      .attr("rx",5)
      .attr("ry",5)
      .attr("height",30)
      .attr("fill", "#939393");
      }
    var clus3=[];
    for (var i=0; i<query3.length;i++) {
      var clus3=clus3.concat(count2(query3[i]));
    }
    for(var j=0;j<clus3.length;j++) {
      var clustexon1 = exons.append('rect')
      .attr("x", (clus3[j] * 5))
      .attr("y",15)
      .attr("width", 3
      )
      .attr("rx",5)
      .attr("ry",5)
      .attr("height",30)
      .attr("fill", "#636363");
      }
    var start = transcriptline.selectAll('g')
      .data(function(d,i) {return ABCB7.transcripts[0].exons[0].ranges})
      .enter()
      .append('g');
  
    var totalSiz = canva.append('text')
      .attr("x",400)
      .attr("y", 130)
      .text(function(d){return ( ABCB7.end - ABCB7.start+10) + " bp"})
      .attr("font-size", "15px")
      .attr("fill", "black");
    
    function mouseClick() {

    }
  /*   var lines = canva.append("line")
      .attr("x1",10)
      .attr("y1",)
      .attr("x2", function)
      .attr("y2",)
  
      
    group.selectAll(".line")
      .data(ABCB7.transcripts)
      .enter().append("path")
      .attr("class", "line")
      .attr("d", line); */
  /*   for (var transcripts in ABCB7) {
      if(!ABCB7.hasOwnProperty(trancripts)) {
        continue;
      }
      canva.append.line()
        .x(function(d,i){transcripts.end-transcripts.start;})
        .y(function(d,i){
          return (50*i+100);
      });
    }
    */
  
    // Gives the summary info x from base pairs 
    //TODO : Appending to SVG
    function wildcard(searchString) {
      if (searchString.indexOf('M') != -1) {
        console.log(searchString.replace('M','A'));
        return getIndicesOf(searchString.replace('M','A'),sequence) + getIndicesOf(searchString.replace('M','C'),sequence);
        
      }
      if (searchString.indexOf('R') != -1) {
        console.log(searchString.replace('R','A'));
        return getIndicesOf(searchString.replace('R','A'),sequence) + getIndicesOf(searchString.replace('R','G'),sequence);
        
      }
      if (searchString.indexOf('Y') != -1) {
        console.log(searchString.replace('Y','T'));
        return getIndicesOf(searchString.replace('Y','C'),sequence) + getIndicesOf(searchString.replace('Y','T'),sequence);
        
      }
      if (searchString.indexOf('S') != -1) {
        console.log(searchString.replace('S','G'));
        return getIndicesOf(searchString.replace('S','G'),sequence) + getIndicesOf(searchString.replace('S','C'),sequence);
        
      }
      if (searchString.indexOf('W') != -1) {
        console.log(searchString.replace('W','A'));
        return getIndicesOf(searchString.replace('W','A'),sequence) + getIndicesOf(searchString.replace('W','T'),sequence);
        
      }
      if (searchString.indexOf('K') != -1) {
        console.log(searchString.replace('K','G'));
        return getIndicesOf(searchString.replace('K','G'),sequence) + getIndicesOf(searchString.replace('K','T'),sequence);
        
      }
      if (searchString.indexOf('B') != -1) {
        console.log(searchString.replace('B','C'));
        return getIndicesOf(searchString.replace('B','C'),sequence) + getIndicesOf(searchString.replace('B','G'),sequence)+getIndicesOf(searchString);
        
      }
    }
    function getIndicesOf(searchStr, str, caseSensitive) {
      var searchStrLen = searchStr.length;
      if (searchStrLen == 0) {
          return [];
      }
      var startIndex = 0, index, indices = [];
      if (!caseSensitive) {
          str = str.toLowerCase();
          searchStr = searchStr.toLowerCase();
      }
      while ((index = str.indexOf(searchStr, startIndex)) > -1) {
          indices.push(index);
          startIndex = index + searchStrLen;
      }
  
      return indices;
  }

  appendStats();
  function appendStats3() {
    var mainContain = document.getElementById('results');
    var stat = document.createElement("stat");
    stat.innerHTML = sequence;
    mainContain.append(stat);
  }
  var organism="Drosophila Melanogaster"
  function appendStats() {
    var mainContain3 = document.getElementById('results');
    var stat = document.createElement("seq");
    mainContain3.appendChild(stat);
    var div = document.createElement("div");
    div.style="margin-left:30px";
    var a = document.createElement("a");
    div.innerHTML = 'Total Number of Hits:  ' + (indi.length + clus2.length + clus3.length) + "<br>" +"     " + "Chromosome: " + hit.chromosome +"<br>" +  "Gene ID: " + ABCB7.geneId;
    mainContain3.appendChild(div);
    a.style="margin-left:30px"
   
    a.setAttribute('href', "https://www.ncbi.nlm.nih.gov/gene/?term=ABCB7+Drosophila");
    a.innerHTML ="NCBI Link" + "<br>";
    
    // apend the anchor to the body
    // of course you can append it almost to any other dom element
    mainContain3.appendChild(a);
    

    } 
    appendStats2();
function appendStats2() {
  var mainContain = document.getElementById('results');
  var stat = document.createElement("stat");

  
  var div = document.createElement("div")
 
  
  var stat2 = document.createElement("stat2");
  div.innerHTML = 'Cluster1 at positions:  ' + indi  + "<br>" + " Cluster 2 at positions:  " + clus2 + "<br>" +"Cluster 3 at positions: " + clus3 + "<br>"+ "<br>";
  
  mainContain.appendChild(div);
  div.style="margin-left:30px";
  mainContain.appendChild(stat);
  stat2.style="margin-left:30px";
}

     function count2(query)
    {

      var count = [];
      var idx = 0;
  
       while ((idx = sequence.indexOf(query, idx)) != -1)
       {
          idx++;
          count.push(idx);
       }
       return count;
    }
}
