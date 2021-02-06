import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from "@material-ui/core/FormControlLabel";

function RadioButton(props){
    return(
        <div className={props.parentState === props.machine_name? "active ds-radiobutton": "ds-radiobutton"}>
            <i className={props.icon}></i>
            <FormControlLabel
                control={
                    <Radio
                        value={props.machine_name}
                        name={props.machine_name}
                        onChange={(e)=>props.clickHandler(e)}
                        checked = {props.parentState === props.machine_name}
                    />
                }
                label={props.label}
                labelPlacement="end"
            />
        </div>
    );
}

export default RadioButton;