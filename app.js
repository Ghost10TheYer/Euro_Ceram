import {
  Door,
  Window,
  Furniture,
  Tools
} 
from "./elements.js";

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

// WINDOWS CONTROL
Window.isWindowContainerLeftScrollable();
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
    
    Window.isWindowContainerLeftScrollable();
    Window.isWindowContainerrightScrollable();
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
    
    Window.isWindowContainerLeftScrollable();
   //isWindowContainerrightScrollable();
});

Furniture.replaceDoorsBySofa();
Furniture.sofaTag.addEventListener("click", (e) => {
  Furniture.replaceDoorsBySofa();
  
});
Furniture.fauteuilTag.addEventListener("click", (e) => {
  let i = 0;
  for(i = 0; i < Furniture.furnitureImgs.length; i++)
  {
    Furniture.defaultfurnituresImgsArray[i] = Furniture.fauteuilImgsArray[i];
   Furniture.furnitureImgs[i].setAttribute('src', Furniture.defaultfurnituresImgsArray[i]);
   Furniture.furnitureImgs[i].setAttribute("alt","un de nos fauteuils");
  }
});

// FURNITURE ARROWS
Furniture.isFurnitContainerLeftScrollable();

Furniture.leftFurniture.addEventListener("click", (e) => {
  Furniture.furnitureIndex1 -= 2;
  Furniture.furnitureIndex2 -= 2;
  
  Furniture.furnitureImgs[0].setAttribute('src', Furniture.defaultfurnituresImgsArray[Furniture.furnitureIndex1]);
  Furniture.furnitureImgs[1].setAttribute('src', Furniture.defaultfurnituresImgsArray[Furniture.furnitureIndex2]);
  Furniture.isFurnitContainerLeftScrollable();
  Furniture.isFurnitContainerRightScrollable();
  
});

Furniture.rightFurniture.addEventListener("click", (e) => {
  Furniture.furnitureIndex1 += 2;
  Furniture.furnitureIndex2 += 2;
  
  
  Furniture.furnitureImgs[0].setAttribute('src', Furniture.defaultfurnituresImgsArray[Furniture.furnitureIndex1]);
  Furniture.furnitureImgs[1].setAttribute('src', Furniture.defaultfurnituresImgsArray[Furniture.furnitureIndex2]);
  Furniture.isFurnitContainerLeftScrollable();
  Furniture.isFurnitContainerRightScrollable();
});

//TOOLS CONTROL

/* ==== drills tag event lstner ===*/
Tools.drillsTag.addEventListener("click", (e)=>{
  for(let i = 0; i < Tools.drillsImgs.length; i++)
  {
   Tools.drillsImgs[i].setAttribute('src', Tools.drillsImgsPathArray[i]);
   Tools.drillsImgs[i].setAttribute('alt', "une perceuse");
   Tools.defaultToolsImgsPathArray[i] = Tools.drillsImgsPathArray[i];
  }
});

/* ==== Hammers tag event lstner ===*/
Tools.hammersTag.addEventListener("click", (e)=>{
  for(let i = 0; i < Tools.drillsImgs.length; i++)
  {
   Tools.drillsImgs[i].setAttribute('src', Tools.hammersImgsPathArray[i]);
   Tools.drillsImgs[i].setAttribute('alt', "un marteau");
   Tools.defaultToolsImgsPathArray[i] = Tools.hammersImgsPathArray[i];
  }
});

/* ==== ScrewDriver tag event lstner ===*/
Tools.screwDriverTag.addEventListener("click", (e)=>{
  for(let i = 0; i < Tools.drillsImgs.length; i++)
  {
   Tools.drillsImgs[i].setAttribute('src', Tools.screwDrvImgsPathArray[i]);
   Tools.drillsImgs[i].setAttribute('alt', "une tourne vis");
   Tools.defaultToolsImgsPathArray[i] = Tools.screwDrvImgsPathArray[i];
  }
});
/* ==== Miscellaneous tag event lstner ===*/
Tools.miscllnTag.addEventListener("click", (e)=>{
  for(let i = 0; i < Tools.drillsImgs.length; i++)
  {
   Tools.drillsImgs[i].setAttribute('src', Tools.miscllnImgsPathArray[i]);
   Tools.drillsImgs[i].setAttribute('alt', "outils divers");
   Tools.defaultToolsImgsPathArray[i] = Tools.miscllnImgsPathArray[i];
  }
});

//===getting rid of the empty containers===
Tools.deleteEmptyContainers();
//===getting rid of the empty containers===

Tools.isToolsContainerLeftScrollable();
Tools.leftTool.addEventListener("click", (e) => {
   Tools.toolIndex1 -= 2;
   Tools.toolIndex2 -= 2;
   
   Tools.drillsImgs[0].setAttribute('src', Tools.defaultToolsImgsPathArray[Tools.toolIndex1]);
   Tools.drillsImgs[1].setAttribute('src', Tools.defaultToolsImgsPathArray[Tools.toolIndex2]);
    Tools.isToolsContainerLeftScrollable();
    Tools.isToolsContainerRightScrollable();
});
Tools.rightTool.addEventListener("click", (e) => {
   Tools.toolIndex1 += 2;
   Tools.toolIndex2 += 2;
   if(Tools.toolIndex2 >= Tools.defaultToolsImgsPathArray.length-2)
   {
     Tools.rightTool.style.display = "none";
   }
   else
   {
     Tools.rightTool.style.display = "flex";
   }
   
   Tools.drillsImgs[0].setAttribute('src', Tools.defaultToolsImgsPathArray[Tools.toolIndex1]);
   Tools.drillsImgs[1].setAttribute('src', Tools.defaultToolsImgsPathArray[Tools.toolIndex2]);
    Tools.isToolsContainerLeftScrollable();
    //isToolsContainerRightScrollable();
});