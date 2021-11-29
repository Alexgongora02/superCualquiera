import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

export default function Datepicker({ handleChange, date }) {
  //function to add addDays to date
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={date}
      locale={es}
      minDate={date}
      maxDate={addDays(new Date(), 5)}
      onChange={handleChange}
      className="form-control"
    />
  );
}
