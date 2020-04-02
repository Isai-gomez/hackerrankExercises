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
  let optionDisable = document.querySelectorAll("select");
  optionDisable = addEventListener("click", function() {
    let option = this.document.querySelector("option");
    console.log(option);
  });
}
