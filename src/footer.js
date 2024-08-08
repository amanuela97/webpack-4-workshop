import "./footer.css";
import { red, blue } from "./button-styles";

const top = document.createElement("div");
top.innerText = "TOP OF FOOTER";
top.style.color = red;
const bottom = document.createElement("div");
bottom.innerText = "BOTTOM OF FOOTER";
top.style.color = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
