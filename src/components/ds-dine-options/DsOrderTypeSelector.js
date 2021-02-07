import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioButton from "./RadioButton";
import { useSelector, useDispatch } from "react-redux";
import { setOrderType } from "./../../store/actionTypes";

function DsOrderTypeSelector({ ordertype }) {
  const dispatch = useDispatch();

  let valueHandler = (e) => {
    dispatch(setOrderType(e.target.value));
  };
  return (
    <div className="radio-buttons">
      <RadioGroup row aria-label="position" name="order-types">
        <RadioButton
          icon="icon-dine-out"
          machine_name="dineout"
          label="Dine Out"
          clickHandler={valueHandler}
        />
        <RadioButton
          icon="icon-reservation"
          machine_name="reservation"
          label="Reservation"
          clickHandler={valueHandler}
        />
        <RadioButton
          icon="icon-take-away"
          machine_name="pickup"
          label="Pick Up"
          clickHandler={valueHandler}
        />
      </RadioGroup>
    </div>
  );
}

export default DsOrderTypeSelector;
