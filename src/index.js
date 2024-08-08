import nav from "./nav";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

console.log(nav(), makeButton("clickable"), makeColorStyle("red"));

const img = makeImage(imageUrl);
document.body.appendChild(img);
document.body.appendChild(footer);
