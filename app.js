import {
  slides,
  Door,
  Window,
  /*leftDoor,
  rightDoor,*/
  leftFurniture,
  rightFurniture,
  leftWindow,
  rightWindow,
  leftTool,
  rightTool,
  drillsWrapper,
  drillsImgs,
  /*doorsImgs,*/
  furnitureImgs,
  windowImgs,
  drillsTag,
  sofaTag,
  armoireTag,
  fauteuilTag,
  hammersTag,
  screwDriverTag,
  miscllnTag,
  /*doorsImgsArray,*/
  defaultfurnituresImgsArray,
  sofaImgsArray,
  fauteuilImgsArray,
  windowImgsArray,
  defaultToolsImgsPathArray,
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
   defaultToolsImgsPathArray[i] = drillsImgsPathArray[i];
  }
});

/* ==== Hammers tag event lstner ===*/
hammersTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', hammersImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "un marteau");
   defaultToolsImgsPathArray[i] = hammersImgsPathArray[i];
  }
});

/* ==== Hammers tag event lstner ===*/
screwDriverTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', screwDrvImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "une tourne vis");
   defaultToolsImgsPathArray[i] = screwDrvImgsPathArray[i];
  }
});
/* ==== Miscellaneous tag event lstner ===*/
miscllnTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', miscllnImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "outils divers");
   defaultToolsImgsPathArray[i] = miscllnImgsPathArray[i];
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
//DOORS CONTROL
Door.isDoorContainerLeftScrollable();
let doorIndex1 = 0;
let doorIndex2 = 1;
Door.leftDoor.addEventListener("click", (e) => {
    //some code
    doorIndex1 -= 2;
    doorIndex2 -= 2;
    if(doorIndex1 <= 0)
    {
      Door.leftDoor.style.display = "none";
      Door.rightDoor.style.display = "flex";
      //doorIndex1 = doorsImgs.length-1;
      //doorIndex2 = doorsImgs.length;
    }
    
    Door.doorsImgs[0].setAttribute("src",Door.doorsImgsArray[doorIndex1]);
    Door.doorsImgs[1].setAttribute("src",Door.doorsImgsArray[doorIndex2]);
    
    //isDoorContainerLeftScrollable();
    Door.isDoorContainerRightScrollable();

});

Door.rightDoor.addEventListener("click", (e) => {
    doorIndex1 += 2;
    doorIndex2 += 2;
    if(doorIndex2 >= Door.doorsImgs.length-2)
    {
      Door.rightDoor.style.display = "none";
    }
    else
    {
      Door.rightDoor.style.display = "flex";
    }
    
    Door.doorsImgs[0].setAttribute("src",Door.doorsImgsArray[doorIndex1]);
    Door.doorsImgs[1].setAttribute("src",Door.doorsImgsArray[doorIndex2]);
    
    Door.isDoorContainerLeftScrollable();
});

// WINDOWS CONTROL BUTTONS
function isWindowContainerLeftScrollable()
{
  if(Window.windowImgs[0].getAttribute('src') == Window.windowImgsArray[0])
  {
    Window.leftWindow.style.display = "none";
  }
  else
  {
    Window.leftWindow.style.display = "flex";
  }
}
function isWindowContainerrightScrollable()
{
  if(Window.windowImgs[1].getAttribute('src') == Window.windowImgsArray[Window.windowImgsArray.length-1])
  {
    Window.rightWindow.style.display = "none";
  }
  else
  {
    Window.rightWindow.style.display = "flex";
  }
}
isWindowContainerLeftScrollable();
let windowIndex1 = 0;
let windowIndex2 = 1;
Window.leftWindow.addEventListener("click", (e) => {
  
    windowIndex1 -= 2;
    windowIndex2 -= 2;
    if(windowIndex1 <= 0)
    {
      Window.leftWindow.style.display = "none";
      Window.rightWindow.style.display = "flex";
    }
    else
    {
      Window.leftWindow.style.display = "flex";
    }
    
    Window.windowImgs[0].setAttribute("src",Window.windowImgsArray[windowIndex1]);
    Window.windowImgs[1].setAttribute("src",Window.windowImgsArray[windowIndex2]);
    
    isWindowContainerLeftScrollable();
    isWindowContainerrightScrollable();
});

Window.rightWindow.addEventListener("click", (e) => {
  
    windowIndex1 += 2;
    windowIndex2 += 2;
    if(windowIndex2 >= Window.windowImgs.length-1)
    {
      Window.rightWindow.style.display = "none";
    }
    else
    {
      Window.rightWindow.style.display = "flex";
    }
    
    Window.windowImgs[0].setAttribute("src",Window.windowImgsArray[windowIndex1]);
    Window.windowImgs[1].setAttribute("src",Window.windowImgsArray[windowIndex2]);
    
    isWindowContainerLeftScrollable();
   //isWindowContainerrightScrollable();
});


