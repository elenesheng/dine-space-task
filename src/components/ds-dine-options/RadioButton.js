import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useSelector } from "react-redux";

function RadioButton(props) {
  const orderType = useSelector(state => state.orderType);

  return (
    <div
      className={
        orderType === props.machine_name
          ? "active ds-radiobutton"
          : "ds-radiobutton"
      }
    >
      <i className={props.icon}></i>
      <FormControlLabel
        control={
          <Radio
            value={props.machine_name}
            name={props.machine_name}
            onChange={(e) => props.clickHandler(e)}
            checked={orderType === props.machine_name}
          />
        }
        label={props.label}
        labelPlacement="end"
      />
    </div>
  );
}

export default RadioButton;
