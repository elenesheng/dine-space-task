import React from 'react';
import Grid from '@material-ui/core/Grid';
import DsRadioGroup from "./RadioGroup";
import "./DineOptions.css";
import DsDatePicker from './DatePicker';
import Persons from './Persons';

function DineOptions(){
    return(
        <div className="ds-wrapper">
            <Grid item xs={6}>
                    <DsRadioGroup initialState="dineout"/>
            </Grid>
            <Grid item xs={6}>
                <div className="d-flex">
                    <DsDatePicker />
                    <Persons />
                </div>
            </Grid>
        </div>

    );
}

export default DineOptions;