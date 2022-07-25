import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";

export default function SelectSmall(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    props.productsFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, ml: 3 }} size="medium">
      <InputLabel
        id="demo-select-small"
        sx={{
          color: "#E4EFE7",
          fontFamily: "Roboto Slab, serif",
          fontSize: "1.2rem",
        }}
      >
        FILTER
      </InputLabel>
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
