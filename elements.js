export {
  slides,
  leftDoor,
  rightDoor,
  leftFurniture,
  rightFurniture,
  leftWindow,
  rightWindow,
  leftTool,
  rightTool,
  drillsWrapper,
  doorsImgs,
  furnitureImgs,
  windowImgs,
  drillsImgs,
  sofaTag,
  armoireTag,
  fauteuilTag,
  drillsTag,
  hammersTag,
  screwDriverTag,
  miscllnTag,
  defaultToolsImgsPathArray,
  doorsImgsArray,
  defaultfurnituresImgsArray,
  sofaImgsArray,
  fauteuilImgsArray,
  windowImgsArray,
  drillsImgsPathArray,
  hammersImgsPathArray,
  screwDrvImgsPathArray,
  miscllnImgsPathArray
};

/*selecting the needed elements on the document*/
const leftDoor = document.querySelector('.leftDoor');
const rightDoor = document.querySelector('.rightDoor');
const leftFurniture = document.querySelector(".leftFurniture");
const rightFurniture = document.querySelector(".rightFurniture");
const leftWindow = document.querySelector(".leftWindow");
const rightWindow = document.querySelector(".rightWindow");
const leftTool = document.querySelector(".leftTools");
const rightTool = document.querySelector(".rightTools");
const slides = document.querySelectorAll('.img_container');
const drillsWrapper= document.querySelector(".drills_wrapper");

const doorsImgs = document.querySelectorAll(".doorsImgs");
const furnitureImgs = document.querySelectorAll(".furnitureImgs");
const windowImgs = document.querySelectorAll(".windowImgs");
const drillsImgs = document.querySelectorAll('.drills');

/* ========= FURNITURE TAG ==========*/
const sofaTag = document.querySelector(".sofa")
const fauteuilTag = document.querySelector(".fauteuil");
const armoireTag = document.querySelector(".fauteuil")

/* =========== TOOLS TAG ============*/
const drillsTag = document.getElementById('drills');
const hammersTag = document.getElementById('hammers');
const screwDriverTag = document.getElementById('screw_Driver');
const miscllnTag = document.getElementById('miscellanious');

//storing the images' pathes in some Arrays
const doorsImgsArray = [
  "Images/Portes/depositphotos_4089844-stock-photo-closed-single-red-door.jpg",
  "Images/Portes/depositphotos_105613604-stock-photo-shut-white-wooden-door-on~2.jpg",
  "Images/Portes/depositphotos_109967374-stock-photo-collection-of-isolated-black-doors.jpg",
  "Images/Portes/depositphotos_13814713-stock-photo-dark-brown-wooden-door.jpg",
  "Images/Portes/depositphotos_15418939-stock-photo-new-design.jpg",
  "Images/Portes/depositphotos_4911018-stock-photo-white-empty-room-open-wooden.jpg",
  "Images/Portes/depositphotos_5483973-stock-photo-wooden-door-over-white-background.jpg",
  "Images/Portes/depositphotos_56492521-stock-photo-new-steel-three-bolt-door.jpg",
  "Images/Portes/depositphotos_8283559-stock-photo-doors-with-welcome-mat.jpg",
  "Images/Portes/TRIANON-Porte-intérieure-bois-Style-Pasquet-Menuiseries-ayous.jpg",
  "Images/Portes/porte-s-ouvre-nouvelle-composition-du-monde_23-2150172143~2.jpg",
  "Images/Portes/porte-bois-brown_1194-635.webp"
  ];
const sofaImgsArray = [
  "Images/Sofa/canape-gris-deux-places-deux-coussins-isole_176382-98.webp",
  "Images/Sofa/canape-gris-vecteur-realiste-canape-blanc_134830-675.jpg",
  "Images/Sofa/canape-isole-vue-face-isometrique-transparent_646331-10.jpg",
  "Images/Sofa/canape-tissu-gris-moderne-oreillers-isoles-blanc_115128-218.webp",
  "Images/Sofa/conception-interieur-psd-maquette-salon-contemporain_53876-129130.webp",
  "Images/Sofa/illustration-realiste-canape-cuir-rouge_1284-12133.webp",
  "Images/Sofa/interieur-salon-retro_53876-109286.webp",
  "Images/Sofa/isometric-sofa-3d-rendu-isole_28315-12397.webp",
  "Images/Sofa/salon-chic-moderne-style-esthetique-luxe-dans-tons-bleus_53876-125839.webp"
  ];
