$(function(){
    $('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: true,
    slideWidth: 1500
    });
  });
function plusfun(x){

  var a=document.getElementsByClassName("foodvla")[x].innerHTML;
  var b=Number(a);
   var c= b+1;
   document.getElementsByClassName("foodvla")[x].innerHTML= c;
}
function minusfun(x){
    var a =   document.getElementsByClassName("foodvla")[x].innerHTML;
    if(a>0)
    {
        var b = a-1;
        document.getElementsByClassName("foodvla")[x].innerHTML= b;

    }

}
function zoomin(){
    // event.preventDefault();
    var p="";
    var q="";
    var r="";
    var s="";
    var t="";
    var u="";
    var v="";
    document.getElementsByClassName("tdivb3")[0].classList.add("divzoom");
    document.getElementsByClassName("h3note")[0].style.display="block";
    document.getElementsByClassName("tdivb2")[0].style.display="none";
   var a = Number(document.getElementsByClassName("fc1")[0].innerHTML);
   var b = Number(document.getElementsByClassName("fc2")[0].innerHTML);
   var c = Number(document.getElementsByClassName("fc3")[0].innerHTML);
   var d = Number(document.getElementsByClassName("fc4")[0].innerHTML);
   var e = Number(document.getElementsByClassName("fc5")[0].innerHTML);
   var f = Number(document.getElementsByClassName("fc6")[0].innerHTML);
   var g = Number(document.getElementsByClassName("fc7")[0].innerHTML);
 
  if(a>0){
     var p= Number(a*20);
    //  var a1 =Number(p);
      document.getElementById("food1").innerHTML ="<td>"+"IDLY SET:"+a+"</td>"+"<td>"+"₹"+p+"</td>";
  }
  if(b>0){
     var q=Number(b*30);
    //  var a2=Number(q);
    document.getElementById("food2").innerHTML ="<td>"+"DOSA:"+b+"</td>"+"<td>"+"₹"+q+"</td>";
}
if(c>0){
     var r=Number(c*30);
    //  var a3 =Number(r);
    document.getElementById("food3").innerHTML ="<td>"+"BOORI:"+c+"</td>"+"<td>"+"₹"+r+"</td>";
}
if(d>0){
     var s=Number(d*30);
    //  var a4 =Number(s);
    document.getElementById("food4").innerHTML ="<td>"+"PORATTA:"+d+"</td>"+"<td>"+"₹"+s+"</td>";
}
if(e>0){
     var t=Number(e*30);
    //  var a5 =Number(t);
    document.getElementById("food5").innerHTML ="<td>"+"UTHAPPAM:"+e+"</td>"+"<td>"+"₹"+t+"</td>";
}
if(f>0){
    var u=Number(f*25);
    // var a6 =Number(u);
    document.getElementById("food6").innerHTML ="<td>"+"PONGAL SET:"+f+"</td>"+"<td>"+"₹"+u+"</td>";
}
if(g>0){
    var v=Number(g*20);
    // var a7 =Number(v);
    document.getElementById("food7").innerHTML ="<td>"+"EDIYAPPAM:"+g+"</td>"+"<td>"+"₹"+v+"</td>";
}
var tot=Number(p)+Number(q)+Number(r)+Number(s)+Number(t)+Number(u)+Number(v);
// var tot =a1+a2+a3+a4+a5+a6+a7;
// console.log(a1,a2,a3,a4,a5,a6,a7);
document.getElementById("tamountt").innerHTML ="<tr>"+"<td>"+"TOTAL AMOUNT:"+"</td>"+"<td>"+"₹"+tot+"</td>"+"</tr>";
}


function downimg(){
    document.getElementsByClassName("tdivb3")[0].classList.remove("divzoom");
    document.getElementsByClassName("tdivb2")[0].style.display="block";
    document.getElementsByClassName("h3note")[0].style.display="none";

}
function placeorder(){
    var ran= Math.floor((Math.random() * 1000) + 1);
    document.getElementById("fcode").value=ran;
    document.getElementsByClassName("tdivb3")[0].classList.remove("divzoom");
    document.getElementsByClassName("tdivb2")[0].style.display="block";
    document.getElementsByClassName("h3note")[0].style.display="none";

}
function closepopup(){
    document.getElementsByClassName("printrecp")[0].style.display="none";
}
function dispop(){
    document.getElementsByClassName("printrecp")[0].style.display="block";
}
