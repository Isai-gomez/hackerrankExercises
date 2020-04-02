import { daysIn, daysEs } from "./datos.js";
//Function de inicio
export function main() {
  // Seleccionar body del DOM
  const body = document.querySelector("body");

  // Function crear select
  const createSection = days => {
    let select = `<select name='week'`;
    days.map(element => {
      select += `<option>${element}</option>`;
    });
    select + `</select>`;
    return select;
  };
  //Function añadir tag al body
  const addTag = tag => {
    return (tag.innerHTML = createSection(daysIn));
  };
  //ejecutar funcion addTag
  addTag(body);
  //Seleccionar opciones del select
  const optionDisable = document.querySelectorAll("option");
  optionDisable = addEventListener("click", function() {
    console.log(optionDisable);
  });
  optionDisable();
}
