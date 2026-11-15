const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>{x=clamp(x);return x*x*(3-2*x)};
export async function play(container,callbacks){
 const video=document.createElement('video');video.src='./assets/drift-enhanced.mp4';video.playsInline=true;video.muted=!callbacks.soundEnabled;video.preload='auto';video.className='drift-film';video.setAttribute('aria-label','Lamborghini tyre close-up and drift');
 const smoke=document.createElement('canvas');smoke.className='smoke-layer';const ctx=smoke.getContext('2d');container.replaceChildren(video,smoke);
 const cloud=new Image();cloud.src='./assets/tyre-smoke.png';
 let width=innerWidth,height=innerHeight;const ratio=Math.min(devicePixelRatio,1.5);smoke.width=width*ratio;smoke.height=height*ratio;ctx.scale(ratio,ratio);
 const fallback=document.createElement('canvas');fallback.width=fallback.height=128;const fc=fallback.getContext('2d'),gradient=fc.createRadialGradient(64,64,0,64,64,64);gradient.addColorStop(0,'#aaa9a7');gradient.addColorStop(.5,'#77767488');gradient.addColorStop(1,'#33333300');fc.fillStyle=gradient;fc.fillRect(0,0,128,128);
 let raf,loadTimer,endedAt=0,disposed=false,impacted=false;
 const ready=new Promise((resolve,reject)=>{video.addEventListener('loadeddata',resolve,{once:true});video.addEventListener('error',()=>reject(new Error('The intro video could not load.')),{once:true})});
 const timeout=new Promise((_,reject)=>loadTimer=setTimeout(()=>reject(new Error('Video load timed out.')),12000));
 try{await Promise.race([ready,timeout]);clearTimeout(loadTimer);await video.play()}catch(error){clearTimeout(loadTimer);video.pause();container.replaceChildren();throw error}
 video.addEventListener('ended',()=>endedAt=performance.now(),{once:true});
 function tick(now){if(disposed)return;const t=video.currentTime+(endedAt?(now-endedAt)/1000:0);const duration=video.duration||5;const fadeStart=duration-1.35;const reveal=ease((t-fadeStart)/1.4);const clear=1-ease((t-duration)/1.8);const density=ease((t-fadeStart+.65)/1.5)*clear;
  video.style.opacity=String(1-reveal);container.parentElement.style.background=`rgba(9,9,9,${1-reveal})`;callbacks.progress(clamp(t/(duration+1.8)));
  ctx.clearRect(0,0,width,height);ctx.fillStyle=`rgba(72,70,68,${density*.9})`;ctx.fillRect(0,0,width,height);
  const texture=cloud.complete&&cloud.naturalWidth?cloud:fallback;
  for(let i=0;i<8;i++){const progress=ease((t-2)/3),size=width*(.7+progress*.6+(i%3)*.2),x=width*(.7-(t-2)*.17+(i%4)*.26)-size/2,y=height*(.67-Math.floor(i/4)*.42)-size*.35;ctx.globalAlpha=density*(.5+(i%3)*.14);ctx.drawImage(texture,x,y,size,size*(texture.height/texture.width))}ctx.globalAlpha=1;
  if(reveal>.7&&!impacted){impacted=true;callbacks.impact()}
  if(t>=duration+1.8){callbacks.done();return}raf=requestAnimationFrame(tick)
 }
 raf=requestAnimationFrame(tick);
 return ()=>{disposed=true;cancelAnimationFrame(raf);video.pause();video.removeAttribute('src');video.load();container.replaceChildren();container.parentElement.style.background=''};
}
