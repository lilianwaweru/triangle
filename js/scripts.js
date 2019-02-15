function out(){
  var a=parseInt(document.getElementById('length').value);
  var b=parseInt(document.getElementById('width').value);
  var c=parseInt(document.getElementById('height').value);

  if(a==b && b==c && c==a){
    alert("EQUILATERAL TRIANGLE");
  }
  else if(a==b && b==c && a==c){
    alert("ISOSCELES TRIANGLE");
  }
  else if(a!=b && b!=c && a!=c){
    alert("SCALENE TRIANGLE");
  }
  else {
    alert("Cannot make a Triangle");
  }
}
