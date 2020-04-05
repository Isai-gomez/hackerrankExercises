import { addTag, addDiv } from "./CrearTag.js";
import { getDaySpanish } from "./Traductor.js";
//Function de inicio
export function main() {
  // Seleccionar body del DOM
  const body = document.querySelector("body");

  //ejecutar funcion addTag
  addTag(body);
  addDiv(body);
  //Seleccionar opciones del select

  let optionDisable = document.querySelector("select");
  optionDisable.addEventListener("change", event => {
    const result = document.querySelector(".result");
    result.textContent = `${getDaySpanish(event.target.value)}`;
  });
}
