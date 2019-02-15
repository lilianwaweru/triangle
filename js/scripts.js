function findout(){
  var a=parseInt(document.getElementsByid("length")).value
  var b=parseInt(document.getElementsByid("Width")).value
  var c=parseInt(document.getElementsByid("Height")).value
  var triangle = [a,b,c];
  if(triangle[0]==triangle[1] && triangle[1]==triangle[2]){
    alert("EQUILATERAL TRIANGLE");
  }
