//Traductor de días en ingles a español
const daysIn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  ""
];
const daysEs = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  ""
];
// Seleccionar body del DOM
const section = document.querySelector("body");
console.log(section);
// Function crear section
const createSection = days => {
  let section = "<section>";
  days.map(element => {
    section += `<option>${element}</option>`;
  });
  section += "</section>";
  return section;
};
console.log(createSection(daysIn));
