//format fecha to display remaining days and hours in string format
export const remaining = (fecha) => {
  const fechaActual = new Date();
  const fechaEntrega = new Date(fecha);
  const diferencia = fechaEntrega - fechaActual;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return `${dias} días y ${horas} horas`;
};

//function to format a date to locale format dd/mm/yyyy hh:mm
export const formatDate = (fecha) => {
  const date = new Date(fecha);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("es-ES", options);
};



