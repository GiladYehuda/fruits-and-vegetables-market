import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.productsFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 2, minWidth: 120, ml: 3 }} size="small">
      <InputLabel id="demo-select-small">Filter</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"fruit"}>Fruits</MenuItem>
        <MenuItem value={"vegetable"}>Vegetables</MenuItem>
        <MenuItem value={"leaves"}>Leaves</MenuItem>
      </Select>
    </FormControl>
  );
}
