const slides = document.querySelectorAll('.img_container');
const drillsWrapper= document.querySelector(".drills_wrapper");

/*selecting the needed elements on the document*/
const drillsImgs = document.querySelectorAll('.drills');
const drillsTag = document.getElementById('drills');
const hammersTag = document.getElementById('hammers');
const screwDriverTag = document.getElementById('screw_Driver');
const miscllnTag = document.getElementById('miscellanious');

//storaging the images' pathes in some Arrays
const drillsImgsPathArray = [
  "Images/Drills/perceuse-electrique-orange-cable-isole-blanc-trace-detourage_101296-851.webp",
  "Images/Drills/perceuse-sans-fil-isolee_87540-202.webp",
  "Images/Drills/perceuse-pratique-ensemble-differents-forets-lunettes-securite-illustration-vectorielle-composition-realiste_1284-73112.webp",
  "Images/Drills/bouteille-sauce-piquante_924945-1430.webp",
  "Images/Drills/perceuse-visseuse-sans-fil-electrique-isole-fond-blanc-outil-reparation-domicile-professionnel_105428-4473.webp",
  "Images/Drills/machine-forage-ensemble-icones-realistes-images-isolees-perceuses-vis-detachables-illustration-vectorielle-appareil-forage_1284-72292.webp",
  "Images/Drills/perforateur-buses-table-blanche_23-2148180533.webp",
  "Images/Drills/tournevis-sans-fil-isole-fond-blanc-instrument-accumulateur_508659-5701.webp",
  "Images/Drills/perceuse-sans-fil_770606-3840.webp"
  ];
const hammersImgsPathArray = [
  "Images/Hammers/manche-acier-pour-moellons-bois-blanc_34056-335.webp",
  "Images/Hammers/maquette-marteau-blanc_1332-2710.webp",
  "Images/Hammers/marteau-construction-fond-blanc_563818-3193.webp",
  "Images/Hammers/marteau-griffes-fond-bleu-vue-dessus-concept-construction_275559-9888.jpg",
  "Images/Hammers/marteau-griffes-isole_624181-2881.jpg",
  "Images/Hammers/marteau-isole-fond-blanc_42547-1616.webp",
  "Images/Hammers/marteau-isole-mur-blanc_42547-1868.webp",
  "Images/Hammers/marteau-metallic_1048-2457.webp",
  "Images/Hammers/marteau-surface-blanche_144627-41255.webp",
  "Images/Hammers/nouveau-marteau_30478-4641.webp",
  "Images/Hammers/outil-marteau-cartoon-vector-illustration-objet-isole_311865-10217.webp"
  ];
const screwDrvImgsPathArray = [
  "Images/Screw_driver/outil-reparation-tournevis-icone-3d_628815-14.jpg",
  "Images/Screw_driver/tournevis-bleu-isole-scene-blanche_181624-48129.webp",
  "Images/Screw_driver/tournevis-isole-fond-blanc-gros-plan_185193-72106.webp",
  "Images/Screw_driver/tournevis-isole-fond-blanc_287084-126.webp",
  "Images/Screw_driver/tournevis-manche-plastique_550617-45384.webp",
  "Images/Screw_driver/tournevis-realiste-serti-symboles-redecoration-repait-illustration-vectorielle-isolee_1284-70019.webp"
  ];
const miscllnImgsPathArray = [
  "Images/miscellaneous/grandes-pelles-vecteur-vue-face-poignee-bois-isole-fond-blanc_1284-46511 (1).jpg",
  "Images/Wrenches/illustration-cle-outil-mecanicien-metallique-3d-realiste_33099-523.webp",
  "Images/miscellaneous/pinces-outils-utiles_1308-41463 (1).webp",
  "Images/Screw_driver/tournevis-isole-fond-blanc-gros-plan_185193-72106.webp",
  "Images/Drills/perceuse-visseuse-sans-fil-electrique-isole-fond-blanc-outil-reparation-domicile-professionnel_105428-4473.webp",
  "Images/Hammers/marteau-isole-fond-blanc_42547-1616.webp",
  "Images/Screw_driver/tournevis-isole-fond-blanc_287084-126.webp",
  "Images/Wrenches/cle-molette-outil-main-mecanique-isole-rendu-3d_241278-202.webp",
  "Images/Wrenches/maquette-cle-fixe_75891-2407.webp"
  ];
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
miscllnTag.addEventListener("click", (e)=>{
  for(i = 0; i < drillsImgs.length; i++)
  {
   drillsImgs[i].setAttribute('src', miscllnImgsPathArray[i]);
   drillsImgs[i].setAttribute('alt', "outils divers");
  }
});
//===getting rid of the empty containers===
for(i = 0; i < drillsWrapper.children.length; i++)
{
  if(i > 7)
  {
    drillsWrapper.children[i].style.display = 'none';
  }
}
//setTimeout(()=>{wrapper.scroll(-100, 0)}, 2000);