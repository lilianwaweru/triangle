function out(){
  var sidea=parseInt(document.getElementById('length').value);
  var sideb=parseInt(document.getElementById('width').value);
  var sidec=parseInt(document.getElementById('height').value);
  var side = [a,b,c];
  if(side[0]==side[1] && side[1]==side[2] && side[2]==side[0]){
    alert("EQUILATERAL TRIANGLE");
  }
  else if(side[0]==side[1] || side[1]==side[2] || side[0]==side[2]){
    alert("ISOSCELES TRIANGLE");
  }
  else if(side[0]!=side[1] && side[1]!=side[2] && side[0]!=side[2]){
    alert("SCALENE TRIANGLE");
  }
  else {
    alert("Cannot make a Triangle");
  }
}
