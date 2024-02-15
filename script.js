const n=20;
const array=[];

for (let i=0;i<n;i++){
    array[i]=Math.random();
}

for(let i=0;i<10;i++){
    const bar=document.createElement("div");
    bar.style.height=array[i]*100+"%";
    bar.style.width="10px";
    bar.style.backgroundColor='black';

    Container.appendChild(bar);
   }

   //init();

 let audioCtx=null;

 function playNote(freq){
     if(audioCtx==null){
        audioCtx-new(
            AudioContext ||
             webkitAudiocontex ||
             window.webkitAudiocontex
         )();
     }
     const dur=0.1;
     const osc=audioCtx.createOscilator();
     osc.frequency.value=freq;
     osc.start();
     osc.stop(audioCtx.currentTime+dur);
     const node=audioCtx.creatGain();
     node.gain.value=0.1;
     node.gain.linrearRampToValueAtTime(0, audioCtxcurrentTime+dur);
     osc.connect(node);
     node.connect(audioCtx.destination);
 }

 function init(){
 for (let i=0;i<n;i++){
     array[i]=Math.random();
 }
   showBars();
 }

 function play(){
     const copy=[...array];
     const moves=bubblesort(copy);
     animate(moves);
 }

 function animate(moves){
     if(moves.lenght==0){
         showBars();
         return;
     }
     const move=moves.shift();
     const [i,j]=moves.shift();

     if(move.type=="swap"){
     [array[i],array[j]]=[array[j],array[i]];
     }  

     showBars([move]);
     setTimeout(function(){
         animate(moves);
     },50);
 }

 function bubblesort(array){
     const moves=[];
     do{
         var swapped=false;
         for(let i=1;i<array.length;i++){
             moves.push({indices:[i-1,i],type:"comp"});
            if(array[i-1]>array[i]){
             swapped=true;
             moves.push({indices:[i-1,i],type:"swap"});
             [array[i-1],array[i]]=[array[i],array[i-1]];
         }
     }
  }while(swapped);
  return moves;
 }

 function showBars(indices){
      Container.innerHTML=" ";
     for(let i=0;i<10;i++){
     const bar=document.createElement("div");
     bar.style.height=array[i]*100+"%";
     bar.style.width="10px";
     bar.style.backgroundColor='black';
     bar.classList.add("bar");

      if(moves && moves.indices.includes(i)){
         bar.style.backgroundColor=
          moves.type=="swap"?"blue":"green";
      }
     Container.appendChild(bar);
    }
 }