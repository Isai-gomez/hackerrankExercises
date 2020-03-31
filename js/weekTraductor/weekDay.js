import { daysIn, daysEs } from "./datos.js";
export function main() {
  // Seleccionar body del DOM
  const body = document.querySelector("body");

  // Function crear section
  const createSection = days => {
    let select = `<select name='week'>`;
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
  //main de funnciones
  addTag(body);
}
