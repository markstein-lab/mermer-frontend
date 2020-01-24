/*
    Data binding syntax inspired by Simon Mekonen
*/

//Old DATA JSON format from Simon, will change when I actually make a draft of json format from 11/20 -KN
var temp = {sequences: [
    {sequenceName: "3L", genes: [
  
      {geneName: "ABCB7", start: 1618414, end: 1623413, geneId: "FBgn0035244", transcripts: [
  
        {transcriptName: "ABCB7-RA", start: 1618414, end: 1623413, transcriptId: "FBtr0072754", exons: [
  
          {exonNumber: 1, start: 1618414, end: 1618617, exonId: "FBgn0035244:1", exonVersion: 1, ranges: [{start: 1618501, end: 1618617, type: "CDS"}, {start: 1618501, end: 1618503, type: "start_codon"}]}, {exonNumber: 2, start: 1620428, end: 1620554, exonId: "FBgn0035244:2", exonVersion: 1, ranges: [{start: 1620428, end: 1620554, type: "CDS"}]}, {exonNumber: 3, start: 1620817, end: 1621042, exonId: "FBgn0035244:3", exonVersion: 1, ranges: [{start: 1620817, end: 1621042, type: "CDS"}]}, {exonNumber: 4, start: 1621103, end: 1621257, exonId: "FBgn0035244:5", exonVersion: 1, ranges: [{start: 1621103, end: 1621257, type: "CDS"}]}, {exonNumber: 5, start: 1621317, end: 1622665, exonId: "FBgn0035244:6", exonVersion: 1, ranges: [{start: 1621317, end: 1622665, type: "CDS"}]}, {exonNumber: 6, start: 1622732, end: 1623413, exonId: "FBgn0035244:8", exonVersion: 1, ranges: [{start: 1622732, end: 1622986, type: "CDS"}, {start: 1622987, end: 1622989, type: "stop_codon"}]}], ranges: [{start: 1618414, end: 1618500, type: "UTR"}, {start: 1622990, end: 1623413, type: "UTR"}]},
  
        {transcriptName: "ABCB7-RB", start: 1618414, end: 1623159, transcriptId: "FBtr0072755", exons: [
  
          {exonNumber: 1, start: 1618414, end: 1618617, exonId: "FBgn0035244:1", exonVersion: 1, ranges: [{start: 1618501, end: 1618617, type: "CDS"}, {start: 1618501, end: 1618503, type: "start_codon"}]}, {exonNumber: 2, start: 1620428, end: 1620554, exonId: "FBgn0035244:2", exonVersion: 1, ranges: [{start: 1620428, end: 1620554, type: "CDS"}]}, {exonNumber: 3, start: 1620919, end: 1621042, exonId: "FBgn0035244:4", exonVersion: 1, ranges: [{start: 1620919, end: 1621042, type: "CDS"}]}, {exonNumber: 4, start: 1621103, end: 1621257, exonId: "FBgn0035244:5", exonVersion: 1, ranges: [{start: 1621103, end: 1621257, type: "CDS"}]}, {exonNumber: 5, start: 1621317, end: 1622665, exonId: "FBgn0035244:6", exonVersion: 1, ranges: [{start: 1621317, end: 1622665, type: "CDS"}]}, {exonNumber: 6, start: 1622732, end: 1623159, exonId: "FBgn0035244:7", exonVersion: 1, ranges: [{start: 1622732, end: 1622986, type: "CDS"}, {start: 1622987, end: 1622989, type: "stop_codon"}]}], ranges: [{start: 1618414, end: 1618500, type: "UTR"}, {start: 1622990, end: 1623159, type: "UTR"}]
        }]
      }]
    }]
  };
  
  var ABCB7 = temp.sequences[0].genes[0];

  var canva= d3.select('body').append('svg')
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
    .attr("x", function(d,i) { return 10 + d.end - d.start})
    .attr("y",0)
    .attr("width", function(d,i) {return 10 + d.end-d.start})
    .attr("height", 30)
    .attr("fill", "black");

  var start = transcriptline.selectAll('g')
    .data(function(d,i) {return ABCB7.transcripts})
    .enter()
    .append('g');

  var startexon = start.append('rect')
    .attr("x",function(d,i){return 10+d.start})
    .attr("y",0)
    .attr("width",3)
    .attr("height",15)
    .attr("fill", "green");
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