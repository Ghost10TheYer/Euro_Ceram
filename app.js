import {
  username,
  slides,
  drillsWrapper,
  drillsImgs,
  drillsTag,
  hammersTag,
  screwDriverTag,
  miscllnTag,
  drillsImgsPathArray,
  hammersImgsPathArray,
  screwDrvImgsPathArray,
  miscllnImgsPathArray
} 
from "./elements.js";


/* ==== drills tag event lstner ===*/
drillsTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', drillsImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "une perceuse");
  }
});

/* ==== Hammers tag event lstner ===*/
hammersTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', hammersImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "un marteau");
  }
});

/* ==== Hammers tag event lstner ===*/
screwDriverTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', screwDrvImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "une tourne vis");
  }
});
/* ==== Miscellaneous tag event lstner ===*/
miscllnTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', miscllnImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "outils divers");
  }
});

//===getting rid of the empty containers===
let i = 0;
for(i = 0; i < drillsWrapper.children.length; i++)
{
  if(i > 7)
  {
    drillsWrapper.children[i].style.display = 'none';
  }
}
//setTimeout(()=>{wrapper.scroll(-100, 0)}, 2000);