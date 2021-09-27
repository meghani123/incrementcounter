const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
   // console.log(counter);
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount=counter.getAttribute('data-target');
     //   console.log(data-target);
     const startingCount=Number(counter.innerHTML);
     const incr= targetCount/50;
     if(startingCount<targetCount){
         counter.innerHTML=`${Math.round(startingCount+incr)}`;
         setTimeout(updateCounter,50);
     }
     else{
         counter.innerHTML=targetCount;
     }
    }
    updateCounter();

})
