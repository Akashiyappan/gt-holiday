let container=document.querySelector('.backimg');
let imagearray=["back1.jpg","back2.jpg","back3.jpg"];
let count = 0;
function img2() {
  count++;
  if (count == 3) {
    count = 0;
  }
  container.style.backgroundImage=`url("image/${imagearray[count]}")`;
}
function img1() {
    count--;
    if (count == -1) {
      count = 2;
    }
    container.style.backgroundImage=`url("image/${imagearray[count]}")`;
  }
let aimg=["image/a1.jpg","image/a2.jpg","image/a3.jpg","image/a4.jpg","image/a5.jpg","image/a6.jpg","image/a7.jpg"];
let c=0;
function leftarr(){
  c++;
  c=c%7;
  document.                                                       ("aa1").src=aimg[c];
  document.getElementById("aa2").src=aimg[(c+1)%7];
  document.getElementById("aa3").src=aimg[(c+2)%7];
  document.getElementById("aa4").src=aimg[(c+3)%7];
  document.getElementById("aa5").src=aimg[(c+4)%7];
}
function rightarr(){
  c--;
  if(c==-1){
    c=6;
  }
  document.getElementById("aa1").src=aimg[c];
  document.getElementById("aa2").src=aimg[(c+1)%7];
  document.getElementById("aa3").src=aimg[(c+2)%7];
  document.getElementById("aa4").src=aimg[(c+3)%7];
  document.getElementById("aa5").src=aimg[(c+4)%7];
}
let aaimg=["image/B1.jpg","image/B2.jpg","image/B3.jpg","image/B4.jpg","image/B5.jpg","image/B6.jpg","image/B7.jpg","image/B8.jpg","image/B9.jpg",];
let c1=0;
function leftarr1(){
  c1++;
  c1=c1%9;
  document.getElementById("aaa1").src=aaimg[c1];
  document.getElementById("aaa2").src=aaimg[(c1+1)%9];
  document.getElementById("aaa3").src=aaimg[(c1+2)%9];
  document.getElementById("aaa4").src=aaimg[(c1+3)%9];
  document.getElementById("aaa5").src=aaimg[(c1+4)%9];
}
function rightarr1(){
  c1--;
  if(c1==-1){
    c1=8;
  }
  document.getElementById("aaa1").src=aaimg[c1];
  document.getElementById("aaa2").src=aaimg[(c1+1)%9];
  document.getElementById("aaa3").src=aaimg[(c1+2)%9];
  document.getElementById("aaa4").src=aaimg[(c1+3)%9];
  document.getElementById("aaa5").src=aaimg[(c1+4)%9];
}