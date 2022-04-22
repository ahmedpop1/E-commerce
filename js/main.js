let adwin=document.querySelectorAll(".ads-window div");
let adwim=document.querySelectorAll(".ads-window div img");
// let adwin=document.querySelectorAll(".ads-window div")[1];

let n=1;
let m=0;
let i=0;
// console.log(adwim)
setInterval(function(){
    [n,m]=[m,n]
    i++;
    i>5?i=1:i=i;
    
    adwin[n].style.left='10px';
adwin[m].style.left='-555px';
;
setTimeout(function(){
adwin[m].style.zIndex='-5'
setTimeout(function(){
    adwin[m].style.left='570px';
    
    setTimeout(function(){
        adwin[m].style.zIndex='1';
        // console.log(i)
        adwim[m].src=`./images/img${i}.jpg`
    },500)
},900)
},1000)
},4000)

