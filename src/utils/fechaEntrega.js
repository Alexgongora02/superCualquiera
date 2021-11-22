//function that returns the date of the delivery based on the actual date +2 days
function fechaEntrega() {
  let fecha = new Date();
  fecha.setDate(fecha.getDate() + 2);
  return fecha;
}

export default fechaEntrega;
