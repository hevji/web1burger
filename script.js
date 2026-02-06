// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e=>{
  cursor.style.top = e.clientY+'px';
  cursor.style.left = e.clientX+'px';
});

// Particle System
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
for(let i=0;i<70;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*3+1,
    speed:Math.random()*0.5+0.2,
    color:['#ff6b6b','#ffd93d','#6bcbff','#ff00ff'][Math.floor(Math.random()*4)]
  });
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.y-=p.speed;
    if(p.y<0)p.y=canvas.height;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=p.color;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// Resize
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
