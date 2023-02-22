const pianoKeys=document.querySelectorAll(".piano-keys .key");
let audio= new Audio ("tunes/a.wav")
volumeSlider= document.querySelector(" .volume-slider input ")
keysCheckbox = document.querySelector("keys-checkbox input");
const playTune= (key)=>{
  audio.src = `tunes/${key}.wav`;
audio.play();
}
pianoKeys.forEach(key=>{
  key.addEventListener("click",()=>playTune (key.dataset.key));
  console.log(key.dataset.key);
})
const handleVolume = (e) => {
audio.volume = e.target.value;
}
const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
  playTune(e.key)
  console.log(e);

}
keysCheckbox.addEventListener("click" ,showHideKeys);
volumeSlider.addEventListener("input" , handleVolume);
document.addEventListener("keydown",pressedKey);