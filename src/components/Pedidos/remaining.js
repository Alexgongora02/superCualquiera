//format fecha to display remaining days and hours in string format
const formatFecha = (fecha) => {
  const fechaActual = new Date();
  const fechaEntrega = new Date(fecha);
  const diferencia = fechaEntrega - fechaActual;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return `${dias} días y ${horas} horas`;
};

export default formatFecha;
