import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioButton from './RadioButton';


function DsRadioGroup({initialState}) {
    const [value, setValue] = useState(initialState);
    let valueHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className="radio-buttons">
            <RadioGroup row aria-label="position" name="position" defaultValue="top"  >
                <RadioButton icon="icon-dine-out"  machine_name="dineout" label="Dine Out" clickHandler={valueHandler} parentState = {value}/>
                <RadioButton icon="icon-reservation" machine_name="reservation" label="Reservation"  clickHandler={valueHandler} parentState = {value} />
                <RadioButton icon="icon-take-away" machine_name="pickup" label="Pick Up" clickHandler={valueHandler} parentState = {value} />
            </RadioGroup>
        </div>
    );

}

export default DsRadioGroup;