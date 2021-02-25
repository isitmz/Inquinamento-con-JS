function animation() {

var element = document.getElementsByClassName("text-animation")[0];

// replace each char with <span class="letter">{char} </span>

element.innerHTML = element.textContent.replace(/\S/g,'<span class="letter">$&</span>');

anime.timeline({loop:true})
.add({
  targets:'.text-animation .letter',
  scale:[3,1],
  opacity:[0,1],
  translateZ:0,
  duration:1000,
  easing:"easeOutExpo",
  delay:(elem, index) => index*70
})
.add({
  targets:'.text-animation',
  opacity:0,
  duration:1000,
  delay:1000,
  easing:"easeOutExpo"
})
}