/*
    Data binding syntax inspired by Simon Mekonen
*/

// JSON Object bound to variable temp. TODO: remove hardcode, allow for iterance
function hi(temp, hits) {

    var ABCB7 = temp;
    var query = "GAG"
    var sequence = "CCGAGATGCGAATGCTGATATCGTAGCAAAAACACAGGGACGGTGCTATATGAAAGAAGAGGGACAGTTTTATTTTGTTTTCGCCTGCAGGCAATTGAGTAATGGCCGGACTCCTTCACCTGACCAAGCAGTGCAGCATCCACCTACCCGCCCACTTGGGACGCGCGAAATGCTACACACTCGCTAAGGGACCGGGAACACACGTGCAGGCAAGAGTG"
    console.log("hi");
    appendName(ABCB7.geneName);
    var starti= [];
    for (var i=0; i <ABCB7.transcripts.length;i++) {
      starti.push(80 + (ABCB7.transcripts[i].exons[0].ranges[1].start - ABCB7.transcripts[i].exons[0].start));
    console.log(ABCB7.transcripts[i].start);
    console.log(ABCB7.transcripts[i].exons[0].ranges[1].start)
    }
    console.log("starti push" + starti);
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
      .attr("x", function(d,i)  {
        console.log(10 + d.end-d.start)
        return 10 + d.end-d.start})
      .attr("y",0)
      .attr("width", function(d,i)  {
        console.log(10 + d.end-d.start)
        return 10 + d.end-d.start})
      .attr("height", 30)
      .attr("fill", "black");

      var indi = getIndicesOf(query,sequence);
      
      var clusters = canva.selectAll('g')
      .data([50,89,120])
      .enter()
      .append('g');
    console.log(indi)
    for(var j=0;j<4;j++) {
    var clustexon = exons.append('rect')
    .attr("x", (indi[j]+10))
    .attr("y",0)
    .attr("width", query.length
    )
    .attr("height",30)
    .attr("fill", "#d0e2dd");
    }
    for (var k=0; k<starti.length;k++){
      var starexon = exons.append('rect')
      .attr("x", (starti[k]))
      .attr("y",0)
      .attr("width",3)
      .attr("height", 30)
      .attr("fill",'#679186')
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
      console.log("indi" + indices);
      return indices;
  }
  console.log(indi);
  query = "GAG";
  var indi = getIndicesOf(query,sequence);
  appendStats(indi);
  link(ABCB7.geneName);
  function appendStats(data) {
    var mainContain3 = document.getElementById('results');
  

    var div = document.createElement("div");
    div.innerHTML = 'Total Number of Hits: ' + indi.length;
    
    mainContain3.appendChild(div);
    var div2 = document.createElement("div");
    div2.innerHTML = 'Gene length: ' + (ABCB7.transcripts[0].end - ABCB7.transcripts[0].start) +'bp' ;

    mainContain3.appendChild(div2);
    
    }

  } 
    function link(name) { 
      var mainContain3 = document.getElementById('results');
      var a = document.createElement('a');  
      var link = document.createTextNode("NCBI Link"); 
        
      // Append the text node to anchor element. 
      a.appendChild(link);  
        
      // Set the title. 
      a.title = "NCBI Reference";  
        
      // Set the href property. 
      a.href = "https://www.ncbi.nlm.nih.gov/gene/?term="+ name;  
        
      // Append the anchor element to the body. 
      mainContain3.appendChild(a);  
  } 
  function appendName(name) {

    var mainContain3 = document.getElementById('results');
  

    var div = document.createElement("div");
    div.innerHTML = 'Gene ' + name;
    
    mainContain3.appendChild(div);
    } 
    
     

