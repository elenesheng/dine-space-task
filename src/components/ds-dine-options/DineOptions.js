import React from "react";
import Grid from "@material-ui/core/Grid";
import DsOrderTypeSelector from "./DsOrderTypeSelector";
import "./DineOptions.css";
import DsOrderDateSelector from "./DsOrderDateSelector";
import DsGroupSizeSelector from "./DsGroupSizeSelector";
import { useSelector } from "react-redux";

function DineOptions() {
  const orderType = useSelector((state) => state.orderType);

  return (
    <div className="ds-wrapper">
      <Grid item xs={6}>
        <DsOrderTypeSelector ordertype={orderType} />
      </Grid>
      <Grid item xs={6}>
        <div className="date-group-wrapper">
          <DsOrderDateSelector />
          <DsGroupSizeSelector />
        </div>
      </Grid>
    </div>
  );
}

export default DineOptions;
