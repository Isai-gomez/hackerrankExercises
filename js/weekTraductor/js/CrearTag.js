import { daysIn, daysEs } from "./datos.js";
// Function crear select
export const createSection = days => {
  let select = `<select name='week' class='listSelect'>`;
  days.map(element => {
    select += `<option class='itemOption'>${element}</option>`;
  });
  select + `</select>`;
  return select;
};
//Function añadir tag al body
export const addTag = tag => {
  return (tag.innerHTML = createSection(daysIn));
};
//Funcion add div al body
export const addDiv = tag => {
  return (tag.innerHTML += `<div class='result'></div>`);
};
