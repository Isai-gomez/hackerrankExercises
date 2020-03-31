import { daysIn, daysEs } from "./datos.js";
export function main() {
  // Seleccionar body del DOM
  const body = document.querySelector("body");

  // Function crear section
  const createSection = days => {
    let section = "<section>";
    days.map(element => {
      section += `<option>${element}</option>`;
    });
    section += "</section>";
    return section;
  };
  //Function añadir tag al body
  const addTag = tag => {
    return (tag.innerHTML = createSection(daysIn));
  };
  //main de funnciones
  addTag(body);
}
