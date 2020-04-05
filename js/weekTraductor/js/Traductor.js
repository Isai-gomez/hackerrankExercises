// devolver dia en español
export const getDaySpanish = day => {
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
    case "Thurday":
      return "Jueves";
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
