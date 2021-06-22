import React,{ useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";


export default function CountryList() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Select options={options} value={value} onChange={changeHandler} />
      <p>{value.label}</p>
    </div>
  );
}