'use strict';
const video=document.getElementById('video');
const canvas=document.getElementById('canvas');
const snap=document.getElementById('snap');
const errormsgElemt=document.getElementById('spanErrormsg');

const constraints={
    audio:true,
    video:{
        width:1280,
        height:720}
};


async function init(){
    try{
        const stream=await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
    }
    catch(e){
        errormsgElemt.innerHTML='navigator.getUserMedia.error:${e.toString()}';
    }
}

function handleSuccess(stream){
    window.stream=stream;
    video.srcObject=stream;
}

init();
var context=canvas.getcontext('2d');
snap.addEventListener('click',function(){
    context.drawImage(video,0,0,640,480);
});

window.addEventListener("load",() => {
    const loader= document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
    })
});
