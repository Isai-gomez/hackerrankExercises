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
  const addDiv = tag => {
    return (tag.innerHTML += `<div class='result'></div>`);
  };
  //ejecutar funcion addTag
  addTag(body);
  addDiv(body);
  //Seleccionar opciones del select
  let day = "";
  let optionDisable = document.querySelector("select");
  optionDisable.addEventListener("change", event => {
    const result = document.querySelector(".result");
    result.textContent = `${getDaySpanish(event.target.value)}`;
  });
}
// devolver dia en español
const getDaySpanish = day => {
  switch (day) {
    case "Sunday":
      return "Domingo";
      break;
    case "Monday":
      return "Lunes";
      break;
    case "Tuesday":
      return "Martes";
      break;
    case "Wednesday":
      return "Miercoles";
      break;
    case "Friday":
      return "Viernes";
      break;
    case "Saturday":
      return "Sabado";
    default:
      return "No puedo traducir";
  }
};
