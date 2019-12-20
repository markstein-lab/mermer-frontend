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
      .attr('width',10000)
      .attr('height', 10000)
      .style('border', '1px solid');

  var transcripts = canva.selectAll('r')
    .data(ABCB7.transcripts)
    .enter();

    var transcriptFunction0 = d3.svg.line()
        .x(function(d,i){ ABCB7.transcripts[0].end-ABCB7.transcripts[0].start;})
        .y(function(d,i){
            return (50*i+100);
        });
    var line = canva.append("path")
        .attr("d", transcriptFunction0(ABCB7.transcripts))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");

 