var hotel ={
    name:"fast food 3chy",
    times: ["morning","afternoon","night"],
    morning:["idly","dosa","boori","vada","uthapam","pongal"],
    afternoon:["unlimited rice","limited rice","kuska","biriyani","variety rice"],
    night:["porotta","non","kabab","chicken rice","chicken noodles","chappathi"],
};
function food(){
  var d = new Date();
  var h =  d.getHours();
  if((h>=7) && (h<=11)){
    console.log(hotel.morning);
  }
  else if((h>=12)&&(h<=16)){
    console.log(hotel.afternoon);

  }
  else if((h>=19)&&(h<=23)){
    console.log(hotel.night);

  }
}
food();
 var tidly=0,tdosa=0,tboori=0;

 function imgonclick(){
    document.getElementsByClassName("popup_window")[0].style.display="block";
 }

 function closeimgjs(){
   document.getElementsByClassName("popup_window")[0].style.display="none";
 }
 function plusimgon(){
  var idlycount = Number(document.getElementsByClassName("increaseidly")[0].innerHTML);
  idlycount+=1;
  document.getElementsByClassName("increaseidly")[0].innerHTML = idlycount;
  tidly = document.getElementsByClassName("tamountid")[0].innerHTML= idlycount*20;
  return Number(tidly);
 }
 function minusimgon(){
  var idlycount = Number(document.getElementsByClassName("increaseidly")[0].innerHTML);
  if(idlycount!=0)
  {
  idlycount-=1;
  document.getElementsByClassName("increaseidly")[0].innerHTML = idlycount;
  var idlytot = document.getElementsByClassName("tamountid")[0].innerHTML;
  document.getElementsByClassName("tamountid")[0].innerHTML= idlytot-20;
    }
 }
 function plusimgdos(){
  var dosacount = Number(document.getElementsByClassName("increasedosa")[0].innerHTML);
  dosacount+=1;
  document.getElementsByClassName("increasedosa")[0].innerHTML = dosacount;
  tdosa = document.getElementsByClassName("tamountdo")[0].innerHTML= dosacount*30;
  return Number(tdosa);
 }
 function minusimgdos(){
  var dosacount = Number(document.getElementsByClassName("increasedosa")[0].innerHTML);
  if(dosacount!=0)
  {
  dosacount-=1;
  document.getElementsByClassName("increasedosa")[0].innerHTML = dosacount;
  var dosatot = document.getElementsByClassName("tamountdo")[0].innerHTML;
  document.getElementsByClassName("tamountdo")[0].innerHTML= dosatot-30;
    }
 }
 function plusimgboo(){
  var booricount = Number(document.getElementsByClassName("increaseboori")[0].innerHTML);
  booricount+=1;
  document.getElementsByClassName("increaseboori")[0].innerHTML = booricount;
  tboori = document.getElementsByClassName("tamountbo")[0].innerHTML= booricount*35;
  return Number(tboori);
 }
 function minusimgboo(){
  var booricount = Number(document.getElementsByClassName("increaseboori")[0].innerHTML);
  if(booricount!=0)
  {
  booricount-=1;
  document.getElementsByClassName("increaseboori")[0].innerHTML = booricount;
  var booritot = document.getElementsByClassName("tamountbo")[0].innerHTML;
  document.getElementsByClassName("tamountbo")[0].innerHTML= booritot-35;
    }
 }
 function billcalc(){
   var tbamount = tidly+tdosa+tboori;
   console.log(tbamount,tidly,tdosa,tboori );
   document.getElementsByClassName("totalam")[0].innerHTML= tbamount;
 }