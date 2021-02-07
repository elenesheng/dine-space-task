import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import { Person } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { setGroupSize } from "./../../store/actionTypes";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function DsGroupSizeSelector() {
  const groupSize = useSelector((state) => state.groupSize);
  const dispatch = useDispatch();

  const addPeople = () => {
    dispatch(setGroupSize(groupSize + 1));
  };
  const removePeople = () => {
    if (groupSize > 1) {
      dispatch(setGroupSize(groupSize - 1));
    }
  };

  function iconStyles() {
    return {
      personIcon: {
        opacity: "0.3",
        position: "absolute",
        left: "8px",
        fontSize: "20px",
      },
      expandMoreIcon: {
        position: "absolute",
        right: "8px",
      },
      popOverPersonIcon: {
        width: "18px",
        marginRight: "3px",
      },
      operatorIcon: {
        fontSize: "30px",
        border: "1px solid black",
        borderRadius: "50%",
        cursor: "pointer",
      },
    };
  }
  const classes = makeStyles(iconStyles)();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(!active);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActive(!active);
  };
  const open = Boolean(anchorEl);
  const id = open ? "persons-popover" : undefined;

  const clear = () => {
    dispatch(setGroupSize(1));
  };

  return (
    <>
      <button
        className={active ? "active ds-button" : "ds-button"}
        onClick={handleClick}
      >
        <PersonIcon className={classes.personIcon} />
        <span className="button-value">{groupSize + " " + "Person"}</span>
        <ExpandMoreIcon className={classes.expandMoreIcon} />
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="persons-wrapper">
          <Grid container justify="center">
            <Grid item xs={6}>
              <div className="person-heading">
                <PersonIcon className={classes.popOverPersonIcon} />
                <span>Group Size</span>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="persons-counter">
                <div
                  className="operator"
                  onClick={removePeople}
                  className={groupSize > 1 ? "active" : "disabled"}
                >
                  <RemoveIcon className={classes.operatorIcon} />
                </div>
                <span className="value">
                  {" "}
                  {" " + groupSize + " " + "People"}{" "}
                </span>
                <div className="operator" onClick={addPeople}>
                  <AddIcon className={classes.operatorIcon} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <hr className="separator"></hr>
        <div className="bottom-buttons">
          <a className="clear" onClick={clear}>
            Clear All
          </a>
          <a className="done" onClick={handleClose}>
            DONE
          </a>
        </div>
      </Popover>
    </>
  );
}

export default DsGroupSizeSelector;
