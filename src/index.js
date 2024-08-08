import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

console.log(nav(), makeButton("clickable"), makeColorStyle("red"));
document.body.appendChild(footer);
