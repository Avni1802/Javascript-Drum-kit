
window.addEventListener('keydown',function(e){
let audio =document.querySelector(`audio[data-key="${e.keyCode}"]`)   
console.log(audio);
audio.currentTime=0;
audio.play(); 
});