// TOOLS CONTROLS BUTTONS
/*
1- By default the defaultToolsImgsPathArray will contain the drills img [yes]
*/
/*
2- but when we click on given tag the imgs in that array will be dynamically replaced by other imgs related to the clicked tag. [yes]
*/
console.log(defaultToolsImgsPathArray);
console.log(drillsImgs);

/*
// I'll use a for Loop to iterate on the arrays and replace each items in them.

3- The tools arrows will have a class leftTools-rightTools[yes]
*/
function isToolsContainerLeftScrollable()
{
  if(drillsImgs[0].getAttribute('src') == defaultToolsImgsPathArray[0])
    {
      leftTool.style.display = "none";
    }
    else
    {
      leftTool.style.display = "flex";
    }
}
function isToolsContainerRightScrollable()
{
  if(drillsImgs[1].getAttribute('src') == defaultToolsImgsPathArray[defaultToolsImgsPathArray.length-1])
  {
    rightTool.style.display = "none";
  }
  else
  {
    rightTool.style.display = "flex";
  }
}
isToolsContainerLeftScrollable();

let toolIndex1 = 0;
let toolIndex2 = 1;

leftTool.addEventListener("click", (e) => {
   toolIndex1 -= 2;
   toolIndex2 -= 2;
   
   drillsImgs[0].setAttribute('src', defaultToolsImgsPathArray[toolIndex1]);
   drillsImgs[1].setAttribute('src', defaultToolsImgsPathArray[toolIndex2]);
    isToolsContainerLeftScrollable();
    isToolsContainerRightScrollable();
});
rightTool.addEventListener("click", (e) => {
   toolIndex1 += 2;
   toolIndex2 += 2;
   if(toolIndex2 >= defaultToolsImgsPathArray.length-2)
   {
     rightTool.style.display = "none";
   }
   else
   {
     rightTool.style.display = "flex";
   }
   
   drillsImgs[0].setAttribute('src', defaultToolsImgsPathArray[toolIndex1]);
   drillsImgs[1].setAttribute('src', defaultToolsImgsPathArray[toolIndex2]);
    isToolsContainerLeftScrollable();
    //isToolsContainerRightScrollable();
});

//FURNITURE CONTROL BUTTONS
// TAGS
function replaceDoorsBySofa()
{
  let i = 0;
  for(i = 0; i < furnitureImgs.length; i++)
  {
    defaultfurnituresImgsArray[i] = sofaImgsArray[i];
    furnitureImgs[i].setAttribute('src', defaultfurnituresImgsArray[i]);
    furnitureImgs[i].setAttribute("alt","un de nos canapé");
  }
}
replaceDoorsBySofa();
sofaTag.addEventListener("click", (e) => {
  replaceDoorsBySofa();
  
});
fauteuilTag.addEventListener("click", (e) => {
  let i = 0;
  for(i = 0; i < furnitureImgs.length; i++)
  {
    defaultfurnituresImgsArray[i] = fauteuilImgsArray[i]
    furnitureImgs[i].setAttribute('src', defaultfurnituresImgsArray[i]);
    furnitureImgs[i].setAttribute("alt","un de nos fauteuils");
  }
});

// ARROWS
let furnitureIndex1 = 0;
let furnitureIndex2 = 1;
function isFurnitContainerLeftScrollable()
{
  if(furnitureImgs[0].getAttribute('src') == defaultfurnituresImgsArray[0])
  {
    leftFurniture.style.display = "none";
  }
  else
  {
    leftFurniture.style.display = "flex";
  }
}
function isFurnitContainerRightScrollable()
{
  if(furnitureIndex2 >= furnitureImgs.length-1)
  {
    rightFurniture.style.display = "none";
  }
  else
  {
    rightFurniture.style.display = "flex";
  }
}
isFurnitContainerLeftScrollable();

leftFurniture.addEventListener("click", (e) => {
  furnitureIndex1 -= 2;
  furnitureIndex2 -= 2;
  
  furnitureImgs[0].setAttribute('src', defaultfurnituresImgsArray[furnitureIndex1]);
  furnitureImgs[1].setAttribute('src', defaultfurnituresImgsArray[furnitureIndex2]);
  isFurnitContainerLeftScrollable();
  isFurnitContainerRightScrollable();
  
});

rightFurniture.addEventListener("click", (e) => {
  furnitureIndex1 += 2;
  furnitureIndex2 += 2;
  
  
  furnitureImgs[0].setAttribute('src', defaultfurnituresImgsArray[furnitureIndex1]);
  furnitureImgs[1].setAttribute('src', defaultfurnituresImgsArray[furnitureIndex2]);
  isFurnitContainerLeftScrollable();
  isFurnitContainerRightScrollable();
});