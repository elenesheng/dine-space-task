import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core";
import moment from "moment";
import {
  DatePicker,
  MuiPickersUtilsProvider, Calendar
} from "@material-ui/pickers";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popover from "@material-ui/core/Popover";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import ScheduleIcon from '@material-ui/icons/Schedule';



const materialTheme = createMuiTheme({
  overrides: {
      MuiPopover: {
        root: {
          // overflow: "scroll"
        },
        paper: {
          padding: "35px 35px 0px",
          width: "475px",
          left: "312px"
        }
      },

    MuiPickersToolbar: {
      toolbar: {
        display: "none"
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: "#FC6C44",
        fontWeight: "600"
      },
      daysHeader: {
        dayLabel: {
          color: "#5B6BC8"
        }
      }
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      daySelected: {
        color: "#5B6BC8",
        backgroundColor: "transparent",
        fontWeight: "600"
      },
      dayDisabled: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "red",
      },
    },
  },
});

function DsDatePicker() {
  function iconStyles() {
    return {
      calendarTodayIcon: {
        opacity: "0.4",
        position: "absolute",
        left: "8px",
      },
      expandMoreIcon: {
        position: 'absolute',
        right: "8px"
      },
      forwrardIcon: {
        color: "#5B6BC8"
      },
      backIcon: {
        color: "#5B6BC8"
      }
    }
  }
  const classes = makeStyles(iconStyles)();

  const [date, setDate] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActive(!active)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActive(!active)
  };

  const clear = () => {
    setDate(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <button className={active? "active ds-button": "ds-button"} onClick={handleClick}>
        <CalendarTodayIcon className={classes.calendarTodayIcon}  />
        <span className="button-value">{date ? date : "Date & Time"}</span>
        <ExpandMoreIcon className={classes.expandMoreIcon} />
      </button>

    <div className="date-picker-wrapper">
    <ThemeProvider theme={materialTheme}>

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
        <div className="d-flex">
        <Grid item xs={8}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              autoOk
              variant="static"
              openTo="date"
              disablePast = {true}
              clearable
              value={date}
              format="YYYY-MM-DD"
              onChange={(val) => setDate(val.format("YYYY-MM-DD"))}
              leftArrowButtonProps={{ "aria-label": "Prev month" }}
              rightArrowButtonProps={{ "aria-label": "Next month" }}
              rightArrowIcon={<ArrowForwardIcon className={classes.forwrardIcon} />}
              leftArrowIcon={<ArrowBackIcon className={classes.forwrardIcon} />}
            />
        </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4}>
          <div className="timewrapper">
          <ScheduleIcon />
            <h5 className="ds-heading">Arrival Time</h5>
          </div>
          <select size="6" className="scrollable-container">
            <option selected>ASAP</option>
            <option>15 : 45</option>
            <option>15 : 45</option>
            <option>16 : 45</option>
            <option>13 : 45</option>
            <option>13 : 45</option>
          </select>

        </Grid>
        </div>

        <hr className="separator"></hr>
        <div className="bottom-buttons">
          <a onClick={clear} className="clear">Clear All</a>
          <a className="done">DONE</a>
        </div>
      </Popover>
      </ThemeProvider>

    </div>
    </>
  );
}

export default DsDatePicker;
