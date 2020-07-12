/*
    Data binding syntax inspired by Simon Mekonen
*/

// JSON Object bound to variable temp. TODO: remove hardcode, allow for iterance
function name (geneN) {
  console.log("the name is" +geneN);
}
function hi(temp) {
  
    var ABCB7 = temp;
    var query = "GAG"
    var sequence = "CCGAGATGCGAATGCTGATATCGTAGCAAAAACACAGGGACGGTGCTATATGAAAGAAGAGGGACAGTTTTATTTTGTTTTCGCCTGCAGGCAATTGAGTAATGGCCGGACTCCTTCACCTGACCAAGCAGTGCAGCATCCACCTACCCGCCCACTTGGGACGCGCGAAATGCTACACACTCGCTAAGGGACCGGGAACACACGTGCAGGCAAGAGTG"
    var canva= d3.select('#results').append('svg')
        .attr('width',1000)
        .attr('height', 75)
        .style('border', '3px solid');
  
    var transcriptline = canva.selectAll('g')
      .data(ABCB7.transcripts)
      .enter()
      .append('g');
    var transcripts = transcriptline.attr('transform', (d,i) => 'translate(0, '+40*i+')')
      .append('rect')
      .attr("x", 10)
      .attr("y", 15)
      .attr("width",function(d) { return d.end-d.start + 10})
      .attr("height", 5)
      .attr("fill","black");
  
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
  
    var exons2 = exons.append('rect')
      .attr("x", function(d,i) {if(d.exonNumber==4) {
        return 80+d.end-d.start;
      }
      else {
        return 10 + d.end-d.start;
      }})
      .attr("y",0)
      .attr("width", function(d,i) {if(d.exonNumber==4) {
        return 3;
      }
      else {
        return 10 + d.end-d.start;
      }})
      .attr("height", 30)
      .attr("fill", "black");
      var start = exons.append('rect')
  .attr("x", (ABCB7.transcripts[0].exons[0].ranges[0].start-ABCB7.transcripts[0].exons[0].start + 50))
  .attr("y",0)
  .attr("width", 3
  )
  .attr("height",30)
  .attr("fill", "green");
      var indi = getIndicesOf(query,sequence);
      var clusters = canva.selectAll('g')
      .data([50,89,120])
      .enter()
      .append('g');
    for(var j=0;j<3;j++) {
    var clustexon = exons.append('rect')
    .attr("x", (indi[j]+10))
    .attr("y",0)
    .attr("width", 3
    )
    .attr("height",30)
    .attr("fill", "blue");
    }
    var start = transcriptline.selectAll('g')
      .data(function(d,i) {return ABCB7.transcripts[0].exons[0].ranges})
      .enter()
      .append('g');
  
    var startexon = start.append('rect')
      .attr("x",function(d,i){
           return 10+d.end - d.start})
      .attr("y",0)
      .attr("width",function(d,i){
        return 3;
      })
      .attr("height",30)
      .attr("fill",function(d,i) { if((d.type).equals("start_codon")) {
        return "green";
      }
    else {
      return "black";
    }});
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
  console.log(indi);
  query = "GAG";
  var indi = getIndicesOf(query,sequence);
  appendStats(indi);
  function appendStats(data) {
    var mainContain3 = document.getElementById('results');
  
    for (var i=0;i<3;i++){
    var div = document.createElement("div");
    div.innerHTML = 'Cluster ' + (i+1) + 'is ' + (220-indi[i])+ "bp from the start codon" ;
    
    mainContain3.appendChild(div);
    }} 
     
}