const defaultfurnituresImgsArray = [
  "Images/Sofa/canape-gris-deux-places-deux-coussins-isole_176382-98.webp",
  "Images/Sofa/canape-gris-vecteur-realiste-canape-blanc_134830-675.jpg",
  "Images/Sofa/canape-isole-vue-face-isometrique-transparent_646331-10.jpg",
  "Images/Sofa/canape-tissu-gris-moderne-oreillers-isoles-blanc_115128-218.webp",
  "Images/Sofa/conception-interieur-psd-maquette-salon-contemporain_53876-129130.webp",
  "Images/Sofa/illustration-realiste-canape-cuir-rouge_1284-12133.webp",
  "Images/Sofa/interieur-salon-retro_53876-109286.webp",
  "Images/Sofa/isometric-sofa-3d-rendu-isole_28315-12397.webp",
  "Images/Sofa/salon-chic-moderne-style-esthetique-luxe-dans-tons-bleus_53876-125839.webp"
  ];
const fauteuilImgsArray = [
  "Images/Sofa/fauteuil-confortable-gris-isole-fond-blanc_181624-25295.webp",
  "Images/Sofa/fauteuil-gris-elegant-coussin-isole_176382-115.webp",
  "Images/Sofa/fauteuil-oreiller_176382-860.webp",
  "Images/Sofa/fauteuil-oreiller_176382-861.webp",
  "Images/Sofa/fauteuil-oreiller_176382-870.webp"
  ];
const windowImgsArray = [
    "Images/Window/ensemble-fenetres-cintrees-realistes_1284-11041.webp",
    "Images/Window/double-fenetre-volet-roulant-haut-bas_107791-2786.webp",
    "Images/Window/fenetres-maisons-style-europeen_1253-1497.webp",
    "Images/Window/fenetre-ouverte-vintage-classique-bois_88088-586.webp",
    "Images/Window/ensemble-portes-entree-modernes-noir-blanc_88088-746.webp",
    "Images/Window/fenetre-dans-cadre-classique-fronton-garniture-element-decoration-architecturale-du-batiment_87424-440.webp",
    "Images/Window/fenetre-large-moderne-plastique-blanc-noir_88088-584.webp",
    "Images/Window/fenetre-bois-rose-rouge-rebord-fenetre-vecteur_259139-1887.webp"
  ];
const defaultToolsImgsPathArray = [
  "Images/Drills/perceuse-sans-fil-isolee_87540-202.webp",
  "Images/Drills/perceuse-sans-fil_770606-3840.webp",
  "Images/Drills/tournevis-sans-fil-isole-fond-blanc-instrument-accumulateur_508659-5701.webp",
  "Images/Drills/perforateur-buses-table-blanche_23-2148180533.webp",
  "Images/Drills/machine-forage-ensemble-icones-realistes-images-isolees-perceuses-vis-detachables-illustration-vectorielle-appareil-forage_1284-72292.webp",
  "Images/Drills/perceuse-electrique-orange-cable-isole-blanc-trace-detourage_101296-851.webp",
  "Images/Drills/perceuse-visseuse-sans-fil-electrique-isole-fond-blanc-outil-reparation-domicile-professionnel_105428-4473.webp",
  "Images/Drills/bouteille-sauce-piquante_924945-1430.webp",
  "Images/Drills/perceuse-pratique-ensemble-differents-forets-lunettes-securite-illustration-vectorielle-composition-realiste_1284-73112.webp",
  "null/leadsNoWhere"
  ];
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