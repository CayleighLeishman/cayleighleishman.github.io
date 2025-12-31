console.clear();

let root = document.documentElement;

let w = {
  height: window.innerHeight,
  width: window.innerWidth
}

function setCustomProps(e){

  let pos = {
    left: e.clientX / w.width,
    top: e.clientY / w.height
  };  

  let scale = {
    x: `${ 1 - Math.abs( (w.width / 2) - e.clientX) / w.width }`,
    y: `${ 1 - Math.abs( (w.width / 2) - e.clientY) / w.height }`
  }

  let posFromCenter = {
    x: ( (w.width / 2) - e.clientX ) / (w.width / 2),
    y: ( (w.height / 2) - e.clientY ) / (w.height / 2)
  }

  root.style.setProperty('--pos-x', pos.left);
  root.style.setProperty('--pos-y', pos.top);
  root.style.setProperty('--pos-x-from-center', posFromCenter.x);
  root.style.setProperty('--pos-y-from-center', posFromCenter.y);
  root.style.setProperty('--scale-x', scale.x);
  root.style.setProperty('--scale-y', scale.y);
}

//watch for some events

window.addEventListener('resize', (e) => {
  w.height = window.innerHeight;
  w.width = window.innerWidth;
});

window.addEventListener('mousemove', setCustomProps, false);

window.addEventListener('touchstart', (e) => {
  setCustomProps(e.touches[0]);
}, false);