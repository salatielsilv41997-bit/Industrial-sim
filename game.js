
const map=document.getElementById('map');
for(let y=0;y<3;y++){
 for(let x=0;x<3;x++){
  const t=document.createElement('div');
  t.className='tile';
  const isoX=(x-y)*64+120;
  const isoY=(x+y)*32;
  t.style.left=isoX+'px';
  t.style.top=isoY+'px';
  t.style.backgroundImage="url('assets/ground/grass.png')";
  let stage=0;
  t.onclick=()=>{
    stage=(stage+1)%4;
    if(stage===0)t.style.backgroundImage="url('assets/ground/grass.png')";
    if(stage===1)t.style.backgroundImage="url('assets/crops/wheat_1.png')";
    if(stage===2)t.style.backgroundImage="url('assets/crops/wheat_2.png')";
    if(stage===3)t.style.backgroundImage="url('assets/crops/wheat_3.png')";
  }
  map.appendChild(t);
 }
}
