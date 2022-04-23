let adwin=document.querySelectorAll(".ads-window div");
let adwim=document.querySelectorAll(".ads-window div img");
let search=document.querySelectorAll(".form-control")[0]
let sugbox=document.querySelectorAll(".sugul")[0]

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
let a=['laptop','mobile','personal mob','television','microwave','keyboard','table','keyframe','tattweer'];
search.addEventListener('keyup',function(){
      // console.log(search.value);
    
    let searched=search.value;
    let srhsrr=searchitem(a,searched);
    let text='';
    if(srhsrr){
    for(let item of srhsrr){
        text+=`<li>${item}</li>`;
    }}
    else{text=''}
    sugbox.innerHTML=text;
    // console.log(text);


})


/*************************************************************************************** */








function searchitem(arr,searchit){
    searchit.trim();
    if(searchit.trim()!=''){
    var re = new RegExp(`\\b${searchit}`,"ig");
    //   let re=/\b+searched/ig;
    // arr.forEach(function(ele,index){if(re.test(ele)){if(searchit.trim()!=''){return arr[index]}}})
   let result= arr.filter(function(ele,index){return (re.test(ele))})
   return result}

}