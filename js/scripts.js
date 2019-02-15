function out(){
  var sidea=parseInt(document.getElementById('length').value);
  var sideb=parseInt(document.getElementById('width').value);
  var sidec=parseInt(document.getElementById('height').value);
  var side=[a,b,c]
  if(a[0]==b[1] && b[1]==c[2] && c[2]==a[0]){
    alert("EQUILATERAL TRIANGLE");
  }
  else if(a[0]==b[1] || b[1]==c[2] || a[0]==c[2]){
    alert("ISOSCELES TRIANGLE");
  }
  else if(a[0]!=b[1] && b[1]!=c[2] && a[0]!=c[2]){
    alert("SCALENE TRIANGLE");
  }
  else {
    alert("Cannot make a Triangle");
  }
}
