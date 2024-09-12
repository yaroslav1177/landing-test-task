import { initActiveLink } from "./assets/scripts/initActiveLink.js";
import { initMenu } from "./assets/scripts/initMenu.js";
import { initPopUp } from "./assets/scripts/initPopUp.js";
import { initSectionAnimation } from "./assets/scripts/initSectionAnimation.js";

document.addEventListener('DOMContentLoaded', () => {
  initSectionAnimation();
  initMenu();
  initActiveLink();
  initPopUp();
});
